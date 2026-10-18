// The mirror engine: one headless Chrome per OMP process, started on the first inline card and stopped after
// it has been idle, with one {@link MirrorSession} (target) per card.

import { type Chrome, launchChrome } from "./chrome";
import { MirrorSession, type SessionOptions } from "./session";

/** Chrome is stopped this long after the last card closed (ms). */
export const CHROME_IDLE_MS = 60_000;

export interface EngineOptions {
	idleMs?: number;
	/** Test seam: how Chrome is started. */
	launch?: () => Promise<Chrome>;
}

export class MirrorEngine {
	readonly #idleMs: number;
	readonly #launch: () => Promise<Chrome>;
	readonly #sessions = new Set<MirrorSession>();
	#chrome: Promise<Chrome> | undefined;
	#idleTimer: Timer | undefined;
	#stopping: Promise<void> | undefined;

	constructor(options: EngineOptions = {}) {
		this.#idleMs = options.idleMs ?? CHROME_IDLE_MS;
		this.#launch = options.launch ?? (() => launchChrome());
	}

	get sessionCount(): number {
		return this.#sessions.size;
	}

	/** Whether Chrome is running now. */
	get running(): boolean {
		return this.#chrome !== undefined;
	}

	/** The running Chrome, for diagnostics (undefined when stopped or still starting). */
	async chromePid(): Promise<number | undefined> {
		return (await this.#chrome)?.pid;
	}

	#browser(): Promise<Chrome> {
		clearTimeout(this.#idleTimer);
		this.#idleTimer = undefined;
		if (!this.#chrome) {
			const starting = this.#launch().then(chrome => {
				void chrome.exited.then(() => {
					// Chrome went away by itself: forget it so the next card starts a new one.
					if (this.#chrome === starting) this.#chrome = undefined;
				});
				return chrome;
			});
			this.#chrome = starting;
			starting.catch(() => {
				if (this.#chrome === starting) this.#chrome = undefined;
			});
		}
		return this.#chrome;
	}

	/** Opens a page. Rejects when Chrome cannot be started (the caller falls back to a browser block). */
	async open(options: SessionOptions): Promise<MirrorSession> {
		if (this.#stopping) await this.#stopping;
		const chrome = await this.#browser();
		const session = new MirrorSession(chrome.cdp, {
			...options,
			onClosed: reason => {
				this.#sessions.delete(session);
				this.#armIdle();
				options.onClosed?.(reason);
			},
		});
		this.#sessions.add(session);
		try {
			await session.start();
		} catch (error) {
			await session.close();
			throw error;
		}
		return session;
	}

	#armIdle(): void {
		if (this.#sessions.size > 0 || !this.#chrome) return;
		clearTimeout(this.#idleTimer);
		this.#idleTimer = setTimeout(() => void this.stopBrowser(), this.#idleMs);
		this.#idleTimer.unref();
	}

	/** Stops Chrome (idle shutdown). Sessions still open are closed first. */
	async stopBrowser(): Promise<void> {
		clearTimeout(this.#idleTimer);
		this.#idleTimer = undefined;
		const chrome = this.#chrome;
		if (!chrome) return;
		this.#chrome = undefined;
		const stopping = (async () => {
			await Promise.all([...this.#sessions].map(session => session.close("shutdown")));
			await (await chrome.catch(() => undefined))?.stop();
		})();
		this.#stopping = stopping;
		try {
			await stopping;
		} finally {
			if (this.#stopping === stopping) this.#stopping = undefined;
		}
	}

	/** Session end: every page closed, Chrome stopped. */
	shutdown(): Promise<void> {
		return this.stopBrowser();
	}
}
