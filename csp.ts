import { isRecord } from "./jsonrpc";

// Content-Security-Policy for MCP Apps views (SEP-1865, "Content Security Policy Enforcement").
// The view's declared `_meta.ui.csp` domains are untrusted input: each entry must be a
// plain origin, so nothing declared can add a directive, a keyword or a wildcard host.

export interface DeclaredCsp {
	connectDomains: string[];
	resourceDomains: string[];
	frameDomains: string[];
	baseUriDomains: string[];
}

export interface SanitizedCsp {
	csp: DeclaredCsp;
	/** Entries that were dropped, with the reason; logged for the audit trail. */
	rejected: Array<{ list: keyof DeclaredCsp; entry: string; reason: string }>;
}

const MAX_ENTRIES = 20;
const HOST = "(?:\\*\\.)?[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*(?::[0-9]{1,5})?";
const WEB_ORIGIN = new RegExp(`^https?://${HOST}$`);
const CONNECT_ORIGIN = new RegExp(`^(?:https?|wss?)://${HOST}$`);

const LISTS: ReadonlyArray<{ key: keyof DeclaredCsp; pattern: RegExp }> = [
	{ key: "connectDomains", pattern: CONNECT_ORIGIN },
	{ key: "resourceDomains", pattern: WEB_ORIGIN },
	{ key: "frameDomains", pattern: WEB_ORIGIN },
	{ key: "baseUriDomains", pattern: WEB_ORIGIN },
];

/** host:port of an origin entry with the default port made explicit, for comparing against our own listeners. */
function hostPort(entry: string): string {
	const url = new URL(entry.replace("*.", ""));
	const port = url.port || (url.protocol === "https:" || url.protocol === "wss:" ? "443" : "80");
	const host = url.hostname === "localhost" ? "127.0.0.1" : url.hostname;
	return `${host}:${port}`;
}

/**
 * Keeps only well-formed origin entries. `reserved` lists origins the host itself
 * listens on (the shell and the sandbox): a view may never be granted those, since
 * the shell origin carries the endpoints that reach the agent.
 */
export function sanitizeCsp(meta: unknown, reserved: readonly string[] = []): SanitizedCsp {
	const csp: DeclaredCsp = { connectDomains: [], resourceDomains: [], frameDomains: [], baseUriDomains: [] };
	const rejected: SanitizedCsp["rejected"] = [];
	const source = isRecord(meta) ? meta : {};
	const reservedHosts = new Set(reserved.map(hostPort));
	for (const { key, pattern } of LISTS) {
		const list = source[key];
		if (list === undefined) continue;
		if (!Array.isArray(list)) {
			rejected.push({ list: key, entry: String(list).slice(0, 80), reason: "not an array" });
			continue;
		}
		for (const raw of list) {
			const entry = typeof raw === "string" ? raw.trim().toLowerCase() : undefined;
			if (entry === undefined || entry.length > 253 || !pattern.test(entry)) {
				rejected.push({ list: key, entry: String(raw).slice(0, 80), reason: "not a plain origin" });
				continue;
			}
			if (entry.includes("*.") && !new URL(entry.replace("*.", "")).hostname.includes(".")) {
				rejected.push({ list: key, entry, reason: "wildcard covers a whole top-level domain" });
				continue;
			}
			if (reservedHosts.has(hostPort(entry))) {
				rejected.push({ list: key, entry, reason: "is the host's own origin" });
				continue;
			}
			if (csp[key].includes(entry)) continue;
			if (csp[key].length >= MAX_ENTRIES) {
				rejected.push({ list: key, entry, reason: `more than ${MAX_ENTRIES} entries` });
				continue;
			}
			csp[key].push(entry);
		}
	}
	return { csp, rejected };
}

/**
 * The header value for the view document. With nothing declared this is the spec default
 * (`connect-src 'none'`, no nested frames, `base-uri 'self'`); declared origins are added
 * to exactly the directives the spec maps them to, and nothing else is loosened.
 * `frame-ancestors` pins embedding to the shell; `form-action 'none'` is an extra restriction.
 */
export function buildAppCsp(declared: DeclaredCsp, shellOrigin: string): string {
	const resources = declared.resourceDomains.join(" ");
	const withResources = (base: string) => (resources ? `${base} ${resources}` : base);
	const directives = [
		"default-src 'none'",
		withResources("script-src 'self' 'unsafe-inline'"),
		withResources("style-src 'self' 'unsafe-inline'"),
		withResources("img-src 'self' data:"),
		withResources("media-src 'self' data:"),
		`connect-src ${declared.connectDomains.length > 0 ? `'self' ${declared.connectDomains.join(" ")}` : "'none'"}`,
		`frame-src ${declared.frameDomains.length > 0 ? declared.frameDomains.join(" ") : "'none'"}`,
		"object-src 'none'",
		`base-uri ${declared.baseUriDomains.length > 0 ? declared.baseUriDomains.join(" ") : "'self'"}`,
		"form-action 'none'",
		`frame-ancestors ${shellOrigin}`,
	];
	if (resources) directives.splice(4, 0, `font-src 'self' ${resources}`);
	return directives.join("; ");
}

/** Hosts Tern may navigate to for this view: loopback plus exactly the declared domains. */
export function allowedHosts(declared: DeclaredCsp): string[] {
	const hosts = new Set(["127.0.0.1"]);
	for (const entry of [...declared.connectDomains, ...declared.resourceDomains, ...declared.frameDomains, ...declared.baseUriDomains]) {
		hosts.add(new URL(entry.replace("*.", "")).hostname);
	}
	return [...hosts];
}
