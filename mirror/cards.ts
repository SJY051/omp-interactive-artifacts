// Inline cards: the transcript cards of `artifact` results whose page runs in the mirror engine. A card is live while
// its session runs (events from the terminal go into the page) and static afterwards: its last frame is kept in
// memory and on disk, so the transcript still shows it after the page is closed, the process ends, or a resume.

import { mkdir, rename } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { MirrorEngine } from "./engine";
import { MirrorModel, ROOT_ID, type TreeNode } from "./model";
import type { Blob, CloseReason, MirrorSession, SessionOptions } from "./session";
import { buildView, type Builders, type View } from "./view";

/** More live cards than this and the oldest becomes static (each live card is a Chrome page). */
export const MAX_LIVE_CARDS = 6;
/** The final frame is written this long after the last change (ms). */
const SAVE_AFTER_MS = 1500;
/** Cards described again no more often than this (ms); core coalesces further. */
const DESCRIBE_EVERY_MS = 16;
/** Static frames kept in memory. */
const MAX_CACHED_FRAMES = 24;

/** What is written for a static card. Blobs are base64 so the file is JSON. */
export interface Frame {
	v: 1;
	title: string;
	tree: TreeNode;
	sheet: string;
	blobs: Record<string, { mime: string; b64: string }>;
}

/** An event from the terminal; only the fields the cards read. */
export interface CardEvent {
	type: string;
	toolCallId?: string;
	key?: string;
	act?: string;
	value?: unknown;
	checked?: unknown;
	visible?: unknown;
}

export interface CardDeps {
	engine: MirrorEngine;
	/** Builders of the host's describe module plus a text node for the note under a static card. */
	builders: Builders & { text(content: string, props?: Record<string, unknown>): unknown };
	/** Asks OMP to describe the card again. */
	redescribe(toolCallId: string): void;
	/** Optional diagnostics: called with an event name and a payload. */
	trace?: (event: string, data?: Record<string, unknown>) => void;
}

export interface OpenSpec {
	toolCallId: string;
	artifactId: string;
	title: string;
	/** Where the static frame is written. */
	framePath: string;
	page: Pick<SessionOptions, "url" | "origin" | "dark" | "tokens">;
}

const NOTES: Record<CloseReason, string> = {
	closed: "static · page closed",
	"page-hung": "static · the page stopped responding and was closed",
	"browser-exited": "static · the browser engine exited",
	"navigated-away": "static · the page tried to leave its address and was closed",
	shutdown: "static · page closed",
};

/** The id the page script gave the node an event names: the last segment of the key path. */
export function nodeIdOf(key: string | undefined): string {
	if (!key) return "";
	return key.slice(key.lastIndexOf("/") + 1);
}

export class Card {
	readonly toolCallId: string;
	readonly artifactId: string;
	title: string;
	readonly framePath: string;
	session?: MirrorSession;
	frame?: Frame;
	note?: string;
	readonly openedAt = Date.now();
	#frozenModel?: { model: MirrorModel; blobs: Map<string, Blob> };
	#saveTimer: Timer | undefined;
	#describeTimer: Timer | undefined;
	#saving: Promise<void> = Promise.resolve();
	#disposed = false;

	constructor(
		readonly cards: InlineCards,
		spec: OpenSpec,
	) {
		this.toolCallId = spec.toolCallId;
		this.artifactId = spec.artifactId;
		this.title = spec.title;
		this.framePath = spec.framePath;
	}

	/** What a model needs to know about the page without seeing it: size and the text on it. */
	summary(): { elements: number; images: number; text: string } | undefined {
		const session = this.session;
		if (!session || session.model.size === 0) return undefined;
		const stub: Builders = { el: () => 0, node: () => 0 };
		const view = buildView({ model: session.model, blobs: session.blobs, textOf: (id, value) => session.textOf(id, value) }, stub);
		let images = 0;
		for (const node of session.model.nodes.values()) if (node.k === "image") images++;
		return { elements: view.nodes, images, text: view.fallback };
	}

	get live(): boolean {
		return this.session !== undefined && this.session.status !== "closed";
	}

