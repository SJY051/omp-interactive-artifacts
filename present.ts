// Showing a page in a Tern browser block, with capture and a host allowlist.

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { TernError, type TernEnv, ternCli, ternOp } from "./tern";

/** The only host a page may navigate to by default; everything else is blocked natively by Tern. */
export const LOOPBACK_HOSTS: readonly string[] = ["127.0.0.1"];
const LOAD_TIMEOUT_MS = 10_000;
/** Pause after load so late script errors reach the server before the capture. */
export const SETTLE_MS = 1000;
/** Longest edge of the returned screenshot. */
const CAPTURE_MAX_EDGE = 1000;
/** Narrowest agent pane (terminal columns) that still reads well at half width; a narrower one keeps a floating block. */
export const DOCK_MIN_COLUMNS = 120;

/** Where a newly opened block went: docked beside the agent's pane, or floating over a corner of it. */
export type Placement = "split-right" | "pip";

export interface TernPresentation {
	block: number;
	image?: { data: string; mimeType: string };
	/** The capture as Tern produced it (base64 PNG), for the transcript preview. */
	full?: string;
	/** Why the screenshot is missing, when it is. */
	captureNote?: string;
	/** Where the block sits when this call opened it; undefined when it reused one that was already showing. */
	placement?: Placement;
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
	const { promise, resolve } = Promise.withResolvers<void>();
	const timer = setTimeout(resolve, ms);
	signal?.addEventListener(
		"abort",
		() => {
			clearTimeout(timer);
			resolve();
		},
		{ once: true },
	);
	return promise;
}

/**
 * Whether the browser block still exists. Only Tern's own "not found" means gone: any other failure
 * (Tern busy, timeout) throws instead of reading as "closed", so a slow answer never makes a second block.
 */
export async function blockAlive(tern: TernEnv, block: number): Promise<boolean> {
	try {
		await ternOp(tern, { op: "state", block });
		return true;
	} catch (error) {
		if (error instanceof TernError && error.kind === "not_found") return false;
		throw error;
	}
}

/** Every browser block of the window (the user's too) with whether it is showing; one Tern call. */
export async function browserBlocks(tern: TernEnv): Promise<Map<number, { shown: boolean }>> {
	const blocks = new Map<number, { shown: boolean }>();
	const listed = (await ternOp(tern, { op: "blocks" })).blocks;
	if (!Array.isArray(listed)) return blocks;
	for (const entry of listed) {
		if (typeof entry === "object" && entry !== null && "block" in entry && typeof entry.block === "number") {
			blocks.set(entry.block, { shown: "shown" in entry && entry.shown === true });
		}
	}
	return blocks;
}

/**
 * Columns of the agent's pane. `tern ctl state` is the window's live layout (visible tab only); `tern ls`
 * covers a pane in a tab that is not showing, but keeps the width of the last time the pane was split
 * (observed: 78 columns after a docked block had been closed, with the pane 160 wide again), so the live
 * figure wins when both exist. Undefined when neither can be read.
 */
async function paneColumns(tern: TernEnv): Promise<number | undefined> {
	try {
		const state: { panes?: Array<{ id?: number; cols?: number }> } = JSON.parse(await ternCli(tern, ["ctl", "state"], 3));
		const pane = state.panes?.find(entry => entry.id === tern.pane);
		if (typeof pane?.cols === "number") return pane.cols;
	} catch {
		// No control endpoint answered: fall back to the listing.
	}
	try {
		const listing: { sessions?: Array<{ tabs?: Array<{ blocks?: Array<{ id?: number; cols?: number }> }> }> } = JSON.parse(await ternCli(tern, ["ls", "--json"]));
		for (const session of listing.sessions ?? []) {
			for (const tab of session.tabs ?? []) {
				for (const block of tab.blocks ?? []) {
					if (block.id === tern.pane && typeof block.cols === "number") return block.cols;
				}
			}
		}
	} catch {
		// Unreadable listing: the block stays where `open` put it.
	}
	return undefined;
}

/**
 * Opens a block beside the agent's pane, restricted to `hosts` before any page loads. It is docked as a
 * split to the right (nothing of the conversation is covered) when the pane is wide enough, else it floats
 * over the top-right corner, which stays clear of the composer at the bottom. Tern's browser `open` has no
 * split option, only `corner`; `tern dock BLOCK right` turns the floating block into a split.
 */
async function openBlock(tern: TernEnv, hosts: readonly string[]): Promise<{ block: number; placement: Placement }> {
	let block: number;
	try {
		// about:blank first: the allowlist must be in force before model-written script runs.
		const opened = await ternOp(tern, { op: "open", owner: tern.pane, url: "about:blank", corner: "tr" });
		block = Number(opened.block);
	} catch (error) {
		throw new TernError(
			error instanceof TernError ? error.kind : "failed",
			`Tern could not open a browser block over this pane: ${(error as Error).message}. Is the Tern window still open?`,
		);
	}
	try {
		await ternOp(tern, { op: "allow", block, hosts });
	} catch (error) {
		await ternOp(tern, { op: "close", block }).catch(() => undefined);
		throw new TernError("failed", `Tern did not apply the host allowlist, so the block was closed: ${(error as Error).message}`);
	}
	const columns = await paneColumns(tern);
	if (columns !== undefined && columns >= DOCK_MIN_COLUMNS) {
		try {
			await ternCli(tern, ["dock", String(block), "right"]);
			return { block, placement: "split-right" };
		} catch {
			// Tern would not dock it here (a zoomed tab, say): it keeps floating.
		}
	}
	return { block, placement: "pip" };
}

