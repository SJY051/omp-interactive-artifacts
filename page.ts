// Turns the HTML an agent wrote into the document the artifact server serves:
// the import map, theme/base CSS and the `window.omp` bridge are injected ahead
// of any author script. Pure string work; no I/O.

/** Import map entries; every target is a file the server hands out under /lib/. */
export const IMPORT_MAP = {
	imports: {
		d3: "/lib/d3.js",
		three: "/lib/three.js",
		"chart.js/auto": "/lib/chart.js-auto.js",
		"chart.js": "/lib/chart.js-auto.js",
		"three/addons/controls/OrbitControls.js": "/lib/three-orbit-controls.js",
	},
} as const;

/** Largest JSON body the event endpoints accept (bytes). */
export const MAX_EVENT_BYTES = 16 * 1024;

/**
 * Theme tokens, as `svgFigurePalette()` names them: fg, muted, border, accent, success, warning, error, surface, c1…c6.
 * A palette may also carry the look of Tern itself: `bg` (page background, #rrggbb), `fontUi` and `fontMono`
 * (`font-family` lists built by look.ts; {@link lookOf} checks them again before they reach CSS).
 */
export type Palette = Readonly<Record<string, string>>;

const TOKENS = [
	"fg",
	"muted",
	"border",
	"surface",
	"accent",
	"success",
	"warning",
	"error",
	"c1",
	"c2",
	"c3",
	"c4",
	"c5",
	"c6",
] as const;

export const HEX = /^#[0-9a-fA-F]{6}$/;

export const LIGHT: Record<(typeof TOKENS)[number], string> = {
	fg: "#1f2328",
	muted: "#656d76",
	border: "#d0d7de",
	surface: "#f3f4f6",
	accent: "#0969da",
	success: "#1a7f37",
	warning: "#9a6700",
	error: "#cf222e",
	c1: "#0969da",
	c2: "#c2570c",
	c3: "#1a7f37",
	c4: "#8250df",
	c5: "#bf3989",
	c6: "#0f766e",
};

export const DARK: Record<(typeof TOKENS)[number], string> = {
	fg: "#e6edf3",
	muted: "#8b949e",
	border: "#30363d",
	surface: "#21262d",
	accent: "#58a6ff",
	success: "#3fb950",
	warning: "#d29922",
	error: "#f85149",
	c1: "#58a6ff",
	c2: "#f0883e",
	c3: "#3fb950",
	c4: "#bc8cff",
	c5: "#f778ba",
	c6: "#39c5bb",
};

function declarations(tokens: Record<string, string>): string {
	return TOKENS.map(name => `--${name}:${tokens[name]};`).join("");
}

/** Perceived brightness (0–255) of a #rrggbb color. */
export function brightness(hex: string): number {
	const n = Number.parseInt(hex.slice(1), 16);
	return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255));
}

/** The palette as concrete tokens when every one is a #rrggbb color; otherwise undefined (no page gets half a theme). */
function liveTokens(palette?: Palette): Record<string, string> | undefined {
	if (!palette) return undefined;
	const theme: Record<string, string> = {};
	for (const name of TOKENS) {
		const value = palette[name];
		if (typeof value !== "string" || !HEX.test(value)) return undefined;
		theme[name] = value;
	}
	return theme;
}

/** Tokens and scheme for hosts that need concrete values (the MCP Apps host context); dark fallback without a live palette. */
export function resolvePalette(palette?: Palette): { tokens: Record<string, string>; scheme: "light" | "dark"; live: boolean } {
	const live = liveTokens(palette);
	if (!live) return { tokens: DARK, scheme: "dark", live: false };
	return { tokens: live, scheme: brightness(live.fg!) > 128 ? "dark" : "light", live: true };
}

const FONT_ITEM = String.raw`(?:"[\p{L}\p{N} ._+-]{1,64}"|-?[A-Za-z][A-Za-z0-9-]*)`;
const FONT_LIST = new RegExp(`^${FONT_ITEM}(?:,${FONT_ITEM}){0,15}$`, "u");

/** The Tern look a palette carries, each part only when it is well-formed. */
export function lookOf(palette?: Palette): { bg?: string; fontUi?: string; fontMono?: string } {
	const look: { bg?: string; fontUi?: string; fontMono?: string } = {};
	if (palette?.bg !== undefined && HEX.test(palette.bg)) look.bg = palette.bg;
	if (palette?.fontUi !== undefined && FONT_LIST.test(palette.fontUi)) look.fontUi = palette.fontUi;
	if (palette?.fontMono !== undefined && FONT_LIST.test(palette.fontMono)) look.fontMono = palette.fontMono;
	return look;
}

