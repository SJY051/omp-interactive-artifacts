import { describe, expect, test } from "bun:test";
import {
	actionOf,
	cardSheet,
	type CardState,
	fallbackText,
	MAX_NODES,
	newCardState,
	ordOfKey,
	parseInlineHtml,
	renderCard,
	routeEvent,
} from "./inline-html";

interface Fake {
	tag: string;
	p: Record<string, unknown>;
	c: Fake[];
	key?: string;
}
const el = (tag: string, p: Record<string, unknown> = {}, c: readonly Fake[] = [], key?: string): Fake => ({ tag, p, c: [...c], key });

const LUNCH = `<style>.opt{gap:6px}</style>
<h3>Lunch</h3>
<label class="opt"><input type="radio" name="menu" value="soup" checked> <span>Soup</span></label>
<label class="opt"><input type="radio" name="menu" value="bibim"><span>Bibimbap</span></label>
<button data-omp-send="Chose lunch" data-omp-data='{"round":1}'>Send</button>
<span data-omp-context="draft">Remember</span>`;

function render(html: string, state: CardState = newCardState()) {
	const card = parseInlineHtml(html);
	return { card, root: renderCard(card, state, el), state };
}

function find(node: Fake, pick: (n: Fake) => boolean): Fake[] {
	return [...(pick(node) ? [node] : []), ...node.c.flatMap(child => find(child, pick))];
}

describe("HTML -> el mapping", () => {
	test("wraps the fragment in one form root and maps tags, class, attrs and text", () => {
		const { card, root } = render(`<div class="box" data-x="1" aria-describedby="d" role="group" title="tip">Intro <b>bold</b></div>`);
		expect(card.problems).toEqual([]);
		expect(root).toMatchObject({ tag: "form", key: "card", p: { class: "omp-inline", attrs: { "data-omp-state": "open" } } });
		const box = root.c[0]!;
		expect(box.tag).toBe("div");
		expect(box.p).toMatchObject({
			class: "box",
			title: "tip",
			text: "Intro ",
			attrs: { "data-x": "1", "aria-describedby": "d", role: "group" },
		});
		expect(box.c.map(child => [child.tag, child.p.text])).toEqual([["b", "bold"]]);
	});

	test("radios and checkboxes keep name, value and checked; nested forms become divs; every node has a stable key", () => {
		const { root } = render(`<form><label><input type="radio" name="m" value="a" checked><span>A</span></label><label><input type="checkbox" name="x"><span>X</span></label></form>`);
		expect(find(root, n => n.tag === "form")).toHaveLength(1);
		const inputs = find(root, n => n.tag === "input");
		expect(inputs.map(n => n.p)).toEqual([
			{ type: "radio", name: "m", value: "a", checked: true, disabled: false },
			{ type: "checkbox", name: "x", value: "on", checked: false, disabled: false },
		]);
		expect(inputs.map(n => n.key)).toEqual(["n3", "n7"]);
		const again = render(`<form><label><input type="radio" name="m" value="a" checked><span>A</span></label><label><input type="checkbox" name="x"><span>X</span></label></form>`);
		expect(find(again.root, n => n.tag === "input").map(n => n.key)).toEqual(["n3", "n7"]);
	});

	test("a <style> block becomes the sheet after the base look, and is not a node", () => {
		const { card, root } = render(LUNCH);
		expect(card.sheet).toContain(".opt{gap:6px}");
		expect(cardSheet(card).startsWith(".omp-inline{")).toBe(true);
		expect(cardSheet(card).endsWith(".opt{gap:6px}")).toBe(true);
		expect(find(root, n => n.tag === "style")).toEqual([]);
	});

	test("whitespace-only text between elements is dropped and runs collapse", () => {
		const { root } = render(`<ul>\n  <li>  one \n two </li>\n  <li>three</li>\n</ul>`);
		const list = root.c[0]!;
		expect(list.c.map(li => li.p.text)).toEqual([" one two ", "three"]);
	});

	test("fallback text reads controls and buttons for plain terminals", () => {
		const { card, state } = render(LUNCH);
		expect(fallbackText(card, state)).toBe("Lunch\n(•) Soup\n( ) Bibimbap\n[Send]\nRemember");
	});
});

