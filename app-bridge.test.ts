import { describe, expect, test } from "bun:test";
import { AppBridge, type AuditEntry, type BridgeDeps, type ToolDef, resourceUriOf, visibilityOf } from "./app-bridge";
import { parseMessage } from "./jsonrpc";

const OWN = "ui://srv/view.html";
const TOOLS: ToolDef[] = [
	{ name: "show", _meta: { ui: { resourceUri: OWN } } },
	{ name: "app_only", _meta: { ui: { resourceUri: OWN, visibility: ["app"] } } },
	{ name: "model_only", _meta: { ui: { resourceUri: OWN, visibility: ["model"] } } },
	{ name: "flat_meta", _meta: { "ui/resourceUri": "ui://srv/other.html" } },
];

interface Harness {
	bridge: AppBridge;
	sent: Array<Record<string, unknown>>;
	calls: { tool: Array<[string, unknown]>; read: string[]; message: string[]; context: unknown[]; link: string[]; authorized: string[] };
	audit: AuditEntry[];
	clock: { now: number };
	denyTool?: string;
	denyLink?: string;
}

function harness(overrides: Partial<BridgeDeps> = {}): Harness {
	const sent: Array<Record<string, unknown>> = [];
	const clock = { now: 1_000_000 };
	const calls: Harness["calls"] = { tool: [], read: [], message: [], context: [], link: [], authorized: [] };
	const audit: AuditEntry[] = [];
	const h = { sent, calls, audit, clock } as Harness;
	const deps: BridgeDeps = {
		tools: () => TOOLS,
		resources: () => ({ uris: ["file:///notes.md"], templates: ["note://{id}/body"] }),
		async callTool(name, args) {
			calls.tool.push([name, args]);
			return { content: [{ type: "text", text: `ran ${name}` }] };
		},
		async authorizeTool(tool) {
			calls.authorized.push(tool.name);
			return h.denyTool;
		},
		async readResource(uri) {
			calls.read.push(uri);
			return { contents: [{ uri, text: "x" }] };
		},
		async authorizeLink() {
			return h.denyLink;
		},
		async openLink(url) {
			calls.link.push(url);
		},
		sendMessage: text => void calls.message.push(text),
		updateContext: update => void calls.context.push(update),
		audit: entry => void audit.push(entry),
		now: () => clock.now,
		...overrides,
	};
	h.bridge = new AppBridge(OWN, deps, {
		hostInfo: { name: "host", version: "1" },
		hostCapabilities: { openLinks: {} },
		hostContext: async () => ({ theme: "dark" }),
		toolInput: { topic: "t" },
		toolResult: { content: [{ type: "text", text: "done" }], structuredContent: { n: 1 } },
		send: message => void sent.push(message),
	});
	return h;
}

const rpc = (id: number, method: string, params?: Record<string, unknown>) => ({ jsonrpc: "2.0", id, method, ...(params ? { params } : {}) });
const note = (method: string, params?: Record<string, unknown>) => ({ jsonrpc: "2.0", method, ...(params ? { params } : {}) });
const INIT = { appInfo: { name: "view", version: "1" }, appCapabilities: {}, protocolVersion: "2026-01-26" };

async function ready(h: Harness): Promise<void> {
	await h.bridge.receive(rpc(1, "ui/initialize", INIT));
	await h.bridge.receive(note("ui/notifications/initialized"));
	h.sent.length = 0;
}

const last = (h: Harness) => h.sent.at(-1) as { id?: number; result?: Record<string, unknown>; error?: { code: number; message: string } };

