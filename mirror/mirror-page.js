// Runs in an isolated JS world (Chrome: Page.addScriptToEvaluateOnNewDocument worldName). Shares the DOM with the
// page, shares no JS globals with it. Talks to the host only through the binding `__ompMirror`.
// Turns the live DOM into node ops (shallow-diffed per dirty element) and applies host events to the page.
(() => {
	"use strict";
	if (window.__m) return;
	const post = (m) => {
		try {
			__ompMirror(JSON.stringify(m));
		} catch (e) {}
	};
	// Host-owned adopted sheet: animations are frozen on the Chrome side (the terminal runs the author's @keyframes itself).
	try {
		const frozen = new CSSStyleSheet();
		frozen.replaceSync("*{animation:none!important;transition:none!important}");
		document.adoptedStyleSheets = [...document.adoptedStyleSheets, frozen];
	} catch (e) {}

	// ---- tag mapping -------------------------------------------------------------------------------------------
	const NATIVE = new Set("div span p section header footer nav aside main article figure blockquote ul ol li dl dt dd h1 h2 h3 h4 pre code kbd strong b em i del mark hr table thead tbody tr th td label button".split(" "));
	const INLINE = new Set("a abbr acronym bdi bdo cite data dfn q s samp small sub sup time u var ins output font big tt".split(" "));
	const TAG_MAP = { h5: "h4", h6: "h4", tfoot: "tbody", em: "em" };
	const SKIP = new Set("SCRIPT STYLE LINK META TITLE HEAD TEMPLATE NOSCRIPT BASE COL COLGROUP".split(" "));
	const TEXTY = new Set(["text", "search", "email", "url", "tel", "password", "number", ""]);
	const BTN_TYPES = new Set(["button", "submit", "reset", "image"]);
	const OTHER_TYPES = new Set(["color", "date", "time", "datetime-local", "month", "week", "file"]);
	const CLICK_ROLES = new Set(["button", "tab", "menuitem", "option", "link", "switch", "checkbox", "radio"]);
	const NS_SVG = "http://www.w3.org/2000/svg";

	let seq = 0;
	const ids = new WeakMap();
	const idOf = (n) => {
		let i = ids.get(n);
		if (!i) ids.set(n, (i = (n.nodeType === 3 ? "t" : "n") + (++seq).toString(36)));
		return i;
	};
	const reg = new Map(); // id -> { k, pj, kids }
	const domById = new Map(); // id -> Node
	const styleSent = new Map(); // id -> css text last sent
	const controls = new Set(); // elements whose value/checked can change without a DOM mutation
	const canvases = new Set();
	const sentToks = new Set();
	let ops = [];
	let blobs = {};
	let styleOut = {};
	let focusOut;
	const css = (el) => getComputedStyle(el);

	// ---- cheap string hash for blob tokens ---------------------------------------------------------------------
	const hash = (s) => {
		let h1 = 0xdeadbeef ^ s.length, h2 = 0x41c6ce57;
		for (let i = 0; i < s.length; i++) {
			const c = s.charCodeAt(i);
			h1 = Math.imul(h1 ^ c, 2654435761);
			h2 = Math.imul(h2 ^ c, 1597334677);
		}
		h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
		h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
		return (h2 >>> 0).toString(36) + (h1 >>> 0).toString(36);
	};
	const blob = (mime, text, b64) => {
		const tok = "tok:" + hash(mime + (text ?? b64));
		if (!sentToks.has(tok)) {
			sentToks.add(tok);
			blobs[tok] = b64 !== undefined ? { mime, b64 } : { mime, text };
		}
		return tok;
	};

	// ---- SVG -> Tern-safe SVG ----------------------------------------------------------------------------------
	const SVG_OK = new Set("svg g defs linearGradient stop path circle line rect mask text".split(" "));
	const SVG_ATTRS = new Set("id class viewBox d x y x1 x2 y1 y2 cx cy r rx ry width height fill fill-opacity fill-rule stroke stroke-width stroke-opacity stroke-linecap stroke-linejoin stroke-dasharray stroke-dashoffset opacity transform mask offset stop-color stop-opacity gradientUnits gradientTransform text-anchor font-size font-weight dominant-baseline dx dy preserveAspectRatio".split(" "));
	const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	const num = (v) => (Number.isFinite(v) ? +v.toFixed(2) : 0);
	const localUrl = (v) => v.replace(/url\("?[^")#]*#([^")]+)"?\)/g, "url(#$1)");
	const attrStr = (m) => [...m].map(([k, v]) => ` ${k}="${esc(localUrl(String(v)))}"`).join("");
	function svgOut(el, root) {
		const tag = el.localName;
		if (tag === "polyline" || tag === "polygon") {
			const pts = (el.getAttribute("points") || "").trim().split(/[\s,]+/).map(Number);
			let d = "";
			for (let i = 0; i + 1 < pts.length; i += 2) d += (i ? "L" : "M") + pts[i] + " " + pts[i + 1];
			if (tag === "polygon") d += "Z";
			return svgOutEl(el, root, { d, from: el });
		}
		return svgOutEl(el, root);
	}
	function svgOutEl(el, root, over) {
		const from = over?.from ?? el;
		let tag = el.localName;
		if (over) tag = "path";
		if (tag === "ellipse") tag = "ellipse";
		if (!SVG_OK.has(tag) && tag !== "ellipse") return "";
		const cs = css(from);
		const am = new Map(); // one value per attribute: duplicates make the XML invalid and Tern drops the whole image
		const put = (k, v) => {
			if (v !== null && v !== undefined && v !== "") am.set(k, v);
		};
		if (over) put("d", over.d);
		for (const a of from.attributes) if (SVG_ATTRS.has(a.name) && !(over && a.name === "d")) put(a.name, a.value);
		if (tag !== "g" && tag !== "defs" && tag !== "svg" && tag !== "stop" && tag !== "linearGradient" && tag !== "mask") {
			// Page CSS is not shipped into the image; resolve the cascade here and keep it as presentation attributes.
			put("fill", cs.fill);
			put("stroke", cs.stroke === "none" ? "none" : cs.stroke);
			if (cs.stroke !== "none") put("stroke-width", cs.strokeWidth);
			if (+cs.opacity !== 1) put("opacity", cs.opacity);
			if (tag === "text") {
				put("font-size", cs.fontSize);
				put("font-weight", cs.fontWeight);
				put("text-anchor", cs.textAnchor);
			}
		}
		let inner = "";
		if (tag === "text") inner = esc(from.textContent);
		else for (const c of from.children) inner += svgOut(c, root);
		if (tag === "ellipse") {
			// no ellipse in Tern's SVG subset: draw as a path
			const cx = +from.getAttribute("cx") || 0, cy = +from.getAttribute("cy") || 0, rx = +from.getAttribute("rx") || 0, ry = +from.getAttribute("ry") || 0;
			const d = `M${cx - rx} ${cy}A${rx} ${ry} 0 1 0 ${cx + rx} ${cy}A${rx} ${ry} 0 1 0 ${cx - rx} ${cy}Z`;
			am.delete("cx"); am.delete("cy"); am.delete("rx"); am.delete("ry");
			return `<path d="${d}"${attrStr(am)}/>`;
		}
		return `<${tag}${attrStr(am)}>${inner}</${tag}>`;
	}
	function svgToTern(svg) {
		const box = svg.getBoundingClientRect();
		const w = num(box.width) || +svg.getAttribute("width") || 300;
		const h = num(box.height) || +svg.getAttribute("height") || 150;
		let s = svgOutEl(svg, svg);
		if (!svg.hasAttribute("viewBox")) s = s.replace("<svg", `<svg viewBox="0 0 ${w} ${h}"`);
		s = s.replace("<svg", `<svg xmlns="${NS_SVG}"`);
		return { mime: "image/svg+xml", text: s, w, h };
	}
	function rasterOf(el) {
		try {
			if (el.localName === "canvas") {
				const url = el.toDataURL("image/png");
				return { mime: "image/png", b64: url.slice(url.indexOf(",") + 1), w: el.clientWidth || el.width, h: el.clientHeight || el.height };
			}
			if (el.localName === "img" && el.complete && el.naturalWidth) {
				const c = document.createElement("canvas");
				c.width = el.naturalWidth;
				c.height = el.naturalHeight;
				c.getContext("2d").drawImage(el, 0, 0);
				const url = c.toDataURL("image/png");
				return { mime: "image/png", b64: url.slice(url.indexOf(",") + 1), w: el.clientWidth || el.naturalWidth, h: el.clientHeight || el.naturalHeight };
			}
		} catch (e) {}
		return null;
	}

	// ---- props -------------------------------------------------------------------------------------------------
	function attrsOf(el, tag) {
		const attrs = {};
		if (!NATIVE.has(tag) || tag === "input") attrs["data-tag"] = tag;
		for (const a of el.attributes) {
			const n = a.name;
			if (n === "class" || n === "style" || n.startsWith("on") || n === "value" || n === "checked" || n === "selected" || n === "hidden" || n === "title") continue;
			if (n === "aria-label") continue;
			let v = a.value;
			if (v.length > 120) v = v.slice(0, 120);
			if (n.startsWith("aria-") || n === "role" || n === "colspan" || n === "rowspan") attrs[n] = v;
			else if (/^[a-z0-9_-]+$/.test(n)) attrs["data-a-" + n] = v;
		}
		// The terminal sets its own data-id; a style="" rule needs a hook of ours.
		if (el.getAttribute("style")) attrs["data-oi"] = idOf(el);
		return attrs;
	}
	function isClickable(el, tag, cs) {
		if (tag === "button" || tag === "summary") return true;
		if (tag === "a" && el.hasAttribute("href")) return true;
		if (el.hasAttribute("onclick")) return true;
		const role = el.getAttribute("role");
		if (role && CLICK_ROLES.has(role)) return true;
		if (tag === "label" && el.htmlFor) return true;
		if (cs.cursor === "pointer") {
			const par = el.parentElement;
			if (!par || css(par).cursor !== "pointer") return true;
		}
		return false;
	}
	function classOf(el) {
		const c = el.getAttribute("class");
		if (!c) return undefined;
		const out = c.split(/\s+/).filter((x) => x && x !== "sf" && !x.startsWith("sf-")).join(" ");
		return out || undefined;
	}
	function baseProps(el, tag, mapped) {
		const p = { tag: mapped };
		const cls = classOf(el);
		if (cls) p.class = cls;
		const attrs = attrsOf(el, tag);
		if (Object.keys(attrs).length) p.attrs = attrs;
		if (el.hidden) p.hidden = true;
		const title = el.getAttribute("title");
		if (title) p.title = title.slice(0, 200);
		const al = el.getAttribute("aria-label");
		if (al) p.aria = al.slice(0, 200);
		return p;
	}
	const mappedTag = (tag) => (NATIVE.has(tag) ? tag : tag === "form" ? "form" : TAG_MAP[tag] || (INLINE.has(tag) ? "span" : "div"));
	const barText = (f) => {
		const n = Math.max(0, Math.min(10, Math.round(f * 10)));
		return "█".repeat(n) + "░".repeat(10 - n);
	};

	function wsKeep(parent, n) {
		const pd = css(parent).display;
		if (/flex|grid|table|contents/.test(pd) && !/inline/.test(pd)) return false;
		const inl = (s) => !s || (s.nodeType === 3 ? true : s.nodeType === 1 && /^inline/.test(css(s).display));
		const prev = n.previousSibling, next = n.nextSibling;
		return !!prev && !!next && inl(prev) && inl(next);
	}

	// ---- shallow specs: {id,k,p,kids:[entries]}; entry = {dom} | virtual spec ------------------------------------------------
	function kidsOf(el) {
		let text = null;
		const kids = [];
		for (const n of el.childNodes) {
			if (n.nodeType === 3) {
				if (!n.data) continue;
				if (!n.data.trim() && !wsKeep(el, n)) continue;
				if (kids.length === 0 && text === null) text = n.data;
				else kids.push({ dom: n, id: idOf(n) });
			} else if (n.nodeType === 1 && !SKIP.has(n.tagName) && !(n.localName === "input" && n.type === "hidden")) kids.push({ dom: n, id: idOf(n) });
		}
		return { text, kids };
	}
	const vnode = (id, k, p, kids = []) => ({ id, k, p, kids, virt: true });
	function wrapperWith(el, tag, inner) {
		const p = baseProps(el, tag, "div");
		return { id: idOf(el), k: "el", p, kids: inner };
	}
	function btn(id, text, act, cls) {
		return vnode(id, "el", { tag: "button", class: cls, text, actions: { click: act } });
	}

	// An svg or canvas is re-rasterised at most this often per element, with a trailing update, so typing into a form
	// that redraws a chart does not swap the picture on every key.
	const RASTER_MS = 150;
	const held = new WeakMap();
	let fresh = false; // snapshot(): ignore the cache
	function throttled(el, make) {
		const now = performance.now();
		const h = held.get(el);
		if (!fresh && h && now - h.t < RASTER_MS) {
			if (!h.timer) {
				h.timer = setTimeout(() => {
					h.timer = 0;
					if (el.isConnected) {
						dirty.add(el);
						schedule();
					}
				}, RASTER_MS - (now - h.t) + 5);
			}
			return h.v;
		}
		const v = make();
		if (!fresh) held.set(el, { t: now, v, timer: 0 });
		return v;
	}

	function shallowEl(el) {
		const id = idOf(el);
		const tag = el.localName;
		const cs = css(el);
		if (el instanceof SVGElement) {
			// nested svg is never reached on its own: the outermost svg is a leaf
			const t = throttled(el, () => {
				const s = svgToTern(el);
				return { tok: blob(s.mime, s.text), w: s.w, h: s.h };
			});
			const wrap = wrapperWith(el, "svg", [vnode(id + ".i", "image", { blob: t.tok, w: t.w, h: t.h, alt: el.getAttribute("aria-label") || "chart" })]);
			return wrap;
		}
		if (tag === "canvas" || tag === "img") {
			const r = throttled(el, () => {
				const x = rasterOf(el);
				return x && { tok: blob(x.mime, undefined, x.b64), w: x.w, h: x.h };
			});
			if (tag === "canvas") canvases.add(el);
			const inner = r
				? vnode(id + ".i", "image", { blob: r.tok, w: r.w, h: r.h, alt: el.getAttribute("aria-label") || tag })
				: vnode(id + ".i", "el", { tag: "span", text: "[" + tag + "]" });
			return wrapperWith(el, tag, [inner]);
		}
		if (tag === "br") return { id, k: "el", p: { tag: "span", class: "pg-br", text: "\n", attrs: { "data-tag": "br" } }, kids: [] };
		if (tag === "input") return shallowInput(el, id, cs);
		if (tag === "textarea") {
			controls.add(el);
			const inner = vnode(id + ".f", "editor", { value: el.value, placeholder: el.placeholder || null, readonly: el.readOnly || el.disabled || null, aria: el.getAttribute("aria-label") || el.name || "text", maxLines: Math.max(el.rows || 2, 2) });
			return wrapperWith(el, tag, [inner]);
		}
		if (tag === "select") {
			controls.add(el);
			const opts = [...el.options].map((o, i) => btn(id + ".o" + i, o.label || o.text, "opt=" + i, o.selected ? "pg-opt pg-sel" : "pg-opt"));
			const w = wrapperWith(el, tag, opts);
			w.p.class = [w.p.class, "pg-select"].filter(Boolean).join(" ");
			return w;
		}
		if (tag === "progress" || tag === "meter") {
			const max = +el.max || 1, v = +el.value || 0;
			return wrapperWith(el, tag, [vnode(id + ".v", "el", { tag: "span", class: "pg-ro", text: barText(v / max) })]);
		}
		if (tag === "video" || tag === "audio" || tag === "iframe" || tag === "object" || tag === "embed") return { id, k: "el", p: { tag: "div", text: "[" + tag + " not mirrored]", attrs: { "data-tag": tag } }, kids: [] };
		const mapped = mappedTag(tag);
		const p = baseProps(el, tag, mapped);
		if (isClickable(el, tag, cs) && !(tag === "label" && el.querySelector("input[type=checkbox],input[type=radio]"))) p.actions = { click: "c" };
		if (tag === "a") {
			const h = el.getAttribute("href");
			if (h && /^(https?:|mailto:)/i.test(el.href)) p.href = el.href;
		}
		const { text, kids } = kidsOf(el);
		if (text !== null) p.text = text;
		if (el === document.body) {
			p.class = [p.class, "pg-body"].filter(Boolean).join(" ");
			p.tag = "div";
		}
		return { id, k: "el", p, kids };
	}

	function shallowInput(el, id, cs) {
		const t = (el.type || "text").toLowerCase();
		if (t === "checkbox" || t === "radio") {
			controls.add(el);
			const p = baseProps(el, "input", "input");
			p.type = t;
			if (el.name) p.name = el.name;
			p.value = el.value || "on";
			p.checked = el.checked;
			if (el.disabled) p.disabled = true;
			return { id, k: "el", p, kids: [] };
		}
		if (BTN_TYPES.has(t)) {
			const p = baseProps(el, "input", "button");
			p.text = el.value || (t === "submit" ? "Submit" : t === "reset" ? "Reset" : "Button");
			p.actions = { click: "c" };
			return { id, k: "el", p, kids: [] };
		}
		if (t === "range") {
			controls.add(el);
			const min = +el.min || 0, max = el.max === "" ? 100 : +el.max, v = +el.value;
			const pct = Math.round(((v - min) / (max - min || 1)) * 100);
			const w = wrapperWith(el, "input", [
				btn(id + ".dn", "−", "rng=-1", "pg-rng-b"),
				vnode(id + ".bar", "el", { tag: "span", class: "pg-rng", text: barText(pct / 100) + " " + el.value }),
				btn(id + ".up", "+", "rng=1", "pg-rng-b"),
			]);
			return w;
		}
		if (OTHER_TYPES.has(t)) {
			controls.add(el);
			return wrapperWith(el, "input", [vnode(id + ".v", "el", { tag: "span", class: "pg-ro", text: el.value || "—" })]);
		}
		// text-like: the terminal's own `input` kind inside a wrapper that carries the author's classes/attributes
		if (t === "password") {
			controls.add(el);
			return wrapperWith(el, "input", [vnode(id + ".v", "el", { tag: "span", class: "pg-ro", text: "•".repeat(el.value.length) || "—" })]);
		}
		controls.add(el);
		const inner = vnode(id + ".f", "input", { value: el.value, placeholder: el.placeholder || null, readonly: el.readOnly || el.disabled || null, aria: el.getAttribute("aria-label") || el.name || el.id || "field", type: t });
		return wrapperWith(el, "input", [inner]);
	}

	const shallowText = (n) => ({ id: idOf(n), k: "el", p: { tag: "span", text: n.data }, kids: [] });
	const shallowOf = (entry) => (entry.virt ? entry : entry.dom.nodeType === 3 ? shallowText(entry.dom) : shallowEl(entry.dom));
	/** Whole-tree serialization with no registry side effects: what a from-scratch mirror of the current DOM would send. */
	function pure(entry) {
		const sh = shallowOf(entry);
		const c = sh.kids.map(pure);
		return { id: sh.id, k: sh.k, p: sh.p, ...(c.length ? { c } : {}) };
	}

	// ---- registration and full subtrees ------------------------------------------------------------------------
	function register(sh, entry) {
		reg.set(sh.id, { k: sh.k, tag: sh.p.tag, pj: JSON.stringify(sh.p), kids: sh.kids.map((x) => x.id) });
		if (entry.dom) {
			domById.set(sh.id, entry.dom);
			noteStyle(sh.id, entry.dom);
		}
	}
	function full(entry) {
		const sh = shallowOf(entry);
		const c = sh.kids.map(full);
		register(sh, entry);
		return { id: sh.id, k: sh.k, p: sh.p, ...(c.length ? { c } : {}) };
	}
	function drop(id) {
		const e = reg.get(id);
		if (!e) return;
		for (const k of e.kids) drop(k);
		reg.delete(id);
		const d = domById.get(id);
		if (d) {
			controls.delete(d);
			canvases.delete(d);
		}
		domById.delete(id);
		if (styleSent.has(id)) {
			styleSent.delete(id);
			styleOut[id] = null;
		}
	}
	function noteStyle(id, el) {
		if (el.nodeType !== 1 || el instanceof SVGElement) return;
		const s = el.getAttribute("style") || "";
		if ((styleSent.get(id) ?? "") === s) return;
		if (s) styleSent.set(id, s);
		else styleSent.delete(id);
		styleOut[id] = s || null;
	}

	// ---- diff ----------------------------------------------------------------------------------------------------
	function diffProps(oldJson, np) {
		const op = JSON.parse(oldJson);
		const set = {};
		let any = false;
		for (const k of Object.keys(np)) if (JSON.stringify(np[k]) !== JSON.stringify(op[k])) ((set[k] = np[k]), (any = true));
		for (const k of Object.keys(op)) if (!(k in np)) ((set[k] = null), (any = true));
		return any ? set : null;
	}
	/**
	 * A page that rebuilds a list with innerHTML replaces every DOM node, which would delete and re-add every row (new ids,
	 * new frames, a card that changes height in between). A new child that has the same kind and tag as a vanished one
	 * takes over its id instead, so the terminal sees `set` ops on the nodes it already has.
	 */
	function adoptKids(e, kids) {
		const present = new Set(kids.map((k) => k.id));
		const gone = e.kids.filter((old) => !present.has(old));
		if (!gone.length) return [];
		const used = new Set();
		const adopted = [];
		for (const kid of kids) {
			if (kid.virt || reg.has(kid.id)) continue;
			const sh = shallowOf(kid);
			for (const old of gone) {
				if (used.has(old)) continue;
				const o = reg.get(old);
				if (!o || o.k !== sh.k || o.tag !== sh.p.tag) continue;
				used.add(old);
				const before = domById.get(old);
				if (before) {
					controls.delete(before);
					canvases.delete(before);
				}
				ids.set(kid.dom, old);
				domById.set(old, kid.dom);
				kid.id = old;
				adopted.push(kid);
				break;
			}
		}
		return adopted;
	}
	function syncKids(pid, e, kids) {
		const adopted = adoptKids(e, kids);
		const newIds = kids.map((k) => k.id);
		const newSet = new Set(newIds);
		for (const old of e.kids)
			if (!newSet.has(old)) {
				ops.push(["del", old]);
				drop(old);
			}
		const remote = e.kids.filter((x) => newSet.has(x));
		const have = new Set(remote);
		for (let i = newIds.length - 1; i >= 0; i--) {
			const id = newIds[i];
			const next = i + 1 < newIds.length ? newIds[i + 1] : null;
			if (!have.has(id)) {
				const node = full(kids[i]);
				ops.push(["add", id, pid, next, node]);
				remote.splice(next === null ? remote.length : remote.indexOf(next), 0, id);
				have.add(id);
			} else {
				const idx = remote.indexOf(id);
				const after = idx + 1 < remote.length ? remote[idx + 1] : null;
				if (after !== next) {
					ops.push(["move", id, pid, next]);
					remote.splice(idx, 1);
					remote.splice(next === null ? remote.length : remote.indexOf(next), 0, id);
				}
			}
		}
		e.kids = newIds;
		for (const kid of adopted) syncSh(shallowOf(kid), kid);
	}
	function syncSh(sh, entry) {
		const e = reg.get(sh.id);
		if (!e) return;
		const set = diffProps(e.pj, sh.p);
		if (set) {
			ops.push(["set", sh.id, set]);
			e.pj = JSON.stringify(sh.p);
		}
		e.tag = sh.p.tag;
		if (entry?.dom) noteStyle(sh.id, entry.dom);
		syncKids(sh.id, e, sh.kids);
		// retained text spans and virtual children carry their own props: re-diff them (elements wait for their own dirty entry)
		for (const k of sh.kids) if (k.virt || k.dom?.nodeType === 3) syncSh(shallowOf(k), k);
	}
	function syncDom(el) {
		const id = ids.get(el);
		if (!id || !reg.has(id) || !el.isConnected) return;
		syncSh(shallowEl(el), { dom: el });
	}

	// ---- stylesheets ---------------------------------------------------------------------------------------------
	function dump(rules) {
		const out = [];
		for (const r of rules) {
			if (r.type === 1) out.push({ t: "s", sel: r.selectorText, css: r.style.cssText });
			else if (r.type === 4) out.push({ t: "m", cond: r.conditionText ?? r.media.mediaText, rules: dump(r.cssRules) });
			else if (r.type === 7) out.push({ t: "k", name: r.name, frames: [...r.cssRules].map((f) => ({ key: f.keyText, css: f.style.cssText })) });
			else if (r.type === 12) out.push({ t: "g", rules: dump(r.cssRules) });
		}
		return out;
	}
	let cssSig = "";
	function sheetSig() {
		let s = "";
		for (const sh of document.styleSheets) {
			try {
				s += sh.cssRules.length + ",";
			} catch (e) {}
		}
		return s;
	}
	function dumpSheets() {
		const out = [];
		for (const sh of document.styleSheets) {
			try {
				// The host's own theme and base styles are replaced by the terminal's variables; only the author's CSS is compiled.
				if (sh.ownerNode && (sh.ownerNode.id === "omp-theme" || sh.ownerNode.id === "omp-base")) continue;
				out.push({ text: sh.ownerNode && sh.ownerNode.localName === "style" ? sh.ownerNode.textContent : "", n: sh.cssRules.length, rules: dump(sh.cssRules) });
			} catch (e) {}
		}
		return out;
	}

	// ---- flush ---------------------------------------------------------------------------------------------------
	const dirty = new Set();
	let styleDirty = true;
	function mark(n) {
		if (!n) return;
		if (n.nodeType === 3) n = n.parentNode;
		if (!n || n.nodeType !== 1) return;
		if (n instanceof SVGElement) {
			let s = n.closest("svg");
			while (s.parentElement && s.parentElement.closest("svg")) s = s.parentElement.closest("svg");
			n = s;
		}
		dirty.add(n);
	}
	/** Cheap state of a control that changes without a DOM mutation (typing, a script setting `.value`). */
	const ctlState = (el) => (el instanceof HTMLSelectElement ? el.selectedIndex + "|" + el.value : el.value + "|" + el.checked + "|" + el.disabled + "|" + el.readOnly);
	const ctlSeen = new WeakMap();
	function pollControls() {
		for (const el of controls) {
			if (!el.isConnected) continue;
			const s = ctlState(el);
			if (ctlSeen.get(el) !== s) {
				ctlSeen.set(el, s);
				dirty.add(el);
			}
		}
		for (const el of canvases) if (el.isConnected) dirty.add(el);
	}
	function statsNow() {
		const sizes = [];
		for (const c of canvases) sizes.push({ w: c.width, h: c.height });
		return { nodes: reg.size, canvases: sizes, media: document.querySelectorAll("video,audio,iframe,object,embed").length };
	}
	let scheduled = 0;
	function flush(reason, t0) {
		scheduled = 0;
		try {
			const sig = sheetSig();
			if (sig !== cssSig) {
				cssSig = sig;
				styleDirty = true;
			}
			const list = [...dirty];
			dirty.clear();
			// shallow-first so a parent's add of a new subtree registers its descendants before they are visited
			list.sort((a, b) => (a.compareDocumentPosition(b) & 4 ? -1 : 1));
			for (const el of list) syncDom(el);
			const msg = { t: "sync", reason };
			if (ops.length) msg.ops = ops;
			if (Object.keys(blobs).length) msg.blobs = blobs;
			if (Object.keys(styleOut).length) msg.styles = styleOut;
			if (styleDirty) {
				msg.rules = dumpSheets();
				styleDirty = false;
			}
			if (t0 !== undefined) msg.t0 = t0;
			ops = [];
			blobs = {};
			styleOut = {};
			if (msg.ops || msg.blobs || msg.styles || msg.rules) post(msg);
			else if (t0 !== undefined) post({ t: "noop", t0 });
		} catch (e) {
			post({ t: "err", msg: String(e && e.stack ? e.stack : e) });
		}
	}
	const schedule = () => {
		if (!scheduled) scheduled = setTimeout(() => flush("mutation"), 0);
	};
	const mo = new MutationObserver((recs) => {
		for (const r of recs) {
			if (r.type === "characterData") mark(r.target);
			else mark(r.target);
			if (r.target.localName === "style" || r.target.parentNode?.localName === "style") styleDirty = true;
			for (const a of r.addedNodes) if (a.localName === "style") styleDirty = true;
		}
		schedule();
	});

	// ---- start ---------------------------------------------------------------------------------------------------
	function start() {
		if (location.protocol !== "http:") return; // about:blank and error pages are not mirrored
		const root = document.body;
		ids.set(root, "pg");
		const rootNode = full({ dom: root, id: "pg" });
		cssSig = sheetSig();
		post({ t: "init", root: rootNode, rules: dumpSheets(), styles: styleOut, blobs, title: document.title, stats: statsNow() });
		styleOut = {};
		blobs = {};
		styleDirty = false;
		mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true, characterData: true });
		for (const ev of ["input", "change", "click", "keyup", "submit", "pointerup", "toggle"]) document.addEventListener(ev, () => (pollControls(), schedule()), true);
		setInterval(() => {
			pollControls();
			if (dirty.size || sheetSig() !== cssSig) schedule();
		}, 250);
	}
	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
	else start();

	// ---- host -> page ------------------------------------------------------------------------------------------
	const targetOf = (id) => {
		const base = id.replace(/\.(f|i|o\d+|dn|up|bar|fill|v|b)$/, "");
		return domById.get(base);
	};
	function setValue(el, v) {
		const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
		Object.getOwnPropertyDescriptor(proto, "value").set.call(el, v);
	}
	window.__m = {
		/** The page's own theme style changed (light/dark or fonts): swap it and redraw what resolved it. */
		retheme(cssText) {
			const style = document.getElementById("omp-theme");
			if (style && style.textContent !== cssText) style.textContent = cssText;
			for (const [, el] of domById) if (el instanceof SVGElement || canvases.has(el)) dirty.add(el);
			schedule();
			return !!style;
		},
		/** The host dropped these blobs: send them again if a node needs them later. */
		forget(toks) {
			for (const t of toks) sentToks.delete(t);
			return toks.length;
		},
		get(id) {
			const e = domById.get(id);
			return e ? e.checked : null;
		},
		/** Center of the element for a native click; scrolls it into view first. */
		hit(id) {
			const el = domById.get(id) || targetOf(id);
			if (!el || el.nodeType !== 1) return null;
			el.scrollIntoView({ block: "nearest", inline: "nearest" });
			const r = el.getBoundingClientRect();
			return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height };
		},
		click(id) {
			const el = domById.get(id);
			if (el && el.click) el.click();
			return !!el;
		},
		/** Select option `i` / step a range, dispatching what the browser would. */
		act(id, act, value) {
			const base = domById.get(id) || targetOf(id);
			if (!base) return false;
			if (act === "opt" && base.localName === "select") {
				base.selectedIndex = +value;
				base.dispatchEvent(new Event("input", { bubbles: true }));
				base.dispatchEvent(new Event("change", { bubbles: true }));
			} else if (act === "rng" && base.localName === "input") {
				const before = base.value;
				base.stepUp ? (+value > 0 ? base.stepUp(Math.max(1, Math.round((+base.max - +base.min) / 20 / (+base.step || 1)))) : base.stepDown(Math.max(1, Math.round((+base.max - +base.min) / 20 / (+base.step || 1))))) : 0;
				if (base.value !== before) {
					base.dispatchEvent(new Event("input", { bubbles: true }));
					base.dispatchEvent(new Event("change", { bubbles: true }));
				}
			}
			return true;
		},
		/** Sets a text field the way typing would: value, then input; blur is left to the page. Returns the value the page kept. */
		edit(id, text) {
			const el = domById.get(id.replace(/\.f$/, ""));
			if (!el || !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return null;
			if (document.activeElement !== el) el.focus();
			setValue(el, text);
			el.dispatchEvent(new Event("input", { bubbles: true }));
			return el.value;
		},
		/** The `change` event a browser fires when a field is committed. */
		commit(id) {
			const el = domById.get(id.replace(/\.f$/, ""));
			if (!el) return false;
			el.dispatchEvent(new Event("change", { bubbles: true }));
			return true;
		},
		focus(id) {
			const el = domById.get(id.replace(/\.f$/, ""));
			if (el && el.focus) el.focus();
			return !!el;
		},
		poll(t0) {
			pollControls();
			clearTimeout(scheduled);
			flush("poll", t0);
		},
		/** Node id of the first element matching a CSS selector (diagnostics and the self-test). */
		find(sel) {
			const el = document.querySelector(sel);
			return el ? ids.get(el) || null : null;
		},
		snapshot() {
			fresh = true;
			try {
				return pure({ dom: document.body, id: "pg" });
			} finally {
				fresh = false;
			}
		},
		stats: statsNow,
	};
})();
