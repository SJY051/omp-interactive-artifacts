// Host side of one MCP Apps view (SEP-1865, spec 2026-01-26): the JSON-RPC conversation with
// the view, with no I/O of its own. Everything the view says is untrusted: it is validated here,
// refused or routed to the injected `BridgeDeps`, and answered. The view can only ever reach
// the one server connection the deps wrap.

import { ERR, errorResponse, isRecord, type JsonRpcId, notification, parseMessage, resultResponse } from "./jsonrpc";
import { Buckets, type Limit } from "./limits";

export const SUPPORTED_PROTOCOL_VERSIONS = ["2026-01-26", "2025-11-21"] as const;
export const MAX_MESSAGE_CHARS = 4000;
export const MAX_CONTEXT_BYTES = 16 * 1024;
const MAX_URI_CHARS = 2048;

export interface ToolDef {
	name: string;
	_meta?: Record<string, unknown>;
	[key: string]: unknown;
}

export interface CallToolResult {
	content?: unknown[];
	structuredContent?: unknown;
	isError?: boolean;
	_meta?: unknown;
	[key: string]: unknown;
}

export interface AuditEntry {
	kind: "rpc" | "notification" | "rejected" | "state";
	method?: string;
	ok?: boolean;
	detail?: string;
}

export interface ContextUpdate {
	text: string;
	structuredContent?: Record<string, unknown>;
}

/** What the bridge needs from the outside world; every method is bound to the view's own server. */
export interface BridgeDeps {
	/** Tool definitions of the view's own server connection. */
	tools(): readonly ToolDef[];
	/** URIs the view's own server exposes: listed resources and templates (RFC 6570 `{var}` patterns). */
	resources(): { uris: readonly string[]; templates: readonly string[] };
	callTool(name: string, args: Record<string, unknown>): Promise<CallToolResult>;
	/** Undefined when the call may proceed, else the reason it is refused (OMP approval policy). */
	authorizeTool(tool: ToolDef, args: Record<string, unknown>): Promise<string | undefined>;
	readResource(uri: string): Promise<unknown>;
	/** Undefined when the link may be opened, else the reason it is refused. */
	authorizeLink(url: string): Promise<string | undefined>;
	openLink(url: string): Promise<void>;
	sendMessage(text: string): void;
	updateContext(update: ContextUpdate): void;
	audit(entry: AuditEntry): void;
	now?: () => number;
}

export interface BridgeInit {
	hostInfo: { name: string; version: string };
	hostCapabilities: Record<string, unknown>;
	/** Evaluated at handshake time, so the container size is the block's current size. */
	hostContext(): Record<string, unknown> | Promise<Record<string, unknown>>;
	toolInput: Record<string, unknown>;
	toolResult?: CallToolResult;
	/** Called once the view is initialized and has been sent its tool input (and result, when there is one). */
	onReady?(): void;
	/** Delivers one JSON-RPC message to the view. */
	send(message: Record<string, unknown>): void;
}

const LIMITS: Record<string, Limit> = {
	"tools/call": { capacity: 10, perSecond: 5 },
	"resources/read": { capacity: 10, perSecond: 5 },
	"ui/message": { capacity: 3, perSecond: 1 },
	"ui/update-model-context": { capacity: 20, perSecond: 10 },
	"ui/open-link": { capacity: 3, perSecond: 0.2 },
};

export type ToolAudience = "model" | "app";

/** `_meta.ui.visibility`, defaulting to both audiences. */
export function visibilityOf(tool: Pick<ToolDef, "_meta">): ToolAudience[] {
	const ui = isRecord(tool._meta) ? tool._meta.ui : undefined;
	const declared = isRecord(ui) && Array.isArray(ui.visibility) ? ui.visibility : undefined;
	if (!declared) return ["model", "app"];
	return declared.filter((entry): entry is ToolAudience => entry === "model" || entry === "app");
}

/** The view URI a tool links to: `_meta.ui.resourceUri`, else the deprecated flat `ui/resourceUri`. */
export function resourceUriOf(tool: Pick<ToolDef, "_meta">): string | undefined {
	const meta = tool._meta;
	if (!isRecord(meta)) return undefined;
	const nested = isRecord(meta.ui) ? meta.ui.resourceUri : undefined;
	const uri = typeof nested === "string" ? nested : meta["ui/resourceUri"];
	return typeof uri === "string" && uri.startsWith("ui://") ? uri : undefined;
}