describe("handshake", () => {
	test("replies to ui/initialize, then sends tool-input and tool-result only after initialized, in that order", async () => {
		const h = harness();
		await h.bridge.receive(rpc(1, "ui/initialize", INIT));
		expect(h.sent).toHaveLength(1);
		expect(last(h).result).toMatchObject({ protocolVersion: "2026-01-26", hostInfo: { name: "host" }, hostContext: { theme: "dark" } });
		await h.bridge.receive(note("ui/notifications/initialized"));
		expect(h.sent.slice(1).map(message => message.method)).toEqual(["ui/notifications/tool-input", "ui/notifications/tool-result"]);
		expect(h.sent[1]).toMatchObject({ params: { arguments: { topic: "t" } } });
		expect(h.sent[2]).toMatchObject({ params: { structuredContent: { n: 1 } } });
	});

	test("answers an unsupported protocol version with the host's newest", async () => {
		const h = harness();
		await h.bridge.receive(rpc(1, "ui/initialize", { ...INIT, protocolVersion: "1999-01-01" }));
		expect(last(h).result).toMatchObject({ protocolVersion: "2026-01-26" });
	});

	test("rejects requests before the handshake finishes, but ping always answers", async () => {
		const h = harness();
		await h.bridge.receive(rpc(1, "tools/call", { name: "show" }));
		expect(last(h).error?.code).toBe(-32002);
		await h.bridge.receive(rpc(2, "ping"));
		expect(last(h).result).toEqual({});
		await h.bridge.receive(rpc(3, "ui/initialize", INIT));
		await h.bridge.receive(rpc(4, "tools/call", { name: "show" }));
		expect(last(h).error?.code).toBe(-32002);
		expect(h.calls.tool).toHaveLength(0);
	});

	test("initialized without initialize, and a second initialize, do nothing", async () => {
		const h = harness();
		await h.bridge.receive(note("ui/notifications/initialized"));
		expect(h.sent).toHaveLength(0);
		await ready(h);
		await h.bridge.receive(rpc(9, "ui/initialize", INIT));
		expect(last(h).error?.code).toBe(-32000);
	});

	test("initialize needs appInfo, appCapabilities and protocolVersion", async () => {
		for (const params of [{}, { ...INIT, appInfo: {} }, { ...INIT, appCapabilities: "x" }, { ...INIT, protocolVersion: 3 }]) {
			const h = harness();
			await h.bridge.receive(rpc(1, "ui/initialize", params));
			expect(last(h).error?.code, JSON.stringify(params)).toBe(-32602);
			expect(h.bridge.state).toBe("new");
		}
	});
});

describe("message validation", () => {
	test("parseMessage separates requests, notifications and responses and refuses the rest", () => {
		expect(parseMessage(rpc(1, "ping"))).toMatchObject({ ok: true, message: { kind: "request", id: 1, method: "ping" } });
		expect(parseMessage(note("ui/notifications/initialized"))).toMatchObject({ ok: true, message: { kind: "notification" } });
		expect(parseMessage({ jsonrpc: "2.0", id: "a", result: {} })).toMatchObject({ ok: true, message: { kind: "response" } });
		for (const bad of [
			null,
			[],
			"x",
			{},
			{ id: 1, method: "ping" },
			{ jsonrpc: "1.0", id: 1, method: "ping" },
			{ jsonrpc: "2.0", id: null, method: "ping" },
			{ jsonrpc: "2.0", id: true, method: "ping" },
			{ jsonrpc: "2.0", id: 1, method: "has space" },
			{ jsonrpc: "2.0", id: 1, method: "ping", params: [1] },
			{ jsonrpc: "2.0", id: 1, method: "ping", result: {} },
			{ jsonrpc: "2.0", id: 1 },
			{ jsonrpc: "2.0", id: 1, result: {}, error: { code: 1, message: "x" } },
			{ jsonrpc: "2.0", id: 1, error: { code: "1", message: "x" } },
			{ jsonrpc: "2.0", result: {} },
		]) {
			expect(parseMessage(bad).ok, JSON.stringify(bad)).toBe(false);
		}
	});

	test("a malformed request with a readable id is answered; one without is only audited", async () => {
		const h = harness();
		await h.bridge.receive({ jsonrpc: "2.0", id: 7, method: "bad method" });
		expect(last(h)).toMatchObject({ id: 7, error: { code: -32600 } });
		h.sent.length = 0;
		await h.bridge.receive("not an object");
		await h.bridge.receive({ jsonrpc: "2.0", id: { nested: 1 }, method: "ping" });
		expect(h.sent).toHaveLength(0);
		expect(h.audit.filter(entry => entry.kind === "rejected")).toHaveLength(3);
	});

	test("unknown methods, the SDK's other ui/ requests and the reserved sandbox namespace are refused", async () => {
		const h = harness();
		await ready(h);
		for (const method of ["sampling/createMessage", "ui/download-file", "tools/list", "ui/notifications/sandbox-proxy-ready"]) {
			await h.bridge.receive(rpc(5, method, {}));
			expect(last(h).error?.code, method).toBe(-32601);
		}
		await h.bridge.receive(note("ui/notifications/sandbox-resource-ready", { html: "<p>" }));
		expect(h.audit.some(entry => entry.method === "ui/notifications/sandbox-resource-ready" && entry.ok === false)).toBe(true);
	});
});

