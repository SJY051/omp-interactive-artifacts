// Thin wrapper over `tern browser '<json>'`: one op in, the `ok` payload out.

import { existsSync } from "node:fs";

const APP_BINARY = "/Applications/Tern.app/Contents/MacOS/tern";

export class TernError extends Error {
	constructor(
		readonly kind: string,
		message: string,
	) {
		super(message);
		this.name = "TernError";
	}
}

export interface TernEnv {
	bin: string;
	/** Block id of the pane the agent runs in; browser blocks open over it. */
	pane: number;
}

/** The Tern binary and owning pane, or why there is none. */
export function detectTern(env: Record<string, string | undefined> = process.env): TernEnv | { unavailable: string } {
	const pane = Number(env.TERN_PANE);
	if (!env.TERN_PANE || !Number.isSafeInteger(pane)) return { unavailable: "TERN_PANE is not set (not running in a Tern pane)" };
	const bin = Bun.which("tern") ?? (existsSync(APP_BINARY) ? APP_BINARY : undefined);
	if (!bin) return { unavailable: "the tern binary is not on PATH and Tern.app is not in /Applications" };
	return { bin, pane };
}

/** Runs one browser op and returns its `ok` payload; rejects with TernError. */
export async function ternOp(
	tern: TernEnv,
	op: Record<string, unknown>,
	timeoutSeconds = 15,
): Promise<Record<string, unknown>> {
	const proc = Bun.spawn([tern.bin, "browser", JSON.stringify(op), "--timeout", String(timeoutSeconds)], {
		stdout: "pipe",
		stderr: "pipe",
		env: process.env,
	});
	const [out, err, code] = await Promise.all([proc.stdout.text(), proc.stderr.text(), proc.exited]);
	let parsed: { ok?: Record<string, unknown>; error?: { kind?: string; message?: string } } | undefined;
	try {
		parsed = JSON.parse(out);
	} catch {
		// Not JSON: fall through to the generic failure below.
	}
	if (parsed?.ok) return parsed.ok;
	if (parsed?.error) throw new TernError(parsed.error.kind ?? "error", parsed.error.message ?? "tern browser failed");
	if (code === 124) throw new TernError("timeout", `tern browser ${String(op.op)} timed out after ${timeoutSeconds}s`);
	throw new TernError("failed", `tern browser ${String(op.op)} exited ${code}: ${(err || out).trim().slice(0, 300)}`);
}

/** Runs a plain `tern` command (focus, dock, ls …) and returns its stdout; rejects with TernError on a non-zero exit. */
export async function ternCli(tern: TernEnv, args: string[], timeoutSeconds = 5): Promise<string> {
	const proc = Bun.spawn([tern.bin, ...args], { stdout: "pipe", stderr: "pipe", env: process.env });
	const timer = setTimeout(() => proc.kill(), timeoutSeconds * 1000);
	try {
		const [out, err, code] = await Promise.all([proc.stdout.text(), proc.stderr.text(), proc.exited]);
		if (code !== 0) throw new TernError("failed", `tern ${args[0]} exited ${code}: ${(err || out).trim().slice(0, 300)}`);
		return out;
	} finally {
		clearTimeout(timer);
	}
}

/** The appearance Tern is showing now (`tern ctl state`), which resolves a "System" theme setting; undefined when it cannot be read. */
export async function ternAppearance(tern: TernEnv): Promise<"dark" | "light" | undefined> {
	try {
		const state: { theme?: unknown } = JSON.parse(await ternCli(tern, ["ctl", "state"], 3));
		return state.theme === "dark" || state.theme === "light" ? state.theme : undefined;
	} catch {
		return undefined;
	}
}
