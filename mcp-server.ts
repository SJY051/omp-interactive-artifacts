// HTTP side of MCP Apps. Two loopback origins, so the view never shares an origin with the host:
//   shell    http://127.0.0.1:<A>/m/<shellToken>/   host page: holds the iframe, relays postMessage <-> fetch/SSE
//   sandbox  http://127.0.0.1:<B>/s/<viewToken>     the view's HTML, served with its CSP as an HTTP header
// The view never learns the shell token, and its CSP never names the shell origin.

import { escapeHtml, type Palette, resolvePalette } from "./page";
import { fail, headers, plain, type RunningServer, readJson } from "./server";

/** Largest JSON-RPC message the shell relays to the host (bytes). */
export const MAX_RPC_BYTES = 64 * 1024;

const SHELL_PATH = /^\/m\/([A-Za-z0-9_-]{16,64})\/(events|rpc)?$/;
const SANDBOX_PATH = /^\/s\/([A-Za-z0-9_-]{16,64})$/;
const HEARTBEAT_MS = 8000;

export interface ShellView {
	title: string;
	/** Absolute URL of the view document on the sandbox origin. */
	viewUrl: string;
	palette?: Palette;
}

export interface ShellHooks {
	/** The view behind a shell token; undefined for unknown or closed ones. */
	view(token: string): ShellView | undefined;
	/** Streams host -> view messages (those with id greater than `after`); returns the unsubscribe function. */
	subscribe(token: string, after: number, push: (id: number, data: string) => void): (() => void) | undefined;
	/** A message the view posted, already relayed by the shell. */
	receive(token: string, message: Record<string, unknown>): void;
}

/** CSP of the shell: only the sandbox origin may be framed, and the page can talk to nothing but itself. */
export function shellCsp(sandboxOrigin: string): string {
	return [
		"default-src 'none'",
		"script-src 'unsafe-inline'",
		"style-src 'unsafe-inline'",
		"connect-src 'self'",
		`frame-src ${sandboxOrigin}`,
		"form-action 'none'",
		"base-uri 'none'",
	].join("; ");
}

/** The shell document. The relay accepts only messages whose source is the iframe's window and whose origin is the sandbox origin. */
export function shellHtml(view: ShellView): string {
	const sandboxOrigin = new URL(view.viewUrl).origin;
	const { tokens, scheme } = resolvePalette(view.palette);
	// `<` is escaped so no string in the JSON can close the script element.
	const origin = JSON.stringify(sandboxOrigin).replace(/</g, "\\u003c");
	return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(view.title)}</title>
<style>html,body{margin:0;height:100%;background:${tokens.surface};color-scheme:${scheme}}iframe{display:block;border:0;width:100%;height:100%}</style></head>
<body><iframe id="view" name="view" src="${escapeHtml(view.viewUrl)}" sandbox="allow-scripts allow-same-origin" allow="" referrerpolicy="no-referrer"></iframe>
<script>(function(){
"use strict";
var APP_ORIGIN=${origin};
var iframe=document.getElementById("view");
var chain=Promise.resolve();
function relay(message){
  var body;
  try{body=JSON.stringify(message);}catch(e){return;}
  // One request at a time: the host must see messages in the order the view sent them.
  chain=chain.then(function(){return fetch("rpc",{method:"POST",headers:{"content-type":"application/json"},body:body});}).catch(function(){});
}
window.addEventListener("message",function(ev){
  if(ev.source!==iframe.contentWindow||ev.origin!==APP_ORIGIN)return;
  var m=ev.data;
  if(typeof m!=="object"||m===null||Array.isArray(m))return;
  relay(m);
});
var stream=new EventSource("events");
stream.onmessage=function(ev){
  try{iframe.contentWindow.postMessage(JSON.parse(ev.data),APP_ORIGIN);}catch(e){}
};
})();</script></body></html>`;
}

/** Handles the host-origin MCP routes; undefined means "not mine". */
export type ShellRouter = (req: Request, url: URL, origin: string) => Promise<Response | undefined>;

/** Routes for the host origin: the shell page, its SSE stream and the view -> host relay. */
export function shellRoutes(hooks: ShellHooks): ShellRouter {
	return async (req, url, origin) => {
		const match = SHELL_PATH.exec(url.pathname);
		if (!match) return undefined;
		const token = match[1]!;
		const endpoint = match[2];
		const view = hooks.view(token);
		if (!view) return plain(404, "not found");

		if (!endpoint) {
			if (req.method !== "GET" && req.method !== "HEAD") return plain(405, "method not allowed", { allow: "GET, HEAD" });
			return new Response(req.method === "HEAD" ? null : shellHtml(view), {
				headers: headers({ "content-type": "text/html; charset=utf-8", "content-security-policy": shellCsp(new URL(view.viewUrl).origin) }),
			});
		}

		if (endpoint === "events") {
			if (req.method !== "GET") return plain(405, "method not allowed", { allow: "GET" });
			const after = Number(req.headers.get("last-event-id") ?? 0) || 0;
			const encoder = new TextEncoder();
			let unsubscribe: (() => void) | undefined;
			let heartbeat: Timer | undefined;
			const stream = new ReadableStream<Uint8Array>({
				start(controller) {
					const write = (chunk: string) => {
						try {
							controller.enqueue(encoder.encode(chunk));
						} catch {
							// The client went away; cancel() cleans up.
						}
					};
					unsubscribe = hooks.subscribe(token, after, (id, data) => write(`id: ${id}\ndata: ${data}\n\n`));
					write(": open\n\n");
					heartbeat = setInterval(() => write(": ping\n\n"), HEARTBEAT_MS);
				},
				cancel() {
					clearInterval(heartbeat);
					unsubscribe?.();
				},
			});
			return new Response(stream, { headers: headers({ "content-type": "text/event-stream" }) });
		}

		if (req.method !== "POST") return plain(405, "method not allowed", { allow: "POST" });
		if (req.headers.get("host") !== new URL(origin).host) return fail(403, "bad host");
		const from = req.headers.get("origin");
		if (from !== null && from !== origin) return fail(403, "bad origin");
		const body = await readJson(req, MAX_RPC_BYTES);
		if (body instanceof Response) return body;
		hooks.receive(token, body);
		return new Response('{"ok":true}', { status: 202, headers: headers({ "content-type": "application/json" }) });
	};
}

export interface SandboxPage {
	html: string;
	csp: string;
}

/** Serves each view's HTML on its own origin, with the CSP built from its declared domains. */
export function startSandbox(resolve: (token: string) => SandboxPage | undefined): RunningServer {
	const server = Bun.serve({
		hostname: "127.0.0.1",
		port: 0,
		fetch(req) {
			const url = new URL(req.url);
			const page = req.method === "GET" || req.method === "HEAD" ? resolveToken(url.pathname) : undefined;
			if (!page) {
				return new Response("not found", {
					status: 404,
					headers: headers({ "content-type": "text/plain; charset=utf-8", "content-security-policy": "default-src 'none'" }),
				});
			}
			return new Response(req.method === "HEAD" ? null : page.html, {
				headers: headers({ "content-type": "text/html; charset=utf-8", "content-security-policy": page.csp }),
			});
		},
	});
	function resolveToken(pathname: string): SandboxPage | undefined {
		const match = SANDBOX_PATH.exec(pathname);
		return match ? resolve(match[1]!) : undefined;
	}
	return {
		origin: `http://127.0.0.1:${server.port}`,
		port: server.port!,
		stop: () => void server.stop(true),
	};
}
