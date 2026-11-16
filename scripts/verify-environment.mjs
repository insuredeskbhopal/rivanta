import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import postcss from "postcss";
import loadConfig from "next/dist/server/config.js";
import { PHASE_PRODUCTION_BUILD } from "next/constants.js";
import postcssConfig from "../postcss.config.mjs";

const root = process.cwd();
const require = createRequire(import.meta.url);
const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const manifest = await readJson("package.json");
const lock = await readJson("package-lock.json");
assert.equal(lock.lockfileVersion, 3);
for (const group of ["dependencies", "devDependencies"]) {
  for (const [name, version] of Object.entries(manifest[group] ?? {})) {
    assert.match(version, /^\d+\.\d+\.\d+(?:-[\w.]+)?$/, `${name} must be pinned`);
    assert.equal(lock.packages[`node_modules/${name}`].version, version);
    const installed = await readJson(path.join("node_modules", name, "package.json"));
    assert.equal(installed.version, version);
  }
}
assert.equal(manifest.dependencies.react, manifest.dependencies["react-dom"]);
assert.equal(manifest.dependencies.next, manifest.devDependencies["eslint-config-next"]);
assert.equal(manifest.devDependencies.tailwindcss, manifest.devDependencies["@tailwindcss/postcss"]);
assert.equal(manifest.devDependencies.prisma, manifest.dependencies["@prisma/client"]);
assert.equal(manifest.dependencies["@prisma/adapter-pg"], manifest.dependencies["@prisma/client"]);
assert.ok(!manifest.dependencies["scrolltrigger"], "ScrollTrigger ships inside GSAP");
require.resolve("gsap/ScrollTrigger");
await import("lenis");
console.log("PASS: pinned direct dependencies, lockfile parity and motion module resolution");

const nextConfig = await loadConfig.default(PHASE_PRODUCTION_BUILD, root);
assert.equal(nextConfig.reactStrictMode, true);
assert.equal(nextConfig.poweredByHeader, false);
console.log("PASS: Next.js TypeScript configuration loaded");

const plugins = await Promise.all(Object.entries(postcssConfig.plugins).map(async ([name, options]) => {
  const plugin = await import(name);
  return plugin.default(options);
}));
const css = await postcss(plugins).process('@import "tailwindcss" source(none);\n@source inline("flex");', {
  from: path.join(root, "phase-1-validation.css"),
});
assert.match(css.css, /\.flex\s*\{\s*display:\s*flex/);
console.log("PASS: Tailwind v4 compiled a utility through the project PostCSS configuration in memory");

const baseline = await readJson("docs/phase-1/prototype-baseline.json");
for (const [file, digest] of Object.entries(baseline)) {
  assert.equal(createHash("sha256").update(await readFile(file)).digest("hex"), digest, `Prototype changed: ${file}`);
}
console.log(`PASS: all ${Object.keys(baseline).length} original prototype files are byte-identical`);

for (const dir of ["app", "pages", "src/pages"]) {
  let files;
  try { files = await readdir(dir); } catch (error) { if (error.code !== "ENOENT") throw error; }
  assert.equal(files, undefined, `Unexpected alternative application directory: ${dir}`);
}
const collectPages = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? collectPages(file) : /^(page|route)\./.test(entry.name) ? [file.replaceAll("\\", "/")] : [];
  }));
  return nested.flat();
};
assert.deepEqual(await collectPages("src/app"), ["src/app/page.tsx"]);
console.log("PASS: only the authorized company home page exists; the original prototype is preserved");

assert.deepEqual(await nextConfig.redirects(), [{ source: "/proof/cbg", destination: "/", permanent: false }]);
console.log("PASS: the previous proof URL redirects to the company home page");
