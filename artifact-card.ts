// The transcript card of an `artifact` result: title, the last captured preview, one status line and,
// where interactive tool views exist, local buttons. Pure view logic; OMP calls and Tern ops live in index.ts.

import type { DescribeSupport } from "./describe-support";

/** What an `artifact show/open` result records so its card can be drawn again after a resume. */
export interface CardDetails {
	id: string;
	card: true;
	/** The preview PNG beside the artifact's HTML, when a capture was saved. */
	preview?: string;
}

export function cardDetails(details: unknown): CardDetails | undefined {
	// `card: true` marks show/open results; close/list results carry an id too but get no card.
	if (typeof details !== "object" || details === null || !("id" in details) || typeof details.id !== "string") return undefined;
	if (!("card" in details) || details.card !== true) return undefined;
	const preview = "preview" in details && typeof details.preview === "string" && details.preview.length > 0 ? details.preview : undefined;
	return preview ? { id: details.id, card: true, preview } : { id: details.id, card: true };
}

/** What an inline `artifact show/open` result records: its card is the page itself, drawn from the mirror, so there is no preview or buttons. */
export interface InlineDetails {
	id: string;
	surface: "inline";
	/** Where the card's last frame is saved, so the transcript can draw it after the page is gone. */
	frame: string;
}

export function inlineDetails(details: unknown): InlineDetails | undefined {
	if (typeof details !== "object" || details === null) return undefined;
	if (!("id" in details) || typeof details.id !== "string") return undefined;
	if (!("surface" in details) || details.surface !== "inline") return undefined;
	if (!("frame" in details) || typeof details.frame !== "string" || details.frame.length === 0) return undefined;
	return { id: details.id, surface: "inline", frame: details.frame };
}

export interface CardState {
	/** The block showing the artifact now, when it is open. */
	block?: number;
	/** The preview file exists, with its modification time (names the media node so a new capture is a new node). */
	previewMtime?: number;
	/** The terminal draws files by path (`options.media`). */
	media: boolean;
}

/** Action names the terminal passes back; `open` is reserved by Tern, so reopening is `reveal`. */
export type CardAction = "reveal" | "close" | "capture";

export const ACTION_LABELS: Record<CardAction, string> = { reveal: "열기", close: "닫기", capture: "새로 캡처" };

export function statusLine(id: string, state: Pick<CardState, "block">): string {
	return state.block === undefined ? `${id} · 닫힘` : `${id} · 열림 (block ${state.block})`;
}

/** Buttons offered for the state: reopen/focus always, close and recapture only while a block shows the page. */
export function actionsFor(state: Pick<CardState, "block">): CardAction[] {
	return state.block === undefined ? ["reveal"] : ["reveal", "close", "capture"];
}

export function parseAction(act: string): CardAction | undefined {
	return act === "reveal" || act === "close" || act === "capture" ? act : undefined;
}

export const CARD_SHEET = `.oa-actions{display:flex;gap:8px;padding:4px 0}
.oa-btn{padding:3px 12px;border-radius:var(--r-ctl,8px);background:var(--raise);box-shadow:inset 0 0 0 1px var(--l3);color:var(--t1);cursor:pointer}
.oa-btn:hover{box-shadow:inset 0 0 0 1px var(--accent)}`;

/** The view for `describeResult`. Buttons appear only when `support.el` exists. */
export function describeArtifactCard(title: string, details: CardDetails, state: CardState, support: DescribeSupport) {
	const body: unknown[] = [];
	if (state.media && details.preview && state.previewMtime !== undefined) {
		body.push(support.node("media", { path: details.preview, max: { h: "16lines" } }, undefined, `preview-${state.previewMtime}`));
	}
	body.push(support.text(statusLine(details.id, state), { tone: "muted" }));
	// `preview: "none"`: the card is short and its media is already height-capped, so nothing is clamped behind "Show all".
	const view: { tool: { title: string; target: string }; body: unknown[]; preview: "none"; open: true; sheet?: string } = { tool: { title: "Artifact", target: title }, body, preview: "none", open: true };
	const el = support.el;
	if (el) {
		body.push(
			el(
				"div",
				{ class: "oa-actions" },
				actionsFor(state).map(action => el("button", { class: "oa-btn", text: ACTION_LABELS[action], actions: { click: action } }, undefined, action)),
				"actions",
			),
		);
		view.sheet = CARD_SHEET;
	}
	return view;
}
