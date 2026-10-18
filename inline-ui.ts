// `inline_ui`: interactive cards drawn in the transcript with Tern's `el` kinds. Registered only when
// the running OMP has the core support (the `el` builder and the tool-definition event hook).

import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { loadDescribeSupport } from "./describe-support";
import { type Delivery, INLINE_KIND, type MessageSource } from "./delivery";
import { ID_PATTERN, slugOf } from "./files";
import {
	type CardState,
	cardSheet,
	fallbackText,
	type InlineCard,
	newCardState,
	parseInlineHtml,
	renderCard,
	routeEvent,
} from "./inline-html";

export const DESCRIPTION = `Show an interactive card in the transcript (Tern terminal only; no JavaScript): a choice, a small form, or a result card the user can click. Use \`artifact\` instead for scripts, charts, canvas or a page of its own.
html: a fragment using only these tags: div span p section header footer nav aside main article figure blockquote ul ol li dl dt dd h1-h4 pre code kbd strong b em i del mark hr table thead tbody tr th td label button form, plus <input type="radio|checkbox" name value checked> (name required). Attributes: class, title, hidden, role, colspan, rowspan, data-*, aria-*. CSS goes in one <style> block using classes (no style="", @import, url()). Anything else (script, a, img, select, textarea, br, on* handlers, id, style="") is rejected with a list of what to fix; nothing is dropped silently.
Markup: data-omp-send="text" [data-omp-data='{json}'] on any element (usually a button) starts one agent turn carrying the text, the data and the form's current values, then the card locks as "Sent". data-omp-context[="label"] on an element silently stores the form's current values for the next turn (latest wins, no turn; repeatable). Radios and checkboxes flip locally. Buttons with data-omp-send/context get a filled/outlined look by default; your <style> overrides it.
Theme variables for the <style>: --accent --accent-ink --accent-fill --ok --warn --bad --card --raise --l1..--l4 (lines) --t1..--t4 (text) --r-chip --r-ctl --r-card --sans --mono. Use var(--name), not fixed colors.
After the card appears, stop and wait for the user's click; do not repeat the options in prose.`;

interface Params {
	title: string;
	html: string;
	id?: string;
}

interface CardEntry {
	card: InlineCard;
	state: CardState;
}

/** A card's id: the model's slug, else one derived from the title and the call, stable across redraws and resume. */
export function cardId(params: Pick<Params, "title" | "id">, toolCallId: string): string {
	if (params.id && ID_PATTERN.test(params.id)) return params.id;
	return `${slugOf(params.title) || "card"}-${Bun.hash(toolCallId).toString(36).slice(0, 4)}`;
}

