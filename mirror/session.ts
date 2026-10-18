// One page in the mirror engine: a Chrome target (its own browser context, so storage is not shared with other
// cards) running an artifact. The isolated-world script (mirror-page.js) reports the live DOM; this class keeps
// the replayed tree, compiles the page's CSS, answers the terminal's events with real CDP input, and watches
// for a page that stops responding.

import type { CDP, Json } from "./chrome";
import { type CompileOpts, compileInline, compileRules, pickRules, type Report, type Rule, type SheetDump } from "./css";
import { MirrorModel, type Op, type TreeNode } from "./model";

/** The page script's source, read once. */
let mirrorSource: Promise<string> | undefined;
function mirrorScript(): Promise<string> {
	mirrorSource ??= Bun.file(new URL("./mirror-page.js", import.meta.url)).text();
	return mirrorSource;
}

/** Width of the emulated viewport (px): what the page's media queries and layout see. */
export const VIEWPORT_WIDTH = 720;
const VIEWPORT_HEIGHT = 900;

/** A hung page is closed when it misses this many pings in a row (about 4 s at {@link PING_EVERY_MS}). */
const PING_MISSES = 2;
const PING_EVERY_MS = 2500;
const PING_TIMEOUT_MS = 2000;
/** A text field's `change` event fires this long after typing stops (a browser fires it on blur or Enter). */
const COMMIT_AFTER_MS = 600;

const WORLD = "omp-mirror";

export interface Blob {
	mime: string;
	bytes: Uint8Array;
}

interface PageBlob {
	mime: string;
	text?: string;
	b64?: string;
}

/** What the page script measured at load (`__m.stats()`). */
export interface PageStats {
	nodes: number;
	canvases: { w: number; h: number }[];
	media: number;
}

export type CloseReason = "closed" | "page-hung" | "browser-exited" | "navigated-away" | "shutdown";

export interface SessionOptions {
	/** Page URL on the loopback server. */
	url: string;
	/** Allowed origin: every other request is refused. */
	origin: string;
	dark: boolean;
	/** The OMP palette's concrete tokens (c1..c6 feed the compiled sheet). */
	tokens?: Readonly<Record<string, string>>;
	/** Called after the tree, the sheet or the blobs changed. */
	onChange?: () => void;
	/** Called once when the page is gone. */
	onClosed?: (reason: CloseReason) => void;
}

/** A pressed key as CDP wants it. */
const ENTER = { key: "Enter", code: "Enter", windowsVirtualKeyCode: 13, text: "\r", unmodifiedText: "\r" } as const;

export class MirrorSession {
	readonly model = new MirrorModel();
	/** Blobs the page sent, by the page's token, kept while a node references them. */
	readonly blobs = new Map<string, Blob>();
	title = "";
	status: "loading" | "live" | "closed" = "loading";
	closeReason?: CloseReason;
	/** Why the page could not be mirrored, when it could not (the page script never reported). */
	failure?: string;
	/** Bumped on every change a card would show. */
	version = 0;
	/** The compiled sheet for the card (author CSS plus per-node inline styles). */
	sheet = "";
	report: Report = emptyReport();
	stats: PageStats | undefined;

	readonly #cdp: CDP;
	readonly #options: SessionOptions;
	/** The text the terminal last typed per field; `kept` is what the page held after taking it (null while that is in flight). */
	readonly #drafts = new Map<string, { text: string; kept: string | null }>();
	readonly #commitTimers = new Map<string, Timer>();
	readonly #inline = new Map<string, string>();
	readonly #unsubscribe: Array<() => void> = [];
	#queue: Promise<unknown> = Promise.resolve();
	#targetId = "";
	#contextId = "";
	#sessionId = "";
	#mirrorCtx = 0;
	#rules: Rule[] = [];
	#authorCss = "";
	#authorReport: Report = emptyReport();
	#inlineReport: Report = emptyReport();
	#themeCss: string | undefined;
	#dark: boolean;
	#tokens: Readonly<Record<string, string>> | undefined;
	#watchdog: Timer | undefined;
	#misses = 0;
	#ready = Promise.withResolvers<void>();
	#visible = true;
	#pendingChange = false;

	constructor(cdp: CDP, options: SessionOptions) {
		this.#cdp = cdp;
		this.#options = options;
		this.#dark = options.dark;
		this.#tokens = options.tokens;
		// An unhandled rejection of a promise nobody awaits must not take the process down.
		this.#ready.promise.catch(() => undefined);
	}

