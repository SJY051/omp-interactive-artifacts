// Restricted HTML -> Tern `el` nodes for inline cards. Pure: parsing yields a small tree of
// what the card may contain plus a list of everything that was refused; rendering turns that
// tree and the card's local state into `el` calls (the builder is injected, so this module
// does not import OMP and runs under `bun test`).

import { type DefaultTreeAdapterMap, parseFragment } from "parse5";

type Element = DefaultTreeAdapterMap["element"];
type ChildNode = DefaultTreeAdapterMap["childNode"];

/** `TSP_EL_TAGS` of the core `el` support, minus the root `form` this module adds itself. */
const TAGS: Record<string, true> = Object.fromEntries(
	"div span p section header footer nav aside main article figure blockquote ul ol li dl dt dd h1 h2 h3 h4 pre code kbd strong b em i del mark hr table thead tbody tr th td label button form input"
		.split(" ")
		.map(tag => [tag, true]),
);
const TAG_HINTS: Record<string, string> = {
	a: "links cannot be drawn; write the URL as text",
	img: "images cannot be drawn",
	script: "no JavaScript runs in a card; use `artifact` for scripted pages",
	select: "use radio inputs inside labels",
	textarea: "text entry is not available; offer radio or checkbox choices",
	br: "use separate block elements or spans",
	style: "only one top-level <style> block is read",
	svg: "use `artifact` for drawings",
	canvas: "use `artifact` for drawings",
	iframe: "embedding is not available",
	template: "templates are not available",
};
const LEAF = new Set(["input", "hr"]);
const BLOCK = new Set([
	"div", "p", "section", "header", "footer", "nav", "aside", "main", "article", "figure", "blockquote", "ul", "ol", "li", "dl", "dt", "dd", "h1", "h2", "h3", "h4", "pre", "hr", "table", "thead", "tbody", "tr", "form",
]);
/** Tern owns these attributes; setting them is ignored. */
const OWNED = new Set(["data-id", "data-role", "data-tone", "data-mark", "data-href", "data-scope", "aria-checked"]);
const ATTR_HINTS: Record<string, string> = {
	id: "use class",
	style: "put CSS in a <style> block and use classes",
	for: "wrap the input inside the label instead",
	href: "links cannot be drawn",
	src: "images cannot be drawn",
	tabindex: "cards have no keyboard focus",
};

export const MAX_NODES = 1500;
export const MAX_DEPTH = 14;
export const MAX_SHEET_BYTES = 48 * 1024;
export const MAX_SEND_CHARS = 4000;
export const MAX_DATA_CHARS = 8 * 1024;
const MAX_PROBLEMS = 25;

export interface Action {
	text: string;
	data?: unknown;
}

export interface InputIr {
	type: "checkbox" | "radio";
	name: string;
	value: string;
	checked: boolean;
	disabled: boolean;
}

export interface IrNode {
	/** Document-order number; names the node (`n<ord>`) and its actions (`send=<ord>`, `ctx=<ord>`). */
	ord: number;
	tag: string;
	class?: string;
	title?: string;
	aria?: string;
	hidden?: boolean;
	attrs: Record<string, string>;
	/** Text drawn before the children. */
	text?: string;
	input?: InputIr;
	act?: { kind: "send" | "context" } & Action;
	children: IrNode[];
}

export interface InlineCard {
	root: IrNode[];
	sheet: string;
	/** Send/context actions by node number. */
	actions: Map<number, { kind: "send" | "context" } & Action>;
	/** The inputs by node number. */
	inputs: Map<number, InputIr>;
	problems: string[];
	nodeCount: number;
}

interface Ctx {
	next: number;
	problems: string[];
	seenProblems: Set<string>;
	sheet: string[];
	actions: InlineCard["actions"];
	inputs: InlineCard["inputs"];
}

