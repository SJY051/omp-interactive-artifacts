import { expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { shellHtml } from "./mcp-server";

test("shell relay bounds queued bytes and logs one overflow notice", async () => {
	const html = shellHtml({ title: "test", viewUrl: "http://127.0.0.1:9123/s/token" });
	const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
	expect(script).toBeDefined();
	const frame = {};
	let listener: (event: unknown) => void = () => undefined;
	let requests = 0;
	let release: (() => void) | undefined;
	const warnings: string[] = [];
	const pending = new Promise<void>(resolve => { release = resolve; });
	runInNewContext(script!, {
		document: { getElementById: () => ({ contentWindow: frame }) },
		window: { addEventListener: (_type: string, handler: typeof listener) => { listener = handler; } },
		EventSource: class { onmessage: unknown },
		fetch: () => { requests++; return pending; },
		console: { warn: (text: string) => warnings.push(text) },
		TextEncoder,
	});
	const message = { method: "notifications/message", params: { data: "x".repeat(16 * 1024) } };
	for (let i = 0; i < 1000; i++) listener({ source: frame, origin: "http://127.0.0.1:9123", data: message });
	await Promise.resolve();
	expect(requests).toBe(1);
	expect(warnings).toHaveLength(1);
	// The blocked fetch keeps the first item in flight. The remaining bounded queue cannot store 1000 bodies.
	release!();
	for (let i = 0; i < 100; i++) await Promise.resolve();
	expect(requests).toBeLessThanOrEqual(33);
});

test("shell relay also bounds the count of small messages", async () => {
	const script = shellHtml({ title: "test", viewUrl: "http://127.0.0.1:9123/s/token" }).match(/<script>([\s\S]*?)<\/script>/)![1]!;
	const frame = {};
	let listener: (event: unknown) => void = () => undefined;
	let requests = 0;
	let release: (() => void) | undefined;
	const warnings: string[] = [];
	const pending = new Promise<void>(resolve => { release = resolve; });
	runInNewContext(script, {
		document: { getElementById: () => ({ contentWindow: frame }) },
		window: { addEventListener: (_type: string, handler: typeof listener) => { listener = handler; } },
		EventSource: class { onmessage: unknown },
		fetch: () => { requests++; return pending; },
		console: { warn: (text: string) => warnings.push(text) },
		TextEncoder,
	});
	for (let i = 0; i < 100; i++) listener({ source: frame, origin: "http://127.0.0.1:9123", data: { method: "ping" } });
	expect(warnings).toHaveLength(1);
	release!();
	for (let i = 0; i < 100; i++) await Promise.resolve();
	expect(requests).toBe(32);
});