describe("tools/call stays on the view's own server", () => {
	test("a name that is not one of this server's tools is refused before anything runs", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "tools/call", { name: "secret_of_other_server", arguments: {} }));
		expect(last(h).error).toMatchObject({ code: -32602 });
		expect(last(h).error?.message).toContain("not a tool of this app's server");
		expect(h.calls.tool).toHaveLength(0);
		expect(h.calls.authorized).toHaveLength(0);
	});

	test("visibility: app-only and default tools are callable, model-only tools are not", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "tools/call", { name: "app_only", arguments: { by: 1 } }));
		expect(last(h).result).toMatchObject({ content: [{ text: "ran app_only" }] });
		await h.bridge.receive(rpc(3, "tools/call", { name: "show" }));
		expect(last(h).result).toBeDefined();
		await h.bridge.receive(rpc(4, "tools/call", { name: "model_only" }));
		expect(last(h).error?.message).toContain("not callable by apps");
		expect(h.calls.tool.map(call => call[0])).toEqual(["app_only", "show"]);
		expect(h.calls.tool[1]![1]).toEqual({});
	});

	test("OMP's approval decision is final, and arguments must be an object", async () => {
		const h = harness();
		await ready(h);
		h.denyTool = "blocked by user policy";
		await h.bridge.receive(rpc(2, "tools/call", { name: "show" }));
		expect(last(h).error).toMatchObject({ code: -32000, message: "blocked by user policy" });
		expect(h.calls.tool).toHaveLength(0);
		h.denyTool = undefined;
		await h.bridge.receive(rpc(3, "tools/call", { name: "show", arguments: "rm -rf" }));
		expect(last(h).error?.code).toBe(-32602);
		await h.bridge.receive(rpc(4, "tools/call", {}));
		expect(last(h).error?.code).toBe(-32602);
	});

	test("a failing server call becomes an error response, not a crash", async () => {
		const h = harness({
			async callTool() {
				throw new Error("server exploded");
			},
		});
		await ready(h);
		await h.bridge.receive(rpc(2, "tools/call", { name: "show" }));
		expect(last(h).error).toMatchObject({ code: -32603, message: "server exploded" });
	});

	test("calls are rate limited", async () => {
		const h = harness();
		await ready(h);
		let refused = 0;
		for (let i = 0; i < 14; i++) {
			await h.bridge.receive(rpc(10 + i, "tools/call", { name: "show" }));
			if (last(h).error?.message.includes("Rate limited")) refused++;
		}
		expect(h.calls.tool).toHaveLength(10);
		expect(refused).toBe(4);
		h.clock.now += 2000;
		await h.bridge.receive(rpc(99, "tools/call", { name: "show" }));
		expect(last(h).result).toBeDefined();
	});
});

