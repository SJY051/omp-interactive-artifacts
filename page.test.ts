import { describe, expect, test } from "bun:test";
import { buildPage, escapeHtml, isFullDocument, themeCss } from "./page";

const MARKER = 'id="omp-base"';

describe("buildPage", () => {
	test("wraps a body fragment in a complete document with the injection in the head", () => {
		const page = buildPage({ title: 'A <b> & "c"', html: "<h1>hi</h1><script>run()</script>" });
		expect(page.startsWith("<!doctype html>")).toBe(true);
		expect(page).toContain("<title>A &lt;b&gt; &amp; &quot;c&quot;</title>");
		expect(page.indexOf('type="importmap"')).toBeLessThan(page.indexOf("<h1>hi</h1>"));
		expect(page.indexOf("window,\"omp\"")).toBeLessThan(page.indexOf("run()"));
		expect(page.indexOf("</head><body><h1>hi</h1>")).toBeGreaterThan(0);
	});

	test("injects after the opening head tag of a full document, ahead of author scripts", () => {
		const doc = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><script>author()</script></head><body>x</body></html>';
		const page = buildPage({ title: "t", html: doc });
		expect(page.indexOf('type="importmap"')).toBeLessThan(page.indexOf("author()"));
		expect(page.indexOf('type="importmap"')).toBeGreaterThan(page.indexOf("<head>"));
		expect(page.match(/<head>/g)).toHaveLength(1);
		expect(page).toContain("<body>x</body>");
	});

	test("creates a head when the document has <html> but no head", () => {
		const page = buildPage({ title: "t", html: "<html><body>x</body></html>" });
		expect(page).toContain("<html><head>");
		expect(page.indexOf(MARKER)).toBeLessThan(page.indexOf("<body>"));
	});

	test("puts the injection right after a bare doctype", () => {
		const page = buildPage({ title: "t", html: "<!doctype html><p>x</p>" });
		expect(page.indexOf(MARKER)).toBeLessThan(page.indexOf("<p>x</p>"));
	});

	test("treats html that merely mentions a doctype later as a fragment", () => {
		expect(isFullDocument("<p>see <!doctype html> docs</p>")).toBe(false);
		expect(isFullDocument("  <!-- c -->\n<!DOCTYPE html>")).toBe(true);
	});

	test("the injected import map cannot be broken out of", () => {
		const page = buildPage({ title: "t", html: "<p>x</p>" });
		const scripts = page.match(/<script[\s\S]*?<\/script>/g)!;
		expect(scripts).toHaveLength(2);
		for (const script of scripts) expect(script.indexOf("</script>")).toBe(script.length - "</script>".length);
	});

	test("maps the bundled libraries to local files only", () => {
		const page = buildPage({ title: "t", html: "x" });
		const map = JSON.parse(/<script type="importmap">([\s\S]*?)<\/script>/.exec(page)![1]!);
		expect(Object.keys(map.imports)).toEqual(["d3", "three", "chart.js/auto", "chart.js", "three/addons/controls/OrbitControls.js"]);
		for (const target of Object.values<string>(map.imports)) expect(target.startsWith("/lib/")).toBe(true);
	});

	test("the theme and the base styles are separate style elements, so a live page can be re-themed", () => {
		const page = buildPage({ title: "t", html: "<p>x</p>" });
		expect(page.indexOf('<style id="omp-theme">')).toBeGreaterThan(0);
		expect(page.indexOf('<style id="omp-theme">')).toBeLessThan(page.indexOf('<style id="omp-base">'));
		const theme = /<style id="omp-theme">([\s\S]*?)<\/style>/.exec(page)![1]!;
		expect(theme).toContain("--font-ui:");
		expect(theme).not.toContain("@layer");
	});
});

describe("themeCss", () => {
	const palette = {
		fg: "#112233",
		muted: "#223344",
		border: "#334455",
		surface: "#445566",
		accent: "#556677",
		success: "#667788",
		warning: "#778899",
		error: "#8899aa",
		c1: "#000001",
		c2: "#000002",
		c3: "#000003",
		c4: "#000004",
		c5: "#000005",
		c6: "#000006",
	};

	test("without a palette only the light/dark fallback is emitted", () => {
		const css = themeCss();
		expect(css).toContain("prefers-color-scheme:dark");
		expect(css).not.toContain("#112233");
	});

	test("a palette overrides the fallback after it and derives color-scheme from the foreground", () => {
		const dark = themeCss({ ...palette, fg: "#e0e0e0" });
		expect(dark.lastIndexOf("color-scheme:dark")).toBeGreaterThan(dark.indexOf("prefers-color-scheme"));
		expect(dark).toContain("--accent:#556677;");
		expect(themeCss(palette).lastIndexOf("color-scheme:light")).toBeGreaterThan(themeCss(palette).indexOf("prefers-color-scheme"));
	});

	test("a palette with a malformed color is ignored whole, so no page gets half a theme", () => {
		expect(themeCss({ ...palette, accent: "red; } body{display:none" })).not.toContain("display:none");
		const missing: Record<string, string> = { ...palette };
		delete missing.c6;
		expect(themeCss(missing)).not.toContain("#556677");
	});
});

test("escapeHtml escapes the characters that matter in text and attributes", () => {
	expect(escapeHtml(`<a href="x">&`)).toBe("&lt;a href=&quot;x&quot;&gt;&amp;");
});