export async function registerInlineUi(pi: ExtensionAPI, delivery: Delivery): Promise<boolean> {
	const describe = await loadDescribeSupport();
	// Interactive cards need the `el` builder (and with it the event hook) from the same OMP.
	if (!describe?.el) return false;
	const support = { el: describe.el, rendering: describe.rendering };
	const z = pi.zod;
	const parsed = new Map<string, InlineCard>();
	const cards = new Map<string, CardEntry>();
	/** Calls whose card has already sent its answer (rebuilt from the session on resume). */
	const sentCalls = new Set<string>();

	function parse(html: string): InlineCard {
		let card = parsed.get(html);
		if (!card) {
			card = parseInlineHtml(html);
			if (parsed.size >= 64) parsed.delete(parsed.keys().next().value!);
			parsed.set(html, card);
		}
		return card;
	}

	function entry(toolCallId: string, html: string): CardEntry {
		let found = cards.get(toolCallId);
		if (!found) {
			found = { card: parse(html), state: { ...newCardState(), sent: sentCalls.has(toolCallId) } };
			cards.set(toolCallId, found);
		}
		found.card = parse(html);
		return found;
	}

	function source(params: Params, toolCallId: string): MessageSource {
		return { kind: INLINE_KIND, id: cardId(params, toolCallId), title: params.title };
	}

	function isParams(value: unknown): value is Params {
		return typeof value === "object" && value !== null && "html" in value && typeof value.html === "string" && "title" in value && typeof value.title === "string";
	}

	/** Cards whose answer already went to the agent (this session's earlier messages) stay locked after a resume. */
	function restoreSent(ctx: ExtensionContext): void {
		try {
			for (const item of ctx.sessionManager.getBranch()) {
				if (item.type !== "custom_message" || item.customType !== INLINE_KIND.eventType) continue;
				const details = item.details;
				if (typeof details !== "object" || details === null || !("toolCallId" in details) || typeof details.toolCallId !== "string") continue;
				sentCalls.add(details.toolCallId);
				const existing = cards.get(details.toolCallId);
				if (existing) existing.state.sent = true;
			}
		} catch {
			// No readable session: cards simply start unlocked.
		}
	}
	for (const event of ["session_start", "session_switch", "session_branch", "session_tree"] as const) {
		pi.on(event, (_event, ctx) => restoreSent(ctx));
	}

	pi.registerTool({
		name: "inline_ui",
		label: "Inline card",
		description: DESCRIPTION,
		loadMode: "essential",
		approval: "read",
		parameters: z.object({
			title: z.string().describe("Short card title."),
			html: z.string().describe("Restricted HTML fragment (see the tool description)."),
			id: z.string().optional().describe("Optional slug naming the card in messages it sends back (a-z, 0-9, -)."),
		}),
		async execute(toolCallId, params) {
			if (support.rendering && !support.rendering()) {
				return {
					isError: true,
					content: [{ type: "text", text: "This terminal cannot draw interactive cards (it is not Tern, or Tern's el support is off). Ask in plain text, or use the `artifact` tool." }],
					details: {},
				};
			}
			if (!params.title.trim()) return { isError: true, content: [{ type: "text", text: 'inline_ui needs a non-empty "title".' }], details: {} };
			if (params.id !== undefined && !ID_PATTERN.test(params.id)) {
				return { isError: true, content: [{ type: "text", text: `Invalid id "${params.id}": use a short lowercase slug (a-z, 0-9, "-", up to 40 characters).` }], details: {} };
			}
			const card = parse(params.html);
			if (card.problems.length > 0) {
				const list = card.problems.map(item => `- ${item}`).join("\n");
				return { isError: true, content: [{ type: "text", text: `The card was not shown. Fix these and call inline_ui again:\n${list}` }], details: { problems: card.problems.length } };
			}
			const id = cardId(params, toolCallId);
			cards.set(toolCallId, { card, state: newCardState() });
			return {
				content: [
					{
						type: "text",
						text: `Card "${params.title}" (${id}) is shown. The user's choice arrives as a message labelled [inline "${params.title}" (${id}) event] after they press its send button; wait for it.`,
					},
				],
				details: { id, title: params.title },
			};
		},
		describeResult(result, options, args) {
			if (options.isPartial || result.isError || !isParams(args) || !options.toolCallId) return undefined;
			const { card, state } = entry(options.toolCallId, args.html);
			if (card.problems.length > 0) return undefined;
			return {
				tool: { title: args.title },
				open: true,
				sheet: cardSheet(card),
				fallback: fallbackText(card, state),
				body: [renderCard(card, state, support.el as never)],
			};
		},
		async onNativeEvent(event) {
			if (!isParams(event.args)) return;
			const { card, state } = entry(event.toolCallId, event.args.html);
			const outcome = routeEvent(card, state, event);
			if (!outcome) return;
			const cardSource = source(event.args, event.toolCallId);
			const lines: string[] = [];
			if (outcome.data !== undefined) lines.push(`data: ${JSON.stringify(outcome.data)}`);
			if (event.type === "action" && event.values !== undefined) lines.push(`values: ${JSON.stringify(event.values)}`);
			if (outcome.kind === "send") delivery.event(cardSource, outcome.text, lines, { toolCallId: event.toolCallId });
			else delivery.context(cardSource, [...(outcome.text ? [`text: ${JSON.stringify(outcome.text)}`] : []), ...lines]);
		},
	});
	return true;
}