function problem(ctx: Ctx, line: number | undefined, message: string): void {
	const text = line === undefined ? message : `line ${line}: ${message}`;
	if (ctx.seenProblems.has(text)) return;
	ctx.seenProblems.add(text);
	if (ctx.problems.length < MAX_PROBLEMS) ctx.problems.push(text);
	else if (ctx.problems.length === MAX_PROBLEMS) ctx.problems.push("… more problems omitted");
}

function lineOf(node: Element): number | undefined {
	return node.sourceCodeLocation?.startLine;
}

function textOf(node: ChildNode): string {
	return "value" in node && typeof node.value === "string" ? node.value : "";
}

function isElement(node: ChildNode): node is Element {
	return "tagName" in node;
}

function collapse(text: string): string {
	return text.replace(/[ \t\r\n\f]+/g, " ");
}

function parseJson(value: string): { ok: true; value: unknown } | { ok: false } {
	try {
		return { ok: true, value: JSON.parse(value) };
	} catch {
		return { ok: false };
	}
}

function convertAttrs(el: Element, tag: string, ctx: Ctx, line: number | undefined, node: IrNode): void {
	let send: string | undefined;
	let context: string | undefined;
	let dataJson: string | undefined;
	for (const { name, value } of el.attrs) {
		if (name === "class") {
			node.class = value.trim() || undefined;
		} else if (name === "title") {
			node.title = value;
		} else if (name === "hidden") {
			node.hidden = true;
		} else if (name === "aria-label") {
			node.aria = value;
		} else if (name === "data-omp-send") {
			send = value;
		} else if (name === "data-omp-context") {
			context = value;
		} else if (name === "data-omp-data") {
			dataJson = value;
		} else if (tag === "input" && (name === "type" || name === "name" || name === "value" || name === "checked" || name === "disabled")) {
			// Read below, with the input's other fields.
		} else if (tag === "button" && name === "type") {
			// A button's type only matters to forms, which do not submit here.
		} else if (name === "role" || name === "colspan" || name === "rowspan" || /^data-[a-z0-9_-]+$/.test(name) || /^aria-[a-z0-9_-]+$/.test(name)) {
			if (OWNED.has(name)) problem(ctx, line, `<${tag}> ${name} is reserved by Tern; pick another name`);
			else node.attrs[name] = value;
		} else if (name.startsWith("on")) {
			problem(ctx, line, `<${tag}> ${name}: event handlers are not supported; use data-omp-send or data-omp-context`);
		} else {
			const hint = ATTR_HINTS[name];
			problem(ctx, line, `<${tag}> attribute ${name} is not supported${hint ? ` (${hint})` : ""}; allowed: class, title, hidden, role, colspan, rowspan, data-*, aria-*`);
		}
	}
	if (dataJson !== undefined && send === undefined && context === undefined) {
		problem(ctx, line, `<${tag}> data-omp-data needs data-omp-send or data-omp-context on the same element`);
	}
	if (send !== undefined && context !== undefined) {
		problem(ctx, line, `<${tag}> has both data-omp-send and data-omp-context; use one`);
		return;
	}
	const kind = send !== undefined ? "send" : context !== undefined ? "context" : undefined;
	if (kind === undefined) return;
	const text = (send ?? context)!.trim();
	if (kind === "send" && text.length === 0) problem(ctx, line, `<${tag}> data-omp-send needs the text to send`);
	if (text.length > MAX_SEND_CHARS) problem(ctx, line, `<${tag}> data-omp-${kind} is longer than ${MAX_SEND_CHARS} characters`);
	const action: { kind: "send" | "context" } & Action = { kind, text };
	if (dataJson !== undefined) {
		const parsed = dataJson.length <= MAX_DATA_CHARS ? parseJson(dataJson) : undefined;
		if (!parsed) problem(ctx, line, `<${tag}> data-omp-data is longer than ${MAX_DATA_CHARS} characters`);
		else if (!parsed.ok) problem(ctx, line, `<${tag}> data-omp-data is not valid JSON: ${dataJson.slice(0, 60)}`);
		else action.data = parsed.value;
	}
	node.act = action;
	node.attrs["data-omp-act"] = kind;
}