export const DEFAULT_UI_FONTS = '-apple-system,BlinkMacSystemFont,"SF Pro Text","Apple SD Gothic Neo",system-ui,"Helvetica Neue",sans-serif';
export const DEFAULT_MONO_FONTS = 'ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace';

/**
 * CSS custom properties for the figure tokens and the look of Tern. Without a palette the light/dark
 * fallback follows `prefers-color-scheme`; with one, the live OMP theme wins and `color-scheme` is
 * derived from its foreground brightness. `--font-ui` and `--font-mono` always exist (Tern's fonts when
 * the palette carries them), `--bg` only when Tern's page background is known.
 */
export function themeCss(palette?: Palette): string {
	const fallback = `:root{color-scheme:light dark;${declarations(LIGHT)}}@media (prefers-color-scheme:dark){:root{${declarations(DARK)}}}`;
	const look = lookOf(palette);
	const fonts = `:root{--font-ui:${look.fontUi ?? DEFAULT_UI_FONTS};--font-mono:${look.fontMono ?? DEFAULT_MONO_FONTS};${look.bg ? `--bg:${look.bg};` : ""}}`;
	const theme = liveTokens(palette);
	if (!theme) return fallback + fonts;
	const scheme = brightness(theme.fg!) > 128 ? "dark" : "light";
	return `${fallback}:root{color-scheme:${scheme};${declarations(theme)}}${fonts}`;
}

/**
 * Base styles. Everything sits in a cascade layer, so any unlayered author rule
 * overrides it regardless of specificity.
 */
export const BASE_CSS = `@layer omp{
html{background:var(--bg,Canvas);color:var(--fg,CanvasText);font:14px/1.5 var(--font-ui);-webkit-font-smoothing:antialiased}
body{margin:0;padding:16px;background:transparent;color:var(--fg);font:inherit}
code,pre,kbd,samp{font-family:var(--font-mono)}
svg,canvas{max-width:100%}
[data-omp-send]{cursor:pointer}
[data-omp-send]:hover{outline:1px dashed var(--accent);outline-offset:2px}
[data-omp-send][data-omp-state=sending]{opacity:.6}
[data-omp-send][data-omp-state=error]{outline:1px solid var(--error);outline-offset:2px}
}`;

/**
 * `window.omp`, installed before author scripts.
 *   omp.send(text, data?)  -> Promise<{ok, error?}>  starts an agent turn
 *   omp.context(data)      -> Promise<{ok, error?}>  silent update for the next turn (coalesced to the latest value)
 * Also: clicks on [data-omp-send] call omp.send; window errors, unhandled
 * rejections, console.error and CSP violations are reported to the server.
 */
