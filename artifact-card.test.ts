import { describe, expect, test } from "bun:test";
import { actionsFor, cardDetails, describeArtifactCard, parseAction, statusLine } from "./artifact-card";
import type { DescribeSupport } from "./describe-support";

const support = (withEl: boolean): DescribeSupport => ({
	node: (kind, props, _c, key) => ({ node: kind, props, key }),
	text: (content, props) => ({ text: content, props }),
	...(withEl ? { el: (tag, props, children, key) => ({ el: tag, props, children, key }) } : {}),
});

describe("cardDetails", () => {
	test("only show/open results (card: true) get a card; the id and preview are kept", () => {
		expect(cardDetails({ id: "a", card: true, preview: "/x/a.png", url: "u" })).toEqual({ id: "a", card: true, preview: "/x/a.png" });
		expect(cardDetails({ id: "a", card: true, preview: "" })).toEqual({ id: "a", card: true });
		for (const bad of [{ id: "a" }, { id: 3, card: true }, { card: true }, null, "x", { id: "a", card: "yes" }]) expect(cardDetails(bad)).toBeUndefined();
	});
});

describe("status and actions", () => {
	test("status follows the block; a closed page offers only reopen", () => {
		expect(statusLine("a", { block: undefined })).toBe("a · 닫힘");
		expect(statusLine("a", { block: 7 })).toBe("a · 열림 (block 7)");
		expect(actionsFor({ block: undefined })).toEqual(["reveal"]);
		expect(actionsFor({ block: 7 })).toEqual(["reveal", "close", "capture"]);
	});

	test("only the card's own action names are accepted", () => {
		expect(parseAction("capture")).toBe("capture");
		for (const act of ["send", "ctx", "toggle", "open", ""]) expect(parseAction(act)).toBeUndefined();
	});
});

describe("describeArtifactCard", () => {
	const details = { id: "a", card: true as const, preview: "/s/a.png" };

	test("without el (installed OMP): preview and status text, no buttons, no sheet", () => {
		const view = describeArtifactCard("T", details, { block: 3, previewMtime: 10, media: true }, support(false));
		expect(view.tool).toEqual({ title: "Artifact", target: "T" });
		expect(view.sheet).toBeUndefined();
		expect(view.body).toEqual([
			{ node: "media", props: { path: "/s/a.png", max: { h: "16lines" } }, key: "preview-10" },
			{ text: "a · 열림 (block 3)", props: { tone: "muted" } },
		]);
	});

	test("with el: buttons per state, each a local click action", () => {
		const open = describeArtifactCard("T", details, { block: 3, previewMtime: 10, media: true }, support(true));
		const row = open.body.at(-1) as { children: Array<{ props: { text: string; actions: { click: string } }; key: string }> };
		expect(row.children.map(b => [b.props.text, b.props.actions.click])).toEqual([["열기", "reveal"], ["닫기", "close"], ["새로 캡처", "capture"]]);
		const closed = describeArtifactCard("T", details, { block: undefined, previewMtime: 10, media: true }, support(true));
		expect((closed.body.at(-1) as { children: unknown[] }).children).toHaveLength(1);
	});

	test("a new capture is a new media node; no media support or no file means no preview node", () => {
		const key = (mtime: number) => (describeArtifactCard("T", details, { previewMtime: mtime, media: true }, support(false)).body[0] as { key: string }).key;
		expect(key(1)).not.toBe(key(2));
		expect(describeArtifactCard("T", details, { previewMtime: 1, media: false }, support(false)).body).toHaveLength(1);
		expect(describeArtifactCard("T", details, { media: true }, support(false)).body).toHaveLength(1);
		expect(describeArtifactCard("T", { id: "a", card: true }, { previewMtime: 1, media: true }, support(false)).body).toHaveLength(1);
	});
});