function convertInput(el: Element, ctx: Ctx, line: number | undefined, node: IrNode): void {
	const attr = (name: string) => el.attrs.find(entry => entry.name === name)?.value;
	const type = attr("type")?.toLowerCase();
	if (type !== "checkbox" && type !== "radio") {
		problem(ctx, line, `<input type="${type ?? ""}"> is not supported: only checkbox and radio (text entry is not available)`);
		return;
	}
	const name = attr("name") ?? "";
	if (name.length === 0) problem(ctx, line, `<input type="${type}"> needs a name so its choice shows up in the sent values`);
	node.input = {
		type,
		name,
		value: attr("value") ?? "on",
		checked: attr("checked") !== undefined,
		disabled: attr("disabled") !== undefined,
	};
}

function convertChildren(el: Element | DefaultTreeAdapterMap["documentFragment"], parentTag: string, depth: number, ctx: Ctx): IrNode[] {
	const out: IrNode[] = [];
	const pre = parentTag === "pre";
	for (const child of el.childNodes as ChildNode[]) {
		if (child.nodeName === "#comment") continue;
		if (child.nodeName === "#text") {
			const raw = textOf(child);
			const text = pre ? raw : collapse(raw);
			if (text.trim().length === 0 && !pre) continue;
			out.push({ ord: ctx.next++, tag: "span", attrs: {}, text, children: [] });
			continue;
		}
		if (!isElement(child)) continue;
		const converted = convertElement(child, depth + 1, ctx);
		if (converted) out.push(converted);
	}
	return out;
}

function convertElement(el: Element, depth: number, ctx: Ctx): IrNode | undefined {
	const tag = el.tagName;
	const line = lineOf(el);
	if (tag === "style") {
		const css = (el.childNodes as ChildNode[]).map(textOf).join("");
		ctx.sheet.push(css);
		return undefined;
	}
	if (!Object.hasOwn(TAGS, tag)) {
		const hint = TAG_HINTS[tag];
		problem(ctx, line, `<${tag}> is not supported${hint ? ` (${hint})` : ""}; allowed tags: ${Object.keys(TAGS).join(" ")}`);
		return undefined;
	}
	if (depth > MAX_DEPTH) {
		problem(ctx, line, `nesting is deeper than ${MAX_DEPTH} levels`);
		return undefined;
	}
	const node: IrNode = { ord: ctx.next++, tag: tag === "form" ? "div" : tag, attrs: {}, children: [] };
	convertAttrs(el, tag, ctx, line, node);
	if (tag === "input") {
		convertInput(el, ctx, line, node);
		if (node.input) ctx.inputs.set(node.ord, node.input);
		return node;
	}
	if (tag === "hr") return node;
	node.children = convertChildren(el, tag, depth, ctx);
	// Fold a leading text run into `text`.
	const first = node.children[0];
	if (first && first.tag === "span" && first.text !== undefined && first.class === undefined && Object.keys(first.attrs).length === 0 && first.children.length === 0) {
		node.text = first.text;
		node.children.shift();
	}
	return node;
}

function collectActions(nodes: readonly IrNode[], actions: InlineCard["actions"]): void {
	for (const node of nodes) {
		if (node.act) actions.set(node.ord, node.act);
		collectActions(node.children, actions);
	}
}

