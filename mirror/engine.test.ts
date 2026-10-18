import { afterAll, describe, expect, test } from "bun:test";
import { buildPage } from "../page";
import { startServer, type RunningServer } from "../server";
import { join } from "node:path";
import { resolveChrome } from "./chrome";
import { MirrorEngine } from "./engine";
import { firstDifference } from "./model";
import type { MirrorSession } from "./session";
import { buildView, type Builders } from "./view";

// These tests start the Chrome for Testing OMP's browser tool installs; without it they are skipped. They run real
// time on purpose: the hung-page watchdog and the idle shutdown are the behaviour under test, and fake timers
// cannot drive a browser process.
const chrome = await resolveChrome().catch(() => undefined);
const run = chrome ? describe : describe.skip;

const stub: Builders = {
	el: (tag, props, children, key) => ({ el: tag, props, children, key }),
	node: (kind, props, _children, key) => ({ node: kind, props, key }),
};

const CALC = `<main class="calc"><h1>Compound</h1>
<label>Principal <input id="p" type="number" value="1000"></label>
<label>Rate <input id="r" type="text" value="5"></label>
<p id="out">—</p>
<svg id="chart" width="200" height="60" viewBox="0 0 200 60"><rect id="bar" x="0" y="10" width="20" height="40" fill="var(--accent)"/></svg>
<button id="go" data-omp-send="calc">Send</button><button id="inc">+</button>
<span id="n">0</span>
<ul id="list"></ul></main>
<style>.calc{display:grid;gap:8px;padding:12px;background:var(--surface)} #out{color:var(--accent);font-size:1.5rem} button{cursor:pointer}</style>
<script>
const p=document.getElementById("p"),r=document.getElementById("r"),out=document.getElementById("out"),bar=document.getElementById("bar");
function calc(){const v=+p.value*(1+(+r.value)/100);out.textContent=String(Math.round(v));bar.setAttribute("width",String(Math.min(200,v/20)));}
p.addEventListener("input",calc);r.addEventListener("input",calc);calc();
let n=0;document.getElementById("inc").addEventListener("click",()=>{n++;document.getElementById("n").textContent=String(n);const li=document.createElement("li");li.textContent="item "+n;document.getElementById("list").appendChild(li);});
</script>`;

let server: RunningServer | undefined;
const engine = new MirrorEngine({ idleMs: 200 });
const sent: Array<{ text: string; data?: unknown; gesture?: string }> = [];
let html = CALC;

async function load(source: string): Promise<MirrorSession> {
	html = source;
	if (!server) {
		server = startServer(
			{
				resolve: token => (token === "t".repeat(24) ? { id: "x", title: "x" } : undefined),
				page: () => buildPage({ title: "x", html }),
				onSend: (_ref, event) => void sent.push(event),
				onContext: () => undefined,
				onError: () => undefined,
			},
			{ libDir: join(import.meta.dir, "..", "vendor") },
		);
	}
	const session = await engine.open({ url: `${server.origin}/a/${"t".repeat(24)}/`, origin: server.origin, dark: false });
	await session.ready;
	return session;
}

afterAll(async () => {
	await engine.shutdown();
	server?.stop();
});

async function waitFor(check: () => boolean, ms = 3000): Promise<void> {
	const end = Date.now() + ms;
	while (!check() && Date.now() < end) await Bun.sleep(20);
	expect(check()).toBe(true);
}

function textOf(session: MirrorSession): string {
	return buildView({ model: session.model, blobs: session.blobs, textOf: (_id, value) => value }, stub).fallback;
}

