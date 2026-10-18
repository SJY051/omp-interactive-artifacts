import { afterAll, beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { join } from "node:path";
import { CSP, LIMITS, type PageError, type RunningServer, startServer } from "./server";

const TOKEN = "tok_ABCDEFGHIJKLMNOP1234";
const REF = { id: "demo", title: "Demo" };

let server: RunningServer;
let clock = 1_000_000;
let sent: Array<{ text: string; data?: unknown }> = [];
let contexts: unknown[] = [];
let errors: PageError[] = [];

beforeAll(() => {
	server = startServer(
		{
			resolve: token => (token === TOKEN ? REF : undefined),
			page: () => "<!doctype html><p>page</p>",
			onSend: (_ref, event) => void sent.push(event),
			onContext: (_ref, data) => void contexts.push(data),
			onError: (_ref, error) => void errors.push(error),
		},
		{ libDir: join(import.meta.dir, "vendor"), now: () => clock },
	);
});
afterAll(() => server.stop());
beforeEach(() => {
	clock += 60_000; // refill every bucket
	sent = [];
	contexts = [];
	errors = [];
});

const url = (path: string) => `${server.origin}${path}`;
const post = (path: string, body: unknown, init: RequestInit = {}) =>
	fetch(url(path), {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: typeof body === "string" ? body : JSON.stringify(body),
		...init,
	});

describe("routing", () => {
	test("serves the page only under the right token and trailing slash", async () => {
		const ok = await fetch(url(`/a/${TOKEN}/`));
		expect(ok.status).toBe(200);
		expect(await ok.text()).toBe("<!doctype html><p>page</p>");
		for (const path of [
			`/a/${TOKEN}`,
			`/a/${TOKEN}x/`,
			"/a/wrongtokenwrongtoken0000/",
			`/a/${TOKEN}/other`,
			`/a/${TOKEN}/send/extra`,
			"/",
			"/a/",
			"/event",
			"/lib/",
			"/lib/missing.js",
			"/lib/../server.ts",
			"/lib/%2e%2e/server.ts",
			"/lib/d3.js/x",
		]) {
			expect((await fetch(url(path))).status, path).toBe(404);
		}
	});

	test("a wrong token gets 404 on event endpoints too, and nothing reaches the hooks", async () => {
		const res = await post("/a/wrongtokenwrongtoken0000/send", { text: "hi" });
		expect(res.status).toBe(404);
		expect(sent).toHaveLength(0);
	});

	test("serves a vendored library from /lib", async () => {
		const res = await fetch(url("/lib/d3.js"));
		expect(res.status).toBe(200);
		expect(res.headers.get("content-type")).toContain("text/javascript");
		expect((await res.text()).length).toBeGreaterThan(10_000);
	});

	test("rejects the wrong method on a known endpoint", async () => {
		expect((await fetch(url(`/a/${TOKEN}/send`))).status).toBe(405);
		expect((await fetch(url(`/a/${TOKEN}/`), { method: "POST" })).status).toBe(405);
	});
});

describe("CSP", () => {
	test("is on the page, library, error and 404 responses", async () => {
		for (const path of [`/a/${TOKEN}/`, "/lib/d3.js", "/nope", `/a/${TOKEN}/send`]) {
			const res = await fetch(url(path));
			expect(res.headers.get("content-security-policy"), path).toBe(CSP);
		}
		const posted = await post(`/a/${TOKEN}/send`, { text: "x" });
		expect(posted.headers.get("content-security-policy")).toBe(CSP);
	});

	test("names no external origin and no eval", () => {
		expect(CSP).not.toMatch(/https?:|\*|unsafe-eval|ws:|wss:/);
		expect(CSP).toContain("default-src 'none'");
		expect(CSP).toContain("connect-src 'self'");
		expect(CSP).toContain("form-action 'none'");
	});
});

describe("send", () => {
	test("delivers text and optional data", async () => {
		expect((await post(`/a/${TOKEN}/send`, { text: "go", data: { n: 1 } })).status).toBe(200);
		expect((await post(`/a/${TOKEN}/send`, { text: "plain" })).status).toBe(200);
		expect(sent).toEqual([{ text: "go", data: { n: 1 } }, { text: "plain" }]);
	});

	test("rejects malformed input", async () => {
		const path = `/a/${TOKEN}/send`;
		clock += 0;
		expect((await post(path, "{not json")).status).toBe(400);
		clock += 5000;
		expect((await post(path, "[1]")).status).toBe(400);
		clock += 5000;
		expect((await post(path, { text: "" })).status).toBe(400);
		clock += 5000;
		expect((await post(path, { text: 5 })).status).toBe(400);
		clock += 5000;
		expect((await post(path, { text: "x".repeat(4001) })).status).toBe(400);
		clock += 5000;
		expect((await post(path, "{}", { headers: { "content-type": "text/plain" } })).status).toBe(415);
		expect(sent).toHaveLength(0);
	});

	test("caps the body at 16 KB, by declared and by actual size", async () => {
		const big = { text: "x", data: "y".repeat(16 * 1024) };
		const res = await post(`/a/${TOKEN}/send`, big);
		expect(res.status).toBe(413);
		expect(sent).toHaveLength(0);
		clock += 5000;
		const fits = await post(`/a/${TOKEN}/send`, { text: "x", data: "y".repeat(15 * 1024) });
		expect(fits.status).toBe(200);
	});

	test("refuses a foreign origin", async () => {
		const res = await post(`/a/${TOKEN}/send`, { text: "x" }, { headers: { "content-type": "application/json", origin: "https://evil.example" } });
		expect(res.status).toBe(403);
		expect(sent).toHaveLength(0);
	});

	test("rate limits per artifact: a burst, then one per second", async () => {
		const path = `/a/${TOKEN}/send`;
		const statuses: number[] = [];
		for (let i = 0; i < LIMITS.send.capacity + 2; i++) statuses.push((await post(path, { text: String(i) })).status);
		expect(statuses).toEqual([200, 200, 200, 429, 429]);
		const limited = await post(path, { text: "late" });
		expect(limited.headers.get("retry-after")).toBe("1");
		clock += 1000;
		expect((await post(path, { text: "again" })).status).toBe(200);
		expect(sent.map(event => event.text)).toEqual(["0", "1", "2", "again"]);
	});
});

describe("context and error", () => {
	test("context requires a data field but accepts any JSON value", async () => {
		const path = `/a/${TOKEN}/context`;
		expect((await post(path, {})).status).toBe(400);
		expect((await post(path, { data: { slider: 3 } })).status).toBe(200);
		expect((await post(path, { data: null })).status).toBe(200);
		expect(contexts).toEqual([{ slider: 3 }, null]);
	});

	test("context has a looser limit than send", async () => {
		let ok = 0;
		for (let i = 0; i < 25; i++) if ((await post(`/a/${TOKEN}/context`, { data: i })).status === 200) ok++;
		expect(ok).toBe(LIMITS.context.capacity);
	});

	test("error reports are validated and truncated, with a smaller body cap", async () => {
		const path = `/a/${TOKEN}/error`;
		expect((await post(path, { kind: "error" })).status).toBe(400);
		expect((await post(path, { kind: "error", message: "m".repeat(5000), line: "7", col: 3 })).status).toBe(200);
		expect(errors[0]!.message).toHaveLength(1500);
		expect(errors[0]!.line).toBeUndefined();
		expect(errors[0]!.col).toBe(3);
		expect((await post(path, { message: "x", stack: "s".repeat(9 * 1024) })).status).toBe(413);
	});
});
