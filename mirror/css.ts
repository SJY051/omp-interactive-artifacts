// Compiles the page's own stylesheet text into one scoped sheet for the terminal's tool view. The terminal supports
// a CSS subset (https://docs.stencil.so/tern/styles/css.md); whatever cannot be expressed is dropped and counted in
// the report, which the surface preflight reads.

import { DARK, LIGHT } from "../page";

export type Rule =
	| { t: "s"; sel: string; css: string }
	| { t: "m"; cond: string; rules: Rule[] }
	| { t: "k"; name: string; frames: { key: string; css: string }[] }
	| { t: "g"; rules: Rule[] };

export interface CompileOpts {
	dark: boolean;
	widthPx: number;
	/** The OMP palette's `c1..c6` (concrete colors); the light/dark defaults of page.ts when absent. */
	tokens?: Readonly<Record<string, string>>;
}

export interface Report {
	droppedProps: Record<string, number>;
	droppedSelectors: Record<string, number>;
	droppedAtRules: Record<string, number>;
	converted: Record<string, number>;
}

const bump = (o: Record<string, number>, k: string) => {
	o[k] = (o[k] ?? 0) + 1;
};

const PROPS = new Set(
	`display position top right bottom left z-index box-sizing width height min-width min-height max-width max-height
margin margin-top margin-right margin-bottom margin-left padding padding-top padding-right padding-bottom padding-left
overflow overflow-x overflow-y visibility zoom inset flex-direction flex-wrap flex-grow flex-shrink flex-basis order
align-items align-self align-content justify-content justify-items justify-self row-gap column-gap gap
grid-template-columns grid-template-rows grid-column grid-row grid-template flex flex-flow place-items place-content grid-gap grid-row-gap grid-column-gap
color color-scheme opacity background background-color background-image background-position background-size background-repeat background-origin background-clip object-fit image-rendering
border border-width border-style border-color border-radius border-top border-right border-bottom border-left
border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style
border-top-color border-right-color border-bottom-color border-left-color border-top-left-radius border-top-right-radius border-bottom-right-radius border-bottom-left-radius border-collapse
outline outline-width outline-style outline-color outline-offset box-shadow transform transform-origin translate rotate scale perspective perspective-origin filter backdrop-filter mix-blend-mode isolation clip-path will-change
mask mask-image mask-position mask-size mask-repeat mask-origin mask-clip mask-composite mask-mode
font font-family font-size font-weight font-style line-height letter-spacing text-align text-decoration text-decoration-line text-decoration-style text-decoration-color text-overflow line-clamp
white-space word-break overflow-wrap word-wrap text-wrap text-transform font-variant-numeric tab-size vertical-align list-style list-style-type list-style-position list-style-image content caret-color
cursor pointer-events user-select touch-action scrollbar-width scrollbar-color overscroll-behavior scroll-behavior overflow-anchor scroll-padding scroll-snap-type scroll-snap-align scroll-snap-stop
transition transition-property transition-duration transition-timing-function transition-delay animation animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state
fill fill-opacity stroke stroke-width stroke-linecap stroke-linejoin stroke-miterlimit stroke-dasharray stroke-dashoffset stroke-opacity stop-color stop-opacity rx ry`
		.split(/\s+/)
		.filter(Boolean),
);
const WEBKIT_OK = new Set(["-webkit-font-smoothing", "-webkit-line-clamp", "-webkit-box-orient", "-webkit-backdrop-filter", "-webkit-user-select", "-webkit-transform", "-webkit-filter", "-webkit-mask", "-webkit-background-clip"]);

/** True when `s` has a backslash outside a quoted string (an escape sequence the terminal's reader may not read the way Chrome did). */
export function strayEscape(s: string): boolean {
	let quote = "";
	for (let i = 0; i < s.length; i++) {
		const c = s[i]!;
		if (quote) {
			if (c === "\\") i++;
			else if (c === quote) quote = "";
		} else if (c === '"' || c === "'") quote = c;
		else if (c === "\\") return true;
	}
	return false;
}

// ---- declarations ----------------------------------------------------------------------------------------------------
function splitTop(s: string, sep: string): string[] {
	const out: string[] = [];
	let depth = 0, q = "", cur = "";
	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (q) {
			cur += c;
			if (c === "\\") cur += s[++i] ?? "";
			else if (c === q) q = "";
			continue;
		}
		if (c === '"' || c === "'") ((q = c), (cur += c));
		else if (c === "(" || c === "[") (depth++, (cur += c));
		else if (c === ")" || c === "]") (depth--, (cur += c));
		else if (c === sep && depth === 0) (out.push(cur), (cur = ""));
		else cur += c;
	}
	if (cur.trim()) out.push(cur);
	return out;
}