	/** The page changed: describe the card again soon, and save its frame once things settle. */
	changed(): void {
		this.cards.deps.trace?.("changed", { id: this.toolCallId, version: this.session?.version });
		if (!this.#describeTimer) {
			this.#describeTimer = setTimeout(() => {
				this.#describeTimer = undefined;
				this.cards.deps.redescribe(this.toolCallId);
			}, DESCRIBE_EVERY_MS);
		}
		clearTimeout(this.#saveTimer);
		this.#saveTimer = setTimeout(() => void this.save(), SAVE_AFTER_MS);
		this.#saveTimer.unref();
	}

	/** The frame of the page as it is now. */
	snapshot(): Frame | undefined {
		const session = this.session;
		if (!session || session.model.size === 0) return this.frame;
		const tree = session.model.tree(ROOT_ID);
		if (!tree) return this.frame;
		const blobs: Frame["blobs"] = {};
		for (const node of session.model.nodes.values()) {
			if (node.k !== "image" || typeof node.p.blob !== "string") continue;
			const blob = session.blobs.get(node.p.blob);
			if (blob) blobs[node.p.blob] = { mime: blob.mime, b64: Buffer.from(blob.bytes).toString("base64") };
		}
		return { v: 1, title: this.title, tree, sheet: session.sheet, blobs };
	}

	/** Writes the current frame next to the artifact; failures are not fatal (the card just is not restored later). */
	save(): Promise<void> {
		clearTimeout(this.#saveTimer);
		const frame = this.snapshot();
		if (!frame) return this.#saving;
		this.#saving = this.#saving.then(async () => {
			try {
				await mkdir(dirname(this.framePath), { recursive: true });
				const temp = `${this.framePath}.${process.pid}.tmp`;
				await Bun.write(temp, JSON.stringify(frame));
				await rename(temp, this.framePath);
			} catch (error) {
				this.cards.deps.trace?.("save-failed", { id: this.toolCallId, error: String(error) });
			}
		});
		return this.#saving;
	}

	/** The page is gone: keep its last frame as the card. */
	freeze(reason: CloseReason): void {
		if (this.#disposed) return;
		const frame = this.snapshot();
		if (frame) this.frame = frame;
		this.#frozenModel = undefined;
		this.note = NOTES[reason];
		clearTimeout(this.#describeTimer);
		this.#describeTimer = undefined;
		clearTimeout(this.#saveTimer);
		this.session = undefined;
		void this.save();
		this.cards.deps.redescribe(this.toolCallId);
	}

	dispose(): void {
		this.#disposed = true;
		clearTimeout(this.#saveTimer);
		clearTimeout(this.#describeTimer);
	}

	/** The static frame as a model and blobs, built once. */
	#staticSource(): { model: MirrorModel; blobs: Map<string, Blob> } | undefined {
		if (this.#frozenModel) return this.#frozenModel;
		const frame = this.frame ?? this.cards.loadFrame(this.framePath);
		if (!frame) return undefined;
		const model = new MirrorModel();
		model.reset(frame.tree);
		const blobs = new Map<string, Blob>();
		for (const [token, blob] of Object.entries(frame.blobs)) blobs.set(token, { mime: blob.mime, bytes: Buffer.from(blob.b64, "base64") });
		this.frame = frame;
		this.#frozenModel = { model, blobs };
		return this.#frozenModel;
	}

	/** The card's view: live from the session, else the static frame (with every control inert). */
	view(): { view: View; sheet: string; note?: string } | undefined {
		const session = this.session;
		const builders = this.cards.deps.builders;
		if (session && session.status !== "closed" && session.model.size > 0) {
			const view = buildView({ model: session.model, blobs: session.blobs, textOf: (id, value) => session.textOf(id, value) }, builders);
			return { view, sheet: session.sheet };
		}
		const source = this.#staticSource();
		if (!source) return undefined;
		const view = buildView({ ...source, textOf: (_id, value) => value, inert: true }, builders);
		return { view, sheet: this.frame?.sheet ?? "", note: this.note ?? NOTES.closed };
	}
}

export class InlineCards {
	readonly deps: CardDeps;
	readonly #cards = new Map<string, Card>();
	readonly #frames = new Map<string, Frame | null>();

	constructor(deps: CardDeps) {
		this.deps = deps;
	}

	get(toolCallId: string | undefined): Card | undefined {
		return toolCallId === undefined ? undefined : this.#cards.get(toolCallId);
	}

	/** Cards of one artifact, live or not. */
	ofArtifact(artifactId: string): Card[] {
		return [...this.#cards.values()].filter(card => card.artifactId === artifactId);
	}

	/** The card of a call, made static-only (no page) when this process has none: a transcript drawn again after a resume. */
	ensure(spec: Pick<OpenSpec, "toolCallId" | "artifactId" | "title" | "framePath">): Card {
		let card = this.#cards.get(spec.toolCallId);
		if (!card) {
			card = new Card(this, { ...spec, page: { url: "", origin: "", dark: false } });
			this.#cards.set(spec.toolCallId, card);
		}
		return card;
	}

	/** Pages running now. */
	liveSessions(): MirrorSession[] {
		return [...this.#cards.values()].flatMap(card => (card.live && card.session ? [card.session] : []));
	}

	liveCount(): number {
		let n = 0;
		for (const card of this.#cards.values()) if (card.live) n++;
		return n;
	}

	/** Reads a saved frame; null when there is none or it is unreadable. Cached. */
	loadFrame(path: string): Frame | undefined {
		if (this.#frames.has(path)) return this.#frames.get(path) ?? undefined;
		let frame: Frame | null = null;
		try {
			const parsed = JSON.parse(readFileSync(path, "utf8")) as Partial<Frame>;
			if (parsed.v === 1 && parsed.tree && typeof parsed.sheet === "string" && parsed.blobs) frame = parsed as Frame;
		} catch {
			frame = null;
		}
		if (this.#frames.size >= MAX_CACHED_FRAMES) this.#frames.delete(this.#frames.keys().next().value as string);
		this.#frames.set(path, frame);
		return frame ?? undefined;
	}

	/**
	 * Starts a page for a new card. The oldest live card becomes static first when too many are live.
	 * Rejects when the engine cannot start; the card is not kept then.
	 */
	async open(spec: OpenSpec): Promise<Card> {
		await this.#makeRoom();
		const card = new Card(this, spec);
		this.#cards.set(spec.toolCallId, card);
		try {
			card.session = await this.deps.engine.open({
				...spec.page,
				onChange: () => card.changed(),
				onClosed: reason => card.freeze(reason),
			});
		} catch (error) {
			this.#cards.delete(spec.toolCallId);
			card.dispose();
			throw error;
		}
		return card;
	}

	/** A page that did not qualify: closed and forgotten, with no static frame. */
	async discard(card: Card): Promise<void> {
		this.#cards.delete(card.toolCallId);
		const session = card.session;
		card.session = undefined;
		card.dispose();
		await session?.close("closed");
	}

	async #makeRoom(): Promise<void> {
		while (this.liveCount() >= MAX_LIVE_CARDS) {
			const oldest = [...this.#cards.values()].filter(card => card.live).sort((a, b) => a.openedAt - b.openedAt)[0];
			if (!oldest) return;
			await oldest.session?.close("closed");
		}
	}

	/** Makes every live card of an artifact static (its page was updated or closed). */
	async closeArtifact(artifactId: string): Promise<void> {
		await Promise.all(this.ofArtifact(artifactId).map(card => card.session?.close("closed")));
	}

	/** Session end or switch: every page closed, every frame written. */
	async closeAll(): Promise<void> {
		const live = [...this.#cards.values()].filter(card => card.live);
		await Promise.all(live.map(card => card.session?.close("shutdown")));
		await Promise.all([...this.#cards.values()].map(card => card.save()));
		for (const card of this.#cards.values()) card.dispose();
		this.#cards.clear();
	}

	/** Routes one terminal event to its card's page. Returns whether a live page took it. */
	async handle(event: CardEvent): Promise<boolean> {
		const card = this.get(event.toolCallId);
		const session = card?.session;
		if (!card || !session || session.status !== "live") return false;
		if (event.type === "visible") {
			session.setVisible(event.visible === true);
			return true;
		}
		const id = nodeIdOf(event.key);
		if (!id) return false;
		const t0 = performance.now();
		let handled = false;
		if (event.type === "edit" && typeof event.value === "string") handled = await session.edit(id, event.value);
		else if (event.type === "change" && typeof event.checked === "boolean") handled = await session.setChecked(id, event.checked);
		else if (event.type === "action" && event.act === "submit") handled = await session.submit(id);
		else if (event.type === "action" && event.act === "c") handled = await session.click(id);
		else if (event.type === "action" && event.act) {
			// `opt=2` and `rng=-1` arrive either whole in `act` or split into `act` and `value`.
			const eq = event.act.indexOf("=");
			const name = eq > 0 ? event.act.slice(0, eq) : event.act;
			const value = event.value !== undefined ? String(event.value) : eq > 0 ? event.act.slice(eq + 1) : "";
			handled = await session.act(id, name, value);
		}
		this.deps.trace?.("event", { type: event.type, act: event.act, ms: Math.round((performance.now() - t0) * 100) / 100, handled });
		return handled;
	}
}

/** Path of a card's static frame beside its artifact. */
export function framePathOf(dir: string, artifactId: string, toolCallId: string): string {
	return join(dir, `${artifactId}.${Bun.hash(toolCallId).toString(36)}.frame.json`);
}
