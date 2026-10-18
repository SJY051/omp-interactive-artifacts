// One serialized, size-capped audit stream per session. Entries are already minimized by the bridge.
import { appendFile, mkdir, rename, rm, stat } from "node:fs/promises";
import { dirname } from "node:path";

export interface AuditLimits {
	queueEntries: number;
	queueBytes: number;
	fileBytes: number;
}

export const AUDIT_LIMITS: AuditLimits = { queueEntries: 128, queueBytes: 128 * 1024, fileBytes: 1024 * 1024 };

interface Pending {
	line: string;
	bytes: number;
	count: number;
	key?: string;
}

export class AuditLog {
	readonly #queue: Pending[] = [];
	readonly #path: string;
	readonly #limits: AuditLimits;
	#queuedBytes = 0;
	#rejected = 0;
	#running: Promise<void> | undefined;
	#fileBytes: number | undefined;
	#failed = false;

	constructor(path: string, limits: AuditLimits = AUDIT_LIMITS) {
		this.#path = path;
		this.#limits = limits;
	}

	append(entry: Record<string, unknown>): void {
		if (this.#failed) return;
		const line = JSON.stringify(entry);
		const bytes = Buffer.byteLength(line) + 1;
		if (bytes > this.#limits.fileBytes || bytes > this.#limits.queueBytes) {
			this.#rejected++;
			return;
		}
		const key = entry.kind === "rejected" ? JSON.stringify({ ...entry, t: undefined }) : undefined;
		const last = this.#queue.at(-1);
		if (key && last?.key === key) {
			last.count++;
			return;
		}
		if (this.#queue.length >= this.#limits.queueEntries || this.#queuedBytes + bytes > this.#limits.queueBytes) {
			this.#rejected++;
			return;
		}
		this.#queue.push({ line, bytes, count: 1, key });
		this.#queuedBytes += bytes;
		this.#start();
	}

	async flush(): Promise<void> {
		while (this.#running) await this.#running;
		// Rejections need one final aggregate even when the queue is otherwise empty.
		if (this.#rejected && !this.#failed) {
			this.#enqueueSummary();
			while (this.#running) await this.#running;
		}
	}

	#enqueueSummary(): void {
		if (!this.#rejected || this.#queue.length >= this.#limits.queueEntries) return;
		const count = this.#rejected;
		const line = JSON.stringify({ kind: "state", detail: "audit queue rejected entries", count });
		const bytes = Buffer.byteLength(line) + 1;
		if (this.#queuedBytes + bytes > this.#limits.queueBytes) return;
		this.#rejected = 0;
		this.#queue.push({ line, bytes, count: 1 });
		this.#queuedBytes += bytes;
		this.#start();
	}

	#start(): void {
		if (this.#running) return;
		this.#running = this.#drain().finally(() => {
			this.#running = undefined;
			if (this.#queue.length > 0 && !this.#failed) this.#start();
		});
	}

	async #drain(): Promise<void> {
		try {
			await mkdir(dirname(this.#path), { recursive: true });
			this.#fileBytes ??= (await stat(this.#path).catch(() => undefined))?.size ?? 0;
			while (this.#queue.length) {
				const entry = this.#queue.shift()!;
				this.#queuedBytes -= entry.bytes;
				const data = entry.count === 1 ? `${entry.line}\n` : `${JSON.stringify({ ...JSON.parse(entry.line), count: entry.count })}\n`;
				const size = Buffer.byteLength(data);
				if (size > this.#limits.fileBytes) { this.#rejected += entry.count; continue; }
				if (this.#fileBytes + size > this.#limits.fileBytes) {
					await rm(`${this.#path}.2`, { force: true });
					await rename(`${this.#path}.1`, `${this.#path}.2`).catch(error => { if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error; });
					await rename(this.#path, `${this.#path}.1`).catch(error => { if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error; });
					this.#fileBytes = 0;
				}
				await appendFile(this.#path, data);
				this.#fileBytes += size;
			}
		} catch {
			this.#failed = true;
			this.#queue.length = 0;
			this.#queuedBytes = 0;
			console.error("[interactive-artifacts] audit log write failed; subsequent entries discarded");
		}
	}
}