describe("resources/read stays on the view's own server", () => {
	test("reads only what the server exposes: its view, listed resources, template matches, other tools' views", async () => {
		const h = harness();
		await ready(h);
		for (const uri of [OWN, "file:///notes.md", "note://42/body", "ui://srv/other.html"]) {
			await h.bridge.receive(rpc(2, "resources/read", { uri }));
			expect(last(h).result, uri).toBeDefined();
		}
		expect(h.calls.read).toHaveLength(4);
	});

	test("a URI the server does not expose is refused without reaching the server", async () => {
		const h = harness();
		await ready(h);
		for (const uri of ["ui://other-server/secret.html", "file:///etc/passwd", "note://42/body/extra", "note://a/b/body", ""]) {
			await h.bridge.receive(rpc(3, "resources/read", { uri }));
			expect(last(h).error?.code, uri).toBe(-32602);
		}
		await h.bridge.receive(rpc(4, "resources/read", { uri: "x".repeat(3000) }));
		expect(last(h).error?.code).toBe(-32602);
		expect(h.calls.read).toHaveLength(0);
	});
});

describe("ui/message and ui/update-model-context", () => {
	test("ui/message hands text to the agent, accepting one block or several", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "ui/message", { role: "user", content: { type: "text", text: " hello " } }));
		await h.bridge.receive(rpc(3, "ui/message", { role: "user", content: [{ type: "text", text: "a" }, { type: "image", data: "x" }, { type: "text", text: "b" }] }));
		expect(h.calls.message).toEqual(["hello", "a\nb"]);
	});

	test("ui/message rejects non-user roles, empty or oversized text, and is rate limited", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "ui/message", { role: "assistant", content: [{ type: "text", text: "x" }] }));
		expect(last(h).error?.code).toBe(-32602);
		await h.bridge.receive(rpc(3, "ui/message", { role: "user", content: [{ type: "image", data: "x" }] }));
		expect(last(h).error?.code).toBe(-32602);
		await h.bridge.receive(rpc(4, "ui/message", { role: "user", content: [{ type: "text", text: "y".repeat(4001) }] }));
		expect(last(h).error?.code).toBe(-32602);
		expect(h.calls.message).toHaveLength(0);
		h.clock.now += 60_000;
		for (let i = 0; i < 5; i++) await h.bridge.receive(rpc(10 + i, "ui/message", { role: "user", content: [{ type: "text", text: `m${i}` }] }));
		expect(h.calls.message).toEqual(["m0", "m1", "m2"]);
	});

	test("update-model-context passes text and structured content; oversized or mistyped payloads are refused", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "ui/update-model-context", { content: [{ type: "text", text: "state" }], structuredContent: { a: 1 } }));
		await h.bridge.receive(rpc(3, "ui/update-model-context", { structuredContent: { b: 2 } }));
		expect(h.calls.context).toEqual([{ text: "state", structuredContent: { a: 1 } }, { text: "", structuredContent: { b: 2 } }]);
		await h.bridge.receive(rpc(4, "ui/update-model-context", { structuredContent: "nope" }));
		expect(last(h).error?.code).toBe(-32602);
		await h.bridge.receive(rpc(5, "ui/update-model-context", { content: [{ type: "text", text: "z".repeat(17 * 1024) }] }));
		expect(last(h).error?.code).toBe(-32602);
		expect(h.calls.context).toHaveLength(2);
	});
});