/** Whether `uri` is one the server exposes: the view's own URI, a listed resource, a template match, or a tool's view. */
export function resourceExposed(uri: string, own: string, deps: Pick<BridgeDeps, "tools" | "resources">): boolean {
	if (uri === own) return true;
	const { uris, templates } = deps.resources();
	if (uris.includes(uri)) return true;
	if (deps.tools().some(tool => resourceUriOf(tool) === uri)) return true;
	return templates.some(template => templateMatches(template, uri));
}

function templateMatches(template: string, uri: string): boolean {
	const pattern = template
		.split(/(\{[^}]*\})/)
		.map(part => (part.startsWith("{") ? "[^/?#]+" : part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
		.join("");
	return new RegExp(`^${pattern}$`).test(uri);
}

function textOf(content: unknown): string | undefined {
	const blocks = Array.isArray(content) ? content : isRecord(content) ? [content] : [];
	const parts: string[] = [];
	for (const block of blocks) {
		if (isRecord(block) && block.type === "text" && typeof block.text === "string") parts.push(block.text);
	}
	return parts.length > 0 ? parts.join("\n") : undefined;
}

class Refusal extends Error {
	constructor(
		readonly code: number,
		message: string,
	) {
		super(message);
	}
}

type Handler = (params: Record<string, unknown>) => Promise<unknown> | unknown;

export class AppBridge {
	#state: "new" | "initialized-reply" | "ready" | "closed" = "new";
	#size: { width: number; height: number } | undefined;
	#pending = new Map<JsonRpcId, (response: { result?: unknown; error?: { code: number; message: string } }) => void>();
	#nextId = 1;
	#buckets: Buckets;
	#toolResult: CallToolResult | undefined;
	#toolResultSent = false;

	constructor(
		private readonly own: string,
		private readonly deps: BridgeDeps,
		private readonly init: BridgeInit,
	) {
		this.#buckets = new Buckets(deps.now);
		this.#toolResult = init.toolResult;
	}

	get state(): string {
		return this.#state;
	}

	get size(): { width: number; height: number } | undefined {
		return this.#size;
	}

	/** Handles one raw message from the view. Never throws. */
	async receive(raw: unknown): Promise<void> {
		const parsed = parseMessage(raw);
		if (!parsed.ok) {
			this.deps.audit({ kind: "rejected", ok: false, detail: parsed.reason });
			if (parsed.id !== undefined && this.#state !== "closed") this.init.send(errorResponse(parsed.id, ERR.invalidRequest, parsed.reason));
			return;
		}
		const message = parsed.message;
		if (this.#state === "closed") return;
		if (message.kind === "response") {
			const resolve = this.#pending.get(message.id);
			if (!resolve) {
				this.deps.audit({ kind: "rejected", ok: false, detail: `response to unknown request ${String(message.id)}` });
				return;
			}
			this.#pending.delete(message.id);
			resolve(message);
			return;
		}
		if (message.method.startsWith("ui/notifications/sandbox-")) {
			// Reserved for the sandbox proxy; a view must not speak it.
			this.deps.audit({ kind: "rejected", method: message.method, ok: false, detail: "reserved sandbox method" });
			if (message.kind === "request") this.init.send(errorResponse(message.id, ERR.methodNotFound, "reserved method"));
			return;
		}
		if (message.kind === "notification") {
			this.#notification(message.method, message.params);
			return;
		}
		await this.#request(message.id, message.method, message.params);
	}

	async #request(id: JsonRpcId, method: string, params: Record<string, unknown>): Promise<void> {
		const handler = this.#handlers[method];
		if (!handler) {
			this.deps.audit({ kind: "rpc", method, ok: false, detail: "unknown method" });
			this.init.send(errorResponse(id, ERR.methodNotFound, `Method not found: ${method}`));
			return;
		}
		try {
			if (method !== "ui/initialize" && method !== "ping" && this.#state !== "ready") {
				throw new Refusal(ERR.notInitialized, "Send ui/notifications/initialized after ui/initialize before other requests");
			}
			const limit = LIMITS[method];
			if (limit && !this.#buckets.take(method, limit)) throw new Refusal(ERR.refused, `Rate limited: too many ${method} requests`);
			const result = await handler(params);
			this.deps.audit({ kind: "rpc", method, ok: true, detail: summarize(method, params) });
			this.init.send(resultResponse(id, result ?? {}));
		} catch (error) {
			const refusal = error instanceof Refusal ? error : new Refusal(ERR.internal, error instanceof Error ? error.message : String(error));
			this.deps.audit({ kind: "rpc", method, ok: false, detail: `${summarize(method, params)}: ${refusal.message}` });
			this.init.send(errorResponse(id, refusal.code, refusal.message.slice(0, 500)));
		}
	}

	#notification(method: string, params: Record<string, unknown>): void {
		switch (method) {
			case "ui/notifications/initialized":
				if (this.#state !== "initialized-reply") {
					this.deps.audit({ kind: "rejected", method, ok: false, detail: `initialized in state ${this.#state}` });
					return;
				}
				this.#state = "ready";
				this.deps.audit({ kind: "state", detail: "ready" });
				// The spec's order: complete arguments first, then the result.
				this.init.send(notification("ui/notifications/tool-input", { arguments: this.init.toolInput }));
				this.#flushResult();
				this.init.onReady?.();
				return;
			case "ui/notifications/size-changed": {
				const { width, height } = params;
				if (typeof width === "number" && typeof height === "number" && Number.isFinite(width) && Number.isFinite(height)) {
					this.#size = { width, height };
				}
				return;
			}
			case "notifications/message":
				this.deps.audit({ kind: "notification", method, ok: true, detail: logText(params) });
				return;
			default:
				this.deps.audit({ kind: "notification", method, ok: false, detail: "ignored" });
		}
	}

	#handlers: Record<string, Handler> = {
		ping: () => ({}),
		"ui/initialize": params => this.#initialize(params),
		"tools/call": params => this.#callTool(params),
		"resources/read": params => this.#readResource(params),
		"ui/message": params => this.#message(params),
		"ui/update-model-context": params => this.#updateContext(params),
		"ui/open-link": params => this.#openLink(params),
		"ui/request-display-mode": params => this.#displayMode(params),
	};

	async #initialize(params: Record<string, unknown>): Promise<unknown> {
		if (this.#state !== "new") throw new Refusal(ERR.refused, "Already initialized");
		const { appInfo, appCapabilities, protocolVersion } = params;
		if (!isRecord(appInfo) || typeof appInfo.name !== "string") throw new Refusal(ERR.invalidParams, "appInfo.name is required");
		if (!isRecord(appCapabilities)) throw new Refusal(ERR.invalidParams, "appCapabilities is required");
		if (typeof protocolVersion !== "string") throw new Refusal(ERR.invalidParams, "protocolVersion is required");
		const negotiated = (SUPPORTED_PROTOCOL_VERSIONS as readonly string[]).includes(protocolVersion) ? protocolVersion : SUPPORTED_PROTOCOL_VERSIONS[0];
		this.#state = "initialized-reply";
		return {
			protocolVersion: negotiated,
			hostInfo: this.init.hostInfo,
			hostCapabilities: this.init.hostCapabilities,
			hostContext: await this.init.hostContext(),
		};
	}

	async #callTool(params: Record<string, unknown>): Promise<unknown> {
		const { name } = params;
		const args = params.arguments ?? {};
		if (typeof name !== "string" || name.length === 0) throw new Refusal(ERR.invalidParams, "name is required");
		if (!isRecord(args)) throw new Refusal(ERR.invalidParams, "arguments must be an object");
		// Only this view's own server is reachable: the name must be one of its tools.
		const tool = this.deps.tools().find(candidate => candidate.name === name);
		if (!tool) throw new Refusal(ERR.invalidParams, `Tool "${name}" is not a tool of this app's server`);
		if (!visibilityOf(tool).includes("app")) throw new Refusal(ERR.refused, `Tool "${name}" is not callable by apps (_meta.ui.visibility)`);
		const refusal = await this.deps.authorizeTool(tool, args);
		if (refusal) throw new Refusal(ERR.refused, refusal);
		return this.deps.callTool(name, args);
	}

	async #readResource(params: Record<string, unknown>): Promise<unknown> {
		const { uri } = params;
		if (typeof uri !== "string" || uri.length === 0 || uri.length > MAX_URI_CHARS) throw new Refusal(ERR.invalidParams, "uri is required");
		if (!resourceExposed(uri, this.own, this.deps)) throw new Refusal(ERR.invalidParams, `Resource "${uri.slice(0, 200)}" is not exposed by this app's server`);
		return this.deps.readResource(uri);
	}

	#message(params: Record<string, unknown>): unknown {
		if (params.role !== undefined && params.role !== "user") throw new Refusal(ERR.invalidParams, 'role must be "user"');
		const text = textOf(params.content)?.trim();
		if (!text) throw new Refusal(ERR.invalidParams, "content needs a text block");
		if (text.length > MAX_MESSAGE_CHARS) throw new Refusal(ERR.invalidParams, `text exceeds ${MAX_MESSAGE_CHARS} characters`);
		this.deps.sendMessage(text);
		return {};
	}

	#updateContext(params: Record<string, unknown>): unknown {
		const { content, structuredContent } = params;
		if (structuredContent !== undefined && !isRecord(structuredContent)) throw new Refusal(ERR.invalidParams, "structuredContent must be an object");
		const text = content === undefined ? "" : (textOf(content) ?? "");
		if (new TextEncoder().encode(JSON.stringify({ text, structuredContent })).length > MAX_CONTEXT_BYTES) {
			throw new Refusal(ERR.invalidParams, `context exceeds ${MAX_CONTEXT_BYTES} bytes`);
		}
		this.deps.updateContext(structuredContent === undefined ? { text } : { text, structuredContent });
		return {};
	}

	async #openLink(params: Record<string, unknown>): Promise<unknown> {
		const { url } = params;
		if (typeof url !== "string" || url.length === 0 || url.length > MAX_URI_CHARS) throw new Refusal(ERR.invalidParams, "url is required");
		let parsed: URL;
		try {
			parsed = new URL(url);
		} catch {
			throw new Refusal(ERR.invalidParams, "Invalid URL");
		}
		if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Refusal(ERR.refused, "Only http(s) links can be opened");
		if (parsed.username || parsed.password) throw new Refusal(ERR.refused, "Links with credentials are refused");
		const refusal = await this.deps.authorizeLink(parsed.href);
		if (refusal) throw new Refusal(ERR.refused, refusal);
		await this.deps.openLink(parsed.href);
		return {};
	}

	#displayMode(params: Record<string, unknown>): unknown {
		const { mode } = params;
		if (mode !== "inline" && mode !== "fullscreen" && mode !== "pip") throw new Refusal(ERR.invalidParams, "mode must be inline, fullscreen or pip");
		// The view lives in a fixed browser block: it can only stay inline, whatever is asked.
		return { mode: "inline" };
	}

	/** Sets or replaces the tool result; it is sent now when the view is ready, else when it becomes ready. */
	setToolResult(result: CallToolResult): void {
		this.#toolResult = result;
		this.#toolResultSent = false;
		if (this.#state === "ready") this.#flushResult();
	}

	#flushResult(): void {
		if (this.#toolResult === undefined || this.#toolResultSent) return;
		this.#toolResultSent = true;
		this.init.send(notification("ui/notifications/tool-result", this.#toolResult));
	}

	/** Tells a ready view the tool did not complete. */
	cancelTool(reason: string): void {
		if (this.#state === "ready") this.init.send(notification("ui/notifications/tool-cancelled", { reason }));
	}

	/** Sends `ui/resource-teardown` and waits for the view's answer (or the timeout) before closing. */
	async teardown(reason: string, timeoutMs = 1500): Promise<"acknowledged" | "timeout" | "not-ready"> {
		if (this.#state !== "ready") {
			this.#state = "closed";
			return "not-ready";
		}
		const id = `host-${this.#nextId++}`;
		const { promise, resolve } = Promise.withResolvers<"acknowledged" | "timeout">();
		const timer = setTimeout(() => resolve("timeout"), timeoutMs);
		this.#pending.set(id, () => resolve("acknowledged"));
		this.init.send({ jsonrpc: "2.0", id, method: "ui/resource-teardown", params: { reason } });
		const outcome = await promise;
		clearTimeout(timer);
		this.#pending.delete(id);
		this.#state = "closed";
		this.deps.audit({ kind: "state", detail: `teardown ${outcome}` });
		return outcome;
	}
}

function summarize(method: string, params: Record<string, unknown>): string {
	switch (method) {
		case "tools/call":
			return `tool=${String(params.name).slice(0, 80)}`;
		case "resources/read":
			return `uri=${String(params.uri).slice(0, 120)}`;
		case "ui/open-link":
			return `url=${String(params.url).slice(0, 200)}`;
		default:
			return "";
	}
}

function logText(params: Record<string, unknown>): string {
	const data = typeof params.data === "string" ? params.data : JSON.stringify(params.data);
	return `[${String(params.level ?? "info")}] ${String(data ?? "").slice(0, 500)}`;
}
