import { afterAll, describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { type CardDeps, framePathOf, InlineCards, nodeIdOf } from "./cards";
import type { MirrorEngine } from "./engine";
import { MirrorModel } from "./model";
import type { CloseReason, MirrorSession, SessionOptions } from "./session";

const dir = await mkdtemp(join(tmpdir(), "mirror-cards-"));
afterAll(() => rm(dir, { recursive: true, force: true }));

interface Fake {
	session: MirrorSession;
	calls: string[];
	options: SessionOptions;
	close(reason: CloseReason): void;
}

function fakeEngine(): { engine: MirrorEngine; last: () => Fake } {
	let last: Fake | undefined;
	const engine = {
		open: async (options: SessionOptions) => {
			const model = new MirrorModel();
			model.reset({ id: "pg", k: "el", p: { tag: "div" }, c: [{ id: "n1", k: "el", p: { tag: "p", text: "hello" } }] });
			const calls: string[] = [];
			const session = {
				status: "live" as "live" | "closed",
				model,
				blobs: new Map(),
				sheet: ".a{color:red}",
				version: 1,
				textOf: (_id: string, value: string) => value,
				edit: async (id: string, text: string) => void calls.push(`edit ${id} ${text}`) ?? true,
				click: async (id: string) => void calls.push(`click ${id}`) ?? true,
				submit: async (id: string) => void calls.push(`submit ${id}`) ?? true,
				setChecked: async (id: string, checked: boolean) => void calls.push(`check ${id} ${checked}`) ?? true,
				act: async (id: string, name: string, value: string) => void calls.push(`act ${id} ${name} ${value}`) ?? true,
				setVisible: (visible: boolean) => void calls.push(`visible ${visible}`),
				close: async (reason: CloseReason = "closed") => {
					session.status = "closed";
					options.onClosed?.(reason);
				},
			};
			last = { session: session as unknown as MirrorSession, calls, options, close: reason => void session.close(reason) };
			return last.session;
		},
	} as unknown as MirrorEngine;
	return { engine, last: () => last! };
}

const builders: CardDeps["builders"] = {
	el: (tag, props, children, key) => ({ el: tag, props, children, key }),
	node: (kind, props, _children, key) => ({ node: kind, props, key }),
	text: (content, props) => ({ text: content, props }),
};

function setup() {
	const fake = fakeEngine();
	const redescribed: string[] = [];
	const cards = new InlineCards({ engine: fake.engine, builders, redescribe: id => void redescribed.push(id) });
	const spec = (toolCallId: string) => ({
		toolCallId,
		artifactId: "calc",
		title: "Calc",
		framePath: framePathOf(dir, "calc", toolCallId),
		page: { url: "http://127.0.0.1:1/a/x/", origin: "http://127.0.0.1:1", dark: false },
	});
	return { cards, fake, redescribed, spec };
}

describe("event routing", () => {
	test("the node id is the last segment of the key path", () => {
		expect(nodeIdOf("mirror/pg/n3/n9.f")).toBe("n9.f");
		expect(nodeIdOf("n3")).toBe("n3");
		expect(nodeIdOf("")).toBe("");
		expect(nodeIdOf(undefined)).toBe("");
	});

	test("edit, change, submit, click, custom actions and visibility reach the page of the right call", async () => {
		const { cards, fake, spec } = setup();
		await cards.open(spec("call-1"));
		const calls = fake.last().calls;
		const handle = (event: Parameters<typeof cards.handle>[0]) => cards.handle({ toolCallId: "call-1", ...event });
		expect(await handle({ type: "edit", key: "mirror/pg/n2/n2.f", value: "2000" })).toBe(true);
		expect(await handle({ type: "change", key: "pg/n4", checked: true })).toBe(true);
		expect(await handle({ type: "action", act: "submit", key: "pg/n2/n2.f" })).toBe(true);
		expect(await handle({ type: "action", act: "c", key: "pg/n3" })).toBe(true);
		expect(await handle({ type: "action", act: "opt=2", key: "pg/n5.o2" })).toBe(true);
		expect(await handle({ type: "action", act: "rng", value: "-1", key: "pg/n6.dn" })).toBe(true);
		expect(await handle({ type: "visible", visible: false, key: "" })).toBe(true);
		expect(calls).toEqual(["edit n2.f 2000", "check n4 true", "submit n2.f", "click n3", "act n5.o2 opt 2", "act n6.dn rng -1", "visible false"]);
		expect(await cards.handle({ type: "action", act: "c", key: "pg/n3", toolCallId: "other" })).toBe(false);
		expect(await handle({ type: "action", act: "c", key: "" })).toBe(false);
	});
});

describe("static frames", () => {
	test("closing a page keeps its last frame: written to disk, drawn inert with a note, restored without a page", async () => {
		const { cards, fake, redescribed, spec } = setup();
		const card = await cards.open(spec("call-2"));
		expect(card.view()?.view.body).toBeDefined();
		fake.last().close("page-hung");
		const shown = card.view()!;
		expect(shown.note).toContain("stopped responding");
		expect(shown.sheet).toBe(".a{color:red}");
		expect(redescribed).toContain("call-2");
		await card.save();
		const saved = JSON.parse(await readFile(spec("call-2").framePath, "utf8"));
		expect(saved.v).toBe(1);
		expect(saved.tree.c[0].p.text).toBe("hello");

		// A new process: no page, only the file.
		const fresh = setup();
		const restored = fresh.cards.ensure({ toolCallId: "call-2", artifactId: "calc", title: "Calc", framePath: spec("call-2").framePath });
		const view = restored.view()!;
		expect(view.note).toBe("static · page closed");
		expect(JSON.stringify(view.view.body)).toContain("hello");
		expect(fresh.cards.ensure({ toolCallId: "nothing", artifactId: "calc", title: "Calc", framePath: join(dir, "missing.json") }).view()).toBeUndefined();
	});

	test("a discarded page leaves no frame; an update makes the earlier card static", async () => {
		const { cards, fake, spec } = setup();
		const dropped = await cards.open(spec("call-3"));
		await cards.discard(dropped);
		expect(cards.get("call-3")).toBeUndefined();
		expect(await Bun.file(spec("call-3").framePath).exists()).toBe(false);

		const first = await cards.open(spec("call-4"));
		await cards.closeArtifact("calc");
		expect(first.live).toBe(false);
		expect(first.view()?.note).toBe("static · page closed");
		expect(fake.last().session.status).toBe("closed");
	});
});
