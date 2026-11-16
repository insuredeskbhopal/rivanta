import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["*.config.{mjs,ts}", "scripts/**/*.mjs"],
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
  {
    files: ["src/lib/**/*.ts"],
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    ".agents/**",
    ".playwright-cli/**",
    "rivanta-cinematic-scroll/**",
    "next-env.d.ts",
    "src/generated/**",
  ]),
]);