run("mirror engine", () => {
	test("mirrors the page, replays ops equal to a fresh snapshot, and answers clicks and typing", async () => {
		const session = await load(CALC);
		expect(session.status).toBe("live");
		expect(textOf(session)).toContain("1050");
		expect(session.sheet).toContain(".pg-root{");
		expect(session.sheet).not.toContain("url(");

		const id = (selector: string) => session.evalMirror(`__m.find(${JSON.stringify(selector)})`) as Promise<string>;
		const incId = await id("#inc");
		expect(await session.click(incId)).toBe(true);
		await waitFor(() => textOf(session).includes("item 1"));
		expect(firstDifference(await session.snapshot(), session.model.tree())).toBeNull();

		const fieldId = `${await id("#p")}.f`;
		await session.edit(fieldId, "2000");
		await waitFor(() => textOf(session).includes("2100"));
		// The chart is re-rasterised at most every 150 ms with a trailing update: the replay settles on the snapshot.
		let difference: string | null = "never compared";
		for (let i = 0; i < 40 && difference !== null; i++) {
			difference = firstDifference(await session.snapshot(), session.model.tree());
			if (difference !== null) await Bun.sleep(50);
		}
		expect(difference).toBeNull();
		// The svg bar became an image blob the view can hand over as bytes.
		const imageNodes = [...session.model.nodes.values()].filter(node => node.k === "image");
		expect(imageNodes.length).toBe(1);
		expect(session.blobs.get(String(imageNodes[0]!.p.blob))?.mime).toBe("image/svg+xml");
		await session.close();
		expect(session.status).toBe("closed");
	}, 30_000);

	test("a list rebuilt with innerHTML keeps its node ids and a chart swaps its picture at most every 150 ms", async () => {
		const page = `<table><tbody id="t"></tbody></table><input id="q" type="text" value=""><svg id="s" width="100" height="20"><rect id="r" width="1" height="20"/></svg>
<script>const t=document.getElementById("t"),q=document.getElementById("q"),r=document.getElementById("r");
function draw(){t.innerHTML=[1,2,3].map(i=>"<tr><td>"+i+"</td><td>"+q.value.length+"</td></tr>").join("");r.setAttribute("width",String(1+q.value.length*5));}
q.addEventListener("input",draw);draw();</script>`;
		const session = await load(page);
		const rows = () => [...session.model.nodes.entries()].filter(([, node]) => node.p.tag === "tr").map(([id]) => id);
		const before = rows();
		expect(before).toHaveLength(3);
		const blobsSeen = new Set<string>();
		const field = `${(await session.evalMirror(`__m.find("#q")`)) as string}.f`;
		for (let i = 1; i <= 8; i++) {
			await session.edit(field, "x".repeat(i));
			for (const node of session.model.nodes.values()) if (node.k === "image") blobsSeen.add(String(node.p.blob));
		}
		await waitFor(() => textOf(session).includes("8"));
		expect(rows()).toEqual(before);
		// Eight keystrokes within a few tens of milliseconds produce at most a first and a trailing picture, not eight.
		expect(blobsSeen.size).toBeLessThanOrEqual(3);
		await session.close();
	}, 30_000);

	test("data-omp-send reaches the server once per click", async () => {
		sent.length = 0;
		const session = await load(CALC);
		const goId = (await session.evalMirror(`__m.find("#go")`)) as string;
		await session.click(goId);
		await waitFor(() => sent.length === 1);
		expect(sent[0]!.text).toBe("calc");
		expect(sent[0]!.gesture).toBe("trusted-click");
		await session.close();
	}, 30_000);

	test("script-initiated omp.send reports no user activation", async () => {
		sent.length = 0;
		const session = await load(`<p>Script</p><script>setTimeout(()=>omp.send("automatic"),100)</script>`);
		await waitFor(() => sent.length === 1);
		expect(sent[0]).toMatchObject({ text: "automatic", gesture: "none" });
		await session.close();
	}, 30_000);

	test("popup clicks never reach another loopback service", async () => {
		let hits = 0;
		const collector = Bun.serve({ hostname: "127.0.0.1", port: 0, fetch: () => { hits++; return new Response("ok"); } });
		let session: MirrorSession | undefined;
		try {
			const target = `http://127.0.0.1:${collector.port}/collect`;
			session = await load(`<button id="popup">Popup</button><script>document.getElementById("popup").onclick=()=>window.open(${JSON.stringify(target)}, "_blank");</script>`);
			const button = (await session.evalMirror('__m.find("#popup")')) as string;
			for (let i = 0; i < 10; i++) expect(await session.click(button)).toBe(true);
			// Real Chrome network integration: an absent request has no completion event, so allow a short delivery window.
			await Bun.sleep(500);
			expect(hits).toBe(0);
		} finally {
			await session?.close();
			collector.stop(true);
		}
	}, 30_000);

	test("a page that never yields is closed by the watchdog", async () => {
		const session = await load("<p>hi</p><script>setTimeout(()=>{for(;;){}},300)</script>");
		let reason: string | undefined;
		const closed = Promise.withResolvers<void>();
		const poll = setInterval(() => {
			if (session.status === "closed") {
				reason = session.closeReason;
				closed.resolve();
			}
		}, 100);
		await Promise.race([closed.promise, Bun.sleep(15_000)]);
		clearInterval(poll);
		expect(reason).toBe("page-hung");
	}, 30_000);

	test("Chrome stops after the idle timeout", async () => {
		await Bun.sleep(600);
		expect(engine.sessionCount).toBe(0);
		expect(engine.running).toBe(false);
	}, 10_000);
});
