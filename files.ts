// On-disk artifacts: <root>/<session>/<id>.html (the HTML as the agent wrote it)
// plus <id>.json (title, update time) so a later session can reopen it.

import { mkdir, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export const NO_SESSION = "nosession";

/** Artifact ids are path segments: lowercase slug, never a separator or dot. */
export const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,39}$/;

export interface StoredArtifact {
	id: string;
	title: string;
	html: string;
	session: string;
	updatedAt: number;
}

/** Directory name for a session id; anything outside a safe charset becomes `_`. */
export function sessionKey(sessionId: string | undefined): string {
	const key = (sessionId ?? "").replace(/[^A-Za-z0-9._-]/g, "_").replace(/^\.+/, "");
	return key.length > 0 ? key.slice(0, 120) : NO_SESSION;
}

/** The id-safe words of a title (possibly empty): lowercase ASCII, hyphen-separated, at most 24 characters. */
export function slugOf(title: string): string {
	return title
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 24)
		.replace(/-+$/, "");
}

/** A readable id from a title, with a random suffix so repeated titles never collide. */
export function generateId(title: string, exists: (id: string) => boolean): string {
	const slug = slugOf(title);
	for (;;) {
		const id = `${slug || "app"}-${Math.random().toString(36).slice(2, 6)}`;
		if (!exists(id)) return id;
	}
}

export class ArtifactFiles {
	constructor(readonly root: string) {}

	#html(session: string, id: string): string {
		return join(this.root, session, `${id}.html`);
	}

	/** The preview PNG kept beside the HTML. */
	previewPath(session: string, id: string): string {
		return join(this.root, session, `${id}.png`);
	}

	async savePreview(session: string, id: string, base64Png: string): Promise<string> {
		if (!ID_PATTERN.test(id)) throw new Error(`invalid artifact id: ${id}`);
		await mkdir(join(this.root, session), { recursive: true });
		const path = this.previewPath(session, id);
		await Bun.write(path, Buffer.from(base64Png, "base64"));
		return path;
	}

	async save(session: string, artifact: { id: string; title: string; html: string }): Promise<void> {
		if (!ID_PATTERN.test(artifact.id)) throw new Error(`invalid artifact id: ${artifact.id}`);
		await mkdir(join(this.root, session), { recursive: true });
		const meta = JSON.stringify({ id: artifact.id, title: artifact.title, updatedAt: Date.now() });
		await Bun.write(this.#html(session, artifact.id), artifact.html);
		await Bun.write(join(this.root, session, `${artifact.id}.json`), meta);
	}

	async load(session: string, id: string): Promise<StoredArtifact | undefined> {
		if (!ID_PATTERN.test(id)) return undefined;
		const htmlFile = Bun.file(this.#html(session, id));
		if (!(await htmlFile.exists())) return undefined;
		let title = id;
		let updatedAt = htmlFile.lastModified;
		try {
			const meta = (await Bun.file(join(this.root, session, `${id}.json`)).json()) as { title?: unknown; updatedAt?: unknown };
			if (typeof meta.title === "string" && meta.title) title = meta.title;
			if (typeof meta.updatedAt === "number") updatedAt = meta.updatedAt;
		} catch {
			// Missing or damaged sidecar: the HTML alone is enough to reopen.
		}
		return { id, title, html: await htmlFile.text(), session, updatedAt };
	}

	/** Ids stored for one session, newest first. */
	async list(session: string): Promise<Array<{ id: string; title: string; updatedAt: number }>> {
		let names: string[];
		try {
			names = await readdir(join(this.root, session));
		} catch {
			return [];
		}
		const found = await Promise.all(
			names
				.filter(name => name.endsWith(".html") && ID_PATTERN.test(name.slice(0, -5)))
				.map(async name => this.load(session, name.slice(0, -5))),
		);
		return found
			.filter((item): item is StoredArtifact => item !== undefined)
			.map(({ id, title, updatedAt }) => ({ id, title, updatedAt }))
			.sort((a, b) => b.updatedAt - a.updatedAt);
	}

	/** Session directories other than `except`, most recently modified first. */
	async otherSessions(except: string): Promise<string[]> {
		let names: string[];
		try {
			names = await readdir(this.root);
		} catch {
			return [];
		}
		const dated = await Promise.all(
			names
				.filter(name => name !== except)
				.map(async name => ({ name, at: (await stat(join(this.root, name)).catch(() => undefined))?.mtimeMs ?? 0 })),
		);
		return dated
			.filter(entry => entry.at > 0)
			.sort((a, b) => b.at - a.at)
			.map(entry => entry.name);
	}

	/** The artifact from `session`, else the most recently updated copy from any earlier session. */
	async find(id: string, session: string): Promise<StoredArtifact | undefined> {
		const own = await this.load(session, id);
		if (own) return own;
		const others = (await Promise.all((await this.otherSessions(session)).map(name => this.load(name, id)))).filter(
			(item): item is StoredArtifact => item !== undefined,
		);
		return others.sort((a, b) => b.updatedAt - a.updatedAt)[0];
	}
}
