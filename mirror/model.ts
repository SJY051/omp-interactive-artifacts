// The host's copy of the page's mirrored tree. The page script (mirror-page.js) sends one full tree, then ops;
// replaying them here gives the current tree whenever a card is described. The same replay is the test oracle:
// after any step it must equal a from-scratch snapshot of the page (`__m.snapshot()`).

import type { Json } from "./chrome";

/** One node as the page script serializes it. */
export interface TreeNode {
	id: string;
	k: string;
	p?: Json;
	c?: TreeNode[];
}

/** Ops the page script emits; ids are the page script's, stable per DOM node. */
export type Op =
	| ["add", id: string, parent: string, before: string | null, node: TreeNode]
	| ["set", id: string, props: Json]
	| ["del", id: string]
	| ["move", id: string, parent: string, before: string | null];

export interface ModelNode {
	k: string;
	p: Json;
	c: string[];
	parent: string | null;
}

/** Id of the root element (the page's body). */
export const ROOT_ID = "pg";

export class MirrorModel {
	readonly nodes = new Map<string, ModelNode>();
	/** Ops that named a node the model does not have: a bug in the page script or a lost message. */
	readonly bad: string[] = [];

	/** Replaces everything with a full tree (the page's `init`). */
	reset(root: TreeNode): void {
		this.nodes.clear();
		this.bad.length = 0;
		this.#addTree(root, null, null);
	}

	apply(ops: readonly Op[]): void {
		for (const op of ops) this.#applyOne(op);
	}

	#addTree(node: TreeNode, parent: string | null, before: string | null): void {
		this.nodes.set(node.id, { k: node.k, p: { ...(node.p ?? {}) }, c: [], parent });
		for (const child of node.c ?? []) this.#addTree(child, node.id, null);
		const holder = parent === null ? undefined : this.nodes.get(parent);
		if (holder) {
			const at = before === null ? holder.c.length : holder.c.indexOf(before);
			holder.c.splice(at < 0 ? holder.c.length : at, 0, node.id);
		}
	}

	#delete(id: string): void {
		const node = this.nodes.get(id);
		if (!node) return;
		for (const child of [...node.c]) this.#delete(child);
		const holder = node.parent === null ? undefined : this.nodes.get(node.parent);
		if (holder) holder.c.splice(holder.c.indexOf(id), 1);
		this.nodes.delete(id);
	}

	#applyOne(op: Op): void {
		switch (op[0]) {
			case "add": {
				if (!this.nodes.has(op[2])) return void this.bad.push(`add under unknown ${op[2]}`);
				this.#addTree(op[4], op[2], op[3]);
				return;
			}
			case "set": {
				const node = this.nodes.get(op[1]);
				if (!node) return void this.bad.push(`set unknown ${op[1]}`);
				for (const [name, value] of Object.entries(op[2])) {
					if (value === null) delete node.p[name];
					else node.p[name] = value;
				}
				return;
			}
			case "del":
				return this.#delete(op[1]);
			case "move": {
				const node = this.nodes.get(op[1]);
				if (!node) return void this.bad.push(`move unknown ${op[1]}`);
				const target = this.nodes.get(op[2]);
				if (!target) return void this.bad.push(`move to unknown ${op[2]}`);
				const old = node.parent === null ? undefined : this.nodes.get(node.parent);
				if (old) old.c.splice(old.c.indexOf(op[1]), 1);
				const at = op[3] === null ? target.c.length : target.c.indexOf(op[3]);
				target.c.splice(at < 0 ? target.c.length : at, 0, op[1]);
				node.parent = op[2];
				return;
			}
		}
	}

	/** The subtree under `id` in the page script's own shape, or null. */
	tree(id: string = ROOT_ID): TreeNode | null {
		const node = this.nodes.get(id);
		if (!node) return null;
		const children = node.c.map(child => this.tree(child)).filter((child): child is TreeNode => child !== null);
		return { id, k: node.k, p: node.p, ...(children.length > 0 ? { c: children } : {}) };
	}

	get size(): number {
		return this.nodes.size;
	}
}

/** First difference between two trees as text, or null when equal; the oracle behind the replay tests and `verifyModel`. */
export function firstDifference(page: unknown, mine: unknown): string | null {
	const a = JSON.stringify(page);
	const b = JSON.stringify(mine);
	if (a === b) return null;
	let i = 0;
	while (i < a.length && a[i] === b[i]) i++;
	return `mismatch at ${i}: page=…${a.slice(Math.max(0, i - 80), i + 120)} | model=…${b.slice(Math.max(0, i - 80), i + 120)}`;
}
