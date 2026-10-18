// JSON-RPC 2.0 framing for the MCP Apps postMessage channel. Everything from the
// view is untrusted, so each message is checked before any handler sees it.

export type JsonRpcId = string | number;

export type JsonRpcMessage =
	| { kind: "request"; id: JsonRpcId; method: string; params: Record<string, unknown> }
	| { kind: "notification"; method: string; params: Record<string, unknown> }
	| { kind: "response"; id: JsonRpcId; result?: unknown; error?: { code: number; message: string } };

export type ParseResult = { ok: true; message: JsonRpcMessage } | { ok: false; id?: JsonRpcId; reason: string };

export const ERR = {
	parse: -32700,
	invalidRequest: -32600,
	methodNotFound: -32601,
	invalidParams: -32602,
	internal: -32603,
	/** Implementation-defined: the host refused or could not do what was asked. */
	refused: -32000,
	notInitialized: -32002,
} as const;

const METHOD = /^[A-Za-z][A-Za-z0-9_./-]{0,79}$/;

/** The package's one object guard: narrows to a plain (non-array) object; fields stay `unknown`. */
export function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isId(value: unknown): value is JsonRpcId {
	return typeof value === "string" ? value.length > 0 && value.length <= 200 : typeof value === "number" && Number.isFinite(value);
}

/** Validates one inbound message. A failure carries the request id when one was readable, so the caller can answer it. */
export function parseMessage(value: unknown): ParseResult {
	if (!isRecord(value)) return { ok: false, reason: "message is not an object" };
	const id = isId(value.id) ? value.id : undefined;
	if (value.jsonrpc !== "2.0") return { ok: false, id, reason: 'jsonrpc must be "2.0"' };
	if ("id" in value && id === undefined) return { ok: false, reason: "id must be a non-empty string or a finite number" };

	if ("method" in value) {
		if (typeof value.method !== "string" || !METHOD.test(value.method)) return { ok: false, id, reason: "invalid method name" };
		if ("result" in value || "error" in value) return { ok: false, id, reason: "a request cannot carry a result or error" };
		if (value.params !== undefined && !isRecord(value.params)) return { ok: false, id, reason: "params must be an object" };
		const params = value.params ?? {};
		return id === undefined
			? { ok: true, message: { kind: "notification", method: value.method, params } }
			: { ok: true, message: { kind: "request", id, method: value.method, params } };
	}

	if (id === undefined) return { ok: false, reason: "a response needs an id" };
	const hasResult = "result" in value;
	const hasError = "error" in value;
	if (hasResult === hasError) return { ok: false, id, reason: "a response carries exactly one of result and error" };
	if (hasError) {
		const error = value.error;
		if (!isRecord(error) || typeof error.code !== "number" || typeof error.message !== "string") {
			return { ok: false, id, reason: "malformed error object" };
		}
		return { ok: true, message: { kind: "response", id, error: { code: error.code, message: error.message.slice(0, 500) } } };
	}
	return { ok: true, message: { kind: "response", id, result: value.result } };
}

export function errorResponse(id: JsonRpcId, code: number, message: string): Record<string, unknown> {
	return { jsonrpc: "2.0", id, error: { code, message } };
}

export function resultResponse(id: JsonRpcId, result: unknown): Record<string, unknown> {
	return { jsonrpc: "2.0", id, result };
}

export function notification(method: string, params?: Record<string, unknown>): Record<string, unknown> {
	return params === undefined ? { jsonrpc: "2.0", method } : { jsonrpc: "2.0", method, params };
}
