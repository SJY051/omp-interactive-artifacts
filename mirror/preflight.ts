// Which surface a page belongs on. The mirror draws form, table and chart pages (spike report: "Recommendation");
// pages that animate through JS, draw with WebGL, need pointer drags or fixed layers, or are too big for a card
// belong in a browser block. Static checks run on the HTML before any browser starts; runtime checks read what the
// engine measured after the page loaded.

import type { MirrorModel } from "./model";
import { type MirrorSession, droppedTotal } from "./session";
import { treeDepth, VIEW_LIMITS } from "./view";

/** What a page may be before `surface: auto` picks the block. */
export const PREFLIGHT_LIMITS = {
	/** Mirrored nodes (core's cap is {@link VIEW_LIMITS.nodes}; the card's own wrappers take a few). */
	nodes: 1500,
	depth: VIEW_LIMITS.depth - 4,
	/** Declarations, selectors and at-rules the CSS compiler had to drop. */
	droppedCss: 20,
	/** Bytes of compiled CSS (core's cap is {@link VIEW_LIMITS.sheetBytes}). */
	sheetBytes: VIEW_LIMITS.sheetBytes - 4096,
	canvases: 3,
	/** Pixels of one canvas: a snapshot is a PNG that is re-sent whenever the canvas changes. */
	canvasPixels: 1_000_000,
} as const;

interface StaticRule {
	pattern: RegExp;
	reason: string;
}

const STATIC_RULES: readonly StaticRule[] = [
	{ pattern: /(?:\bfrom|\bimport)\s*\(?\s*["']three(?:\/[^"']*)?["']|getContext\(\s*["'](?:webgl2?|experimental-webgl)["']|\bWebGLRenderingContext\b/i, reason: "uses three.js or WebGL (no GPU surface in a card)" },
	{ pattern: /position\s*:\s*fixed/i, reason: "uses position:fixed (a card has no viewport to pin to)" },
	{ pattern: /\b(?:pointermove|mousemove|touchmove|dragstart|dragover|ondrag\w*)\b|draggable\s*=/i, reason: "relies on pointer drag (the terminal sends clicks, not movement)" },
	{ pattern: /\brequestAnimationFrame\b/, reason: "animates through requestAnimationFrame (every frame would be a diff)" },
	{ pattern: /\bforceSimulation\b/, reason: "runs a d3 force layout (animated by JS)" },
];

/** Reasons the HTML alone rules out the mirror; empty when it may qualify. */
export function staticReasons(html: string): string[] {
	return STATIC_RULES.filter(rule => rule.pattern.test(html)).map(rule => rule.reason);
}

/** Reasons the measured page does not fit a card; empty when it does. */
export function runtimeReasons(session: Pick<MirrorSession, "stats" | "report" | "sheet"> & { model: MirrorModel }): string[] {
	const reasons: string[] = [];
	const nodes = session.model.size;
	if (nodes > PREFLIGHT_LIMITS.nodes) reasons.push(`${nodes} elements (limit ${PREFLIGHT_LIMITS.nodes})`);
	const depth = treeDepth(session.model);
	if (depth > PREFLIGHT_LIMITS.depth) reasons.push(`nesting ${depth} levels deep (limit ${PREFLIGHT_LIMITS.depth})`);
	const dropped = droppedTotal(session.report);
	if (dropped > PREFLIGHT_LIMITS.droppedCss) reasons.push(`${dropped} CSS declarations the terminal cannot draw (limit ${PREFLIGHT_LIMITS.droppedCss})`);
	const bytes = Buffer.byteLength(session.sheet);
	if (bytes > PREFLIGHT_LIMITS.sheetBytes) reasons.push(`${bytes} bytes of CSS (limit ${PREFLIGHT_LIMITS.sheetBytes})`);
	const stats = session.stats;
	if (stats) {
		if (stats.canvases.length > PREFLIGHT_LIMITS.canvases) reasons.push(`${stats.canvases.length} canvases (limit ${PREFLIGHT_LIMITS.canvases})`);
		const big = stats.canvases.find(canvas => canvas.w * canvas.h > PREFLIGHT_LIMITS.canvasPixels);
		if (big) reasons.push(`a ${big.w}x${big.h} canvas (limit ${PREFLIGHT_LIMITS.canvasPixels} pixels)`);
		if (stats.media > 0) reasons.push("contains video, audio, iframe or embed");
	}
	return reasons;
}
