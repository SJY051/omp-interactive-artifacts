// A locked-down headless Chrome and a minimal DevTools Protocol client.
//
// Transport is --remote-debugging-pipe (fd 3: commands in, fd 4: replies out, NUL-terminated JSON), so no TCP
// debug port exists and Chrome exits by itself when this process dies (the kernel closes the pipe).
// The binary is the Chrome for Testing that OMP's browser tool installs under ~/.omp/puppeteer.

import { existsSync, readdirSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import type { Subprocess } from "bun";

export type Json = Record<string, unknown>;

type Pending = { resolve: (value: never) => void; reject: (error: Error) => void; method: string };
type Handler = (params: Json, sessionId?: string) => void;

/** Longest a CDP command may take before it is treated as lost (ms). */
const COMMAND_TIMEOUT_MS = 20_000;

export class CDP {
	#id = 0;
	#pending = new Map<number, Pending>();
	#handlers = new Map<string, Set<Handler>>();
	#closed = false;
	readonly #writer: { write(data: string): unknown; flush(): unknown; end(): unknown };

	constructor(writer: { write(data: string): unknown; flush(): unknown; end(): unknown }, readable: ReadableStream<Uint8Array>) {
		this.#writer = writer;
		void this.#read(readable);
	}

	get closed(): boolean {
		return this.#closed;
	}

	async #read(readable: ReadableStream<Uint8Array>): Promise<void> {
		const decoder = new TextDecoder();
		let buffer = "";
		try {
			for await (const chunk of readable) {
				buffer += decoder.decode(chunk, { stream: true });
				for (let end = buffer.indexOf("\0"); end >= 0; end = buffer.indexOf("\0")) {
					const text = buffer.slice(0, end);
					buffer = buffer.slice(end + 1);
					try {
						this.#dispatch(JSON.parse(text));
					} catch {
						// A malformed message from Chrome is dropped; the commands waiting on it time out.
					}
				}
			}
		} catch {
			// The pipe broke: the same as Chrome exiting.
		} finally {
			this.#closed = true;
			for (const pending of this.#pending.values()) pending.reject(new Error("CDP closed"));
			this.#pending.clear();
			for (const handler of this.#handlers.get("cdp.closed") ?? []) handler({});
		}
	}

	#dispatch(message: { id?: number; result?: unknown; error?: { message: string }; method?: string; params?: Json; sessionId?: string }): void {
		if (message.id !== undefined) {
			const pending = this.#pending.get(message.id);
			if (!pending) return;
			this.#pending.delete(message.id);
			if (message.error) pending.reject(new Error(`${pending.method}: ${message.error.message}`));
			else pending.resolve(message.result as never);
		} else if (message.method) {
			for (const handler of this.#handlers.get(message.method) ?? []) handler(message.params ?? {}, message.sessionId);
		}
	}

	send<T = Json>(method: string, params: object = {}, sessionId?: string): Promise<T> {
		if (this.#closed) return Promise.reject(new Error("CDP closed"));
		const id = ++this.#id;
		const { promise, resolve, reject } = Promise.withResolvers<T>();
		const timer = setTimeout(() => {
			if (this.#pending.delete(id)) reject(new Error(`${method}: timed out`));
		}, COMMAND_TIMEOUT_MS);
		this.#pending.set(id, {
			resolve: value => {
				clearTimeout(timer);
				resolve(value as T);
			},
			reject: error => {
				clearTimeout(timer);
				reject(error);
			},
			method,
		});
		try {
			this.#writer.write(`${JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) })}\0`);
			this.#writer.flush();
		} catch (error) {
			this.#pending.delete(id);
			clearTimeout(timer);
			reject(error as Error);
		}
		return promise;
	}

	/** Subscribes to a CDP event; the pseudo event `cdp.closed` fires once when the pipe ends. Returns the unsubscribe. */
	on(method: string, handler: Handler): () => void {
		let set = this.#handlers.get(method);
		if (!set) this.#handlers.set(method, (set = new Set()));
		set.add(handler);
		return () => set.delete(handler);
	}

	close(): void {
		try {
			this.#writer.end();
		} catch {
			// Already closed.
		}
	}
}

export interface Chrome {
	cdp: CDP;
	pid: number;
	/** Binary that was launched. */
	executable: string;
	/** Process id plus every descendant's, for footprint measurements. */
	stop(): Promise<void>;
	exited: Promise<number>;
}

export class ChromeMissingError extends Error {
	constructor(searched: string) {
		super(
			`Chrome for Testing was not found (looked in ${searched}). ` +
				"Run the OMP browser tool once so it installs Chromium under ~/.omp/puppeteer, or set PUPPETEER_EXECUTABLE_PATH.",
		);
		this.name = "ChromeMissingError";
	}
}

function versionKey(name: string): number[] {
	return (/(\d+(?:\.\d+)*)$/.exec(name)?.[1] ?? "0").split(".").map(Number);
}

function newestFirst(a: string, b: string): number {
	const [x, y] = [versionKey(a), versionKey(b)];
	for (let i = 0; i < Math.max(x.length, y.length); i++) {
		const d = (y[i] ?? 0) - (x[i] ?? 0);
		if (d !== 0) return d;
	}
	return 0;
}

/** Where OMP keeps its browser cache; the host's own helper when it is loadable, else the default path. */
async function puppeteerDir(): Promise<string> {
	try {
		const utils: Record<string, unknown> = await import("@oh-my-pi/pi-utils");
		if (typeof utils.getPuppeteerDir === "function") return String((utils.getPuppeteerDir as () => string)());
	} catch {
		// Not inside OMP (tests, plain Bun): the default location.
	}
	return join(homedir(), ".omp", "puppeteer");
}

const BINARY_IN_BUILD: readonly string[] = [
	"chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
	"chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
	"chrome-linux64/chrome",
];

/**
 * The Chrome for Testing binary: PUPPETEER_EXECUTABLE_PATH, else the newest build under
 * <puppeteer dir>/chrome/<platform>-<version>/. Throws {@link ChromeMissingError} naming what was searched.
 */
export async function resolveChrome(env: Record<string, string | undefined> = process.env, root?: string): Promise<string> {
	const explicit = env.PUPPETEER_EXECUTABLE_PATH;
	if (explicit && existsSync(explicit)) return explicit;
	const base = join(root ?? (await puppeteerDir()), "chrome");
	let builds: string[] = [];
	try {
		builds = readdirSync(base).sort(newestFirst);
	} catch {
		// No cache directory: reported below.
	}
	for (const build of builds) {
		for (const relative of BINARY_IN_BUILD) {
			const candidate = join(base, build, relative);
			if (existsSync(candidate)) return candidate;
		}
	}
	throw new ChromeMissingError(explicit ? `${explicit}, ${base}` : base);
}

/** Flags: no external network (DNS blackholed except loopback, dead SOCKS proxy for IP literals), no background services. */
export function chromeArgs(profile: string): string[] {
	return [
		"--headless=new",
		"--remote-debugging-pipe",
		`--user-data-dir=${profile}`,
		"--no-first-run",
		"--no-default-browser-check",
		"--disable-extensions",
		"--disable-background-networking",
		"--disable-component-update",
		"--disable-sync",
		"--disable-default-apps",
		"--disable-breakpad",
		"--hide-scrollbars",
		"--mute-audio",
		"--force-device-scale-factor=1",
		"--host-resolver-rules=MAP * ~NOTFOUND , EXCLUDE 127.0.0.1",
		"--proxy-server=socks5://127.0.0.1:9",
		"--proxy-bypass-list=127.0.0.1",
		// One site and no GPU: site isolation buys nothing when every page is on the loopback origin.
		"--disable-gpu",
		"--disable-site-isolation-trials",
		"--disable-features=IsolateOrigins,site-per-process,Translate,MediaRouter,OptimizationHints",
		"--disable-renderer-backgrounding",
		"about:blank",
	];
}

export async function launchChrome(executable?: string): Promise<Chrome> {
	const binary = executable ?? (await resolveChrome());
	const profile = await mkdtemp(join(tmpdir(), "omp-mirror-chrome-"));
	let proc: Subprocess<"pipe", "pipe", "ignore">;
	try {
		// Chrome wants fd 3 (commands in) and fd 4 (replies out); Bun wires only stdin/stdout, so a shell maps them.
		proc = Bun.spawn(["/bin/sh", "-c", 'exec "$0" "$@" 3<&0 4>&1 </dev/null >/dev/null', binary, ...chromeArgs(profile)], {
			stdin: "pipe",
			stdout: "pipe",
			stderr: "ignore",
		});
	} catch (error) {
		await rm(profile, { recursive: true, force: true });
		throw error;
	}
	const cdp = new CDP(proc.stdin, proc.stdout);
	try {
		await cdp.send("Browser.getVersion");
	} catch (error) {
		cdp.close();
		proc.kill();
		await rm(profile, { recursive: true, force: true });
		throw new Error(`Chrome did not start: ${(error as Error).message}`);
	}
	return {
		cdp,
		pid: proc.pid,
		executable: binary,
		exited: proc.exited,
		async stop() {
			try {
				await Promise.race([cdp.send("Browser.close"), Bun.sleep(1500)]);
			} catch {
				// Already gone.
			}
			cdp.close();
			const killer = setTimeout(() => proc.kill(), 2000);
			await proc.exited;
			clearTimeout(killer);
			await rm(profile, { recursive: true, force: true });
		},
	};
}
