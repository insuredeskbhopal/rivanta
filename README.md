# Rivanta Green development workspace

The environment is prepared and one isolated campus → Silicon → CBG → SAF → Renewable Energy experience is implemented at `/`. Full website development and remaining plant imagery are on hold. The existing standalone prototype is preserved in `rivanta-cinematic-scroll/`.

Read [AGENTS.md](AGENTS.md) before work and [the Phase 1 report](docs/phase-1/REPORT.md) for verification results and open issues.

## Toolchain

Use Node 24.16.0 and npm 11.x. Install from the committed lockfile with `npm ci`. Use `npm.cmd` in PowerShell if execution policy prevents the npm PowerShell shim from running.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run check:prototype
npm.cmd run check:environment
npm.cmd ls --all
npm.cmd audit
npm.cmd audit --omit=dev
```

`npm.cmd run build` builds the isolated proof. `npm.cmd run dev` starts development, or use `npm.cmd run start -- --hostname 127.0.0.1 --port 3001` after a build. Visit `/` on the running server; `/proof/cbg` temporarily redirects home. Development allows the reported local network origin `172.31.240.1` for Next.js dev resources. If that address changes, update the exact host in `next.config.ts` and restart the dev server.

Tailwind v4's PostCSS pipeline is configured. The proof uses scoped styles, a small global reset and GSAP timed playback with native page scrolling. The original prototype was not modified. See [the transition proof result](docs/phase-2/transition-proof/RESULT.md) for evidence and the unapproved image-alignment limitation.

The current proof follows **campus → Silicon → CBG → SAF → Renewable Energy**, using the original campus and four supplied plant concept images. One downward gesture plays the 2.6-second Silicon approach and stops. Each subsequent fresh gesture plays a 3.6-second campus bridge and stops at CBG, SAF and Renewable Energy. The opening headline does not reappear between plants. After Renewable Energy, the next gesture resumes native page scrolling. Upward gestures reverse one chapter at a time. Navigation, captions, metadata and the static reduced-motion view use the same plant order. Skip, Escape and keyboard controls remain available, with no long scroll pin. See [the current company-content result](docs/company-content/RESULT.md) and its actual recording. The camera zooms into Silicon, pulls back and travels sideways toward CBG, then repeats toward SAF and Renewable Energy. The extra intermediate campus image is excluded from playback; its original file is preserved. Reading holds use each plant image at normal cover scale. Structural differences between the supplied concept images remain; earlier recordings describe superseded interactions. Visual approval is pending.

## PostgreSQL and Prisma

Prisma CLI, client and PostgreSQL adapter are pinned to 7.10.1. Configuration is in `prisma7.config.ts`; the model-free schema is in `prisma/schema.prisma`. The server-only, hot-reload-safe Next.js client is exported from `src/lib/prisma.ts` and requires the Node.js runtime.

The current ignored `.env` was populated from the existing PostgreSQL connection configuration without displaying credentials. For a fresh checkout, copy `.env.example` only if `.env` does not exist, then set `DATABASE_URL` to your PostgreSQL URL. Keep credentials out of source control and client-side code. The current setup uses the default `public` schema.

```powershell
npm.cmd run db:validate
npm.cmd run db:generate
npm.cmd run db:check
```

`db:check` performs a real, read-only `SELECT 1` using the same server-only client. It does not migrate, seed or reset the database. `postinstall` regenerates the client; generated files are ignored. Build/install stages need development dependencies to run the Prisma CLI.

`db:migrate`, `db:deploy` and `db:studio` commands are available for later approved database work. No business models, migrations or seed data have been created. See [the Prisma setup report](docs/phase-1/PRISMA-SETUP.md).

## Existing prototype

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory rivanta-cinematic-scroll
```

Open `http://127.0.0.1:8765/`. Its images are conceptual and its facility coordinates are demonstrations. They are not operational evidence or approved engineering.

## Browser tooling and skills

All six requested skills are project-scoped in `.agents/skills/`, with sources recorded in `docs/phase-1/skill-sources.json`. They are available for discovery on the next turn. Read the relevant instructions before using a skill, subject to the user's authorized scope and AGENTS.md.

Microsoft Playwright CLI uses the existing Chrome installation; no extra test-runner or browser-download package was added directly. With the static server running:

```powershell
npm.cmd run playwright -- -s=rivanta-phase1 open http://127.0.0.1:8765 --browser=chrome
npm.cmd run playwright -- -s=rivanta-phase1 run-code --filename=docs/phase-1/browser-smoke.txt --json
npm.cmd run playwright -- -s=rivanta-phase1 close
```

Impeccable's native launcher works. Automatic design hooks have not been enabled; manual review is the configured workflow. No design build, randomized theme, generated image, paid asset service or deployment workflow was run.

The public review/comparison tools have been removed at the user's request. Company-site messaging now introduces the hero and all four business areas; Power is the final public navigation label. No acreage is shown in public copy. Source records, removal details and actual validation are in [the company-content report](docs/company-content/RESULT.md). This remains local development; no deployment has been performed.

The logo now returns to the home hero at `/`. The professional header provides About Us, Our Businesses, Sustainability, Projects and Contact Us, with responsive keyboard-accessible navigation. Our Businesses opens the local journey; the remaining links use existing company pages. See [the navigation result](docs/site-navigation/RESULT.md).

A company overview now follows the cinematic hero, introducing the development approach and three priorities with a link to the company profile. It uses server-rendered content and native scrolling. See [the overview result and validation](docs/company-overview/RESULT.md).
