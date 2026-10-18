// Loopback HTTP server for artifact pages. One instance per OMP process.
// Routes: GET /a/<token>/ (the page), POST /a/<token>/{send,context,error}
// (page -> agent), GET /lib/<file> (vendored libraries); `extra` adds the MCP
// Apps shell routes. Everything else is 404.

import { join } from "node:path";
import { Buckets, type Limit } from "./limits";
import { MAX_EVENT_BYTES } from "./page";

/**
 * Content-Security-Policy for every response. Derived from the probed policy:
 * `script-src` adds only `'self'` (the vendored /lib modules). The bundled
 * d3, three and chart.js need neither `eval` nor `new Function`, so
 * `'unsafe-eval'` stays out. No external origin appears anywhere.
 */
export const CSP = [
	"default-src 'none'",
	"script-src 'self' 'unsafe-inline'",
	"style-src 'unsafe-inline'",
	"img-src data: blob:",
	"connect-src 'self'",
	"form-action 'none'",
	"base-uri 'none'",
].join("; ");

/** Largest body for the page-error endpoint (bytes). */
export const MAX_ERROR_BYTES = 8 * 1024;

/** Vendored files by public name; the build script writes them to vendor/. */
export const LIB_FILES: Record<string, true> = {
	"d3.js": true,
	"three.js": true,
	"three-orbit-controls.js": true,
	"chart.js-auto.js": true,
};

/** The artifact a token resolves to. */
export interface ArtifactRef {
	id: string;
	title: string;
}

export interface PageError {
	kind: string;
	message: string;
	source?: string;
	line?: number;
	col?: number;
	stack?: string;
}

export interface ServerHooks {
	/** Looks up the artifact behind a path token; undefined for unknown or revoked tokens. */
	resolve(token: string): ArtifactRef | undefined;
	/** The full document to serve for the artifact, or undefined when it no longer exists. */
	page(ref: ArtifactRef): Promise<string | undefined> | string | undefined;
	onSend(ref: ArtifactRef, event: { text: string; data?: unknown }): void;
	onContext(ref: ArtifactRef, data: unknown): void;
	onError(ref: ArtifactRef, error: PageError): void;
}

export interface ServerOptions {
	/** Directory holding the vendored bundles. */
	libDir: string;
	/** Clock for rate limiting (ms); defaults to Date.now. */
	now?: () => number;
	/**
	 * Routes the artifact server does not own (the MCP Apps shell). Called after /lib and before
	 * token routing; a returned Response is served as is, so it must carry its own security headers.
	 */
	extra?: (req: Request, url: URL, origin: string) => Response | Promise<Response> | undefined;
}

export interface RunningServer {
	readonly origin: string;
	readonly port: number;
	stop(): void;
}

/** Burst/sustained allowance per artifact and endpoint. */
export const LIMITS: Record<"send" | "context" | "error", Limit> = {
	send: { capacity: 3, perSecond: 1 },
	context: { capacity: 20, perSecond: 10 },
	error: { capacity: 20, perSecond: 5 },
};

const MAX_TEXT_CHARS = 4000;
const TOKEN_PATH = /^\/a\/([A-Za-z0-9_-]{16,64})\/(send|context|error)?$/;

export function headers(extra: Record<string, string> = {}): Headers {
	return new Headers({
		"content-security-policy": CSP,
		"x-content-type-options": "nosniff",
		"referrer-policy": "no-referrer",
		"cache-control": "no-store",
		...extra,
	});
}

export function plain(status: number, message: string, extra: Record<string, string> = {}): Response {
	return new Response(message, { status, headers: headers({ "content-type": "text/plain; charset=utf-8", ...extra }) });
}

export function fail(status: number, error: string, extra: Record<string, string> = {}): Response {
	return new Response(JSON.stringify({ error }), {
		status,
		headers: headers({ "content-type": "application/json", ...extra }),
	});
}

function str(value: unknown, max: number): string | undefined {
	return typeof value === "string" ? value.slice(0, max) : undefined;
}