describe("unsupported markup is reported, not dropped", () => {
	test("tags, attributes and handlers each get a line-numbered, actionable message", () => {
		const card = parseInlineHtml(
			[
				`<p id="x">ok</p>`,
				`<a href="https://e.x">link</a>`,
				`<img src="x.png">`,
				`<script>alert(1)</script>`,
				`<select><option>1</option></select>`,
				`<button onclick="go()">go</button>`,
				`<div style="color:red">s</div>`,
				`<input type="text" name="t">`,
				`<input type="radio" value="v">`,
				`<h5>five</h5>`,
				`<br>`,
			].join("\n"),
		);
		const text = card.problems.join("\n");
		for (const needle of [
			"line 1: <p> attribute id is not supported (use class)",
			"line 2: <a> is not supported (links cannot be drawn",
			"line 3: <img> is not supported",
			"line 4: <script> is not supported (no JavaScript",
			"line 5: <select> is not supported (use radio inputs",
			"line 6: <button> onclick: event handlers are not supported",
			"line 7: <div> attribute style is not supported (put CSS in a <style> block",
			'line 8: <input type="text"> is not supported',
			'line 9: <input type="radio"> needs a name',
			"line 10: <h5> is not supported",
			"line 11: <br> is not supported",
		]) {
			expect(text).toContain(needle);
		}
	});

	test("an unsupported element hides nothing else: its siblings still map, and a clean card has no problems", () => {
		const bad = parseInlineHtml(`<p>kept</p><a href="x">gone</a>`);
		expect(bad.problems).toHaveLength(1);
		expect(bad.root.map(node => node.tag)).toEqual(["p"]);
		expect(parseInlineHtml(LUNCH).problems).toEqual([]);
	});

	test("owned attributes, bad sheets, empty cards and oversized cards are reported", () => {
		expect(parseInlineHtml(`<div data-id="x" aria-checked="true">a</div>`).problems.join()).toMatch(/data-id is reserved.*aria-checked is reserved/);
		const sheet = parseInlineHtml(`<style>@import "x.css"; .a{background:url(x.png);position:fixed}</style><p>a</p>`).problems.join("\n");
		expect(sheet).toContain("@import is dropped");
		expect(sheet).toContain("url() is dropped");
		expect(sheet).toContain("position: fixed is dropped");
		expect(parseInlineHtml("   ").problems).toEqual(["the card is empty"]);
		expect(parseInlineHtml("<p>x</p>".repeat(MAX_NODES + 1)).problems.join()).toContain("keep it under");
	});

	test("problems are deduplicated and capped", () => {
		const many = parseInlineHtml(Array.from({ length: 80 }, (_, i) => `<p>${"x"}</p>\n<a>${i}</a>`).join("\n"));
		expect(many.problems.length).toBe(26);
		expect(many.problems.at(-1)).toBe("… more problems omitted");
	});
});

describe("data-omp-send / data-omp-context", () => {
	test("elements get click actions named after their node number, with text and JSON data kept aside", () => {
		const { card, root } = render(LUNCH);
		const send = find(root, n => n.p.attrs && (n.p.attrs as Record<string, string>)["data-omp-act"] === "send")[0]!;
		const context = find(root, n => n.p.attrs && (n.p.attrs as Record<string, string>)["data-omp-act"] === "context")[0]!;
		const sendOrd = Number(send.key!.slice(1));
		const contextOrd = Number(context.key!.slice(1));
		expect(send.p.class).toBe("omp-act omp-send omp-btn");
		expect(context.p.class).toBe("omp-act omp-context");
		expect(send.p.actions).toEqual({ click: `send=${sendOrd}` });
		expect(context.p.actions).toEqual({ click: `ctx=${contextOrd}` });
		expect(card.actions.get(sendOrd)).toEqual({ kind: "send", text: "Chose lunch", data: { round: 1 } });
		expect(card.actions.get(contextOrd)).toEqual({ kind: "context", text: "draft" });
		// The raw markup attributes never reach the terminal as ordinary attrs.
		expect(JSON.stringify(root)).not.toContain("data-omp-send");
		expect(JSON.stringify(root)).not.toContain("data-omp-data");
	});

	test("a bare data-omp-context is allowed; send needs text; bad JSON, orphan data and both-at-once are reported", () => {
		expect(parseInlineHtml(`<button data-omp-context>save</button>`).problems).toEqual([]);
		const text = parseInlineHtml(
			[`<button data-omp-send="">a</button>`, `<button data-omp-send="x" data-omp-data="{oops">b</button>`, `<button data-omp-data="{}">c</button>`, `<button data-omp-send="x" data-omp-context>d</button>`].join("\n"),
		).problems.join("\n");
		expect(text).toContain("data-omp-send needs the text to send");
		expect(text).toContain("data-omp-data is not valid JSON");
		expect(text).toContain("data-omp-data needs data-omp-send or data-omp-context");
		expect(text).toContain("has both data-omp-send and data-omp-context");
	});

	test("actionOf reads the act/value pair the terminal reports", () => {
		expect(actionOf("send", "7")).toEqual({ kind: "send", ord: 7 });
		expect(actionOf("ctx", "7")).toEqual({ kind: "context", ord: 7 });
		for (const [act, value] of [["send", undefined], ["send", "x"], ["other", "7"], ["ctx", "-1"]] as const) expect(actionOf(act, value)).toBeUndefined();
		expect(ordOfKey("card/n12")).toBe(12);
		expect(ordOfKey("card/status")).toBeUndefined();
	});
});