describe("ui/open-link and display mode", () => {
	test("opens http(s) links only, normalized, without credentials, and honours the approval refusal", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(rpc(2, "ui/open-link", { url: "https://example.com/a b" }));
		expect(h.calls.link).toEqual(["https://example.com/a%20b"]);
		for (const url of ["javascript:alert(1)", "file:///etc/passwd", "data:text/html,x", "ftp://x.example", "https://user:pw@example.com/", "not a url", ""]) {
			await h.bridge.receive(rpc(3, "ui/open-link", { url }));
			expect(last(h).error, url).toBeDefined();
		}
		h.clock.now += 60_000;
		h.denyLink = "the user declined";
		await h.bridge.receive(rpc(4, "ui/open-link", { url: "https://example.com/" }));
		expect(last(h).error).toMatchObject({ code: -32000, message: "the user declined" });
		expect(h.calls.link).toHaveLength(1);
	});

	test("display mode requests are answered with the mode actually in effect", async () => {
		const h = harness();
		await ready(h);
		for (const mode of ["inline", "fullscreen", "pip"]) {
			await h.bridge.receive(rpc(2, "ui/request-display-mode", { mode }));
			expect(last(h).result).toEqual({ mode: "inline" });
		}
		await h.bridge.receive(rpc(3, "ui/request-display-mode", { mode: "tab" }));
		expect(last(h).error?.code).toBe(-32602);
	});
});

describe("notifications and teardown", () => {
	test("size-changed is accepted, logs are audited, unknown notifications are ignored", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive(note("ui/notifications/size-changed", { width: 400, height: 300 }));
		await h.bridge.receive(note("ui/notifications/size-changed", { width: "wide" }));
		expect(h.bridge.size).toEqual({ width: 400, height: 300 });
		await h.bridge.receive(note("notifications/message", { level: "warning", data: "careful" }));
		expect(h.audit.some(entry => entry.method === "notifications/message" && entry.detail === "[warning] careful")).toBe(true);
		await h.bridge.receive(note("something/else"));
		expect(h.sent).toHaveLength(0);
	});

	test("teardown sends ui/resource-teardown and finishes when the view answers", async () => {
		const h = harness();
		await ready(h);
		const done = h.bridge.teardown("closing", 1000);
		const request = last(h) as unknown as { id: string; method: string; params: { reason: string } };
		expect(request).toMatchObject({ method: "ui/resource-teardown", params: { reason: "closing" } });
		await h.bridge.receive({ jsonrpc: "2.0", id: request.id, result: {} });
		expect(await done).toBe("acknowledged");
		expect(h.bridge.state).toBe("closed");
		h.sent.length = 0;
		await h.bridge.receive(rpc(8, "ping"));
		expect(h.sent).toHaveLength(0);
	});

	test("teardown does not wait forever for a silent view", async () => {
		const h = harness();
		await ready(h);
		expect(await h.bridge.teardown("closing", 20)).toBe("timeout");
		expect(h.bridge.state).toBe("closed");
	});

	test("a view that never initialized is closed without a teardown request", async () => {
		const h = harness();
		expect(await h.bridge.teardown("closing")).toBe("not-ready");
		expect(h.sent).toHaveLength(0);
	});

	test("responses to requests the host never made are ignored", async () => {
		const h = harness();
		await ready(h);
		await h.bridge.receive({ jsonrpc: "2.0", id: "host-99", result: {} });
		expect(h.audit.some(entry => entry.detail?.includes("unknown request"))).toBe(true);
	});
});

describe("tool metadata", () => {
	test("visibility defaults to both audiences and ignores junk entries", () => {
		expect(visibilityOf({})).toEqual(["model", "app"]);
		expect(visibilityOf({ _meta: { ui: {} } })).toEqual(["model", "app"]);
		expect(visibilityOf({ _meta: { ui: { visibility: ["app", "root"] } } })).toEqual(["app"]);
		expect(visibilityOf({ _meta: { ui: { visibility: [] } } })).toEqual([]);
	});

	test("the view URI comes from _meta.ui.resourceUri, else the deprecated flat key, and must be ui://", () => {
		expect(resourceUriOf({ _meta: { ui: { resourceUri: "ui://a/b" } } })).toBe("ui://a/b");
		expect(resourceUriOf({ _meta: { "ui/resourceUri": "ui://a/c" } })).toBe("ui://a/c");
		expect(resourceUriOf({ _meta: { ui: { resourceUri: "https://evil.example/x" } } })).toBeUndefined();
		expect(resourceUriOf({})).toBeUndefined();
	});
});
