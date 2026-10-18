// How Tern looks to the user, as far as it can be discovered: the appearance (dark/light) and the UI and
// code fonts from Tern's settings, and OMP's own palette for that appearance (OMP sends it to Tern, which
// draws its transcript with it). Pure composition plus one small file read; nothing else of Tern's
// settings is read.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { brightness, DARK, DEFAULT_MONO_FONTS, DEFAULT_UI_FONTS, HEX, LIGHT, type Palette } from "./page";

export type Appearance = "dark" | "light";

/** The only keys of Tern's settings this extension reads. */
export interface TernSettings {
	/** `theme` when it names an appearance; "System" (or anything else) leaves it to OMP and the OS. */
	appearance?: Appearance;
	/** `ui_font`: the family list of Tern's interface. */
	uiFont?: string;
	/** `code_font`, else `font_family`: the family list of code and the terminal grid. */
	codeFont?: string;
}

/** One appearance of OMP's theme as it reaches Tern (`getNativeThemePalette()`): token name to `#rrggbb`. */
export type NativeVariant = Readonly<Record<string, string>>;
export interface NativeTheme {
	dark?: NativeVariant;
	light?: NativeVariant;
}

const GENERIC_FAMILIES: Record<string, true> = {
	serif: true,
	"sans-serif": true,
	monospace: true,
	cursive: true,
	fantasy: true,
	"system-ui": true,
	"ui-serif": true,
	"ui-sans-serif": true,
	"ui-monospace": true,
	"ui-rounded": true,
};
const FAMILY_NAME = /^[\p{L}\p{N} ._+-]{1,64}$/u;
const MAX_FAMILIES = 8;
const MAX_SETTING_LENGTH = 400;

export function ternSettingsPath(env: Record<string, string | undefined> = process.env): string {
	return join(env.TERN_CONFIG_DIR || join(homedir(), "Library", "Application Support", "Tern"), "settings.json");
}

function stringSetting(value: unknown): string | undefined {
	return typeof value === "string" && value.trim().length > 0 && value.length <= MAX_SETTING_LENGTH ? value : undefined;
}

/** Picks the theme and font keys out of a parsed settings document; everything else is ignored. */
export function parseTernSettings(json: unknown): TernSettings {
	if (typeof json !== "object" || json === null) return {};
	const source = json as Record<string, unknown>;
	const theme = stringSetting(source.theme)?.trim().toLowerCase();
	const settings: TernSettings = {};
	if (theme === "dark" || theme === "light") settings.appearance = theme;
	const ui = stringSetting(source.ui_font);
	if (ui) settings.uiFont = ui;
	const code = stringSetting(source.code_font) ?? stringSetting(source.font_family);
	if (code) settings.codeFont = code;
	return settings;
}

/** Tern's theme and fonts; `{}` when the file is absent or unreadable (the page then keeps its defaults). */
export function readTernSettings(
	env: Record<string, string | undefined> = process.env,
	read: (path: string) => string = path => readFileSync(path, "utf8"),
): TernSettings {
	try {
		return parseTernSettings(JSON.parse(read(ternSettingsPath(env))));
	} catch {
		return {};
	}
}

/** Splits a CSS-style family list on the commas outside quotes. */
function splitFamilies(list: string): string[] {
	const parts: string[] = [];
	let current = "";
	let quote: string | undefined;
	for (const char of list) {
		if (quote) {
			if (char === quote) quote = undefined;
			current += char;
		} else if (char === '"' || char === "'") {
			quote = char;
			current += char;
		} else if (char === ",") {
			parts.push(current);
			current = "";
		} else current += char;
	}
	parts.push(current);
	return parts;
}

/**
 * A CSS `font-family` value from a settings family list, then `fallback`. Each family is re-quoted; one
 * that is not a plain font name is dropped, so a settings file can never put anything else into the page's CSS.
 */
export function fontStack(list: string | undefined, fallback: string): string {
	const families: string[] = [];
	for (const raw of splitFamilies(list ?? "")) {
		const name = raw.trim().replace(/^(["'])(.*)\1$/, "$2").trim();
		if (Object.hasOwn(GENERIC_FAMILIES, name.toLowerCase())) families.push(name.toLowerCase());
		else if (FAMILY_NAME.test(name)) families.push(`"${name}"`);
		if (families.length >= MAX_FAMILIES) break;
	}
	return families.length > 0 ? `${families.join(",")},${fallback}` : fallback;
}

function validColor(value: string | undefined): string | undefined {
	return value !== undefined && HEX.test(value) ? value : undefined;
}

/** The page tokens a native variant provides, where each is a valid color. */
function variantTokens(variant: NativeVariant): Record<string, string> {
	const mapping: Record<string, string> = {
		fg: "text",
		muted: "muted",
		border: "borderMuted",
		accent: "accent",
		success: "success",
		warning: "warning",
		error: "error",
		surface: "selectedBg",
	};
	const tokens: Record<string, string> = {};
	for (const [token, key] of Object.entries(mapping)) {
		const color = validColor(variant[key]);
		if (color) tokens[token] = color;
	}
	return tokens;
}

function schemeOfTokens(tokens: Palette | undefined): Appearance | undefined {
	const fg = tokens?.fg;
	return fg !== undefined && HEX.test(fg) ? (brightness(fg) > 128 ? "dark" : "light") : undefined;
}

/** The page background: the transcript surface OMP's theme defines (`pageBg`), else its user-message surface. */
function backgroundOf(variant: NativeVariant | undefined): string | undefined {
	return variant ? (validColor(variant.pageBg) ?? validColor(variant.userMessageBg)) : undefined;
}

export interface ComposeInput {
	/** OMP's live palette (`svgFigurePalette()`), when the host has one. */
	live?: Palette;
	/** OMP's theme for Tern, per appearance. */
	native?: NativeTheme;
	settings: TernSettings;
}

/**
 * The palette a page is themed with: OMP's live tokens, unless Tern's own setting names the other
 * appearance than the one OMP resolved. Then OMP's theme for Tern's appearance wins, over the built-in
 * tokens of that appearance where OMP leaves one to the terminal's default. Fonts and the page
 * background ride along as `fontUi`, `fontMono` and `bg`.
 */
export function composePalette({ live, native, settings }: ComposeInput): Palette | undefined {
	const liveScheme = schemeOfTokens(live);
	const wanted = settings.appearance;
	const scheme = wanted ?? liveScheme;
	const variant = scheme ? (native?.[scheme] ?? (native?.dark && !native.light ? native.dark : native?.light && !native.dark ? native.light : undefined)) : undefined;
	const palette: Record<string, string> = {};
	if (live && (!wanted || wanted === liveScheme)) Object.assign(palette, live);
	else if (wanted) Object.assign(palette, wanted === "dark" ? DARK : LIGHT, variant ? variantTokens(variant) : {});
	const bg = backgroundOf(variant);
	if (bg) palette.bg = bg;
	if (settings.uiFont) palette.fontUi = fontStack(settings.uiFont, DEFAULT_UI_FONTS);
	if (settings.codeFont) palette.fontMono = fontStack(settings.codeFont, DEFAULT_MONO_FONTS);
	return Object.keys(palette).length > 0 ? palette : undefined;
}
