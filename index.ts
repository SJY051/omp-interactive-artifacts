import { join } from "node:path";
import { getAgentDir, type ExtensionAPI, type ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { ARTIFACT_KIND, createDelivery, type MessageSource } from "./delivery";
import { appendFileSync, statSync } from "node:fs";
import { ArtifactFiles, generateId, ID_PATTERN, NO_SESSION, sessionKey } from "./files";
import { type CardAction, cardDetails, describeArtifactCard, inlineDetails, parseAction } from "./artifact-card";
import { type DescribeSupport, loadDescribeSupport } from "./describe-support";
import { registerInlineUi } from "./inline-ui";
import { createMcpApps, type ToolResultInfo } from "./mcp-apps";
import { composePalette, type NativeTheme, readTernSettings } from "./look";
import { buildPage, type Palette, resolvePalette, themeCss } from "./page";
import { blockAlive, browserBlocks, captureBlock, closeBlock, focusBlock, type Placement, presentInTern, rethemeBlock } from "./present";
import { type ArtifactRef, type PageError, type RunningServer, startServer } from "./server";
import { detectTern, type TernEnv, ternAppearance } from "./tern";
import { MirrorEngine } from "./mirror/engine";
import { type CardEvent, framePathOf, InlineCards } from "./mirror/cards";
import { type Choice, chooseSurface, type SurfaceRequest } from "./mirror/surface";

const MAX_ERRORS = 50;
/** How often open blocks are checked for a hand close and a theme switch. */
const WATCH_MS = 2000;

const DESCRIPTION = `Show an interactive HTML/CSS/JS page (chart, simulation, mini app) inline in this transcript or in a Tern browser block docked beside this pane (a floating block when the pane is narrow); outside Tern it saves the HTML and returns its path and URL without opening a browser.
Actions: show {id?, title, html, surface?} creates or updates (same id = update in place; html is a full document or a body fragment); open {id, surface?} reopens a saved artifact; close {id}; list.
surface: "auto" (default; leave it unset) shows a form, table or chart page inline when it fits a card and uses a block otherwise. "block" only when you must drive the page with the browser tool (it cannot attach to an inline card) or need a full browser; "inline" forces inline. The result names the surface used and why.
Inline limits: the page runs in a hidden browser and is mirrored into terminal elements, so no WebGL/three.js, video, JS animation loops, pointer drag or position:fixed; CSS the terminal cannot draw is dropped; the terminal's font is used; SVG and canvas show as images. A closed inline card stays in the transcript as its last frame. A block shows the page unchanged. Inline needs a direct artifact call: through eval (tool.artifact) or another tool no card is drawn, so such a call gets a block.
show/open return the surface, page errors seen within ~1s of load and, for a Tern block, the URL, block id, placement and a screenshot; outside Tern the returned URL is NOT opened or network-isolated. For an inline card, they return the element count and the page's text. The user can reopen any artifact in a block from the transcript card or with /artifact [id].
The page is sandboxed when rendered by the extension: artifact blocks restrict navigation to loopback, and inline pages intercept requests in headless Chromium. Do not assume that manually opening a returned URL has these protections. Libraries (ES modules, in <script type="module">): import * as d3 from "d3"; import * as THREE from "three"; import { OrbitControls } from "three/addons/controls/OrbitControls.js"; import { Chart } from "chart.js/auto".
Page API: omp.send(text, data?) starts an agent turn; omp.context(data) silently updates model context for the next turn (latest value wins, no turn); an element with data-omp-send="text" (optional data-omp-data='{json}') calls omp.send on click. Anything else stays local to the page.
Theme: CSS variables --fg --muted --border --surface --accent --success --warning --error --c1..--c6 (currentColor works in SVG), plus --bg, --font-ui and --font-mono, follow the OMP theme and Tern's own font and light/dark setting; the page already uses them (html background, body font), so do not hard-code fonts or colors; it is re-themed when the user switches light/dark. Saved under the active OMP agent directory at artifacts/apps/<session>/<id>.html.
MCP tools linked to a ui:// view (MCP Apps) open their view automatically; list and close also cover those (ids start with "mcp-").`;

interface Live {
	id: string;
	title: string;
	html: string;
	token: string;
	session: string;
	block?: number;
	version: number;
	errors: PageError[];
	/** True while the first load of an `auto` page is being measured: its sends are not delivered. */
	muted?: boolean;
}

/** What a show/open call carries into the surface choice. */
interface CallInfo {
	/** Absent for reopens that come from a command rather than a tool call. */
	toolCallId?: string;
	surface: SurfaceRequest;
}

function newToken(): string {
	return Buffer.from(crypto.getRandomValues(new Uint8Array(24))).toString("base64url");
}

/** The live theme as pages see it: OMP's palette and Tern's own appearance and fonts, composed (look.ts). */
async function themePalette(): Promise<Palette | undefined> {
	let live: Palette | undefined;
	let native: NativeTheme | undefined;
	// Dynamic: these host modules exist only inside OMP, not under `bun test` or a plain runtime.
	try {
		const { svgFigurePalette } = await import("@oh-my-pi/pi-tui/chat/svg-figure");
		live = svgFigurePalette();
	} catch {
		live = undefined;
	}
	try {
		const { getNativeThemePalette } = await import("@oh-my-pi/pi-tui/theme");
		native = getNativeThemePalette();
	} catch {
		native = undefined;
	}
	const settings = readTernSettings();
	if (!settings.appearance) {
		// "System" (or no settings file): Tern's running appearance says which one it follows now.
		const tern = detectTern();
		if (!("unavailable" in tern)) settings.appearance = await ternAppearance(tern);
	}
	return composePalette({ live, native, settings });
}

function describeErrors(errors: PageError[]): string {
	return errors
		.slice(0, 10)
		.map(e => {
			const where = e.source ? ` (${e.source}${e.line !== undefined ? `:${e.line}` : ""}${e.col !== undefined ? `:${e.col}` : ""})` : "";
			return `- [${e.kind}] ${e.message.slice(0, 300)}${where}`;
		})
		.join("\n");
}

/** Ids OMP gives tool calls that do not come from the model's own tool-call block: eval bridge (`js-`, `prelude-`) and extension-invoked tools (`invoke-`). */
const BRIDGED_CALL = /^(?:js|prelude|invoke)-/;

export default async function (pi: ExtensionAPI) {
	const z = pi.zod;
	const files = new ArtifactFiles(join(getAgentDir(), "artifacts", "apps"));
	const live = new Map<string, Live>();
	const byToken = new Map<string, Live>();
	const delivery = createDelivery(pi);
	const describe = await loadDescribeSupport();
	const recaptureTimers = new Map<string, Timer>();
	const engine = new MirrorEngine();
	const traceFile = process.env.OMP_MIRROR_TRACE;
	/** Inline cards exist only where the host draws text fields and byte images in tool views. */
	const cards =
		describe?.el && describe.mirror
			? new InlineCards({
					engine,
					builders: {
						el: (tag, props, children, key) => describe.el!(tag, props, children, key),
						node: (kind, props, children, key) => describe.node(kind, props, children, key),
						text: (content, props) => describe.text(content, props),
					},
					redescribe: toolCallId => redescribeCard(toolCallId),
					...(traceFile ? { trace: (event: string, data?: Record<string, unknown>) => appendFileSync(traceFile, `${JSON.stringify({ at: Date.now(), event, ...data })}\n`) } : {}),
				})
			: undefined;
	let server: RunningServer | undefined;
	let watcher: Timer | undefined;
	let ticking = false;
	/** The theme CSS the open pages carry; a different one later means the user switched light/dark or fonts. */
	let themedWith: string | undefined;
	/** The artifact most recently shown or opened: what a bare `/artifact` brings back. */
	let lastShown: string | undefined;

	const mcp = createMcpApps({
		pi,
		delivery,
		hostServer: () => ensureServer(),
		palette: themePalette,
		sessionOf: ctx => sessionOf(ctx),
		sessionDir: session => join(files.root, session),
	});

	function source(ref: ArtifactRef): MessageSource {
		return { kind: ARTIFACT_KIND, id: ref.id, title: ref.title };
	}

	function ensureServer(): RunningServer {
		server ??= startServer(
			{
				resolve: token => byToken.get(token),
				page: async (ref: ArtifactRef) => {
					const artifact = live.get(ref.id);
					if (!artifact) return undefined;
					const palette = await themePalette();
					themedWith = themeCss(palette);
					return buildPage({ title: artifact.title, html: artifact.html, palette });
				},
				onSend: (ref, event) => {
					if (live.get(ref.id)?.muted) return;
					delivery.event(source(ref), event.text, [...(event.data !== undefined ? [`data: ${JSON.stringify(event.data)}`] : []), ...(event.gesture ? [`page-reported gesture hint: ${event.gesture} (not host-verified)`] : [])]);
					scheduleRecapture(ref.id);
				},
				onContext: (ref, data) => {
					if (live.get(ref.id)?.muted) return;
					delivery.context(source(ref), [`data: ${JSON.stringify(data)}`]);
					scheduleRecapture(ref.id);
				},
				onError: (ref, error) => {
					const artifact = live.get(ref.id);
					if (!artifact) return;
					artifact.errors.push(error);
					if (artifact.errors.length > MAX_ERRORS) artifact.errors.shift();
				},
			},
			{ libDir: join(import.meta.dir, "vendor"), extra: mcp.routes },
		);
		return server;
	}

	function sessionOf(ctx: ExtensionContext): string {
		try {
			return sessionKey(ctx.sessionManager.getSessionId());
		} catch {
			return NO_SESSION;
		}
	}

	/** Re-captures the page into the preview file the transcript card shows. Best effort. */
	async function recapture(artifact: Live): Promise<string | undefined> {
		const tern = detectTern();
		if ("unavailable" in tern || artifact.block === undefined) return undefined;
		try {
			return await files.savePreview(artifact.session, artifact.id, await captureBlock(tern, artifact.block));
		} catch {
			return undefined;
		}
	}

	/** The page changed (it sent something): refresh the preview once it settles. */
	function scheduleRecapture(id: string): void {
		clearTimeout(recaptureTimers.get(id));
		const timer = setTimeout(() => {
			recaptureTimers.delete(id);
			const artifact = live.get(id);
			if (artifact) void recapture(artifact).then(redescribe);
		}, 1500);
		timer.unref();
		recaptureTimers.set(id, timer);
	}

	/**
	 * Cards read the block state when they are described. Ask OMP to describe them again; a build without the
	 * hook keeps the old text until the next click, which re-describes the card itself.
	 */
	function redescribe(): void {
		// Newer OMP builds only; the installed typings do not declare it.
		if ("redescribeToolCards" in pi && typeof pi.redescribeToolCards === "function") pi.redescribeToolCards("artifact");
	}

	/** Describes one transcript card again (an inline page changed). */
	function redescribeCard(toolCallId: string): void {
		if ("redescribeToolCards" in pi && typeof pi.redescribeToolCards === "function") pi.redescribeToolCards("artifact", toolCallId);
	}

	function notify(ctx: ExtensionContext, message: string, level: "info" | "warning" | "error" = "info"): void {
		try {
			ctx.ui.notify(message, level);
		} catch {
			// No UI (print or RPC mode): the message is only for an interactive user.
		}
	}

	/** Forgets the blocks the user closed by hand; true when an artifact changed. */
	async function syncBlocks(tern: TernEnv): Promise<boolean> {
		const seen = [...live.values()].flatMap(artifact => (artifact.block === undefined ? [] : [{ artifact, block: artifact.block }]));
		if (seen.length === 0) return false;
		const blocks = await browserBlocks(tern).catch(() => undefined);
		if (!blocks) return false;
		let changed = false;
		for (const { artifact, block } of seen) {
			// A show that finished meanwhile may already have replaced the block: only the one that was listed is judged.
			if (artifact.block === block && !blocks.has(block)) {
				artifact.block = undefined;
				changed = true;
			}
		}
		return changed;
	}

	/** Pushes the current theme into the open pages when it changed since they were loaded. */
	async function retheme(tern: TernEnv): Promise<void> {
		const palette = await themePalette();
		const css = themeCss(palette);
		if (css === themedWith) return;
		themedWith = css;
		const { tokens, scheme } = resolvePalette(palette);
		await Promise.allSettled([
			...[...live.values()].flatMap(artifact => (artifact.block === undefined ? [] : [rethemeBlock(tern, artifact.block, css)])),
			...(cards?.liveSessions() ?? []).map(session => session.setTheme(css, scheme === "dark", tokens)),
		]);
	}

	async function tick(): Promise<void> {
		if (ticking) return;
		ticking = true;
		try {
			const tern = detectTern();
			if ("unavailable" in tern) return;
			if (await syncBlocks(tern)) redescribe();
			await retheme(tern);
		} finally {
			ticking = false;
		}
		if (!hasOpenSurface()) stopWatching();
	}

	/** While a block is open: notice a hand close (so the card and `list` tell the truth) and a light/dark switch. */
	function watch(): void {
		if (watcher) return;
		watcher = setInterval(() => void tick(), WATCH_MS);
		watcher.unref();
	}

	function stopWatching(): void {
		clearInterval(watcher);
		watcher = undefined;
	}

	/** A block or an inline page is open: the watcher has something to keep true. */
	function hasOpenSurface(): boolean {
		return [...live.values()].some(artifact => artifact.block !== undefined) || (cards?.liveCount() ?? 0) > 0;
	}

	/** Brings an artifact back: focuses its block while that exists, else opens it again, from the saved file when needed. */
	async function reveal(ctx: ExtensionContext, id: string): Promise<{ ok: boolean; message: string }> {
		const artifact = live.get(id);
		const tern = detectTern();
		if (artifact?.block !== undefined && !("unavailable" in tern)) {
			// A failed probe (Tern busy) is neither alive nor gone: open() asks again and reports it rather than making a second block.
			const alive = await blockAlive(tern, artifact.block).then(
				value => value,
				() => undefined,
			);
			if (alive === true) {
				try {
					await focusBlock(tern, artifact.block);
					return { ok: true, message: `"${id}" is already open (block ${artifact.block}); brought to the front.` };
				} catch {
					// Could not be focused: open() below sorts it out.
				}
			}
			if (alive === false) artifact.block = undefined;
		}
		const result = await open(ctx, id, undefined, { surface: "block" });
		const text = result.content[0]?.type === "text" ? result.content[0].text : "";
		const where = live.get(id)?.block;
		return "isError" in result && result.isError ? { ok: false, message: text } : { ok: true, message: `"${id}" opened${where !== undefined ? ` (block ${where})` : ""}.` };
	}

	/** Card buttons: local actions, never a turn. */
	async function cardAction(ctx: ExtensionContext, id: string, action: CardAction): Promise<void> {
		const artifact = live.get(id);
		const tern = detectTern();
		if (action === "capture") {
			if (artifact) await recapture(artifact);
		} else if (action === "close") {
			if (!artifact || artifact.block === undefined) return;
			await recapture(artifact);
			if (!("unavailable" in tern)) await closeBlock(tern, artifact.block).catch(() => undefined);
			artifact.block = undefined;
		} else {
			const result = await reveal(ctx, id);
			if (!result.ok) notify(ctx, `Artifact ${id} could not be opened: ${result.message}`, "error");
		}
		// The clicked card is described again by OMP; the artifact's other cards in the transcript follow.
		redescribe();
	}

	function urlOf(artifact: Live): string {
		return `${ensureServer().origin}/a/${artifact.token}/`;
	}

	/** Why inline cannot be used for this call, or undefined when it can. */
	function inlineUnavailable(call: CallInfo): string | undefined {
		if (!cards || !describe?.el) return "an OMP build with interactive tool views (this one has none)";
		if (describe.rendering?.() !== true) return "a Tern terminal that draws tool views (none is attached)";
		if (!call.toolCallId) return "a tool call (this is a reopen from a command)";
		// Calls made from eval (`tool.artifact(...)`), a prelude or another extension get an id of their own and draw no transcript card of their own: the page would run with nothing to show it.
		if (BRIDGED_CALL.test(call.toolCallId)) return "artifact called directly by the model, not through eval or another tool (such a call draws no card in the transcript)";
		return undefined;
	}

	/** Runs the preflight and, when the page qualifies (or inline was forced), leaves its page running as the card. */
	async function chooseFor(artifact: Live, url: string, call: CallInfo): Promise<Choice> {
		const unavailable = call.surface === "block" ? undefined : inlineUnavailable(call);
		return chooseSurface({
			requested: call.surface,
			html: artifact.html,
			capability: { unavailable },
			open: async () => {
				const palette = await themePalette();
				const { tokens, scheme } = resolvePalette(palette);
				themedWith = themeCss(palette);
				// An update replaces the artifact's earlier inline cards: they become static frames.
				await cards!.closeArtifact(artifact.id);
				artifact.muted = call.surface === "auto";
				const card = await cards!.open({
					toolCallId: call.toolCallId!,
					artifactId: artifact.id,
					title: artifact.title,
					framePath: framePathOf(join(files.root, artifact.session), artifact.id, call.toolCallId!),
					page: { url, origin: ensureServer().origin, dark: scheme === "dark", tokens },
				});
				return {
					session: card.session!,
					discard: async () => {
						artifact.muted = false;
						await cards!.discard(card);
					},
				};
			},
		});
	}

	function presentInline(artifact: Live, choice: Extract<Choice, { surface: "inline" }>, verb: string, call: CallInfo) {
		artifact.muted = false;
		const card = cards!.get(call.toolCallId)!;
		const summary = card.summary();
		const lines = [`Artifact "${artifact.title}" (${artifact.id}) ${verb} inline in the transcript.`, `surface: inline — ${choice.why}`];
		if (choice.warnings.length > 0) lines.push(`warnings (inline was requested, so it stays): the page ${choice.warnings.join("; ")}`);
		if (summary) {
			lines.push(`mirrored: ${summary.elements} elements, ${summary.images} images`);
			if (summary.text) lines.push(`page text:\n${summary.text.slice(0, 600)}`);
		}
		lines.push(artifact.errors.length > 0 ? `page errors (${artifact.errors.length}):\n${describeErrors(artifact.errors)}` : "page errors: none");
		lines.push('The card is live: clicks and typing reach the page. Use close to make it static; open with surface "block" shows the page unchanged.');
		lastShown = artifact.id;
		watch();
		return {
			content: [{ type: "text" as const, text: lines.join("\n") }],
			details: { id: artifact.id, surface: "inline" as const, frame: card.framePath, errors: artifact.errors.length },
		};
	}

	async function present(artifact: Live, signal: AbortSignal | undefined, verb: string, call: CallInfo) {
		artifact.errors = [];
		artifact.version++;
		const base = urlOf(artifact);
		const url = `${base}?v=${artifact.version}`;
		const choice = await chooseFor(artifact, url, call);
		if (choice.surface === "inline") {
			// The page lives in the transcript now; a block of an earlier update would show a stale copy.
			const tern = detectTern();
			if (artifact.block !== undefined && !("unavailable" in tern)) await closeBlock(tern, artifact.block).catch(() => undefined);
			artifact.block = undefined;
			return presentInline(artifact, choice, verb, call);
		}
		const tern = detectTern();
		const content: Array<{ type: "text"; text: string } | { type: "image"; data: string; mimeType: string; annotations?: { audience: string[] } }> = [];
		const lines = [`Artifact "${artifact.title}" (${artifact.id}) ${verb}.`, `surface: block — ${choice.why}`, `url: ${base}`];
		let preview: string | undefined;
		let placement: Placement | undefined;

		if ("unavailable" in tern) {
			lines.push(`Not opened (${tern.unavailable}): no protected Tern browser block is available. Saved HTML: ${join(files.root, artifact.session, `${artifact.id}.html`)}. The URL above is for manual use only; opening it in a system browser does not enforce the extension's navigation policy.`);
		} else {
			const hadBlock = artifact.block !== undefined;
			try {
				const shown = await presentInTern(tern, artifact.block, url, `/a/${artifact.token}/?v=${artifact.version}`, signal);
				artifact.block = shown.block;
				placement = shown.placement;
				if (shown.full) preview = await files.savePreview(artifact.session, artifact.id, shown.full).catch(() => undefined);
				lines.push(`block: ${shown.block}`);
				if (shown.placement === "split-right") lines.push("placement: docked beside this pane");
				else if (shown.placement === "pip") lines.push("placement: floating at the top-right of this pane (it is too narrow to split)");
				else lines.push("placement: unchanged (the block that was showing was updated in place)");
				if (hadBlock && shown.placement) lines.push("its previous block had been closed, so this is a new block");
				// Builds with model-only content (the same ones that can redescribe cards) keep the capture out of the transcript: the card already shows the preview.
				if (shown.image) content.push({ type: "image", data: shown.image.data, mimeType: shown.image.mimeType, ...("redescribeToolCards" in pi ? { annotations: { audience: ["assistant"] } } : {}) });
				if (shown.captureNote) lines.push(shown.captureNote);
			} catch (error) {
				return fail(`${(error as Error).message}`);
			}
			lastShown = artifact.id;
			watch();
		}
		lines.push(
			artifact.errors.length > 0
				? `page errors (${artifact.errors.length}):\n${describeErrors(artifact.errors)}`
				: "page errors: none",
		);
		content.unshift({ type: "text", text: lines.join("\n") });
		return {
			content,
			details: { id: artifact.id, card: true, surface: "block" as const, url: base, block: artifact.block, errors: artifact.errors.length, ...(placement ? { placement } : {}), ...(preview ? { preview } : {}) },
		};
	}

	function fail(message: string) {
		return { isError: true, content: [{ type: "text" as const, text: message }], details: {} };
	}

	async function show(ctx: ExtensionContext, params: { id?: string; title?: string; html?: string }, call: CallInfo, signal?: AbortSignal) {
		const { id: requested, title, html } = params;
		if (!title?.trim()) return fail('show requires "title".');
		if (html === undefined || !html.trim()) return fail('show requires "html" (a full document or a body fragment).');
		if (requested !== undefined && !ID_PATTERN.test(requested)) {
			return fail(`Invalid id "${requested}": use a short lowercase slug (a-z, 0-9, "-", up to 40 characters).`);
		}
		const session = sessionOf(ctx);
		const id = requested ?? generateId(title, candidate => live.has(candidate));
		let artifact = live.get(id);
		if (artifact) {
			artifact.title = title;
			artifact.html = html;
			artifact.session = session;
		} else {
			artifact = { id, title, html, token: newToken(), session, version: 0, errors: [] };
			live.set(id, artifact);
			byToken.set(artifact.token, artifact);
		}
		try {
			await files.save(session, { id, title, html });
		} catch (error) {
			return fail(`Could not save the artifact: ${(error as Error).message}`);
		}
		return present(artifact, signal, artifact.version > 0 ? "updated" : "shown", call);
	}

	async function open(ctx: ExtensionContext, id: string | undefined, signal?: AbortSignal, call: CallInfo = { surface: "auto" }) {
		if (!id) return fail('open requires "id".');
		const existing = live.get(id);
		if (existing) return present(existing, signal, "reopened", call);
		if (!ID_PATTERN.test(id)) return fail(`Invalid id "${id}".`);
		const session = sessionOf(ctx);
		const stored = await files.find(id, session);
		if (!stored) return fail(`No saved artifact "${id}" in this or an earlier session. Use action "list" to see what exists.`);
		if (stored.session !== session) await files.save(session, stored);
		const artifact: Live = { id, title: stored.title, html: stored.html, token: newToken(), session, version: 0, errors: [] };
		live.set(id, artifact);
		byToken.set(artifact.token, artifact);
		const origin = stored.session === session ? "" : ` (copied from session ${stored.session})`;
		return present(artifact, signal, `reopened${origin}`, call);
	}

	async function close(id: string | undefined) {
		if (!id) return fail('close requires "id".');
		if (mcp.has(id)) {
			const notes = await mcp.close(id, "closed by the agent");
			return { content: [{ type: "text" as const, text: [`MCP app "${id}" closed.`, ...notes].join("\n") }], details: { id } };
		}
		const artifact = live.get(id);
		if (!artifact) return fail(`No open artifact "${id}". Use action "list".`);
		const notes: string[] = [];
		const tern = detectTern();
		// Keep the final state in the transcript card.
		await recapture(artifact);
		await cards?.closeArtifact(id);
		if (artifact.block !== undefined && !("unavailable" in tern)) {
			try {
				await closeBlock(tern, artifact.block);
			} catch (error) {
				notes.push(`block ${artifact.block} was already gone or could not be closed (${(error as Error).message})`);
			}
		}
		live.delete(id);
		byToken.delete(artifact.token);
		delivery.cancelContext(id);
		redescribe();
		return { content: [{ type: "text" as const, text: [`Artifact "${id}" closed; its HTML stays saved.`, ...notes].join("\n") }], details: { id } };
	}

	async function list(ctx: ExtensionContext) {
		const session = sessionOf(ctx);
		const rows: string[] = [];
		const tern = detectTern();
		if (!("unavailable" in tern)) await syncBlocks(tern);
		const open = [...live.values()];
		for (const a of open) {
			const inlineLive = cards?.ofArtifact(a.id).filter(card => card.live).length ?? 0;
			const where = [a.block !== undefined ? `block=${a.block}` : "", inlineLive > 0 ? `inline=${inlineLive}` : ""].filter(Boolean).join(" ");
			rows.push(`- ${a.id} "${a.title}" ${where ? `open ${where}` : "closed (open reopens it)"} errors=${a.errors.length}`);
		}
		rows.push(...mcp.list());
		const saved = (await files.list(session)).filter(item => !live.has(item.id));
		for (const item of saved) rows.push(`- ${item.id} "${item.title}" saved (this session)`);
		const earlier: string[] = [];
		for (const name of (await files.otherSessions(session)).slice(0, 10)) {
			for (const item of await files.list(name)) earlier.push(`- ${item.id} "${item.title}" saved (session ${name})`);
		}
		const text = [...rows, ...earlier.slice(0, 30)].join("\n") || "No artifacts.";
		return { content: [{ type: "text" as const, text }], details: { open: open.length, saved: saved.length, earlier: earlier.length } };
	}

	pi.registerTool({
		name: "artifact",
		label: "Artifact",
		description: DESCRIPTION,
		loadMode: "essential",
		approval: "write",
		parameters: z.object({
			action: z.enum(["show", "open", "close", "list"]).describe("What to do."),
			id: z.string().optional().describe("Artifact id (lowercase slug). Optional for show: omitted = new artifact; given = create or update that artifact."),
			title: z.string().optional().describe("Short title (show)."),
			html: z.string().optional().describe("Full HTML document or body fragment (show)."),
			surface: z.enum(["auto", "inline", "block"]).optional().describe('Where to show it (show, open): "auto" (default) inline when the page fits a card, else a block; or force "inline" / "block".'),
		}),
		describeResult: (result, options, args) => {
			if (!describe || options.isPartial || result.isError) return undefined;
			const title = typeof args === "object" && args !== null && "title" in args && typeof args.title === "string" ? args.title : undefined;
			const inline = inlineDetails(result.details);
			if (inline) return cards && describe.el ? describeInline(inline, options.toolCallId, title ?? live.get(inline.id)?.title ?? inline.id, describe) : undefined;
			const details = cardDetails(result.details);
			if (!details) return undefined;
			const cardTitle = title ?? (live.get(details.id)?.title ?? details.id);
			let previewMtime: number | undefined;
			try {
				if (details.preview) previewMtime = statSync(details.preview).mtimeMs;
			} catch {
				previewMtime = undefined;
			}
			// `options.media` is set by hosts whose terminal shows files by path.
			const media = "media" in options && options.media === true;
			return describeArtifactCard(cardTitle, details, { block: live.get(details.id)?.block, previewMtime, media }, describe);
		},
		// Buttons and inline pages exist only where the host has interactive tool views; elsewhere the hook would never be called.
		...(describe?.el
			? {
					onNativeEvent: async (event: CardEvent & { result?: { details?: unknown } }, ctx: ExtensionContext) => {
						if (await cards?.handle(event)) return;
						const details = cardDetails(event.result?.details);
						const action = event.type === "action" && event.act ? parseAction(event.act) : undefined;
						if (details && action) await cardAction(ctx, details.id, action);
					},
				}
			: {}),
		async execute(toolCallId, params, signal, _onUpdate, ctx) {
			const call: CallInfo = { toolCallId, surface: params.surface ?? "auto" };
			switch (params.action) {
				case "show":
					return show(ctx, params, call, signal);
				case "open":
					return open(ctx, params.id, signal, call);
				case "close":
					return close(params.id);
				case "list":
					return list(ctx);
			}
		},
	});

	/** The transcript card of an inline page: live from its session, else its last saved frame. */
	function describeInline(details: { id: string; frame: string }, toolCallId: string | undefined, title: string, support: DescribeSupport) {
		if (!cards || !toolCallId) return undefined;
		const card = cards.ensure({ toolCallId, artifactId: details.id, title, framePath: details.frame });
		const shown = card.view();
		const body: unknown[] = shown ? [...shown.view.body] : [support.text("(this page's last frame was not saved)", { tone: "muted" })];
		if (shown?.note) body.push(support.text(shown.note, { tone: "muted" }));
		return {
			tool: { title: "Artifact", target: title },
			body,
			...(shown ? { sheet: shown.sheet, fallback: shown.view.fallback } : {}),
			preview: "none" as const,
			open: true as const,
		};
	}

	/** The id a bare `/artifact` reopens: the last one shown in this process, else the newest saved, this session first. */
	async function lastArtifactId(ctx: ExtensionContext): Promise<string | undefined> {
		if (lastShown) return lastShown;
		const session = sessionOf(ctx);
		const own = (await files.list(session))[0];
		if (own) return own.id;
		for (const name of await files.otherSessions(session)) {
			const item = (await files.list(name))[0];
			if (item) return item.id;
		}
		return undefined;
	}

	// The way back that needs no buttons and no model: works on every OMP build, from any state of the block.
	pi.registerCommand("artifact", {
		description: "Reopen an artifact (default: the last one); /artifact list shows them",
		getArgumentCompletions: prefix => {
			const items = ["list", ...live.keys()].filter(value => value.startsWith(prefix)).map(value => ({ value, label: value }));
			return items.length > 0 ? items : null;
		},
		handler: async (args, ctx) => {
			const arg = args.trim();
			if (arg === "list") {
				notify(ctx, (await list(ctx)).content[0]!.text);
				return;
			}
			const id = arg || (await lastArtifactId(ctx));
			if (!id) {
				notify(ctx, "No artifact to reopen yet.", "warning");
				return;
			}
			const result = await reveal(ctx, id);
			notify(ctx, result.ok ? `Artifact ${result.message}` : `Artifact ${id} could not be opened: ${result.message}`, result.ok ? "info" : "error");
		},
	});

	pi.on("session_shutdown", async () => {
		delivery.stop();
		stopWatching();
		for (const timer of recaptureTimers.values()) clearTimeout(timer);
		recaptureTimers.clear();
		const tern = detectTern();
		// Session shutdown handlers get ~2s: MCP apps are torn down and closed in parallel with the artifact blocks and inline pages.
		await Promise.allSettled([
			mcp.closeAll("session shutdown"),
			(async () => {
				await cards?.closeAll();
				await engine.shutdown();
			})(),
			...(!("unavailable" in tern) ? [...live.values()].filter(a => a.block !== undefined).map(a => closeBlock(tern as TernEnv, a.block!, 2)) : []),
		]);
		live.clear();
		byToken.clear();
		server?.stop();
		server = undefined;
	});

	// Another session's transcript replaces this one: its inline pages have no card to serve any more.
	pi.on("session_switch", async () => {
		await cards?.closeAll();
	});

	// An MCP tool linked to a ui:// view shows that view once its call has completed.
	pi.on("tool_result", async (event, ctx) => {
		const note = await mcp.onToolResult(event as unknown as ToolResultInfo, ctx);
		if (note) return { content: [...event.content, { type: "text" as const, text: note }] };
	});

	// Tools whose _meta.ui.visibility excludes "model" are for the app only; the model's own calls are refused.
	pi.on("tool_call", async event => {
		const reason = await mcp.modelCallRefusal(event.toolName);
		if (reason) return { block: true, reason };
	});

	// Last, because it awaits a capability probe: inline cards exist only on an OMP with interactive tool views.
	await registerInlineUi(pi, delivery);
}