describe("local state and the double-send guard", () => {
	const sendEvent = (ord: number) => ({ type: "action" as const, act: "send", value: String(ord) });

	function ordOf(card: ReturnType<typeof parseInlineHtml>, kind: "send" | "context"): number {
		return [...card.actions].find(([, action]) => action.kind === kind)![0];
	}

	test("a change is mirrored into state and a re-render keeps it; a radio unchecks its group", () => {
		const { card, state } = render(LUNCH);
		const [soup, bibim] = [...card.inputs.keys()] as [number, number];
		routeEvent(card, state, { type: "change", key: `card/n${bibim}`, checked: true });
		expect(state.checked.get(bibim)).toBe(true);
		expect(state.checked.get(soup)).toBe(false);
		const inputs = find(renderCard(card, state, el), n => n.tag === "input");
		expect(inputs.map(n => n.p.checked)).toEqual([false, true]);
	});

	test("the first send delivers and locks the card; a second click, a repeat event and later changes do nothing", () => {
		const { card, state } = render(LUNCH);
		const ord = ordOf(card, "send");
		expect(routeEvent(card, state, sendEvent(ord))).toEqual({ kind: "send", text: "Chose lunch", data: { round: 1 } });
		expect(state.sent).toBe(true);
		expect(routeEvent(card, state, sendEvent(ord))).toBeUndefined();
		expect(routeEvent(card, state, sendEvent(ord))).toBeUndefined();
		const [soup, bibim] = [...card.inputs.keys()] as [number, number];
		routeEvent(card, state, { type: "change", key: `card/n${bibim}`, checked: true });
		expect(state.checked.get(soup)).toBeUndefined();
	});

	test("a sent card renders without actions, with disabled inputs and a status line", () => {
		const { card, state } = render(LUNCH);
		routeEvent(card, state, sendEvent(ordOf(card, "send")));
		const root = renderCard(card, state, el);
		expect(root.p.attrs).toEqual({ "data-omp-state": "sent" });
		expect(find(root, n => n.p.actions !== undefined)).toEqual([]);
		expect(find(root, n => n.tag === "input").every(n => n.p.disabled === true)).toBe(true);
		expect(root.c.at(-1)).toMatchObject({ tag: "p", p: { class: "omp-status", text: "Sent" } });
	});

	test("context clicks deliver every time and never lock the card", () => {
		const { card, state } = render(LUNCH);
		const ord = ordOf(card, "context");
		const ctxEvent = { type: "action" as const, act: "ctx", value: String(ord) };
		expect(routeEvent(card, state, ctxEvent)).toEqual({ kind: "context", text: "draft" });
		expect(routeEvent(card, state, ctxEvent)).toEqual({ kind: "context", text: "draft" });
		expect(state.sent).toBe(false);
	});

	test("events naming no known action, or the wrong kind for a node, are ignored", () => {
		const { card, state } = render(LUNCH);
		expect(routeEvent(card, state, { type: "action", act: "send", value: "999" })).toBeUndefined();
		expect(routeEvent(card, state, { type: "action", act: "ctx", value: String(ordOf(card, "send")) })).toBeUndefined();
		expect(routeEvent(card, state, { type: "action", act: "toggle" })).toBeUndefined();
		expect(state.sent).toBe(false);
	});
});
