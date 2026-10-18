import { expect, mock, test } from "bun:test";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

// OMP supplies this runtime-only module; install the test double before loading delivery.
mock.module("@oh-my-pi/pi-tui", () => ({ Text: class {} }));
const { ARTIFACT_KIND, createDelivery, MCP_APP_KIND } = await import("./delivery");

test("agent-bound page and MCP app messages never assert a user interaction", () => {
	const sent: string[] = [];
	const pi = {
		on: () => undefined,
		registerMessageRenderer: () => undefined,
		sendMessage: (message: { content: string }) => { sent.push(message.content); },
	} as unknown as ExtensionAPI;
	const delivery = createDelivery(pi);
	delivery.event({ kind: ARTIFACT_KIND, id: "example", title: "Example" }, "script-triggered", ["page-reported gesture hint: none (not host-verified)"]);
	delivery.event({ kind: MCP_APP_KIND, id: "app", title: "App" }, "automatic");
	expect(sent).toHaveLength(2);
	for (const content of sent) {
		expect(content).toContain("may be script-initiated");
		expect(content).not.toContain("when the user interacted");
		expect(content).toContain("untrusted");
	}
	delivery.stop();
});
