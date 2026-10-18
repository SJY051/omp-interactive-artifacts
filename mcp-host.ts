// The only module that touches OMP's MCP internals. It reaches the session's own MCPManager
// (the process-global instance, set for main sessions), so every call uses the connection the
// user already configured; the view never gets a transport of its own.

import type { ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import type * as Registry from "@oh-my-pi/pi-coding-agent/config/registry";
import type * as McpClient from "@oh-my-pi/pi-coding-agent/mcp/client";
import type * as McpManager from "@oh-my-pi/pi-coding-agent/mcp/manager";
import type * as Approval from "@oh-my-pi/pi-coding-agent/tools/approval";
import type { CallToolResult, ToolDef } from "./app-bridge";

/** One server's connection, by the raw name the user gave it in the MCP config. */
export interface McpServerHandle {
	tools(): readonly ToolDef[];
	resources(): { uris: string[]; templates: string[] };
	callTool(name: string, args: Record<string, unknown>, signal?: AbortSignal): Promise<CallToolResult>;
	readResource(uri: string, signal?: AbortSignal): Promise<unknown>;
	/** Undefined when OMP's approval policy lets an app call `tool` now, else the reason it may not. */
	authorize(tool: string, args: Record<string, unknown>, ctx: ExtensionContext, describe: string): Promise<string | undefined>;
}

export interface McpHost {
	/** The MCP tool OMP minted `name` for (e.g. `mcp__server_tool`), with its server's raw name. */
	findTool(name: string): { server: string; tool: ToolDef } | undefined;
	server(name: string): McpServerHandle | undefined;
	/** The session's tool approval mode; `yolo` means nothing is asked. */
	approvalMode(): "always-ask" | "write" | "yolo";
}

interface Internals {
	manager: typeof McpManager;
	client: typeof McpClient;
	approval: typeof Approval;
	registry: typeof Registry;
}

/** The fields `MCPTool` adds to a tool; `CustomTool` does not declare them. */
interface McpToolFields {
	mcpServerName?: string;
	mcpToolName?: string;
}

let internals: Promise<Internals> | undefined;

function load(): Promise<Internals> {
	// Dynamic: these host modules exist only inside the OMP binary, not under `bun test`.
	internals ??= Promise.all([
		import("@oh-my-pi/pi-coding-agent/mcp/manager"),
		import("@oh-my-pi/pi-coding-agent/mcp/client"),
		import("@oh-my-pi/pi-coding-agent/tools/approval"),
		import("@oh-my-pi/pi-coding-agent/config/registry"),
	]).then(([manager, client, approval, registry]) => ({ manager, client, approval, registry }));
	return internals;
}

/** Loads the MCP internals; undefined when this session has no MCP manager (subagents, headless tools). */
export async function openMcpHost(settings: unknown): Promise<McpHost | undefined> {
	const { manager, client, approval, registry } = await load();
	if (!manager.MCPManager.instance()) return undefined;

	const setting = (id: string): unknown => registry.lookup(id)?.get(settings as never);
	const policies = (): Record<string, unknown> => {
		const value = setting("tools.approval");
		return typeof value === "object" && value !== null ? (value as Record<string, unknown>) : {};
	};
	const mode = (): "always-ask" | "write" | "yolo" => {
		const value = setting("tools.approvalMode");
		return value === "always-ask" || value === "write" ? value : "yolo";
	};

	return {
		approvalMode: mode,
		findTool(minted) {
			const mcp = manager.MCPManager.instance();
			const fields = mcp?.getTools().find(candidate => candidate.name === minted) as McpToolFields | undefined;
			if (!mcp || !fields?.mcpServerName || !fields.mcpToolName) return undefined;
			const tool = mcp.getConnection(fields.mcpServerName)?.tools?.find(candidate => candidate.name === fields.mcpToolName);
			return tool ? { server: fields.mcpServerName, tool: tool as ToolDef } : undefined;
		},
		server(name) {
			const mcp = manager.MCPManager.instance();
			const connection = mcp?.getConnection(name);
			if (!mcp || !connection) return undefined;
			return {
				tools: () => (connection.tools ?? []) as readonly ToolDef[],
				resources: () => ({
					uris: (connection.resources ?? []).map(resource => resource.uri),
					templates: (connection.resourceTemplates ?? []).map(template => template.uriTemplate),
				}),
				callTool: (tool, args, signal) => client.callTool(connection, tool, args, { signal }) as Promise<CallToolResult>,
				readResource: (uri, signal) => mcp.readServerResource(name, uri, { signal }),
				async authorize(tool, args, ctx, describe) {
					// The same rules the tool wrapper applies to a model-issued call to this MCP tool.
					const subject = mcp.getTools().find(candidate => {
						const fields = candidate as McpToolFields;
						return fields.mcpServerName === name && fields.mcpToolName === tool;
					});
					if (!subject) return `OMP has no tool for ${name}/${tool}`;
					const resolved = approval.resolveApproval(subject, args, mode(), policies());
					if (resolved.policy === "allow") return undefined;
					if (resolved.policy === "deny") return approval.denyError(resolved, subject.name).message;
					if (!ctx.hasUI) return `Approval is required for ${subject.name} and this session has no UI to ask in (approval mode ${mode()})`;
					const answer = await approval.requestApproval(ctx.ui, subject, args, { appendix: [describe] });
					return answer === "deny" ? `The user declined ${subject.name}` : undefined;
				},
			};
		},
	};
}
