import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { chmodSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { blockAlive, browserBlocks, DOCK_MIN_COLUMNS, presentInTern, rethemeBlock } from "./present";
import { type TernEnv, ternAppearance } from "./tern";

// A stand-in `tern` binary: answers browser ops and `ls`/`dock`/`ctl` from the scenario in FAKE_TERN, logging each call.
const FAKE = `#!/usr/bin/env bun
import { appendFileSync } from "node:fs";
const args = process.argv.slice(2);
const scenario = JSON.parse(process.env.FAKE_TERN ?? "{}");
appendFileSync(scenario.log, JSON.stringify(args) + "\\n");
const ok = value => console.log(JSON.stringify({ ok: value }));
const err = (kind, message) => { console.log(JSON.stringify({ error: { kind, message } })); process.exit(1); };
if (args[0] === "ctl") {
	console.log(JSON.stringify({ ok: true, theme: scenario.theme, panes: scenario.ctlCols === undefined ? [] : [{ id: scenario.pane, cols: scenario.ctlCols }] }));
} else if (args[0] === "ls") {
	console.log(JSON.stringify({ sessions: [{ tabs: [{ blocks: [{ id: scenario.pane, cols: scenario.cols }] }] }] }));
} else if (args[0] === "dock") {
	if (scenario.dockFails) { console.error("no room"); process.exit(1); }
} else if (args[0] === "browser") {
	const op = JSON.parse(args[1]);
	if (op.op === "state") {
		if (scenario.stateError) err(scenario.stateError, "boom");
		if (op.block !== 100 && !scenario.alive.includes(op.block)) err("not_found", "no browser block " + op.block);
		ok({ url: "http://127.0.0.1:1/a/tok/?v=1", loading: false });
	} else if (op.op === "open") ok({ block: 100, url: "about:blank" });
	else if (op.op === "blocks") ok({ blocks: scenario.alive.map(block => ({ block, shown: true })) });
	else if (op.op === "eval") ok({ value: true });
	else ok({});
}
`;

let dir = "";
let bin = "";

beforeAll(() => {
	dir = mkdtempSync(join(tmpdir(), "oa-present-"));
	bin = join(dir, "tern");
	writeFileSync(bin, FAKE);
	chmodSync(bin, 0o755);
});

afterAll(() => rmSync(dir, { recursive: true, force: true }));

interface Scenario {
	cols?: number;
	alive?: number[];
	dockFails?: boolean;
	stateError?: string;
	theme?: string;
	/** The live width `ctl state` reports for the pane (absent: the pane is in a hidden tab). */
	ctlCols?: number;
}

/** Runs `fn` against the fake tern with `scenario`; returns its value and the calls it made (argv per call). */
async function withTern<T>(scenario: Scenario, fn: (tern: TernEnv) => Promise<T>): Promise<{ value: T; calls: string[][] }> {
	const log = join(dir, `calls-${Math.random().toString(36).slice(2)}.log`);
	writeFileSync(log, "");
	const before = process.env.FAKE_TERN;
	process.env.FAKE_TERN = JSON.stringify({ pane: 7, alive: [], cols: 200, ...scenario, log });
	try {
		const value = await fn({ bin, pane: 7 });
		const calls = readFileSync(log, "utf8")
			.split("\n")
			.filter(Boolean)
			.map(line => JSON.parse(line) as string[]);
		return { value, calls };
	} finally {
		if (before === undefined) delete process.env.FAKE_TERN;
		else process.env.FAKE_TERN = before;
	}
}

const ops = (calls: string[][]) => calls.filter(call => call[0] === "browser").map(call => JSON.parse(call[1]!).op as string);
const URL = "http://127.0.0.1:1/a/tok/?v=1";
const MARKER = "/a/tok/?v=1";
const QUICK = { capture: false, ready: Promise.resolve() } as const;

describe("blockAlive", () => {
	test("a block Tern does not know is gone", async () => {
		const { value } = await withTern({ alive: [5] }, async tern => [await blockAlive(tern, 5), await blockAlive(tern, 6)]);
		expect(value).toEqual([true, false]);
	});

	test("a failed probe is not read as 'closed': a slow Tern must never make a second block", async () => {
		await expect(withTern({ stateError: "timeout" }, tern => blockAlive(tern, 5))).rejects.toThrow("boom");
	});
});

describe("browserBlocks", () => {
	test("lists every browser block of the window", async () => {
		const { value } = await withTern({ alive: [3, 9] }, tern => browserBlocks(tern));
		expect([...value.keys()]).toEqual([3, 9]);
	});
});

describe("presentInTern placement", () => {
	test("a closed block is replaced by a new one docked to the right of a wide pane", async () => {
		const { value, calls } = await withTern({ cols: DOCK_MIN_COLUMNS, alive: [] }, tern => presentInTern(tern, 5, URL, MARKER, undefined, QUICK));
		expect(value.block).toBe(100);
		expect(value.placement).toBe("split-right");
		const open = calls.find(call => call[0] === "browser" && JSON.parse(call[1]!).op === "open");
		expect(JSON.parse(open![1]!)).toMatchObject({ owner: 7, corner: "tr" });
		expect(calls).toContainEqual(["dock", "100", "right"]);
		// The allowlist is applied while the block is still blank, before the page loads.
		expect(ops(calls).indexOf("allow")).toBeLessThan(ops(calls).indexOf("goto"));
	});

	test("a pane narrower than the threshold keeps the block floating", async () => {
		const { value, calls } = await withTern({ cols: DOCK_MIN_COLUMNS - 1 }, tern => presentInTern(tern, undefined, URL, MARKER, undefined, QUICK));
		expect(value.placement).toBe("pip");
		expect(calls.some(call => call[0] === "dock")).toBe(false);
	});

	test("the live width from ctl state wins over a stale one in the listing", async () => {
		const { value } = await withTern({ cols: 78, ctlCols: 160 }, tern => presentInTern(tern, undefined, URL, MARKER, undefined, QUICK));
		expect(value.placement).toBe("split-right");
		const narrow = await withTern({ cols: 200, ctlCols: 78 }, tern => presentInTern(tern, undefined, URL, MARKER, undefined, QUICK));
		expect(narrow.value.placement).toBe("pip");
	});

	test("a dock Tern refuses leaves the floating block showing the page", async () => {
		const { value } = await withTern({ cols: 200, dockFails: true }, tern => presentInTern(tern, undefined, URL, MARKER, undefined, QUICK));
		expect(value.placement).toBe("pip");
		expect(value.block).toBe(100);
	});

	test("an update of a block that is still showing reuses it in place, without opening or docking", async () => {
		const { value, calls } = await withTern({ alive: [5] }, tern => presentInTern(tern, 5, URL, MARKER, undefined, QUICK));
		expect(value.block).toBe(5);
		expect(value.placement).toBeUndefined();
		expect(ops(calls)).not.toContain("open");
		expect(calls.some(call => call[0] === "dock" || call[0] === "ls")).toBe(false);
	});
});

describe("rethemeBlock", () => {
	test("evaluates a replacement of #omp-theme with the CSS as an argument, not spliced into the script", async () => {
		const css = ':root{--bg:#000}"); alert(1);//';
		const { value, calls } = await withTern({ alive: [5] }, tern => rethemeBlock(tern, 5, css));
		expect(value).toBe(true);
		const op = JSON.parse(calls.find(call => call[0] === "browser")![1]!);
		expect(op.args).toEqual([css]);
		expect(op.function).not.toContain("alert");
		expect(op.function).toContain("omp-theme");
	});
});

describe("ternAppearance", () => {
	test("reads the appearance Tern is showing, which resolves a System theme", async () => {
		expect((await withTern({ theme: "light" }, tern => ternAppearance(tern))).value).toBe("light");
		expect((await withTern({ theme: "dark" }, tern => ternAppearance(tern))).value).toBe("dark");
	});

	test("anything else, or a Tern that cannot answer, leaves the appearance unknown", async () => {
		expect((await withTern({ theme: "sepia" }, tern => ternAppearance(tern))).value).toBeUndefined();
		expect(await ternAppearance({ bin: "/nonexistent/tern", pane: 1 })).toBeUndefined();
	});
});
