import { describe, expect, test } from "bun:test";
import { allowedHosts, buildAppCsp, type DeclaredCsp, sanitizeCsp } from "./csp";

const SHELL = "http://127.0.0.1:5001";
const SANDBOX = "http://127.0.0.1:5002";
const EMPTY: DeclaredCsp = { connectDomains: [], resourceDomains: [], frameDomains: [], baseUriDomains: [] };

function directives(csp: string): Record<string, string> {
	return Object.fromEntries(csp.split("; ").map(part => [part.split(" ")[0]!, part.slice(part.indexOf(" ") + 1)]));
}

describe("buildAppCsp", () => {
	test("nothing declared gives the spec default, with no network and no frames", () => {
		const csp = directives(buildAppCsp(EMPTY, SHELL));
		expect(csp["default-src"]).toBe("'none'");
		expect(csp["script-src"]).toBe("'self' 'unsafe-inline'");
		expect(csp["style-src"]).toBe("'self' 'unsafe-inline'");
		expect(csp["img-src"]).toBe("'self' data:");
		expect(csp["media-src"]).toBe("'self' data:");
		expect(csp["connect-src"]).toBe("'none'");
		expect(csp["frame-src"]).toBe("'none'");
		expect(csp["base-uri"]).toBe("'self'");
		expect(csp["object-src"]).toBe("'none'");
		expect(csp["font-src"]).toBeUndefined();
		expect(csp["frame-ancestors"]).toBe(SHELL);
	});

	test("each declared list lands only in the directives the spec maps it to", () => {
		const csp = directives(
			buildAppCsp(
				{
					connectDomains: ["https://api.example.com", "wss://live.example.com"],
					resourceDomains: ["https://cdn.example.com", "https://*.static.example.com"],
					frameDomains: ["https://player.example.com"],
					baseUriDomains: ["https://base.example.com"],
				},
				SHELL,
			),
		);
		expect(csp["connect-src"]).toBe("'self' https://api.example.com wss://live.example.com");
		for (const name of ["script-src", "style-src", "img-src", "media-src", "font-src"]) {
			expect(csp[name], name).toContain("https://cdn.example.com https://*.static.example.com");
			expect(csp[name], name).not.toContain("api.example.com");
			expect(csp[name], name).not.toContain("player.example.com");
		}
		expect(csp["frame-src"]).toBe("https://player.example.com");
		expect(csp["base-uri"]).toBe("https://base.example.com");
		expect(csp["default-src"]).toBe("'none'");
	});

	test("never adds eval, a wildcard source or an undeclared origin", () => {
		const csp = buildAppCsp({ ...EMPTY, resourceDomains: ["https://cdn.example.com"] }, SHELL);
		expect(csp).not.toMatch(/unsafe-eval|\* |\*;|https:;|http:;/);
		expect(csp.match(/https?:\/\/[^\s;]+/g)).toEqual(["https://cdn.example.com", "https://cdn.example.com", "https://cdn.example.com", "https://cdn.example.com", "https://cdn.example.com", SHELL]);
	});
});

describe("sanitizeCsp", () => {
	test("absent or malformed metadata is the empty declaration", () => {
		for (const meta of [undefined, null, "https://a.example", ["https://a.example"], 7]) {
			expect(sanitizeCsp(meta).csp).toEqual(EMPTY);
		}
	});

	test("accepts plain origins, wildcard subdomains and ports, lowercased and deduplicated", () => {
		const { csp, rejected } = sanitizeCsp({
			connectDomains: ["HTTPS://API.Example.com", "https://api.example.com", "wss://rt.example.com:8443", "http://10.0.0.5:3000"],
			resourceDomains: ["https://*.cdn.example.com"],
		});
		expect(csp.connectDomains).toEqual(["https://api.example.com", "wss://rt.example.com:8443", "http://10.0.0.5:3000"]);
		expect(csp.resourceDomains).toEqual(["https://*.cdn.example.com"]);
		expect(rejected).toEqual([]);
	});

	test("rejects anything that is not a plain origin, so a declaration cannot inject a directive", () => {
		const hostile = [
			"https://a.example.com; script-src *",
			"https://a.example.com 'unsafe-eval'",
			"*",
			"https://*",
			"https://*.com",
			"https://*.com/path",
			"https://a.example.com/",
			"data:",
			"javascript:alert(1)",
			"'self'",
			"https://a.example.com\nscript-src *",
			"//a.example.com",
			"https://",
			"https://exa mple.com",
			42,
			null,
		];
		const { csp, rejected } = sanitizeCsp({ connectDomains: hostile, resourceDomains: hostile, frameDomains: hostile, baseUriDomains: hostile });
		// Nothing hostile survives: not a directive, a keyword, a bare wildcard or a whole-TLD wildcard.
		expect(csp.connectDomains).toEqual([]);
		expect(csp.resourceDomains).toEqual([]);
		expect(rejected.length).toBe(hostile.length * 4);
	});

	test("web-only lists refuse websocket schemes; connect accepts them", () => {
		const { csp } = sanitizeCsp({ connectDomains: ["wss://x.example.com"], resourceDomains: ["wss://x.example.com"], frameDomains: ["ws://x.example.com"] });
		expect(csp.connectDomains).toEqual(["wss://x.example.com"]);
		expect(csp.resourceDomains).toEqual([]);
		expect(csp.frameDomains).toEqual([]);
	});

	test("the host's own origins are never grantable, whatever the loopback spelling", () => {
		const { csp, rejected } = sanitizeCsp(
			{ connectDomains: ["http://127.0.0.1:5001", "http://localhost:5002", "http://127.0.0.1:5003", "http://127.0.0.1"] },
			[SHELL, SANDBOX],
		);
		expect(csp.connectDomains).toEqual(["http://127.0.0.1:5003", "http://127.0.0.1"]);
		expect(rejected.map(item => item.entry)).toEqual(["http://127.0.0.1:5001", "http://localhost:5002"]);
	});

	test("a list is capped", () => {
		const many = Array.from({ length: 30 }, (_, i) => `https://h${i}.example.com`);
		expect(sanitizeCsp({ resourceDomains: many }).csp.resourceDomains).toHaveLength(20);
	});
});

describe("allowedHosts", () => {
	test("is loopback plus exactly the declared hosts", () => {
		expect(allowedHosts(EMPTY)).toEqual(["127.0.0.1"]);
		expect(
			allowedHosts({
				connectDomains: ["https://api.example.com:8443", "wss://api.example.com"],
				resourceDomains: ["https://*.cdn.example.com"],
				frameDomains: [],
				baseUriDomains: [],
			}),
		).toEqual(["127.0.0.1", "api.example.com", "cdn.example.com"]);
	});
});
