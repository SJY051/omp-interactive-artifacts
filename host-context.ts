// What the host tells a view about itself: theme, standardized CSS variables (SEP-1865 "Theming"),
// display mode and sizing. The variables are derived from the same OMP theme tokens artifacts use.

import type { ToolDef } from "./app-bridge";
import type { DeclaredCsp } from "./csp";
import { DEFAULT_MONO_FONTS, DEFAULT_UI_FONTS, lookOf, type Palette, resolvePalette } from "./page";

export const HOST_INFO = { name: "omp-interactive-artifacts", version: "1.0.0" } as const;

function channel(hex: string, at: number): number {
	return Number.parseInt(hex.slice(at, at + 2), 16);
}

/** `a` blended toward `b` by `t` (0–1), as #rrggbb. */
export function mix(a: string, b: string, t: number): string {
	const part = (at: number) => Math.round(channel(a, at) * (1 - t) + channel(b, at) * t);
	return `#${[1, 3, 5].map(at => part(at).toString(16).padStart(2, "0")).join("")}`;
}

/** The standardized `--color-*`, `--font-*`, `--border-*` and `--shadow-*` variables for the live OMP theme. */
export function styleVariables(palette?: Palette): Record<string, string> {
	const { tokens: t } = resolvePalette(palette);
	const look = lookOf(palette);
	const fg = t.fg!;
	const surface = t.surface!;
	const tint = (color: string) => mix(surface, color, 0.16);
	const variables: Record<string, string> = {
		"--color-background-primary": surface,
		"--color-background-secondary": mix(surface, fg, 0.06),
		"--color-background-tertiary": mix(surface, fg, 0.12),
		"--color-background-inverse": fg,
		"--color-background-ghost": "transparent",
		"--color-background-info": tint(t.accent!),
		"--color-background-danger": tint(t.error!),
		"--color-background-success": tint(t.success!),
		"--color-background-warning": tint(t.warning!),
		"--color-background-disabled": mix(surface, fg, 0.04),
		"--color-text-primary": fg,
		"--color-text-secondary": t.muted!,
		"--color-text-tertiary": mix(t.muted!, surface, 0.4),
		"--color-text-inverse": surface,
		"--color-text-info": t.accent!,
		"--color-text-danger": t.error!,
		"--color-text-success": t.success!,
		"--color-text-warning": t.warning!,
		"--color-text-disabled": mix(fg, surface, 0.65),
		"--color-text-ghost": t.muted!,
		"--color-border-primary": t.border!,
		"--color-border-secondary": mix(t.border!, fg, 0.25),
		"--color-border-tertiary": mix(t.border!, surface, 0.5),
		"--color-border-inverse": fg,
		"--color-border-ghost": "transparent",
		"--color-border-info": t.accent!,
		"--color-border-danger": t.error!,
		"--color-border-success": t.success!,
		"--color-border-warning": t.warning!,
		"--color-border-disabled": mix(t.border!, surface, 0.6),
		"--color-ring-primary": t.accent!,
		"--color-ring-secondary": t.muted!,
		"--color-ring-inverse": fg,
		"--color-ring-info": t.accent!,
		"--color-ring-danger": t.error!,
		"--color-ring-success": t.success!,
		"--color-ring-warning": t.warning!,
		"--font-sans": look.fontUi ?? DEFAULT_UI_FONTS,
		"--font-mono": look.fontMono ?? DEFAULT_MONO_FONTS,
		"--font-weight-normal": "400",
		"--font-weight-medium": "500",
		"--font-weight-semibold": "600",
		"--font-weight-bold": "700",
		"--border-radius-xs": "2px",
		"--border-radius-sm": "4px",
		"--border-radius-md": "6px",
		"--border-radius-lg": "8px",
		"--border-radius-xl": "12px",
		"--border-radius-full": "9999px",
		"--border-width-regular": "1px",
		"--shadow-hairline": `0 0 0 1px ${t.border}`,
		"--shadow-sm": "0 1px 2px rgba(0,0,0,.2)",
		"--shadow-md": "0 4px 8px rgba(0,0,0,.25)",
		"--shadow-lg": "0 12px 24px rgba(0,0,0,.3)",
	};
	const text = { xs: 12, sm: 14, md: 16, lg: 18 };
	const heading = { xs: 16, sm: 18, md: 20, lg: 24, xl: 28, "2xl": 32, "3xl": 40 };
	for (const [name, size] of Object.entries(text)) {
		variables[`--font-text-${name}-size`] = `${size}px`;
		variables[`--font-text-${name}-line-height`] = "1.45";
	}
	for (const [name, size] of Object.entries(heading)) {
		variables[`--font-heading-${name}-size`] = `${size}px`;
		variables[`--font-heading-${name}-line-height`] = "1.25";
	}
	return variables;
}

export interface HostContextInput {
	palette?: Palette;
	/** Size of the browser block that holds the view. */
	container: { width: number; height: number };
	toolCallId: string;
	tool: ToolDef;
}

export function hostContext({ palette, container, toolCallId, tool }: HostContextInput): Record<string, unknown> {
	return {
		toolInfo: { id: toolCallId, tool },
		theme: resolvePalette(palette).scheme,
		styles: { variables: styleVariables(palette) },
		// A Tern block cannot resize to its content, so its size is fixed; the view fills it.
		displayMode: "inline",
		availableDisplayModes: ["inline"],
		containerDimensions: { width: container.width, height: container.height },
		locale: Intl.DateTimeFormat().resolvedOptions().locale,
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		userAgent: `${HOST_INFO.name}/${HOST_INFO.version}`,
		platform: "desktop",
		deviceCapabilities: { touch: false, hover: true },
	};
}

export function hostCapabilities(approved: DeclaredCsp): Record<string, unknown> {
	return {
		openLinks: {},
		serverTools: {},
		serverResources: {},
		logging: {},
		message: { text: {} },
		updateModelContext: { text: {}, structuredContent: {} },
		sandbox: { permissions: {}, csp: approved },
	};
}
