import { describe, expect, test } from "bun:test";
import { MirrorModel } from "./model";
import { PREFLIGHT_LIMITS, runtimeReasons, staticReasons } from "./preflight";
import { emptyReport } from "./session";
import { chooseSurface, type OpenedPage, type Probed } from "./surface";

function probed(over: Partial<Probed> & { nodes?: number } = {}): Probed {
	const model = new MirrorModel();
	const kids = Array.from({ length: over.nodes ?? 3 }, (_, i) => ({ id: `n${i}`, k: "el", p: { tag: "div" } }));
	model.reset({ id: "pg", k: "el", p: { tag: "div" }, c: kids });
	return { ready: Promise.resolve(), model, stats: { nodes: model.size, canvases: [], media: 0 }, report: emptyReport(), sheet: ".a{}", ...over };
}

function opener(session: Probed): { open: () => Promise<OpenedPage>; discarded: () => boolean } {
	let discarded = false;
	return {
		open: async () => ({ session, discard: async () => void (discarded = true) }),
		discarded: () => discarded,
	};
}

const noSleep = async () => undefined;

describe("staticReasons", () => {
	test("flags three.js, WebGL, fixed layers, pointer drag and animation loops", () => {
		expect(staticReasons('<script type="module">import * as THREE from "three"; </script>')).toHaveLength(1);
		expect(staticReasons("canvas.getContext('webgl2')")).toHaveLength(1);
		expect(staticReasons(".bar{position: fixed;top:0}")).toHaveLength(1);
		expect(staticReasons("el.addEventListener('pointermove', f)")).toHaveLength(1);
		expect(staticReasons("function loop(){requestAnimationFrame(loop)}")).toHaveLength(1);
	});

	test("a form with a chart.js canvas passes; a word 'three' is not an import", () => {
		expect(staticReasons('<option value="three">3</option><script type="module">import { Chart } from "chart.js/auto"</script>')).toEqual([]);
	});
});

describe("runtimeReasons", () => {
	test("node, canvas, media and CSS limits", () => {
		expect(runtimeReasons(probed())).toEqual([]);
		expect(runtimeReasons(probed({ nodes: PREFLIGHT_LIMITS.nodes + 1 }))[0]).toContain("elements");
		expect(runtimeReasons(probed({ stats: { nodes: 1, canvases: [{ w: 2000, h: 1000 }], media: 0 } }))[0]).toContain("canvas");
		expect(runtimeReasons(probed({ stats: { nodes: 1, canvases: [], media: 1 } }))[0]).toContain("video");
		const report = emptyReport();
		report.droppedProps.x = PREFLIGHT_LIMITS.droppedCss + 1;
		expect(runtimeReasons(probed({ report }))[0]).toContain("CSS declarations");
	});
});

describe("chooseSurface", () => {
	test("block requests and unavailable capability never start a page", async () => {
		const never = async (): Promise<OpenedPage> => {
			throw new Error("opened");
		};
		expect(await chooseSurface({ requested: "block", html: "<p>", capability: {}, open: never })).toEqual({ surface: "block", why: "requested" });
		const choice = await chooseSurface({ requested: "auto", html: "<p>", capability: { unavailable: "an OMP build with interactive tool views" }, open: never });
		expect(choice).toEqual({ surface: "block", why: "inline needs an OMP build with interactive tool views" });
	});

	test("auto: static reasons decide without starting the engine", async () => {
		const choice = await chooseSurface({ requested: "auto", html: 'import * as THREE from "three"', capability: {}, open: async () => Promise.reject(new Error("opened")) });
		expect(choice.surface).toBe("block");
		expect(choice.why).toContain("three.js");
	});

	test("auto: a measured page that fits stays inline; one that does not is discarded", async () => {
		const fits = opener(probed());
		const inline = await chooseSurface({ requested: "auto", html: "<p>", capability: {}, open: fits.open, sleep: noSleep });
		expect(inline.surface).toBe("inline");
		expect(fits.discarded()).toBe(false);

		const big = opener(probed({ nodes: PREFLIGHT_LIMITS.nodes + 5 }));
		const block = await chooseSurface({ requested: "auto", html: "<p>", capability: {}, open: big.open, sleep: noSleep });
		expect(block.surface).toBe("block");
		expect(block.why).toContain("elements");
		expect(big.discarded()).toBe(true);
	});

	test("inline is forced past the limits and reports them as warnings", async () => {
		const big = opener(probed({ nodes: PREFLIGHT_LIMITS.nodes + 5 }));
		const choice = await chooseSurface({ requested: "inline", html: "position:fixed", capability: {}, open: big.open, sleep: noSleep });
		expect(choice.surface).toBe("inline");
		if (choice.surface === "inline") expect(choice.warnings.length).toBe(2);
		expect(big.discarded()).toBe(false);
	});

	test("an engine that cannot start, or a page that never reports, falls back to the block with the reason", async () => {
		const missing = await chooseSurface({ requested: "auto", html: "<p>", capability: {}, open: async () => Promise.reject(new Error("Chrome for Testing was not found")) });
		expect(missing.why).toContain("Chrome for Testing was not found");
		const silent = opener(probed({ ready: Promise.reject(new Error("closed")) }));
		const choice = await chooseSurface({ requested: "auto", html: "<p>", capability: {}, open: silent.open, sleep: noSleep });
		expect(choice.surface).toBe("block");
		expect(silent.discarded()).toBe(true);
	});
});
