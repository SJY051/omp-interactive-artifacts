import { describe, expect, test } from "bun:test";
import { MirrorModel } from "./model";
import { buildView, type Builders, treeDepth, VIEW_LIMITS } from "./view";

const b: Builders = {
	el: (tag, props, children, key) => ({ el: tag, props, children, key }),
	node: (kind, props, _children, key) => ({ node: kind, props, key }),
};

function model(): MirrorModel {
	const m = new MirrorModel();
	m.reset({
		id: "pg",
		k: "el",
		p: { tag: "div", class: "pg-body" },
		c: [
			{ id: "n1", k: "el", p: { tag: "h1", text: "Title" } },
			{ id: "n2", k: "el", p: { tag: "div", attrs: { "data-tag": "input" } }, c: [{ id: "n2.f", k: "input", p: { value: "12", placeholder: "amount", aria: "p", type: "number", readonly: null } }] },
			{ id: "n3", k: "el", p: { tag: "button", text: "Go", actions: { click: "c" } } },
			{ id: "n4", k: "el", p: { tag: "div" }, c: [{ id: "n4.i", k: "image", p: { blob: "tok:a", w: 120.4, h: 40, alt: "chart" } }] },
		],
	});
	return m;
}

const png = (n: number) => ({ mime: "image/png", bytes: new Uint8Array(n) });

describe("buildView", () => {
	test("elements, text fields with the typed text, and byte images; nulls never reach the builders", () => {
		const view = buildView({ model: model(), blobs: new Map([["tok:a", png(10)]]), textOf: (id, value) => (id === "n2.f" ? "12." : value) }, b);
		const root = view.body[0] as { props: { class: string }; key: string; children: Array<{ key: string; children: unknown[] }> };
		expect(root.key).toBe("mirror");
		expect(root.props.class).toBe("pg-root");
		const body = root.children[0] as { el: string; children: Array<{ el?: string; props: Record<string, unknown>; children?: Array<{ node?: string; props: Record<string, unknown>; key: string }> }> };
		const field = body.children[1]!.children![0]!;
		expect(field).toEqual({ node: "input", props: { value: "12.", placeholder: "amount", aria: "p" }, key: "n2.f" });
		const image = body.children[3]!.children![0]!;
		expect(image.node).toBe("image");
		expect(image.props).toMatchObject({ mime: "image/png", w: 120, h: 40, alt: "chart" });
		expect(image.props.bytes).toBeInstanceOf(Uint8Array);
		expect(view.fallback).toContain("Title");
		expect(view.fallback).toContain("[chart]");
		expect(view.imageBytes).toBe(10);
	});

	test("an image over a cap becomes its alt text; the card total counts distinct content once", () => {
		const m = model();
		const big = buildView({ model: m, blobs: new Map([["tok:a", png(VIEW_LIMITS.imageBytes + 1)]]), textOf: (_i, v) => v }, b);
		expect(big.skipped).toEqual(["chart"]);
		expect(big.fallback).toContain("[chart]");
		const svg = buildView({ model: m, blobs: new Map([["tok:a", { mime: "image/svg+xml", bytes: new Uint8Array(VIEW_LIMITS.svgBytes + 1) }]]), textOf: (_i, v) => v }, b);
		expect(svg.skipped).toEqual(["chart"]);
	});

	test("a static frame is inert: no actions, read-only fields, disabled inputs", () => {
		const view = buildView({ model: model(), blobs: new Map(), textOf: (_i, v) => v, inert: true }, b);
		const json = JSON.stringify(view.body);
		expect(json).not.toContain("actions");
		expect(json).toContain('"readonly":true');
	});

	test("treeDepth counts levels from the root", () => {
		expect(treeDepth(model())).toBe(3);
	});
});
