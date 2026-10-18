import { describe, expect, test } from "bun:test";
import { composePalette, fontStack, parseTernSettings, readTernSettings, ternSettingsPath } from "./look";
import { DARK, DEFAULT_UI_FONTS, LIGHT, lookOf, themeCss } from "./page";

const TERN = {
	theme: "Dark",
	ui_font: "Wanted Sans Variable, Wanted Sans, Apple SD Gothic Neo",
	code_font: "Maple Tern NF KR, Symbols Nerd Font Mono",
	font_family: "Terminal Face",
	opacity: 65,
	account: { token: "never-read" },
};

const DARK_VARIANT = { text: "#d8dee9", muted: "#e5e9f0", borderMuted: "#434c5e", accent: "#d08770", success: "#a3be8c", warning: "#ebcb8b", error: "#bf616a", selectedBg: "#2e3440", pageBg: "#242933", userMessageBg: "#111111" };
const LIGHT_VARIANT = { text: "#202020", muted: "#606060", borderMuted: "#c0c0c0", accent: "#0066cc", success: "#118811", warning: "#aa7700", error: "#cc2222", selectedBg: "#e8e8e8", pageBg: "#fafafa" };

describe("parseTernSettings", () => {
	test("keeps only the theme and font keys", () => {
		const settings = parseTernSettings(TERN);
		expect(settings).toEqual({
			appearance: "dark",
			uiFont: "Wanted Sans Variable, Wanted Sans, Apple SD Gothic Neo",
			codeFont: "Maple Tern NF KR, Symbols Nerd Font Mono",
		});
	});

	test("code_font wins over font_family, which is the fallback", () => {
		expect(parseTernSettings({ font_family: "Terminal Face" }).codeFont).toBe("Terminal Face");
	});

	test("System and unknown themes leave the appearance to OMP and the OS", () => {
		expect(parseTernSettings({ theme: "System" }).appearance).toBeUndefined();
		expect(parseTernSettings({ theme: "light" }).appearance).toBe("light");
	});

	test("rejects wrong types and absurd lengths", () => {
		expect(parseTernSettings({ ui_font: 5, theme: ["Dark"], code_font: "x".repeat(500) })).toEqual({});
		expect(parseTernSettings(null)).toEqual({});
		expect(parseTernSettings("Dark")).toEqual({});
	});
});

describe("readTernSettings", () => {
	test("falls back to nothing when the file is absent, unreadable or not JSON", () => {
		expect(readTernSettings({ TERN_CONFIG_DIR: "/nonexistent-tern-dir" })).toEqual({});
		expect(readTernSettings({}, () => "{not json")).toEqual({});
		expect(
			readTernSettings({}, () => {
				throw new Error("EACCES");
			}),
		).toEqual({});
	});

	test("reads settings.json from TERN_CONFIG_DIR, else the macOS location", () => {
		let asked = "";
		const settings = readTernSettings({ TERN_CONFIG_DIR: "/tmp/tern-x" }, path => {
			asked = path;
			return JSON.stringify(TERN);
		});
		expect(asked).toBe("/tmp/tern-x/settings.json");
		expect(settings.appearance).toBe("dark");
		expect(ternSettingsPath({})).toEndWith("/Library/Application Support/Tern/settings.json");
	});
});

describe("fontStack", () => {
	test("quotes family names and appends the fallback", () => {
		expect(fontStack("Wanted Sans Variable, Wanted Sans", "sans-serif")).toBe('"Wanted Sans Variable","Wanted Sans",sans-serif');
		expect(fontStack("'Maple Tern NF KR', monospace", "x")).toBe('"Maple Tern NF KR",monospace,x');
	});

	test("drops anything that is not a plain family name, so settings cannot inject CSS", () => {
		const stack = fontStack('Good, a;}body{display:none, "b</style><script>", url(x), Fine Font', "sans-serif");
		expect(stack).toBe('"Good","Fine Font",sans-serif');
		expect(fontStack(undefined, "fallback")).toBe("fallback");
		expect(fontStack("; ; ,,", "fallback")).toBe("fallback");
	});

	test("keeps at most eight families", () => {
		const many = Array.from({ length: 12 }, (_, at) => `F${at}`).join(",");
		expect(fontStack(many, "z").split(",")).toHaveLength(9);
	});
});

