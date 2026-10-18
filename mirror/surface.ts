// Chooses where an artifact is shown: inline in the transcript (the mirror engine) or in a browser block.

import type { MirrorModel } from "./model";
import { runtimeReasons, staticReasons } from "./preflight";
import type { MirrorSession } from "./session";

export type SurfaceRequest = "auto" | "inline" | "block";

/** How long a page gets to report its first tree (ms). */
const READY_TIMEOUT_MS = 6000;
/** How long the preflight lets the page's scripts run before it measures (ms). */
export const SETTLE_MS = 800;

/** The part of a running page the preflight reads. */
export type Probed = Pick<MirrorSession, "ready" | "stats" | "report" | "sheet"> & { model: MirrorModel };

export interface Capability {
	/** Why inline cannot be used here, or undefined when it can. */
	unavailable?: string;
}

export type Choice =
	| { surface: "inline"; why: string; warnings: string[]; kept: OpenedPage }
	| { surface: "block"; why: string };

/** A page started for the preflight; `discard` closes it. */
export interface OpenedPage {
	session: Probed;
	discard: () => Promise<void>;
}

export interface ChooseInput {
	requested: SurfaceRequest;
	html: string;
	capability: Capability;
	/** Starts the page in the engine; rejects when the engine cannot start. */
	open: () => Promise<OpenedPage>;
	sleep?: (ms: number) => Promise<void>;
}

function timeout<T>(promise: Promise<T>, ms: number, what: string): Promise<T> {
	let timer: Timer | undefined;
	const limit = new Promise<never>((_, reject) => {
		timer = setTimeout(() => reject(new Error(what)), ms);
	});
	return Promise.race([promise, limit]).finally(() => clearTimeout(timer));
}

/**
 * `block` and `auto` never start a page needlessly: a block request skips the engine, and `auto` skips it when the
 * HTML alone rules the mirror out. Otherwise the page runs in the engine, is measured, and either stays (inline,
 * `kept` is the page) or is closed (block). `inline` stays inline whatever the measurement says, and reports it as warnings.
 */
export async function chooseSurface(input: ChooseInput): Promise<Choice> {
	const { requested, html, capability } = input;
	if (requested === "block") return { surface: "block", why: "requested" };
	if (capability.unavailable) {
		return { surface: "block", why: `${requested === "inline" ? "inline was requested but " : ""}inline needs ${capability.unavailable}` };
	}
	const fixed = staticReasons(html);
	if (requested === "auto" && fixed.length > 0) return { surface: "block", why: `the page ${fixed.join("; ")}` };

	let opened: OpenedPage;
	try {
		opened = await input.open();
	} catch (error) {
		return { surface: "block", why: `the mirror engine could not start (${(error as Error).message})` };
	}
	const sleep = input.sleep ?? Bun.sleep;
	try {
		await timeout(opened.session.ready, READY_TIMEOUT_MS, "the page did not report within 6 s");
		await sleep(SETTLE_MS);
	} catch (error) {
		await opened.discard();
		return { surface: "block", why: `the page could not be mirrored (${(error as Error).message})` };
	}
	const measured = runtimeReasons(opened.session);
	const reasons = [...fixed, ...measured];
	if (requested === "auto" && measured.length > 0) {
		await opened.discard();
		return { surface: "block", why: `the page ${measured.join("; ")}` };
	}
	if (requested === "inline") return { surface: "inline", why: "requested", warnings: reasons, kept: opened };
	return { surface: "inline", why: "a form, table or chart page within the card's limits", warnings: [], kept: opened };
}