const LEN_TO_PX: Record<string, number> = { rem: 16, pt: 96 / 72, pc: 16, in: 96, cm: 96 / 2.54, mm: 96 / 25.4, Q: 96 / 101.6 };

/** Converts or rejects units Tern cannot parse. Returns null when the value cannot be expressed. */
function fixValue(prop: string, v: string, rep: Report): string | null {
	if (/url\(/i.test(v)) return null;
	if (/\b(?:lab|lch|hwb|color)\(|conic-gradient\(|image-set\(|fit-content|repeat\(\s*auto-(?:fill|fit)|\benv\(/i.test(v)) return null;
	let bad = false;
	const out = v.replace(/(-?\d*\.?\d+(?:e[-+]?\d+)?)(rem|pt|pc|in|cm|mm|Q|ch|ex|lh|rlh|vmin|vmax|dvh|dvw|svh|svw|lvh|lvw|cap|ic)\b/gi, (_m, n: string, u: string) => {
		const unit = u === "Q" ? "Q" : u.toLowerCase();
		if (unit in LEN_TO_PX) {
			bump(rep.converted, `${unit}->px`);
			return `${+(parseFloat(n) * LEN_TO_PX[unit]).toFixed(3)}px`;
		}
		if (unit === "ch") {
			bump(rep.converted, "ch->em");
			return `${+(parseFloat(n) * 0.55).toFixed(3)}em`;
		}
		bad = true;
		return _m;
	});
	return bad ? null : out;
}

export function compileDecls(css: string, o: CompileOpts, rep: Report, important = false): string {
	const out: string[] = [];
	for (const d of splitTop(css, ";")) {
		const i = d.indexOf(":");
		if (i < 0) continue;
		const name = d.slice(0, i).trim().toLowerCase();
		let value = d.slice(i + 1).trim();
		if (!name || !value) continue;
		let imp = false;
		const m = /\s*!important\s*$/i.exec(value);
		if (m) ((imp = true), (value = value.slice(0, m.index)));
		// The terminal's sheet reader rejects the whole sheet over an escape outside a string or a url(): drop the declaration instead.
		if (strayEscape(value)) {
			bump(rep.droppedProps, `${name}: escape`);
			continue;
		}
		if (name.startsWith("--")) {
			const fv = fixValue(name, value, rep);
			if (fv === null) {
				bump(rep.droppedProps, `${name}: ${value.slice(0, 40)}`);
				continue;
			}
			out.push(`${name}:${fv}${imp || important ? "!important" : ""}`);
			continue;
		}
		if (!PROPS.has(name) && !WEBKIT_OK.has(name)) {
			bump(rep.droppedProps, name);
			continue;
		}
		if (name === "font-family") {
			bump(rep.converted, "font-family stripped (terminal face)");
			continue;
		}
		if (name === "position" && /fixed/.test(value)) {
			bump(rep.droppedProps, "position:fixed");
			continue;
		}
		if (name === "display" && /^(ruby|math|-webkit-flex)/.test(value)) {
			bump(rep.droppedProps, `display:${value}`);
			continue;
		}
		if (name === "animation") {
			const ex = expandAnimation(value);
			if (ex) {
				for (const decl of ex.split(";")) out.push(`${decl}${imp || important ? "!important" : ""}`);
				bump(rep.converted, "animation shorthand -> longhands");
				continue;
			}
		}
		const fv = fixValue(name, value, rep);
		if (fv === null) {
			bump(rep.droppedProps, `${name}: ${value.slice(0, 40)}`);
			continue;
		}
		out.push(`${name}:${fv}${imp || important ? "!important" : ""}`);
	}
	return out.join(";");
}

// ---- selectors -------------------------------------------------------------------------------------------------------
const NATIVE_TAGS = new Set("div span p section header footer nav aside main article figure blockquote ul ol li dl dt dd h1 h2 h3 h4 pre code kbd strong b em i del mark hr table thead tbody tr th td label button".split(" "));
const SVG_TAGS = new Set("svg g defs linearGradient stop path circle line rect mask text".split(" "));
const PSEUDO_OK = new Set("hover active focus focus-visible focus-within checked disabled first-child last-child only-child first-of-type last-of-type empty root".split(" "));
const PSEUDO_FN = new Set(["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"]);
const PSEUDO_EL_OK = new Set(["before", "after", "marker", "placeholder", "selection"]);

class Drop extends Error {}

function readIdent(s: string, i: number): [string, number] {
	let j = i;
	while (j < s.length && /[-\w\u00A0-\uFFFF\\]/.test(s[j])) j++;
	return [s.slice(i, j), j];
}
function readBalanced(s: string, i: number, open: string, close: string): [string, number] {
	let depth = 0, j = i, q = "";
	for (; j < s.length; j++) {
		const c = s[j];
		if (q) {
			if (c === "\\") j++;
			else if (c === q) q = "";
			continue;
		}
		if (c === '"' || c === "'") q = c;
		else if (c === open) depth++;
		else if (c === close && --depth === 0) return [s.slice(i + 1, j), j + 1];
	}
	throw new Drop("unbalanced selector");
}

function attrSelector(inner: string): string {
	const m = /^\s*([^\s~|^$*=\]]+)\s*(?:([~|^$*]?=)\s*("[^"]*"|'[^']*'|[^\s\]]+)\s*([is])?)?\s*$/.exec(inner);
	if (!m) throw new Drop("attribute selector");
	let name = m[1].toLowerCase();
	if (name === "hidden") return ".sf-hidden";
	if (name !== "class" && !name.startsWith("aria-") && name !== "role" && name !== "colspan" && name !== "rowspan") name = `data-a-${name}`;
	return m[2] ? `[${name}${m[2]}${m[3]}${m[4] ? " " + m[4] : ""}]` : `[${name}]`;
}

function compound(s: string, i: number, stop: (c: string) => boolean): [string, number] {
	let out = "";
	while (i < s.length && !stop(s[i])) {
		const c = s[i];
		if (c === "*") (out += "*", i++);
		else if (c === ".") {
			const [id, j] = readIdent(s, i + 1);
			out += "." + id;
			i = j;
		} else if (c === "#") {
			const [id, j] = readIdent(s, i + 1);
			const a = `[data-a-id="${id}"]`;
			out += a + a;
			i = j;
		} else if (c === "[") {
			const [inner, j] = readBalanced(s, i, "[", "]");
			out += attrSelector(inner);
			i = j;
		} else if (c === ":") {
			const dbl = s[i + 1] === ":";
			const [name0, j] = readIdent(s, i + (dbl ? 2 : 1));
			const name = name0.toLowerCase();
			i = j;
			if (dbl || name === "before" || name === "after") {
				if (!PSEUDO_EL_OK.has(name)) throw new Drop(`::${name}`);
				out += "::" + name;
			} else if (s[i] === "(") {
				const [arg, k] = readBalanced(s, i, "(", ")");
				i = k;
				if (PSEUDO_FN.has(name)) out += `:${name}(${arg})`;
				else if (name === "not" || name === "is" || name === "where") {
					const parts = splitTop(arg, ",").map((p) => {
						const [c2, e2] = compound(p.trim(), 0, () => false);
						if (e2 < p.trim().length || /[\s>+~]/.test(p.trim().replace(/\([^)]*\)|\[[^\]]*\]/g, ""))) throw new Drop(`:${name}() with combinator`);
						return c2;
					});
					out += `:${name}(${parts.join(",")})`;
				} else throw new Drop(`:${name}()`);
			} else if (name === "root") out += ".pg-body";
			else if (name === "enabled") out += ":not(:disabled)";
			else if (PSEUDO_OK.has(name)) out += ":" + name;
			else throw new Drop(`:${name}`);
		} else if (/[-\w\\\u00A0-\uFFFF]/.test(c)) {
			const [id, j] = readIdent(s, i);
			const t = id.toLowerCase();
			i = j;
			if (t === "html" || t === "body") out += ".pg-body";
			else if (NATIVE_TAGS.has(t) || SVG_TAGS.has(id)) out += t === id ? id : t;
			else out += `:where([data-tag="${t}"])`;
		} else if (c === "&") throw new Drop("nesting &");
		else throw new Drop(`char ${c}`);
	}
	return [out, i];
}

/** Rewrites one selector list; throws Drop when a part cannot be expressed. */
export function transformSelector(list: string): string {
	return splitTop(list, ",")
		.map((sel) => {
			sel = sel.trim();
			let out = "", i = 0;
			while (i < sel.length) {
				const c = sel[i];
				if (/\s/.test(c)) {
					while (i < sel.length && /\s/.test(sel[i])) i++;
					if (i < sel.length && !/[>+~]/.test(sel[i])) out += " ";
					continue;
				}
				if (c === ">" || c === "+") {
					out += ` ${c} `;
					i++;
					continue;
				}
				if (c === "~") throw new Drop("~ combinator");
				const [cmp, j] = compound(sel, i, (x) => /[\s>+~]/.test(x));
				if (j === i) throw new Drop("empty compound");
				out += cmp;
				i = j;
			}
			return out.trim();
		})
		.join(",");
}

// ---- media -----------------------------------------------------------------------------------------------------------
function evalMedia(cond: string, o: CompileOpts): boolean | null {
	let ok = true;
	for (const part of cond.split(/,/)) {
		let res = true;
		for (const tok of part.split(/\band\b/i)) {
			const t = tok.trim().toLowerCase();
			if (!t || t === "screen" || t === "all" || t === "only screen") continue;
			let m: RegExpExecArray | null;
			if ((m = /^\(\s*min-width\s*:\s*([\d.]+)px\s*\)$/.exec(t))) res &&= o.widthPx >= +m[1];
			else if ((m = /^\(\s*max-width\s*:\s*([\d.]+)px\s*\)$/.exec(t))) res &&= o.widthPx <= +m[1];
			else if ((m = /^\(\s*prefers-color-scheme\s*:\s*(dark|light)\s*\)$/.exec(t))) res &&= (m[1] === "dark") === o.dark;
			else if (/^\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)$/.test(t)) res &&= false;
			else return null;
		}
		ok = res;
		if (ok) break;
	}
	return ok;
}

// ---- sheet -----------------------------------------------------------------------------------------------------------
/**
 * The sheet every card starts with: the page's own theme variables (--fg, --accent, --font-ui, ... as page.ts defines them)
 * mapped onto the terminal's, plus the looks of the controls that have no terminal element of their own.
 * `--c1..--c6` have no terminal counterpart, so they carry the OMP palette's concrete colors.
 */
export function baseSheet(o: CompileOpts): string {
	const tokens = o.dark ? DARK : LIGHT;
	const series = [1, 2, 3, 4, 5, 6].map(n => `--c${n}:${o.tokens?.[`c${n}`] ?? tokens[`c${n}` as keyof typeof tokens]}`).join(";");
	return `
.pg-root{--fg:var(--t1);--muted:var(--t3);--border:var(--l3);--surface:var(--raise);--success:var(--ok);--warning:var(--warn);--error:var(--bad);--bg:var(--card);--font-ui:var(--sans);--font-mono:var(--mono);${series}}
.pg-body{display:block;margin:0;padding:0}
.pg-br{white-space:pre}
.pg-select{display:inline-flex;flex-wrap:wrap;gap:4px;vertical-align:middle}
.pg-opt{padding:0 8px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--l3)}
.pg-sel{background:var(--accent-fill);color:#fff;box-shadow:none}
.pg-rng-b{padding:0 8px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--l3)}
.pg-rng{color:var(--accent);padding:0 6px}
.pg-ro{color:var(--t3)}
[data-tag="input"][data-a-type="range"],.pg-select{display:inline-flex;align-items:center;gap:4px}
`.trim();
}

export function compileRules(rules: Rule[], o: CompileOpts): { css: string; report: Report } {
	const rep: Report = { droppedProps: {}, droppedSelectors: {}, droppedAtRules: {}, converted: {} };
	const out: string[] = [baseSheet(o)];
	const walk = (rs: Rule[]) => {
		for (const r of rs) {
			if (r.t === "s") {
				let sel: string;
				try {
					sel = transformSelector(r.sel);
				} catch (e) {
					bump(rep.droppedSelectors, e instanceof Drop ? e.message : "selector");
					continue;
				}
				if (strayEscape(sel)) {
					bump(rep.droppedSelectors, "escape in selector");
					continue;
				}
				const d = compileDecls(r.css, o, rep);
				if (d) out.push(`${sel}{${d}}`);
			} else if (r.t === "m") {
				const v = evalMedia(r.cond, o);
				if (v === null) bump(rep.droppedAtRules, `@media ${r.cond.slice(0, 40)}`);
				else if (v) walk(r.rules);
			} else if (r.t === "k") {
				const fr = r.frames.map((f) => `${f.key}{${compileDecls(f.css, o, rep)}}`).join("");
				out.push(`@keyframes ${r.name}{${fr}}`);
			} else if (r.t === "g") walk(r.rules);
		}
	};
	walk(rules);
	return { css: out.join("\n"), report: rep };
}

/** Per-node inline `style=""` rule; !important because inline style outranks every author rule. The node wears `data-oi` (mirror-page.js). */
export function compileInline(id: string, css: string, o: CompileOpts, rep: Report): string {
	const d = compileDecls(css, o, rep, true);
	const sel = `[data-oi="${id}"][data-oi="${id}"]`;
	return d ? `${sel}{${d}}` : "";
}

// ---- raw CSS parsing -------------------------------------------------------------------------------------------------
// Chrome's CSSOM `cssText` cannot be trusted: a shorthand with var() that a later longhand overrides serializes as empty
// longhands, and `animation` comes back in a canonical order Tern's parser rejects. So the author's own text is parsed here.

export interface SheetDump {
	text: string;
	/** cssRules.length of the live sheet: when it differs from what the text parses to, rules were added by script. */
	n: number;
	rules: Rule[];
}

function blockEnd(s: string, open: number): number {
	let depth = 0, q = "";
	for (let i = open; i < s.length; i++) {
		const c = s[i];
		if (q) {
			if (c === "\\") i++;
			else if (c === q) q = "";
		} else if (c === '"' || c === "'") q = c;
		else if (c === "{") depth++;
		else if (c === "}" && --depth === 0) return i;
	}
	return s.length;
}

export function parseCss(src: string): Rule[] {
	const s = src.replace(/\/\*[\s\S]*?\*\//g, "");
	const out: Rule[] = [];
	let i = 0;
	while (i < s.length) {
		while (i < s.length && /\s/.test(s[i])) i++;
		if (i >= s.length) break;
		const semi = s.indexOf(";", i);
		const open = s.indexOf("{", i);
		if (s[i] === "@" && semi >= 0 && (open < 0 || semi < open)) {
			i = semi + 1; // @import, @charset
			continue;
		}
		if (open < 0) break;
		const prelude = s.slice(i, open).trim();
		const end = blockEnd(s, open);
		const body = s.slice(open + 1, end);
		i = end + 1;
		if (prelude.startsWith("@")) {
			const m = /^@([\w-]+)\s*(.*)$/s.exec(prelude);
			const name = m?.[1].toLowerCase() ?? "";
			if (name === "media") out.push({ t: "m", cond: m?.[2].trim() ?? "", rules: parseCss(body) });
			else if (name === "supports" || name === "layer") out.push({ t: "g", rules: parseCss(body) });
			else if (name.endsWith("keyframes")) {
				const frames = (parseCss(body).filter((r) => r.t === "s") as { sel: string; css: string }[]).map((r) => ({ key: r.sel, css: r.css }));
				out.push({ t: "k", name: m?.[2].trim() ?? "", frames });
			}
			continue; // @font-face, @page, ...
		}
		const nested = body.indexOf("{");
		out.push({ t: "s", sel: prelude, css: nested >= 0 ? body.slice(0, body.lastIndexOf(";", nested) + 1) : body });
	}
	return out;
}

/** Top-level rule count the way CSSOM counts it (at-rules without a block count too, but @import is rare). */
export function pickRules(sheet: SheetDump): { rules: Rule[]; source: "text" | "cssom" } {
	const parsed = parseCss(sheet.text);
	return parsed.length === sheet.n ? { rules: parsed, source: "text" } : { rules: sheet.rules, source: "cssom" };
}

/** `animation: <name> ...` and Chrome's canonical `... <name>` both reach Tern as longhands it can read. */
export function expandAnimation(value: string): string | null {
	const items = splitTop(value, ",");
	if (items.length !== 1) return null;
	const KEYS = new Set(["infinite", "normal", "reverse", "alternate", "alternate-reverse", "none", "forwards", "backwards", "both", "running", "paused", "linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]);
	const toks = splitTop(items[0].trim().replace(/\s+/g, " "), " ");
	const times: string[] = [];
	let name = "", timing = "", iter = "", dir = "", fill = "", state = "";
	for (const t of toks) {
		if (/^-?[\d.]+m?s$/.test(t)) times.push(t);
		else if (/^(cubic-bezier|steps|spring)\(/.test(t) || t === "linear" || t.startsWith("ease") || t.startsWith("step-")) timing = t;
		else if (t === "infinite" || /^[\d.]+$/.test(t)) iter = t;
		else if (["normal", "reverse", "alternate", "alternate-reverse"].includes(t)) dir = t;
		else if (["forwards", "backwards", "both"].includes(t)) fill = t;
		else if (t === "running" || t === "paused") state = t;
		else if (t === "none") name ||= "none";
		else if (!KEYS.has(t)) name = t;
	}
	const d = [`animation-name:${name || "none"}`, `animation-duration:${times[0] ?? "0s"}`];
	if (timing) d.push(`animation-timing-function:${timing}`);
	if (times[1]) d.push(`animation-delay:${times[1]}`);
	if (iter) d.push(`animation-iteration-count:${iter}`);
	if (dir) d.push(`animation-direction:${dir}`);
	if (fill) d.push(`animation-fill-mode:${fill}`);
	if (state) d.push(`animation-play-state:${state}`);
	return d.join(";");
}
