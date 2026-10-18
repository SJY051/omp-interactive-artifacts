// Bundles the pinned libraries into single ES modules under vendor/, which the
// server hands out at /lib/. Run `bun run build:vendor` after changing a pinned
// version in package.json; vendor/ is the runtime source, node_modules is not read.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const out = join(root, "vendor");
const tmp = join(root, "node_modules", ".vendor-entries");
rmSync(out, { recursive: true, force: true });
rmSync(tmp, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
mkdirSync(tmp, { recursive: true });

const entries: Record<string, string> = {
	d3: `export * from "d3";\n`,
	three: `export * from "three";\n`,
	"chart.js-auto": `export * from "chart.js/auto";\nexport { default } from "chart.js/auto";\n`,
};

const entrypoints = Object.entries(entries).map(([name, source]) => {
	const file = join(tmp, `${name}.js`);
	writeFileSync(file, source);
	return file;
});

const result = await Bun.build({
	entrypoints,
	outdir: out,
	target: "browser",
	format: "esm",
	minify: true,
	naming: "[name].js",
});
rmSync(tmp, { recursive: true, force: true });
if (!result.success) {
	for (const log of result.logs) console.error(log);
	process.exit(1);
}
for (const output of result.outputs) console.log(output.path, output.size);

// OrbitControls keeps `import ... from "three"` external, so it resolves through the
// import map to the same three.js instance the page uses.
const orbitEntry = join(tmp, "three-orbit-controls.js");
mkdirSync(tmp, { recursive: true });
// The file is addressed by path: `external: ["three"]` would also swallow the `three/addons/*` specifier.
const orbitSource = join(root, "node_modules", "three", "examples", "jsm", "controls", "OrbitControls.js");
writeFileSync(orbitEntry, `export * from ${JSON.stringify(orbitSource)};\n`);
const orbit = await Bun.build({
	entrypoints: [orbitEntry],
	outdir: out,
	target: "browser",
	format: "esm",
	minify: true,
	external: ["three"],
	naming: "[name].js",
});
rmSync(tmp, { recursive: true, force: true });
if (!orbit.success) {
	for (const log of orbit.logs) console.error(log);
	process.exit(1);
}
for (const output of orbit.outputs) console.log(output.path, output.size);