export const BRIDGE_JS = `(function(){
"use strict";
var base=location.pathname.replace(/[^\\/]*$/,"");
var MAX=${MAX_EVENT_BYTES};
var enc=new TextEncoder();
function post(kind,body,keepalive){
  var json;
  try{json=JSON.stringify(body);}catch(e){return Promise.resolve({ok:false,error:"data is not JSON-serializable: "+e.message});}
  if(enc.encode(json).length>MAX)return Promise.resolve({ok:false,error:"payload exceeds "+MAX+" bytes"});
  return fetch(base+kind,{method:"POST",headers:{"content-type":"application/json"},body:json,keepalive:!!keepalive}).then(function(r){
    if(r.ok)return{ok:true};
    return r.json().then(function(b){return{ok:false,error:b&&b.error||("HTTP "+r.status)};},function(){return{ok:false,error:"HTTP "+r.status};});
  },function(e){return{ok:false,error:String(e&&e.message||e)};});
}
function send(text,data,click){
  if(typeof text!=="string"||!text)return Promise.resolve({ok:false,error:"text must be a non-empty string"});
  var body={text:text,gesture:click?"trusted-click":(navigator.userActivation&&navigator.userActivation.isActive?"user-activation":"none")};
  if(data!==undefined)body.data=data;
  return post("send",body);
}
var ctxTimer=null,ctxLatest,ctxWaiters=[];
function context(data){
  ctxLatest=data===undefined?null:data;
  return new Promise(function(resolve){
    ctxWaiters.push(resolve);
    if(ctxTimer)return;
    ctxTimer=setTimeout(function(){
      var waiters=ctxWaiters;ctxWaiters=[];ctxTimer=null;
      post("context",{data:ctxLatest}).then(function(r){waiters.forEach(function(w){w(r);});});
    },250);
  });
}
Object.defineProperty(window,"omp",{value:Object.freeze({send:function(text,data){return send(text,data,false);},context:context}),enumerable:true});
document.addEventListener("click",function(ev){
  var el=ev.target&&ev.target.closest&&ev.target.closest("[data-omp-send]");
  if(!el||el.disabled)return;
  var data,raw=el.getAttribute("data-omp-data");
  if(raw!==null){try{data=JSON.parse(raw);}catch(e){console.error("data-omp-data is not valid JSON: "+raw.slice(0,200));data=raw;}}
  el.setAttribute("data-omp-state","sending");
  send(el.getAttribute("data-omp-send"),data,ev.isTrusted===true).then(function(r){
    if(r.ok){el.removeAttribute("data-omp-state");}
    else{el.setAttribute("data-omp-state","error");el.title=r.error||"not delivered";}
  });
},true);
var reports=0;
function report(r){
  if(reports>=20)return;reports++;
  for(var k in r)if(typeof r[k]==="string")r[k]=r[k].slice(0,1500);
  try{fetch(base+"error",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),keepalive:true}).catch(function(){});}catch(e){}
}
function fmt(v){
  if(v instanceof Error)return v.stack||v.message;
  if(typeof v==="string")return v;
  try{return JSON.stringify(v);}catch(e){return String(v);}
}
window.addEventListener("error",function(ev){
  var t=ev.target;
  if(t&&t!==window&&t.tagName){report({kind:"resource",message:"failed to load <"+t.tagName.toLowerCase()+"> "+(t.src||t.href||"")});return;}
  report({kind:"error",message:ev.message,source:ev.filename,line:ev.lineno,col:ev.colno,stack:ev.error&&ev.error.stack});
},true);
window.addEventListener("unhandledrejection",function(ev){
  var r=ev.reason;
  report({kind:"unhandledrejection",message:(r&&r.message)||fmt(r),stack:r&&r.stack});
});
window.addEventListener("securitypolicyviolation",function(ev){
  report({kind:"csp",message:"blocked by CSP "+ev.violatedDirective+": "+ev.blockedURI});
});
var ce=console.error;
console.error=function(){
  try{report({kind:"console.error",message:Array.prototype.map.call(arguments,fmt).join(" ")});}catch(e){}
  return ce.apply(console,arguments);
};
})();`;

/** Escapes text for an HTML text node or a double-quoted attribute. */
export function escapeHtml(text: string): string {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** True when the agent supplied a whole document rather than a body fragment. */
export function isFullDocument(html: string): boolean {
	return /^\s*(?:<!--[\s\S]*?-->\s*)*(?:<!doctype\s|<html[\s>])/i.test(html);
}

/** `</script` inside a JSON blob or script body would end the element early. */
function scriptSafe(text: string): string {
	return text.replace(/<\/(script)/gi, "<\\/$1");
}

export function injection(palette?: Palette): string {
	const importMap = scriptSafe(JSON.stringify(IMPORT_MAP));
	return (
		`<script type="importmap">${importMap}</script>` +
		`<style id="omp-theme">${themeCss(palette)}</style><style id="omp-base">${BASE_CSS}</style>` +
		`<script>${scriptSafe(BRIDGE_JS)}</script>`
	);
}

export interface PageOptions {
	title: string;
	html: string;
	palette?: Palette;
}

/**
 * Builds the served document. A fragment becomes the body of a fresh document;
 * a full document keeps its own markup and gets the injection at the start of
 * its head (created when missing), ahead of every author script.
 */
export function buildPage({ title, html, palette }: PageOptions): string {
	const inject = injection(palette);
	if (!isFullDocument(html)) {
		return (
			`<!doctype html><html><head><meta charset="utf-8">` +
			`<meta name="viewport" content="width=device-width,initial-scale=1">` +
			`<title>${escapeHtml(title)}</title>${inject}</head><body>${html}</body></html>`
		);
	}
	const head = /<head(?:\s[^>]*)?>/i.exec(html);
	if (head) {
		const at = head.index + head[0].length;
		return html.slice(0, at) + inject + html.slice(at);
	}
	const root = /<html(?:\s[^>]*)?>/i.exec(html);
	if (root) {
		const at = root.index + root[0].length;
		return `${html.slice(0, at)}<head>${inject}</head>${html.slice(at)}`;
	}
	// A doctype with no <html>: the parser creates html/head itself, so the
	// injection goes straight after the doctype and lands in the implied head.
	const doctype = /^\s*(?:<!--[\s\S]*?-->\s*)*<!doctype[^>]*>/i.exec(html)!;
	return `${html.slice(0, doctype[0].length)}${inject}${html.slice(doctype[0].length)}`;
}
