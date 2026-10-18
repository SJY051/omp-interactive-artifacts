import { afterAll, describe, expect, test } from "bun:test";
import { mkdtemp, rm, utimes } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ArtifactFiles, generateId, ID_PATTERN, NO_SESSION, sessionKey } from "./files";

const dirs: string[] = [];
async function store(): Promise<ArtifactFiles> {
	const root = await mkdtemp(join(tmpdir(), "artifact-files-"));
	dirs.push(root);
	return new ArtifactFiles(root);
}
afterAll(() => Promise.all(dirs.map(dir => rm(dir, { recursive: true, force: true }))));

describe("ids and sessions", () => {
	test("ids cannot escape the session directory", () => {
		for (const bad of ["../x", "a/b", ".hidden", "A", "", "x".repeat(41), "a.html"]) expect(ID_PATTERN.test(bad), bad).toBe(false);
		expect(ID_PATTERN.test("sales-q3")).toBe(true);
	});

	test("session keys are safe path segments, nosession when empty", () => {
		expect(sessionKey("../../etc")).toBe("_.._etc");
		expect(sessionKey("..")).toBe(NO_SESSION);
		expect(sessionKey("019a-bc")).toBe("019a-bc");
		expect(sessionKey("a/b")).not.toContain("/");
	});

	test("generated ids are valid slugs and skip taken ones", () => {
		const taken = new Set<string>();
		for (let i = 0; i < 50; i++) {
			const id = generateId("Q3 Sales — 한글 Dashboard!", candidate => taken.has(candidate));
			expect(ID_PATTERN.test(id)).toBe(true);
			expect(taken.has(id)).toBe(false);
			taken.add(id);
		}
		expect(generateId("한글", () => false)).toMatch(/^app-[a-z0-9]{1,4}$/);
	});
});

describe("ArtifactFiles", () => {
	test("saves under <root>/<session>/<id>.html and loads it back with its title", async () => {
		const files = await store();
		await files.save("s1", { id: "demo", title: "Demo", html: "<p>1</p>" });
		expect(await Bun.file(join(files.root, "s1", "demo.html")).text()).toBe("<p>1</p>");
		expect(await files.load("s1", "demo")).toMatchObject({ id: "demo", title: "Demo", html: "<p>1</p>", session: "s1" });
		expect(await files.load("s1", "../demo")).toBeUndefined();
		await expect(files.save("s1", { id: "../evil", title: "x", html: "x" })).rejects.toThrow();
	});

	test("find prefers the current session, then the newest copy from an earlier one", async () => {
		const files = await store();
		await files.save("old", { id: "chart", title: "Old", html: "old" });
		await files.save("newer", { id: "chart", title: "Newer", html: "newer" });
		const past = new Date(Date.now() - 3600_000);
		await utimes(join(files.root, "old"), past, past);
		expect((await files.find("chart", "now"))!.session).toBe("newer");
		await files.save("now", { id: "chart", title: "Mine", html: "mine" });
		expect((await files.find("chart", "now"))!.html).toBe("mine");
		expect(await files.find("missing", "now")).toBeUndefined();
	});

	test("a missing sidecar still reopens with the id as its title", async () => {
		const files = await store();
		await files.save("s", { id: "bare", title: "T", html: "x" });
		await rm(join(files.root, "s", "bare.json"));
		expect((await files.load("s", "bare"))!.title).toBe("bare");
	});
});
