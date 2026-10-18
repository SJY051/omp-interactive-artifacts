// MCP Apps host (SEP-1865): when an MCP tool linked to a `ui://` view completes, the view is read
// from the same server, served on its own origin, and shown in a Tern block. This module wires
// the pieces: the OMP hook, the two servers, the handshake bridge and the Tern block.

import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { AppBridge, type AuditEntry, type BridgeDeps, type CallToolResult, resourceUriOf, type ToolDef, visibilityOf } from "./app-bridge";
import { allowedHosts, buildAppCsp, type DeclaredCsp, sanitizeCsp } from "./csp";
import { type Delivery, MCP_APP_KIND, type MessageSource, oneLine } from "./delivery";
import { HOST_INFO, hostCapabilities, hostContext } from "./host-context";
import { isRecord } from "./jsonrpc";
import { type McpHost, type McpServerHandle, openMcpHost } from "./mcp-host";
import { type SandboxPage, type ShellRouter, shellRoutes, startSandbox } from "./mcp-server";
import type { Palette } from "./page";
import { closeBlock, openExternally, presentInTern } from "./present";
import type { RunningServer } from "./server";
import { detectTern, ternOp } from "./tern";

export const APP_MIME = "text/html;profile=mcp-app";
const MAX_HTML_BYTES = 5 * 1024 * 1024;
const BACKLOG = 200;
const CALL_TIMEOUT_MS = 120_000;
const DEFAULT_CONTAINER = { width: 1280, height: 800 };

interface AppRecord {
	id: string;
	/** `server\0tool`: a new call of the same tool replaces the view instead of piling up blocks. */
	key: string;
	server: string;
	toolName: string;
	title: string;
	uri: string;
	html: string;
	declared: DeclaredCsp;
	shellToken: string;
	viewToken: string;
	bridge: AppBridge;
	source: MessageSource;
	block?: number;
	ctx: ExtensionContext;
	session: string;
	lastEventId: number;
	backlog: Array<{ id: number; data: string }>;
	subscribers: Set<(id: number, data: string) => void>;
	ready: Promise<void>;
	markReady(): void;
}

/** The slice of OMP's `tool_result` event this module reads. */
export interface ToolResultInfo {
	toolName: string;
	toolCallId: string;
	input: Record<string, unknown>;
	content: unknown[];
	details?: unknown;
	isError?: boolean;
}

export interface McpAppsDeps {
	pi: ExtensionAPI;
	delivery: Delivery;
	/** The artifact server (host origin); started on demand. */
	hostServer(): RunningServer;
	palette(): Promise<Palette | undefined>;
	sessionOf(ctx: ExtensionContext): string;
	/** `<apps root>/<session>/` for the audit log. */
	sessionDir(session: string): string;
}

export interface McpApps {
	/** Routes for the host origin, handed to the artifact server. */
	routes: ShellRouter;
	/** Shows the view of a completed MCP tool call; returns text to append to the tool result, or undefined when the call has no view. */
	onToolResult(event: ToolResultInfo, ctx: ExtensionContext, signal?: AbortSignal): Promise<string | undefined>;
	/** A reason to refuse a model-issued call to an app-only tool (`_meta.ui.visibility` without "model"). */
	modelCallRefusal(toolName: string): Promise<string | undefined>;
	list(): string[];
	has(id: string): boolean;
	close(id: string, reason: string): Promise<string[]>;
	closeAll(reason: string): Promise<void>;
}

function token(): string {
	return Buffer.from(crypto.getRandomValues(new Uint8Array(24))).toString("base64url");
}

function slug(text: string): string {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "app";
}

function mimeOf(value: unknown): string {
	return typeof value === "string" ? value.toLowerCase().replace(/\s+/g, "") : "";
}

/** The first `contents` item that carries the view: the requested URI, else the first. */
function pickContent(result: unknown, uri: string): Record<string, unknown> | undefined {
	const contents = isRecord(result) && Array.isArray(result.contents) ? result.contents.filter(isRecord) : [];
	return contents.find(item => item.uri === uri) ?? contents[0];
}

function viewHtml(content: Record<string, unknown>): string {
	if (typeof content.text === "string") return content.text;
	if (typeof content.blob === "string") return Buffer.from(content.blob, "base64").toString("utf8");
	throw new Error("the resource has neither text nor blob content");
}