async function waitForLoad(tern: TernEnv, block: number, urlMarker: string, signal?: AbortSignal): Promise<void> {
	const deadline = Date.now() + LOAD_TIMEOUT_MS;
	let last: Record<string, unknown> = {};
	while (Date.now() < deadline) {
		if (signal?.aborted) throw new Error("cancelled");
		try {
			last = await ternOp(tern, { op: "state", block });
		} catch (error) {
			throw new TernError("block_closed", `The browser block ${block} went away while loading (${(error as Error).message}); call show again to reopen it.`);
		}
		if (last.error) throw new TernError("load_error", `The page failed to load: ${JSON.stringify(last.error)}`);
		if (last.loading === false && String(last.url).includes(urlMarker)) return;
		await sleep(100, signal);
	}
	throw new TernError("load_timeout", `The page did not finish loading within ${LOAD_TIMEOUT_MS / 1000}s (url ${String(last.url)}, loading ${String(last.loading)}).`);
}

/** Scales a base64 PNG down with macOS sips; returns the input when sips is unavailable or fails. */
async function downscale(base64: string, width: number, height: number): Promise<string> {
	if (Math.max(width, height) <= CAPTURE_MAX_EDGE) return base64;
	const sips = Bun.which("sips");
	if (!sips) return base64;
	const dir = await mkdtemp(join(tmpdir(), "omp-artifact-"));
	try {
		const input = join(dir, "in.png");
		const output = join(dir, "out.png");
		await Bun.write(input, Buffer.from(base64, "base64"));
		const proc = Bun.spawn([sips, "-Z", String(CAPTURE_MAX_EDGE), input, "--out", output], { stdout: "ignore", stderr: "ignore" });
		if ((await proc.exited) !== 0) return base64;
		return Buffer.from(await Bun.file(output).arrayBuffer()).toString("base64");
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
}

export interface PresentOptions {
	/** Hosts Tern may navigate to; loopback only by default. */
	hosts?: readonly string[];
	/** Skip the screenshot (MCP apps, whose agent-facing result is text). */
	capture?: boolean;
	/** Resolves when the page has finished its own startup (e.g. the MCP handshake); waited for up to `readyMs` after load. */
	ready?: Promise<unknown>;
	readyMs?: number;
}

/**
 * Loads `url` in the page's block (opening one when it has none or it was
 * closed), waits for load plus a settle window, and captures the page.
 */
export async function presentInTern(
	tern: TernEnv,
	current: number | undefined,
	url: string,
	urlMarker: string,
	signal?: AbortSignal,
	options: PresentOptions = {},
): Promise<TernPresentation> {
	const hosts = options.hosts ?? LOOPBACK_HOSTS;
	const reuse = current !== undefined && (await blockAlive(tern, current));
	const opened = reuse ? undefined : await openBlock(tern, hosts);
	const block = reuse ? (current as number) : opened!.block;
	const placement = opened?.placement;
	try {
		// A reused block keeps its old allowlist until it is replaced, so the new page's hosts are applied before it loads.
		if (reuse) await ternOp(tern, { op: "allow", block, hosts });
		await ternOp(tern, { op: "goto", block, url });
		await waitForLoad(tern, block, urlMarker, signal);
	} catch (error) {
		if (!reuse) await ternOp(tern, { op: "close", block }).catch(() => undefined);
		throw error;
	}
	if (options.ready) await Promise.race([options.ready, sleep(options.readyMs ?? 4000, signal)]);
	await sleep(options.ready ? 300 : SETTLE_MS, signal);
	if (options.capture === false) return { block, placement };
	try {
		const shot = await ternOp(tern, { op: "capture", block });
		const data = await downscale(String(shot.data), Number(shot.width), Number(shot.height));
		return { block, placement, image: { data, mimeType: String(shot.mime ?? "image/png") }, full: String(shot.data) };
	} catch (error) {
		return { block, placement, captureNote: `capture failed: ${(error as Error).message}` };
	}
}

/** A fresh capture of a block that is already showing, as base64 PNG. */
export async function captureBlock(tern: TernEnv, block: number): Promise<string> {
	return String((await ternOp(tern, { op: "capture", block })).data);
}

/** Brings a block to the front (`tern focus`; the browser ops have no focus call). */
export async function focusBlock(tern: TernEnv, block: number): Promise<void> {
	await ternCli(tern, ["focus", String(block)]);
}

/** Replaces the CSS of a showing page's `#omp-theme` style (its tokens, fonts and background); false when the page has none. */
export async function rethemeBlock(tern: TernEnv, block: number, css: string): Promise<boolean> {
	const result = await ternOp(tern, {
		op: "eval",
		block,
		function: "(css) => { const style = document.getElementById('omp-theme'); if (!style) return false; style.textContent = css; return true; }",
		args: [css],
	});
	return result.value === true;
}

/** Opens a user-approved MCP link in the default browser (macOS `open`); never used for automatic view presentation. */
export async function openExternally(url: string): Promise<void> {
	if (process.platform !== "darwin") throw new Error(`no macOS 'open' on ${process.platform}; open ${url} manually`);
	const proc = Bun.spawn(["open", url], { stdout: "ignore", stderr: "pipe" });
	const [err, code] = await Promise.all([proc.stderr.text(), proc.exited]);
	if (code !== 0) throw new Error(`open ${url} failed: ${err.trim()}`);
}

export async function closeBlock(tern: TernEnv, block: number, timeoutSeconds = 5): Promise<void> {
	await ternOp(tern, { op: "close", block }, timeoutSeconds);
}

export { sleep };