	/** Resolves when the page script reported its first tree; rejects when the page never did. */
	get ready(): Promise<void> {
		return this.#ready.promise;
	}

	get dark(): boolean {
		return this.#dark;
	}

	get visible(): boolean {
		return this.#visible;
	}

	#compileOpts(): CompileOpts {
		return { dark: this.#dark, widthPx: VIEWPORT_WIDTH, tokens: this.#tokens };
	}

	#send<T = Json>(method: string, params: object = {}): Promise<T> {
		return this.#cdp.send<T>(method, params, this.#sessionId);
	}

	/** Runs an expression in the mirror world; resolves its value (undefined when the page cannot answer). */
	async evalMirror(expression: string): Promise<unknown> {
		if (this.status === "closed" || !this.#mirrorCtx) return undefined;
		const result = await this.#send<{ result?: { value?: unknown }; exceptionDetails?: unknown }>("Runtime.evaluate", {
			expression,
			contextId: this.#mirrorCtx,
			returnByValue: true,
			awaitPromise: false,
		});
		return result.result?.value;
	}

	/** Opens the page. Resolves once the target exists and has been told to navigate; use {@link ready} for the first tree. */
	async start(): Promise<void> {
		const cdp = this.#cdp;
		const origin = this.#options.origin;
		const script = await mirrorScript();
		const { browserContextId } = await cdp.send<{ browserContextId: string }>("Target.createBrowserContext", { disposeOnDetach: false });
		this.#contextId = browserContextId;
		const { targetId } = await cdp.send<{ targetId: string }>("Target.createTarget", { url: "about:blank", browserContextId });
		this.#targetId = targetId;
		this.#sessionId = (await cdp.send<{ sessionId: string }>("Target.attachToTarget", { targetId, flatten: true })).sessionId;
		const mine = (sessionId?: string): boolean => sessionId === this.#sessionId;

		const on = (method: string, handler: (params: Json) => void): void => {
			this.#unsubscribe.push(cdp.on(method, (params, sessionId) => mine(sessionId) && handler(params)));
		};
		on("Fetch.requestPaused", params => {
			const url = String((params.request as { url?: string } | undefined)?.url ?? "");
			const allowed = url.startsWith(`${origin}/`) || url === "about:blank" || url.startsWith("data:") || url.startsWith("blob:");
			void this.#send(
				allowed ? "Fetch.continueRequest" : "Fetch.failRequest",
				allowed ? { requestId: params.requestId } : { requestId: params.requestId, errorReason: "BlockedByClient" },
			).catch(() => undefined);
		});
		on("Runtime.bindingCalled", params => {
			if (params.name === "__ompMirror") this.#onPage(String(params.payload));
		});
		on("Runtime.executionContextCreated", params => {
			const context = params.context as { id: number; name: string };
			if (context.name === WORLD) this.#mirrorCtx = context.id;
		});
		on("Runtime.executionContextsCleared", () => {
			this.#mirrorCtx = 0;
		});
		on("Page.javascriptDialogOpening", () => void this.#send("Page.handleJavaScriptDialog", { accept: false }).catch(() => undefined));
		on("Page.frameNavigated", params => {
			const frame = params.frame as { url: string; parentId?: string };
			if (!frame.parentId && frame.url !== "about:blank" && !frame.url.startsWith(`${origin}/`)) void this.#send("Page.navigate", { url: "about:blank" }).catch(() => undefined);
		});
		this.#unsubscribe.push(
			cdp.on("Target.targetCreated", params => {
				const info = params.targetInfo as { targetId: string; type: string; browserContextId?: string };
				// A popup opened by the page: closed at once.
				if (info.type === "page" && info.targetId !== this.#targetId && info.browserContextId === this.#contextId) void cdp.send("Target.closeTarget", { targetId: info.targetId }).catch(() => undefined);
			}),
			cdp.on("Target.targetDestroyed", params => {
				if (params.targetId === this.#targetId) this.#finish("closed");
			}),
			cdp.on("cdp.closed", () => this.#finish("browser-exited")),
		);
		await cdp.send("Target.setDiscoverTargets", { discover: true });
		await Promise.all([this.#send("Page.enable"), this.#send("Runtime.enable"), this.#send("Fetch.enable", { patterns: [{ urlPattern: "*" }] })]);
		await this.#send("Runtime.addBinding", { name: "__ompMirror", executionContextName: WORLD });
		await this.#send("Page.addScriptToEvaluateOnNewDocument", { source: script, worldName: WORLD, runImmediately: true });
		await this.#send("Emulation.setDeviceMetricsOverride", { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT, deviceScaleFactor: 1, mobile: false });
		await this.#send("Emulation.setFocusEmulationEnabled", { enabled: true });
		await this.#setScheme();
		this.#watchdog = setInterval(() => void this.#ping(), PING_EVERY_MS);
		this.#watchdog.unref();
		await this.#send("Page.navigate", { url: this.#options.url });
	}

	#setScheme(): Promise<unknown> {
		return this.#send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: this.#dark ? "dark" : "light" }] });
	}

	// ---- page -> host --------------------------------------------------------------------------------------------

	#onPage(payload: string): void {
		let message: Json;
		try {
			message = JSON.parse(payload) as Json;
		} catch {
			return;
		}
		if (this.status === "closed") return;
		if (message.t === "init") {
			this.#drafts.clear();
			this.model.reset(message.root as TreeNode);
			this.title = String(message.title ?? "");
			this.stats = message.stats as PageStats | undefined;
			this.#acceptStyles(message);
			this.#acceptBlobs(message);
			this.#recompile(message.rules as SheetDump[] | undefined);
			this.status = "live";
			this.#ready.resolve();
			this.#changed();
		} else if (message.t === "sync") {
			if (message.ops) this.model.apply(message.ops as Op[]);
			this.#acceptStyles(message);
			this.#acceptBlobs(message);
			this.#recompile(message.rules as SheetDump[] | undefined);
			this.#collectBlobs();
			this.#changed();
		} else if (message.t === "err") {
			this.failure = String(message.msg ?? "mirror error").slice(0, 400);
		}
	}

	#acceptStyles(message: Json): void {
		const styles = message.styles as Record<string, string | null> | undefined;
		if (!styles) return;
		for (const [id, css] of Object.entries(styles)) {
			if (css === null) this.#inline.delete(id);
			else this.#inline.set(id, css);
		}
		this.#styleDirty = true;
	}

	#styleDirty = false;

	#acceptBlobs(message: Json): void {
		const blobs = message.blobs as Record<string, PageBlob> | undefined;
		if (!blobs) return;
		for (const [token, blob] of Object.entries(blobs)) {
			const bytes = blob.b64 !== undefined ? Buffer.from(blob.b64, "base64") : Buffer.from(blob.text ?? "", "utf8");
			this.blobs.set(token, { mime: blob.mime, bytes });
		}
	}

	/** Drops blobs no node references any more, and tells the page so it sends them again if they come back. */
	#collectBlobs(): void {
		if (this.blobs.size <= 8) return;
		const used = new Set<string>();
		for (const node of this.model.nodes.values()) if (node.k === "image" && typeof node.p.blob === "string") used.add(node.p.blob);
		const gone: string[] = [];
		for (const token of this.blobs.keys()) {
			if (!used.has(token)) {
				this.blobs.delete(token);
				gone.push(token);
			}
		}
		if (gone.length > 0) void this.evalMirror(`__m.forget(${JSON.stringify(gone)})`).catch(() => undefined);
	}

	/** Parses the page's sheets (the author's own text) and compiles them; the sheet is rebuilt by {@link #buildSheet}. */
	#compileAuthor(dumps?: SheetDump[]): void {
		if (dumps) this.#rules = dumps.flatMap(dump => pickRules(dump).rules);
		const compiled = compileRules(this.#rules, this.#compileOpts());
		this.#authorCss = compiled.css;
		this.#authorReport = compiled.report;
		this.#styleDirty = true;
	}

	#buildSheet(): void {
		this.#styleDirty = false;
		this.#inlineReport = emptyReport();
		const rules: string[] = [this.#authorCss];
		for (const [id, css] of this.#inline) {
			const rule = compileInline(id, css, this.#compileOpts(), this.#inlineReport);
			if (rule) rules.push(rule);
		}
		this.sheet = rules.join("\n");
		this.report = mergeReports(this.#authorReport, this.#inlineReport);
	}

	/** After a page message: recompile what changed. */
	#recompile(dumps: SheetDump[] | undefined): void {
		if (dumps) this.#compileAuthor(dumps);
		if (this.#styleDirty || !this.sheet) this.#buildSheet();
	}

	#changed(): void {
		this.version++;
		if (!this.#visible) {
			this.#pendingChange = true;
			return;
		}
		this.#options.onChange?.();
	}

	/** The terminal reports the card on or off screen; while off screen nothing is pushed, and the newest state is described once it shows. */
	setVisible(visible: boolean): void {
		if (this.#visible === visible) return;
		this.#visible = visible;
		if (visible && this.#pendingChange) {
			this.#pendingChange = false;
			this.#options.onChange?.();
		}
	}

	// ---- text fields ---------------------------------------------------------------------------------------------

	/**
	 * The text a field shows: what the terminal last typed while the page still holds what that typing produced
	 * (a number field turns "0." into ""), else what the page holds now.
	 */
	textOf(fieldId: string, pageValue: string): string {
		const draft = this.#drafts.get(fieldId);
		if (!draft) return pageValue;
		if (draft.kept === null || draft.kept === pageValue) return draft.text;
		this.#drafts.delete(fieldId);
		return pageValue;
	}

	// ---- terminal -> page ----------------------------------------------------------------------------------------

	/** Runs `job` after the earlier events, so typing arrives in order. */
	#enqueue<T>(job: () => Promise<T>): Promise<T> {
		const next = this.#queue.then(job, job);
		this.#queue = next.catch(() => undefined);
		return next;
	}

	/** A real click at the element's centre; falls back to `el.click()` when it has no box. */
	click(id: string): Promise<boolean> {
		return this.#enqueue(() => this.#click(id));
	}

	async #click(id: string): Promise<boolean> {
		const hit = (await this.evalMirror(`__m.hit(${JSON.stringify(id)})`)) as { x: number; y: number } | null | undefined;
		if (!hit) return (await this.evalMirror(`__m.click(${JSON.stringify(id)})`)) === true;
		const base = { x: hit.x, y: hit.y, button: "left", clickCount: 1 };
		await Promise.all([
			this.#send("Input.dispatchMouseEvent", { type: "mouseMoved", x: hit.x, y: hit.y, buttons: 0 }),
			this.#send("Input.dispatchMouseEvent", { type: "mousePressed", buttons: 1, ...base }),
			this.#send("Input.dispatchMouseEvent", { type: "mouseReleased", buttons: 0, ...base }),
		]);
		await this.#flush();
		return true;
	}

	/** A checkbox or radio flipped in the terminal: make the page agree, by clicking it for real when it differs. */
	setChecked(id: string, checked: boolean): Promise<boolean> {
		return this.#enqueue(async () => {
			const now = await this.evalMirror(`__m.get(${JSON.stringify(id)})`);
			if (now === null || now === undefined) return false;
			if (now === checked) {
				await this.#flush();
				return true;
			}
			return this.#click(id);
		});
	}

	/** Select option `opt=<i>` or range step `rng=<±1>`. */
	act(id: string, name: string, value: string): Promise<boolean> {
		return this.#enqueue(async () => {
			const ok = (await this.evalMirror(`__m.act(${JSON.stringify(id)},${JSON.stringify(name)},${JSON.stringify(value)})`)) === true;
			await this.#flush();
			return ok;
		});
	}

	/** The terminal's field text after an edit: set it the way typing would, then `change` once typing pauses. */
	edit(fieldId: string, text: string): Promise<boolean> {
		// Synchronous: the card is described again as soon as the event handler returns, and must show this text.
		this.#drafts.set(fieldId, { text, kept: null });
		return this.#enqueue(async () => {
			const kept = await this.evalMirror(`__m.edit(${JSON.stringify(fieldId)},${JSON.stringify(text)})`);
			if (typeof kept !== "string") {
				this.#drafts.delete(fieldId);
				return false;
			}
			const draft = this.#drafts.get(fieldId);
			if (draft?.text === text) draft.kept = kept;
			clearTimeout(this.#commitTimers.get(fieldId));
			const later = setTimeout(() => {
				this.#commitTimers.delete(fieldId);
				void this.#enqueue(async () => {
					await this.evalMirror(`__m.commit(${JSON.stringify(fieldId)})`);
					await this.#flush();
				}).catch(() => undefined);
			}, COMMIT_AFTER_MS);
			later.unref();
			this.#commitTimers.set(fieldId, later);
			await this.#flush();
			return true;
		});
	}

	/** Enter in a text field: commit it, then press Enter in the page so key handlers and implicit form submission run. */
	submit(fieldId: string): Promise<boolean> {
		return this.#enqueue(async () => {
			const timer = this.#commitTimers.get(fieldId);
			if (timer) {
				clearTimeout(timer);
				this.#commitTimers.delete(fieldId);
			}
			if ((await this.evalMirror(`__m.focus(${JSON.stringify(fieldId)})`)) !== true) return false;
			await this.evalMirror(`__m.commit(${JSON.stringify(fieldId)})`);
			await this.#send("Input.dispatchKeyEvent", { type: "keyDown", modifiers: 0, ...ENTER });
			await this.#send("Input.dispatchKeyEvent", { type: "keyUp", modifiers: 0, key: ENTER.key, code: ENTER.code, windowsVirtualKeyCode: ENTER.windowsVirtualKeyCode });
			await this.#flush();
			return true;
		});
	}

	/** Asks the page script to report now rather than at its next tick. */
	#flush(): Promise<unknown> {
		return this.evalMirror("__m.poll()").catch(() => undefined);
	}

	/** The OMP theme or Tern's appearance changed: new theme CSS for the page, new `prefers-color-scheme`, recompiled sheet. */
	async setTheme(themeCss: string, dark: boolean, tokens?: Readonly<Record<string, string>>): Promise<void> {
		if (this.status === "closed") return;
		if (themeCss === this.#themeCss && dark === this.#dark) return;
		this.#themeCss = themeCss;
		this.#dark = dark;
		this.#tokens = tokens;
		await this.#setScheme().catch(() => undefined);
		await this.evalMirror(`__m.retheme(${JSON.stringify(themeCss)})`).catch(() => undefined);
		this.#compileAuthor();
		this.#buildSheet();
		this.#changed();
	}

	// ---- diagnostics ---------------------------------------------------------------------------------------------

	/** A from-scratch snapshot of the page, for the replay oracle. */
	async snapshot(): Promise<TreeNode | null> {
		return ((await this.evalMirror("__m.snapshot()")) as TreeNode | undefined) ?? null;
	}

	// ---- lifetime ------------------------------------------------------------------------------------------------

	async #ping(): Promise<void> {
		if (this.status === "closed" || !this.#mirrorCtx) return;
		const answered = await Promise.race([this.evalMirror("1").then(() => true, () => false), Bun.sleep(PING_TIMEOUT_MS).then(() => false)]);
		if (answered) {
			this.#misses = 0;
			return;
		}
		if (++this.#misses < PING_MISSES) return;
		await this.close("page-hung");
	}

	/** Closes the page and its browser context; idempotent. */
	async close(reason: CloseReason = "closed"): Promise<void> {
		if (this.status === "closed") return;
		const targetId = this.#targetId;
		const contextId = this.#contextId;
		this.#finish(reason);
		if (this.#cdp.closed) return;
		try {
			if (targetId) await this.#cdp.send("Target.closeTarget", { targetId });
		} catch {
			// Already gone.
		}
		try {
			if (contextId) await this.#cdp.send("Target.disposeBrowserContext", { browserContextId: contextId });
		} catch {
			// Already gone.
		}
	}

	#finish(reason: CloseReason): void {
		if (this.status === "closed") return;
		this.status = "closed";
		this.closeReason = reason;
		clearInterval(this.#watchdog);
		for (const timer of this.#commitTimers.values()) clearTimeout(timer);
		this.#commitTimers.clear();
		for (const off of this.#unsubscribe.splice(0)) off();
		this.#ready.reject(new Error(this.failure ?? `the page closed before it reported (${reason})`));
		this.#options.onClosed?.(reason);
	}
}

export function emptyReport(): Report {
	return { droppedProps: {}, droppedSelectors: {}, droppedAtRules: {}, converted: {} };
}

function mergeReports(a: Report, b: Report): Report {
	const out = emptyReport();
	for (const key of ["droppedProps", "droppedSelectors", "droppedAtRules", "converted"] as const) {
		for (const part of [a[key], b[key]]) for (const [name, count] of Object.entries(part)) out[key][name] = (out[key][name] ?? 0) + count;
	}
	return out;
}

/** Total declarations, selectors and at-rules the compiler could not express. */
export function droppedTotal(report: Report): number {
	let total = 0;
	for (const key of ["droppedProps", "droppedSelectors", "droppedAtRules"] as const) for (const count of Object.values(report[key])) total += count;
	return total;
}
