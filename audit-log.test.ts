import { expect, test } from "bun:test";
import { mkdtemp, readdir, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { AuditLog } from "./audit-log";

test("audit stream bounds pending writes, aggregates overflow and rotates at the session cap", async () => {
	const dir = await mkdtemp(join(tmpdir(), "omp-audit-test-"));
	try {
		const path = join(dir, "mcp-apps.log.jsonl");
		const log = new AuditLog(path, { queueEntries: 3, queueBytes: 500, fileBytes: 300 });
		for (let i = 0; i < 100; i++) log.append({ t: String(i), kind: "rejected", method: `ping${i}`, detail: "ingress", padding: "x".repeat(40) });
		await log.flush();
		const paths = (await readdir(dir)).filter(name => name.startsWith("mcp-apps.log.jsonl"));
		expect(paths.length).toBeLessThanOrEqual(3);
		for (const name of paths) expect((await stat(join(dir, name))).size).toBeLessThanOrEqual(300);
		const content = (await Promise.all(paths.map(name => readFile(join(dir, name), "utf8")))).join("");
		expect(content).toContain("audit queue rejected entries");
		expect(content).toContain('"count":97');
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
});

test("repeated rejected entries aggregate despite different timestamps", async () => {
	const dir = await mkdtemp(join(tmpdir(), "omp-audit-test-"));
	try {
		const path = join(dir, "mcp-apps.log.jsonl");
		const log = new AuditLog(path);
		for (let i = 0; i < 20; i++) log.append({ t: String(i), kind: "rejected", method: "ping", detail: "refused" });
		await log.flush();
		const lines = (await readFile(path, "utf8")).trim().split("\n").map(line => JSON.parse(line));
		expect(lines.some(line => line.count >= 19)).toBe(true);
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
});