const SHEET_REFUSALS: ReadonlyArray<[RegExp, string]> = [
	[/@import\b/i, "@import is dropped by Tern"],
	[/@font-face\b/i, "@font-face is dropped by Tern"],
	[/url\s*\(/i, "url() is dropped by Tern"],
	[/position\s*:\s*fixed/i, "position: fixed is dropped by Tern"],
];

/** Parses the model's HTML into a card, collecting what the card cannot draw. */
export function parseInlineHtml(html: string): InlineCard {
	const ctx: Ctx = { next: 1, problems: [], seenProblems: new Set(), sheet: [], actions: new Map(), inputs: new Map() };
	const fragment = parseFragment(html, { sourceCodeLocationInfo: true });
	const root = convertChildren(fragment, "div", 0, ctx);
	collectActions(root, ctx.actions);
	const sheet = ctx.sheet.join("\n");
	for (const [pattern, message] of SHEET_REFUSALS) if (pattern.test(sheet)) problem(ctx, undefined, `<style>: ${message}`);
	if (Buffer.byteLength(sheet) > MAX_SHEET_BYTES) problem(ctx, undefined, `<style> is larger than ${MAX_SHEET_BYTES} bytes`);
	const nodeCount = ctx.next - 1;
	if (nodeCount > MAX_NODES) problem(ctx, undefined, `the card has ${nodeCount} nodes; keep it under ${MAX_NODES}`);
	if (root.length === 0 && ctx.problems.length === 0) problem(ctx, undefined, "the card is empty");
	return { root, sheet, actions: ctx.actions, inputs: ctx.inputs, problems: ctx.problems, nodeCount };
}

/** The card's local state: what the user flipped, and whether it has gone to the agent. */
export interface CardState {
	checked: Map<number, boolean>;
	sent: boolean;
}

export function newCardState(): CardState {
	return { checked: new Map(), sent: false };
}

/** Mirrors a control flip into `state`; a radio unchecks the others of its name. */
export function applyChange(card: InlineCard, state: CardState, ord: number, checked: boolean): void {
	const input = card.inputs.get(ord);
	if (!input) return;
	state.checked.set(ord, checked);
	if (input.type === "radio" && checked) {
		for (const [other, candidate] of card.inputs) {
			if (other !== ord && candidate.type === "radio" && candidate.name === input.name) state.checked.set(other, false);
		}
	}
}

/** The `n<ord>` node number at the end of an event's key path. */
export function ordOfKey(key: string): number | undefined {
	const last = key.split("/").pop() ?? "";
	const match = /^n(\d+)$/.exec(last);
	return match ? Number(match[1]) : undefined;
}

/** `send=3` / `ctx=3` as the terminal reports them: act and value. */
export function actionOf(act: string, value: string | undefined): { kind: "send" | "context"; ord: number } | undefined {
	const ord = value !== undefined && /^\d+$/.test(value) ? Number(value) : undefined;
	if (ord === undefined) return undefined;
	if (act === "send") return { kind: "send", ord };
	if (act === "ctx") return { kind: "context", ord };
	return undefined;
}

/** The part of a terminal event the card logic reads. */
export type CardEvent =
	| { type: "change"; key: string; checked: boolean }
	| { type: "action"; act: string; value?: string };

/** What an event asks the host to do. */
export type CardOutcome = ({ kind: "send" | "context" } & Action) | undefined;

/**
 * Applies a terminal event to the card's local state and says what to deliver. A `send` locks the
 * card before returning, so a second click (or a repeated event) finds it sent and does nothing.
 */
export function routeEvent(card: InlineCard, state: CardState, event: CardEvent): CardOutcome {
	if (event.type === "change") {
		const ord = ordOfKey(event.key);
		if (ord !== undefined && !state.sent) applyChange(card, state, ord, event.checked);
		return undefined;
	}
	const action = actionOf(event.act, event.value);
	const found = action ? card.actions.get(action.ord) : undefined;
	if (!action || !found || found.kind !== action.kind || state.sent) return undefined;
	if (found.kind === "send") state.sent = true;
	return found;
}

export type ElBuilder<N> = (tag: string, props?: Record<string, unknown>, children?: readonly N[], key?: string) => N;

export const CARD_CLASS = "omp-inline";

/**
 * Base look of a card. The model's own `<style>` follows it, so its rules win at equal specificity;
 * everything here is therefore a single class (or `:where()`), never a tag-plus-attribute selector.
 */
export const BASE_SHEET = `.omp-inline{display:flex;flex-direction:column;gap:8px;padding:10px 12px}
:where(.omp-inline) :where(p,h1,h2,h3,h4,ul,ol,dl,blockquote,figure,pre){margin:0}
.omp-act{cursor:pointer}
.omp-act:hover{box-shadow:inset 0 0 0 1px var(--accent)}
.omp-btn{padding:4px 12px;border-radius:var(--r-ctl,8px);background:var(--raise);box-shadow:inset 0 0 0 1px var(--l3);color:var(--t1)}
.omp-send{background:var(--accent-fill);color:#fff;box-shadow:none}
.omp-inline[data-omp-state="sent"] .omp-act{opacity:.5;cursor:default}
.omp-status{color:var(--t3)}`;

function renderNode<N>(node: IrNode, state: CardState, el: ElBuilder<N>): N {
	const props: Record<string, unknown> = {};
	const classes = [node.class, ...(node.act ? ["omp-act", `omp-${node.act.kind}`, ...(node.tag === "button" ? ["omp-btn"] : [])] : [])].filter(Boolean);
	if (classes.length > 0) props.class = classes.join(" ");
	if (node.title !== undefined) props.title = node.title;
	if (node.aria !== undefined) props.aria = node.aria;
	if (node.hidden) props.hidden = true;
	if (Object.keys(node.attrs).length > 0) props.attrs = node.attrs;
	if (node.text !== undefined) props.text = node.text;
	if (node.input) {
		props.type = node.input.type;
		if (node.input.name) props.name = node.input.name;
		props.value = node.input.value;
		props.checked = state.checked.get(node.ord) ?? node.input.checked;
		props.disabled = node.input.disabled || state.sent;
	}
	if (node.act && !state.sent) props.actions = { click: `${node.act.kind === "send" ? "send" : "ctx"}=${node.ord}` };
	const children = node.children.map(child => renderNode(child, state, el));
	return el(node.tag, props, children.length > 0 ? children : undefined, `n${node.ord}`);
}

/** The card's single root element for the current state. */
export function renderCard<N>(card: InlineCard, state: CardState, el: ElBuilder<N>): N {
	const children = card.root.map(node => renderNode(node, state, el));
	if (state.sent) children.push(el("p", { class: "omp-status", text: "Sent" }, undefined, "status"));
	return el("form", { class: CARD_CLASS, attrs: { "data-omp-state": state.sent ? "sent" : "open" } }, children, "card");
}

/** The card's whole stylesheet: the base look, then the model's. */
export function cardSheet(card: InlineCard): string {
	return card.sheet.trim() ? `${BASE_SHEET}\n${card.sheet}` : BASE_SHEET;
}

/** Plain text for terminals that cannot draw `el`: controls as `( )`/`[ ]`, buttons as `[text]`. */
export function fallbackText(card: InlineCard, state: CardState): string {
	const lines: string[] = [];
	let line = "";
	const flush = () => {
		const text = line.replace(/\s+/g, " ").trim();
		if (text) lines.push(text);
		line = "";
	};
	const walk = (node: IrNode) => {
		const block = BLOCK.has(node.tag);
		if (block) flush();
		if (node.input) {
			const on = state.checked.get(node.ord) ?? node.input.checked;
			line += node.input.type === "radio" ? (on ? "(•) " : "( ) ") : on ? "[x] " : "[ ] ";
			return;
		}
		const clickable = node.act !== undefined && node.tag === "button";
		if (clickable) line += "[";
		if (node.text) line += node.text;
		for (const child of node.children) walk(child);
		if (clickable) line += "]";
		if (block || node.tag === "label" || node.tag === "button") flush();
	};
	for (const node of card.root) walk(node);
	flush();
	return lines.join("\n");
}
