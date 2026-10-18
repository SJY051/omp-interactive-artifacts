// What the running OMP offers for drawing tool views on a Tern surface. Probed from the runtime, never
// from a version string: `node`/`text` have shipped for a while, `el` (and the `onNativeEvent` hook
// that goes with it) only on builds with interactive tool views.

export interface DescribeSupport {
	node: (kind: string, props?: Record<string, unknown>, children?: readonly unknown[], key?: string) => unknown;
	text: (content: string, props?: Record<string, unknown>) => unknown;
	/** Present only where interactive tool views exist. */
	el?: (tag: string, props?: Record<string, unknown>, children?: readonly unknown[], key?: string, sheet?: string) => unknown;
	/** Whether a Tern surface is live now; undefined when this OMP cannot tell. */
	rendering?: () => boolean;
	/** The text-field (`input`/`editor`) and byte-image nodes the inline mirror needs. */
	mirror?: boolean;
}

let cached: Promise<DescribeSupport | undefined> | undefined;

export function loadDescribeSupport(): Promise<DescribeSupport | undefined> {
	cached ??= (async () => {
		try {
			// Dynamic: these host modules exist only inside OMP, not under `bun test`.
			const describe: Record<string, unknown> = await import("@oh-my-pi/pi-tui/native/describe");
			if (typeof describe.node !== "function" || typeof describe.text !== "function") return undefined;
			const support: DescribeSupport = {
				node: describe.node as DescribeSupport["node"],
				text: describe.text as DescribeSupport["text"],
			};
			if (typeof describe.el === "function") support.el = describe.el as DescribeSupport["el"];
			// Text fields and byte images shipped together with the `inputField` and `imageBytes` builders: their presence is the probe.
			support.mirror = typeof describe.inputField === "function" && typeof describe.imageBytes === "function";
			try {
				const state: Record<string, unknown> = await import("@oh-my-pi/pi-tui/native/state");
				if (typeof state.isNativeRendering === "function") support.rendering = state.isNativeRendering as () => boolean;
			} catch {
				// Older builds have no state module: the flag stays unknown.
			}
			return support;
		} catch {
			return undefined;
		}
	})();
	return cached;
}