export function createMcpApps(deps: McpAppsDeps): McpApps {
	const apps = new Map<string, AppRecord>();
	const byShell = new Map<string, AppRecord>();
	const byView = new Map<string, AppRecord>();
	let sandbox: RunningServer | undefined;
	let host: McpHost | undefined;

	function audit(app: AppRecord, entry: AuditEntry | Record<string, unknown>): void {
		const line = JSON.stringify({ t: new Date().toISOString(), app: app.id, server: app.server, tool: app.toolName, ...entry });
		void mkdir(deps.sessionDir(app.session), { recursive: true })
			.then(() => appendFile(join(deps.sessionDir(app.session), "mcp-apps.log.jsonl"), `${line}\n`))
			.catch(() => undefined);
	}

	function push(app: AppRecord, message: Record<string, unknown>): void {
		const entry = { id: ++app.lastEventId, data: JSON.stringify(message) };
		app.backlog.push(entry);
		if (app.backlog.length > BACKLOG) app.backlog.shift();
		for (const subscriber of app.subscribers) subscriber(entry.id, entry.data);
	}

	function ensureSandbox(): RunningServer {
		sandbox ??= startSandbox(viewToken => {
			const app = byView.get(viewToken);
			if (!app) return undefined;
			const page: SandboxPage = { html: app.html, csp: buildAppCsp(app.declared, deps.hostServer().origin) };
			return page;
		});
		return sandbox;
	}

	// The shell is served synchronously from this cache; `onToolResult` refreshes it before opening the block.
	let cachedPalette: Palette | undefined;

	const routes = shellRoutes({
		view(shellToken) {
			const app = byShell.get(shellToken);
			if (!app || !sandbox) return undefined;
			return { title: app.title, viewUrl: `${sandbox.origin}/s/${app.viewToken}`, palette: cachedPalette };
		},
		subscribe(shellToken, after, send) {
			const app = byShell.get(shellToken);
			if (!app) return undefined;
			for (const entry of app.backlog) if (entry.id > after) send(entry.id, entry.data);
			app.subscribers.add(send);
			return () => void app.subscribers.delete(send);
		},
		receive(shellToken, message) {
			const app = byShell.get(shellToken);
			if (app) void app.bridge.receive(message).catch(error => audit(app, { kind: "rejected", ok: false, detail: `bridge failure: ${(error as Error).message}` }));
		},
	});

	async function containerSize(app: AppRecord): Promise<{ width: number; height: number }> {
		const tern = detectTern();
		if ("unavailable" in tern || app.block === undefined) return DEFAULT_CONTAINER;
		try {
			const state = await ternOp(tern, { op: "state", block: app.block }, 5);
			const width = Number(state.width);
			const height = Number(state.height);
			return width > 0 && height > 0 ? { width, height } : DEFAULT_CONTAINER;
		} catch {
			return DEFAULT_CONTAINER;
		}
	}

	function bridgeDeps(app: AppRecord, handle: McpServerHandle, mcpHost: McpHost): BridgeDeps {
		const abort = () => AbortSignal.timeout(CALL_TIMEOUT_MS);
		return {
			tools: () => handle.tools(),
			resources: () => handle.resources(),
			callTool: (name, args) => handle.callTool(name, args, abort()),
			authorizeTool: (tool, args) =>
				handle.authorize(tool.name, args, app.ctx, `Requested by MCP app "${oneLine(app.title)}" (${app.server}); the user did not run it directly.`),
			readResource: uri => handle.readResource(uri, abort()),
			async authorizeLink(url) {
				if (mcpHost.approvalMode() === "yolo") return undefined;
				if (!app.ctx.hasUI) return "Opening links needs the user's confirmation and this session has no UI to ask in";
				const ok = await app.ctx.ui.confirm(`MCP app "${oneLine(app.title)}" wants to open a link`, url);
				return ok ? undefined : "The user declined to open the link";
			},
			openLink: openExternally,
			sendMessage: text => deps.delivery.event(app.source, text),
			updateContext(update) {
				const body = [`text: ${JSON.stringify(update.text)}`];
				if (update.structuredContent !== undefined) body.push(`structuredContent: ${JSON.stringify(update.structuredContent)}`);
				deps.delivery.context(app.source, body);
			},
			audit: entry => audit(app, entry),
		};
	}

	async function retire(app: AppRecord, reason: string, keepBlock = false): Promise<string | undefined> {
		apps.delete(app.id);
		// The view's answer comes back through the shell's rpc route, so that route stays up until teardown ends.
		const outcome = await app.bridge.teardown(reason).catch(() => "timeout" as const);
		byShell.delete(app.shellToken);
		byView.delete(app.viewToken);
		deps.delivery.cancelContext(app.source.id);
		app.subscribers.clear();
		const tern = detectTern();
		if (!keepBlock && app.block !== undefined && !("unavailable" in tern)) {
			await closeBlock(tern, app.block, 3).catch(() => undefined);
		}
		return outcome;
	}

	async function onToolResult(event: ToolResultInfo, ctx: ExtensionContext, signal?: AbortSignal): Promise<string | undefined> {
		const details = isRecord(event.details) ? event.details : undefined;
		const serverName = details?.serverName;
		const toolName = details?.mcpToolName;
		if (typeof serverName !== "string" || typeof toolName !== "string" || event.isError) return undefined;
		host ??= await openMcpHost(deps.pi.pi.settings);
		const handle = host?.server(serverName);
		const tool: ToolDef | undefined = handle?.tools().find(candidate => candidate.name === toolName);
		const uri = tool ? resourceUriOf(tool) : undefined;
		if (!host || !handle || !tool || !uri) return undefined;

		try {
			const read = await handle.readResource(uri, signal);
			const content = pickContent(read, uri);
			if (!content) throw new Error(`resources/read for ${uri} returned no contents`);
			if (mimeOf(content.mimeType) !== APP_MIME) throw new Error(`${uri} has MIME type "${String(content.mimeType)}", expected "${APP_MIME}"`);
			const html = viewHtml(content);
			if (Buffer.byteLength(html) > MAX_HTML_BYTES) throw new Error(`the view is larger than ${MAX_HTML_BYTES} bytes`);

			const hostOrigin = deps.hostServer().origin;
			const viewOrigin = ensureSandbox().origin;
			const ui = isRecord(content._meta) && isRecord(content._meta.ui) ? content._meta.ui : undefined;
			const { csp: declared, rejected } = sanitizeCsp(ui?.csp, [hostOrigin, viewOrigin]);
			cachedPalette = await deps.palette();

			const key = `${serverName}\0${toolName}`;
			const previous = [...apps.values()].find(app => app.key === key);
			if (previous) await retire(previous, "replaced by a new call of the same tool", true);

			const { promise: ready, resolve: markReady } = Promise.withResolvers<void>();
			const title = `${tool.title && typeof tool.title === "string" ? tool.title : toolName} (${serverName})`;
			const id = `mcp-${slug(serverName)}-${slug(toolName)}`;
			const app: AppRecord = {
				id,
				key,
				server: serverName,
				toolName,
				title,
				uri,
				html,
				declared,
				shellToken: token(),
				viewToken: token(),
				bridge: undefined as never,
				source: { kind: MCP_APP_KIND, id: `${serverName}/${toolName}`, title },
				block: previous?.block,
				ctx,
				session: deps.sessionOf(ctx),
				lastEventId: 0,
				backlog: [],
				subscribers: new Set(),
				ready,
				markReady: () => markReady(),
			};
			const toolResult: CallToolResult = {
				content: Array.isArray(details?.rawContent) ? details.rawContent : [],
				...(details?.structuredContent !== undefined ? { structuredContent: details.structuredContent } : {}),
				...(details?.mcpMeta !== undefined ? { _meta: details.mcpMeta } : {}),
				...(details?.isError === true ? { isError: true } : {}),
			};
			app.bridge = new AppBridge(uri, bridgeDeps(app, handle, host), {
				hostInfo: HOST_INFO,
				hostCapabilities: hostCapabilities(declared),
				hostContext: async () =>
					hostContext({ palette: cachedPalette, container: await containerSize(app), toolCallId: event.toolCallId, tool }),
				toolInput: event.input,
				toolResult,
				onReady: () => app.markReady(),
				send: message => push(app, message),
			});
			apps.set(id, app);
			byShell.set(app.shellToken, app);
			byView.set(app.viewToken, app);
			audit(app, {
				kind: "state",
				detail: "opened",
				uri,
				bytes: Buffer.byteLength(html),
				sha256: new Bun.CryptoHasher("sha256").update(html).digest("hex"),
				csp: buildAppCsp(declared, hostOrigin),
				rejectedCsp: rejected,
			});

			const shellUrl = `${hostOrigin}/m/${app.shellToken}/`;
			const tern = detectTern();
			if ("unavailable" in tern) {
				await openExternally(shellUrl);
				await Promise.race([app.ready, new Promise(resolve => setTimeout(resolve, 4000))]);
				return `[MCP app "${title}" opened in the system browser (${tern.unavailable}).]`;
			}
			const shown = await presentInTern(tern, app.block, shellUrl, `/m/${app.shellToken}/`, signal, {
				hosts: allowedHosts(declared),
				capture: false,
				ready: app.ready,
			});
			app.block = shown.block;
			const handshake = app.bridge.state === "ready" ? "handshake complete" : "the view has not finished its handshake yet";
			return `[MCP app "${title}" is shown to the user in Tern block ${shown.block} (${handshake}). It already displays this call's input and result; do not restate them.]`;
		} catch (error) {
			return `[MCP app for ${serverName}/${toolName} could not be shown: ${(error as Error).message}]`;
		}
	}

	return {
		routes,
		onToolResult,
		async modelCallRefusal(minted) {
			if (!minted.startsWith("mcp__")) return undefined;
			host ??= await openMcpHost(deps.pi.pi.settings);
			const found = host?.findTool(minted);
			if (!found || visibilityOf(found.tool).includes("model")) return undefined;
			return `Tool ${found.server}/${found.tool.name} is app-only (_meta.ui.visibility excludes "model"): only its MCP app can call it.`;
		},
		list: () => [...apps.values()].map(app => `- ${app.id} "${app.title}" mcp app${app.block !== undefined ? ` block=${app.block}` : ""}`),
		has: id => apps.has(id),
		async close(id, reason) {
			const app = apps.get(id);
			if (!app) return [];
			const outcome = await retire(app, reason);
			return [`teardown ${outcome}`];
		},
		async closeAll(reason) {
			await Promise.allSettled([...apps.values()].map(app => retire(app, reason)));
			sandbox?.stop();
			sandbox = undefined;
		},
	};
}