describe("composePalette", () => {
	const live = { ...DARK, fg: "#eeeeee" };
	const native = { dark: DARK_VARIANT, light: LIGHT_VARIANT };

	test("with no Tern settings the live OMP palette is used as it is, plus the page background", () => {
		const palette = composePalette({ live, native, settings: {} })!;
		expect(palette.accent).toBe(DARK.accent);
		expect(palette.bg).toBe("#242933");
		expect(palette.fontUi).toBeUndefined();
	});

	test("Tern's fonts ride along as quoted stacks with the system fallback", () => {
		const palette = composePalette({ live, native, settings: parseTernSettings(TERN) })!;
		expect(palette.fontUi).toStartWith('"Wanted Sans Variable","Wanted Sans","Apple SD Gothic Neo",');
		expect(palette.fontUi).toEndWith(DEFAULT_UI_FONTS);
		expect(palette.fontMono).toStartWith('"Maple Tern NF KR","Symbols Nerd Font Mono",');
	});

	test("a Tern appearance that differs from OMP's resolved one switches to OMP's theme for that appearance", () => {
		const palette = composePalette({ live, native, settings: { appearance: "light" } })!;
		expect(palette.fg).toBe(LIGHT_VARIANT.text);
		expect(palette.accent).toBe(LIGHT_VARIANT.accent);
		expect(palette.surface).toBe(LIGHT_VARIANT.selectedBg);
		expect(palette.bg).toBe("#fafafa");
		expect(palette.c1).toBe(LIGHT.c1);
	});

	test("the variant's terminal-default tokens fall back to the built-in colors of that appearance", () => {
		const { text: _text, ...withoutText } = LIGHT_VARIANT;
		const palette = composePalette({ live, native: { light: withoutText }, settings: { appearance: "light" } })!;
		expect(palette.fg).toBe(LIGHT.fg);
		expect(palette.accent).toBe(LIGHT_VARIANT.accent);
	});

	test("a Tern appearance that matches OMP's keeps the live palette (its series colors included)", () => {
		const series = { ...live, c1: "#123456" };
		expect(composePalette({ live: series, native, settings: { appearance: "dark" } })!.c1).toBe("#123456");
	});

	test("without OMP's palette the built-in tokens of Tern's appearance are used; with nothing known there is no palette", () => {
		expect(composePalette({ settings: { appearance: "dark" } })!.fg).toBe(DARK.fg);
		expect(composePalette({ settings: {} })).toBeUndefined();
		expect(composePalette({ settings: { uiFont: "Foo" } })!.fontUi).toStartWith('"Foo",');
	});

	test("a single-variant native theme serves whichever appearance is asked", () => {
		expect(composePalette({ live, native: { dark: DARK_VARIANT }, settings: {} })!.bg).toBe("#242933");
	});

	test("an invalid page background is not carried", () => {
		const palette = composePalette({ live, native: { dark: { ...DARK_VARIANT, pageBg: "red", userMessageBg: "url(x)" } }, settings: {} })!;
		expect(palette.bg).toBeUndefined();
	});
});

describe("the look reaches the page CSS", () => {
	test("fonts and background become custom properties after the tokens", () => {
		const palette = composePalette({ live: { ...DARK }, native: { dark: DARK_VARIANT }, settings: parseTernSettings(TERN) })!;
		const css = themeCss(palette);
		expect(css).toContain('--font-ui:"Wanted Sans Variable","Wanted Sans","Apple SD Gothic Neo",');
		expect(css).toContain("--font-mono:");
		expect(css).toContain("--bg:#242933;");
	});

	test("without a look the defaults are used and no background is set", () => {
		const css = themeCss({ ...DARK });
		expect(css).toContain(`--font-ui:${DEFAULT_UI_FONTS};`);
		expect(css).not.toContain("--bg:");
	});

	test("a hand-made palette cannot put anything but plain fonts and a hex color into the CSS", () => {
		const css = themeCss({ ...DARK, bg: "red;}body{x:y", fontUi: "a;}body{display:none", fontMono: '"ok",</style>' });
		expect(css).not.toContain("display:none");
		expect(css).not.toContain("</style>");
		expect(css).not.toContain("--bg:");
		expect(lookOf({ fontUi: '"Wanted Sans",sans-serif' }).fontUi).toBe('"Wanted Sans",sans-serif');
	});
});
