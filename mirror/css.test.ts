import { describe, expect, test } from "bun:test";
import { baseSheet, compileInline, compileRules, expandAnimation, parseCss, strayEscape, transformSelector } from "./css";
import { emptyReport } from "./session";

const opts = { dark: false, widthPx: 720 };

describe("compileRules", () => {
	test("maps the page's own theme variables onto the terminal's and keeps the palette series", () => {
		const { css } = compileRules([], { ...opts, tokens: { c1: "#112233" } });
		expect(css).toContain("--fg:var(--t1)");
		expect(css).toContain("--font-ui:var(--sans)");
		expect(css).toContain("--c1:#112233");
		expect(baseSheet({ ...opts, dark: true })).toContain("--c2:#f0883e");
	});

	test("selectors: html/body become the page body, #id and attributes get the data-a- hook, unknown tags a data-tag hook", () => {
		expect(transformSelector("body")).toBe(".pg-body");
		expect(transformSelector("#out")).toBe('[data-a-id="out"][data-a-id="out"]');
		expect(transformSelector("a:hover")).toBe(':where([data-tag="a"]):hover');
		expect(transformSelector("[type=range]")).toBe('[data-a-type=range]');
		expect(() => transformSelector("a ~ b")).toThrow();
	});

	test("drops what the terminal cannot read: url(), position:fixed, escapes, and counts it", () => {
		const rules = parseCss(`.a{color:red;background:url(x.png);position:fixed;aspect-ratio:1} .md\\:flex{display:flex} .b{--x:url(y);padding:1rem;font-family:serif}`);
		const { css, report } = compileRules(rules, opts);
		expect(css).not.toContain("url(");
		expect(css).not.toContain("\\");
		expect(css).toContain(".a{color:red}");
		expect(css).toContain("padding:16px");
		expect(css).not.toContain("font-family");
		expect(report.droppedProps["position:fixed"]).toBe(1);
		expect(report.droppedProps["aspect-ratio"]).toBe(1);
		expect(Object.keys(report.droppedSelectors)).toHaveLength(1);
	});

	test("@media is decided statically for the card width and colour scheme", () => {
		const rules = parseCss(`@media (max-width:600px){.a{color:red}} @media (min-width:600px){.a{color:blue}} @media (prefers-color-scheme:dark){.a{color:white}}`);
		const light = compileRules(rules, opts).css;
		expect(light).toContain("color:blue");
		expect(light).not.toContain("color:red");
		expect(light).not.toContain("color:white");
		expect(compileRules(rules, { ...opts, dark: true }).css).toContain("color:white");
	});

	test("inline style rules hook on data-oi and outrank author rules", () => {
		expect(compileInline("n5", "width:40px", opts, emptyReport())).toBe('[data-oi="n5"][data-oi="n5"]{width:40px!important}');
	});
});

describe("helpers", () => {
	test("strayEscape ignores backslashes inside strings", () => {
		expect(strayEscape('content:"\\201C"')).toBe(false);
		expect(strayEscape("a\\:b")).toBe(true);
	});

	test("animation shorthand becomes longhands", () => {
		expect(expandAnimation("spin 1s linear infinite")).toBe("animation-name:spin;animation-duration:1s;animation-timing-function:linear;animation-iteration-count:infinite");
	});
});
