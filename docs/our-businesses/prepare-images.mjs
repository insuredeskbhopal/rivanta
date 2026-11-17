import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const records = JSON.parse(await fs.readFile(path.join(root, "docs/our-businesses/image-prompts.json"), "utf8"));
const images = [];
for (const item of records.prompts) {
  const { key } = item;
  const prompt = key === "renewable-energy" ? (await fs.readFile(path.join(root, "docs/our-businesses/renewable-energy-v2-prompt.txt"), "utf8")).trim() : item.prompt;
  const generatedName = key === "renewable-energy" ? "generated-renewable-energy-v2" : `generated-${key}`;
  const generated = JSON.parse(await fs.readFile(path.join(root, `docs/our-businesses/${generatedName}.json`), "utf8"));
  const source = generated.output_hint.match(/as (C:\\.*?\.png) by default/)?.[1];
  if (!source) throw new Error(`Missing generated source for ${key}`);
  const asset = `image/businesses/${key}.webp`;
  await sharp(source).resize({ width: 1080, withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(path.join(root, asset));
  const info = await sharp(path.join(root, asset)).metadata();
  await fs.writeFile(path.join(root, `${asset}.json`), JSON.stringify({ prompt, source, tool: records.tool, status: "AI-generated sector illustration; not a Rivanta asset, product sample or operational evidence." }, null, 2) + "\n");
  images.push({ path: asset, source, prompt, width: info.width, height: info.height, bytes: (await fs.stat(path.join(root, asset))).size });
}
await fs.writeFile(path.join(root, "docs/our-businesses/image-provenance.json"), JSON.stringify({ date: records.date, tool: records.tool, status: "Illustrative sector images, not evidence of Rivanta assets or outcomes.", images }, null, 2) + "\n");
console.log(JSON.stringify(images.map(({ path: asset, width, height, bytes }) => ({ path: asset, width, height, bytes })), null, 2));