function num(value: unknown): number | undefined {
	return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

/** Reads and checks a JSON object body; returns the object or the error response. */
export async function readJson(req: Request, maxBytes: number): Promise<Record<string, unknown> | Response> {
	if (!(req.headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) {
		return fail(415, "content-type must be application/json");
	}
	const declared = Number(req.headers.get("content-length") ?? 0);
	if (declared > maxBytes) return fail(413, `body exceeds ${maxBytes} bytes`);
	const raw = new Uint8Array(await req.arrayBuffer());
	if (raw.byteLength > maxBytes) return fail(413, `body exceeds ${maxBytes} bytes`);
	let parsed: unknown;
	try {
		parsed = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(raw));
	} catch {
		return fail(400, "body is not valid JSON");
	}
	if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
		return fail(400, "body must be a JSON object");
	}
	return parsed as Record<string, unknown>;
}

export function startServer(hooks: ServerHooks, options: ServerOptions): RunningServer {
	const buckets = new Buckets(options.now);

	async function handle(req: Request, origin: string): Promise<Response> {
		const url = new URL(req.url);

		if (url.pathname.startsWith("/lib/")) {
			const name = url.pathname.slice("/lib/".length);
			if (req.method !== "GET" || !Object.hasOwn(LIB_FILES, name)) return plain(404, "not found");
			const file = Bun.file(join(options.libDir, name));
			if (!(await file.exists())) return plain(404, "not found");
			return new Response(file, {
				headers: headers({ "content-type": "text/javascript; charset=utf-8", "cache-control": "max-age=300" }),
			});
		}

		const routed = await options.extra?.(req, url, origin);
		if (routed) return routed;

		const match = TOKEN_PATH.exec(url.pathname);
		const ref = match ? hooks.resolve(match[1]!) : undefined;
		if (!match || !ref) return plain(404, "not found");
		const endpoint = match[2] as "send" | "context" | "error" | undefined;

		if (!endpoint) {
			if (req.method !== "GET" && req.method !== "HEAD") return plain(405, "method not allowed", { allow: "GET, HEAD" });
			const page = await hooks.page(ref);
			if (page === undefined) return plain(404, "not found");
			return new Response(req.method === "HEAD" ? null : page, {
				headers: headers({ "content-type": "text/html; charset=utf-8" }),
			});
		}

		if (req.method !== "POST") return plain(405, "method not allowed", { allow: "POST" });
		// A token in the URL is the credential; the host and origin checks keep a
		// DNS-rebinding or cross-site page from using it.
		if (req.headers.get("host") !== new URL(origin).host) return fail(403, "bad host");
		const from = req.headers.get("origin");
		if (from !== null && from !== origin) return fail(403, "bad origin");
		if (!buckets.take(`${match[1]}:${endpoint}`, LIMITS[endpoint])) {
			return fail(429, "rate limited; slow down", { "retry-after": "1" });
		}
		const body = await readJson(req, endpoint === "error" ? MAX_ERROR_BYTES : MAX_EVENT_BYTES);
		if (body instanceof Response) return body;

		if (endpoint === "send") {
			const text = body.text;
			if (typeof text !== "string" || text.length === 0 || text.length > MAX_TEXT_CHARS) {
				return fail(400, `text must be a non-empty string up to ${MAX_TEXT_CHARS} characters`);
			}
			hooks.onSend(ref, "data" in body ? { text, data: body.data } : { text });
		} else if (endpoint === "context") {
			if (!("data" in body)) return fail(400, "data is required");
			hooks.onContext(ref, body.data);
		} else {
			const message = str(body.message, 1500);
			if (!message) return fail(400, "message is required");
			hooks.onError(ref, {
				kind: str(body.kind, 40) ?? "error",
				message,
				source: str(body.source, 300),
				line: num(body.line),
				col: num(body.col),
				stack: str(body.stack, 1500),
			});
		}
		return new Response('{"ok":true}', { status: 200, headers: headers({ "content-type": "application/json" }) });
	}

	const server = Bun.serve({
		hostname: "127.0.0.1",
		port: 0,
		// Per-endpoint caps (readJson) are tighter; this only bounds what Bun buffers before routing.
		maxRequestBodySize: 128 * 1024,
		fetch: req => handle(req, `http://127.0.0.1:${server.port}`),
	});
	return {
		origin: `http://127.0.0.1:${server.port}`,
		port: server.port!,
		stop: () => void server.stop(true),
	};
}
