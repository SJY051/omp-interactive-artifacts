// The mirrored tree as a tool view: `el` nodes for elements, `input`/`editor` nodes for text fields and `image`
// nodes (bytes) for SVG and canvas snapshots. Builders are passed in, so this stays testable outside OMP.

import type { Json } from "./chrome";
import { type MirrorModel, ROOT_ID } from "./model";
import type { Blob } from "./session";

/** Core's caps for what a tool view may carry (extensions.md, "Interactive tool views"). */
export const VIEW_LIMITS = {
	/** Nodes in one view, every kind counted. */
	nodes: 2000,
	/** Nesting levels; the view's own wrappers take about four. */
	depth: 24,
	/** Bytes of CSS. */
	sheetBytes: 64 * 1024,
	/** One image, and the SVG share of it. */
	imageBytes: 2 * 1024 * 1024,
	svgBytes: 256 * 1024,
	/** All images of one card. */
	cardBytes: 8 * 1024 * 1024,
} as const;

export interface Builders {
	el(tag: string, props: Record<string, unknown>, children?: readonly unknown[], key?: string): unknown;
	node(kind: string, props: Record<string, unknown>, children?: readonly unknown[], key?: string): unknown;
}

export interface ViewSource {
	model: MirrorModel;
	blobs: ReadonlyMap<string, Blob>;
	/** The text a field shows (session.textOf). */
	textOf(fieldId: string, pageValue: string): string;
	/** A static frame: no actions, fields read-only, checkboxes disabled. */
	inert?: boolean;
}

/** Props of an `el` that pass through from the page script. */
const EL_PROPS = ["class", "attrs", "text", "hidden", "title", "aria", "actions", "href", "name", "value", "checked", "disabled", "type"] as const;

const BLOCK_TAGS = new Set("div p section header footer nav aside main article figure blockquote ul ol li dl dt dd h1 h2 h3 h4 pre table thead tbody tr form".split(" "));

export interface View {
	body: unknown[];
	/** The text of the page, for terminals that draw no elements. */
	fallback: string;
	/** Nodes and image bytes the view carries. */
	nodes: number;
	imageBytes: number;
	/** Images left out because of a cap, by alt text. */
	skipped: string[];
}

function present(props: Record<string, unknown>): Record<string, unknown> {
	const out: Record<string, unknown> = {};
	for (const [name, value] of Object.entries(props)) if (value !== null && value !== undefined) out[name] = value;
	return out;
}

/** Longest fallback text kept (characters). */
const FALLBACK_CHARS = 2000;

export function buildView(source: ViewSource, b: Builders): View {
	const { model } = source;
	const view: View = { body: [], fallback: "", nodes: 0, imageBytes: 0, skipped: [] };
	const text: string[] = [];
	const counted = new Set<string>();

	function imageOf(id: string, p: Json): unknown {
		const alt = typeof p.alt === "string" && p.alt ? p.alt : "image";
		const token = typeof p.blob === "string" ? p.blob : "";
		const blob = source.blobs.get(token);
		const cap = blob?.mime === "image/svg+xml" ? VIEW_LIMITS.svgBytes : VIEW_LIMITS.imageBytes;
		const fresh = !counted.has(token);
		const fits = blob !== undefined && blob.bytes.length <= cap && (!fresh || view.imageBytes + blob.bytes.length <= VIEW_LIMITS.cardBytes);
		if (!blob || !fits) {
			if (blob) view.skipped.push(alt);
			text.push(`[${alt}]`);
			return b.el("span", { text: `[${alt}]`, class: "pg-ro" }, undefined, id);
		}
		if (fresh) {
			counted.add(token);
			view.imageBytes += blob.bytes.length;
		}
		text.push(`[${alt}]`);
		return b.node("image", present({ bytes: blob.bytes, mime: blob.mime, w: typeof p.w === "number" ? Math.round(p.w) : undefined, h: typeof p.h === "number" ? Math.round(p.h) : undefined, alt }), undefined, id);
	}

	function convert(id: string): unknown {
		const node = model.nodes.get(id);
		if (!node) return undefined;
		view.nodes++;
		if (node.k === "image") return imageOf(id, node.p);
		if (node.k === "input" || node.k === "editor") {
			const value = source.textOf(id, typeof node.p.value === "string" ? node.p.value : "");
			text.push(value || (typeof node.p.placeholder === "string" ? node.p.placeholder : ""));
			return b.node(
				node.k,
				present({
					value,
					placeholder: node.p.placeholder,
					readonly: node.p.readonly === true || source.inert ? true : undefined,
					aria: node.p.aria,
					maxLines: node.k === "editor" ? node.p.maxLines : undefined,
				}),
				undefined,
				id,
			);
		}
		const tag = typeof node.p.tag === "string" ? node.p.tag : "div";
		const props: Record<string, unknown> = {};
		for (const name of EL_PROPS) if (node.p[name] !== undefined && node.p[name] !== null) props[name] = node.p[name];
		if (source.inert) {
			delete props.actions;
			if (tag === "input") props.disabled = true;
		}
		if (typeof props.text === "string") text.push(props.text);
		const children = node.c.map(convert).filter(child => child !== undefined);
		if (BLOCK_TAGS.has(tag)) text.push("\n");
		return b.el(tag, props, children, id);
	}

	const root = convert(ROOT_ID);
	// A wrapper the sheet's variables hang on; the page's body sits inside it.
	if (root !== undefined) view.body.push(b.el("div", { class: "pg-root" }, [root], "mirror"));
	view.fallback = text.join(" ").replace(/[ \t]*\n[ \t\n]*/g, "\n").replace(/[ \t]+/g, " ").trim().slice(0, FALLBACK_CHARS);
	return view;
}

/** Deepest nesting of the tree under the root (the root is level 1). */
export function treeDepth(model: MirrorModel): number {
	const walk = (id: string, level: number): number => {
		const node = model.nodes.get(id);
		if (!node) return level - 1;
		let deepest = level;
		for (const child of node.c) deepest = Math.max(deepest, walk(child, level + 1));
		return deepest;
	};
	return walk(ROOT_ID, 1);
}
