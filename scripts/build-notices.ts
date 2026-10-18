// Preserve the installed packages' exact license texts, including dependencies
// bundled into vendor/. Run after bun install when pinned versions change.
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const modules = join(root, "node_modules");
const manifests = [
  ...new Bun.Glob("*/package.json").scanSync({ cwd: modules }),
  ...new Bun.Glob("@*/*/package.json").scanSync({ cwd: modules }),
];
const notices: Array<{ name: string; text: string }> = [];
for (const manifest of manifests) {
  const path = join(modules, manifest);
  const pkg = await Bun.file(path).json();
  const dir = join(path, "..");
  const licenses = (await readdir(dir)).filter(name => /^licen[cs]e(?:\.[^.]+)?$/i.test(name)).sort();
  if (!licenses.length) throw new Error(`No license text found for ${pkg.name}@${pkg.version}`);
  const texts = await Promise.all(licenses.map(name => Bun.file(join(dir, name)).text()));
  notices.push({
    name: pkg.name,
    text: `## ${pkg.name} ${pkg.version} (${pkg.license})\n\nSource: installed npm package \`${pkg.name}@${pkg.version}\`, ${licenses.map(name => `\`${name}\``).join(", ")}.\n\n${texts.map(text => `\`\`\`text\n${text.trimEnd()}\n\`\`\``).join("\n\n")}\n`,
  });
}
notices.sort((a, b) => a.name.localeCompare(b.name, "en"));
await Bun.write(join(root, "THIRD_PARTY_NOTICES.md"), [
  "# Third-party notices\n\nThe vendored libraries are d3 7.9.0 (ISC), Chart.js 4.5.1 (MIT), and three.js 0.186.1 (MIT, including OrbitControls). The HTML parser is parse5 8.0.1 (MIT). Their installed license texts and those of their dependencies follow, without changes to the license wording.\n\nRegenerate with `bun install && bun run scripts/build-notices.ts`. The project itself is licensed separately under [MIT](LICENSE).\n",
  ...notices.map(notice => notice.text),
].join("\n"));
console.log(`Wrote license notices for ${notices.length} installed packages.`);
