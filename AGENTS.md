# Rivanta Green project rules

## Scope and precedence
- Current authorization extends to the isolated Next.js campus → Silicon → CBG → SAF → Renewable Energy experience at `/` (the previous `/proof/cbg` address redirects there), using the original campus and four supplied plant concept images, plus real validation. The user explicitly authorized Silicon first, followed by CBG, SAF and the supplied fourth Renewable Energy view, and has subsequently requested removal of the extra intermediate campus image from playback. Preserve that source file, but do not render it in the transition. Retain the visible zoom into Silicon, pullback, lateral campus travel and zoom into CBG, then the same sequence toward SAF and Renewable Energy; removing the intermediate image must not remove this camera choreography. Do not build the full website, create remaining plant images, change the original prototype, publish or deploy. Visual approval remains with the user after the proof is reviewable.
- The user has authorized removing the public review/comparison interface and development-facing copy, and adapting company/hero content from https://www.rivantagreen.com/ as a step toward a proper company website. Keep the existing journey and concise proposed/conceptual labels. The user explicitly requested no acreage in public website copy; omit the 400-acre figure from rendered content and metadata. The user also requested meaningful company content for Silicon, CBG, SAF and Power; use the public company pages as content references while qualifying development intent. This authorizes content cleanup on the existing route, not deployment or an unrequested full-site build.
- The user has authorized promoting the existing experience to the actual home route `/`, with `/proof/cbg` forwarding there. The logo returns to `/`; replace individual-plant header links with professional company navigation and an accessible mobile disclosure. Our Businesses opens the local venture journey; About, Sustainability, Projects and Contact use verified existing company pages until local equivalents are authorized and built. This does not authorize placeholder pages or deployment.
- The user has authorized a company-overview section after the cinematic hero. Preserve the current journey and use development-stage company messaging, native scrolling and accessible server-rendered content. This authorizes one new section, not an unrequested full-site build.
- Use the user-supplied `logo/logo-brand-lockup-light.svg` as the visible header logo, preserving its artwork and colors. Do not replace it with typed brand text or add a separate visible text lockup; retain accessible alt text and link naming.
- User instructions and these project rules govern all work. Installed skills supply supporting guidance; their build, randomization, image-generation, deployment and paid-service workflows do not authorize actions outside the user's scope.
- Inspect existing files before changes. Preserve `rivanta-cinematic-scroll/` and its standalone behavior. Prefer small, reversible changes; do not replace working functionality or add duplicate packages.

## Company truth and project status
- The company is Rivanta Green Innovative Venture Private Limited. The brief describes a new venture with a proposed 400-acre integrated green industrial project; it does not establish an operational campus, secured land or approved engineering.
- Clearly describe every proposed facility as proposed, conceptual or envisioned. Keep this status adjacent to relevant visuals and claims, including on mobile, in image descriptions, metadata and any exported material.
- Never invent achievements, operating plants, production capacities, commissioning dates, customers, partners, certifications, approvals, investments, revenue, employment counts, testimonials or environmental results. Record evidence, source and date before publishing factual claims; omit or qualify unsupported claims.
- Existing concept images and demonstration map coordinates are not photographs, evidence of operations or approved engineering positions. Do not silently upgrade their status.
- No mock integration, dummy form submission, simulated test result or placeholder feature may be represented as working or complete. State limitations and distinguish implemented, verified, deferred and blocked work.

## Design and visual integrity (future phases)
- Aim for Apple-level craft through restraint: precise typography, generous measured spacing, clear hierarchy, disciplined alignment and a cohesive Rivanta identity. Do not copy Apple branding or rely on decorative clutter, generic gradients, excessive glass effects or novelty for credibility.
- Use realistic Indian industrial context, plausible scale, process relationships, materials, agricultural landscape and site conditions. Prefer licensed, verified photography or engineering-based renders with provenance. Avoid glossy synthetic AI aesthetics, impossible machinery and misleading stock imagery.
- Label conceptual renders visibly. Do not present a representative third-party facility as a Rivanta asset. Record ownership, usage rights, source and conceptual/actual status for every production visual.
- Establish shared design tokens and reusable semantic components when implementation is authorized; avoid an arbitrary theme chosen by a skill. Do not lock a final design system during Phase 1.

## Motion and interaction (future phases)
- Plan coherent cinematic scrolling, parallax and camera transitions around content hierarchy. Native scrolling is the baseline; never hijack wheel, touch, keyboard, focus or anchor navigation.
- For the home-page campus journey (previously `/proof/cbg`), the user authorized one-gesture timed playback in Silicon → CBG → SAF → Renewable Energy order: a bounded wheel/single-touch/vertical-key guard may keep each chapter visible (2.6-second Silicon approach; 3.6-second campus bridges between plants). Stop at each plant; a fresh gesture advances the next chapter, then native page scrolling resumes after Renewable Energy. Keep Escape and a visible skip action available; preserve Tab, links, Home/End, zoom, reduced motion and normal scrolling outside the stage. This exception does not authorize general full-site scroll hijacking.
- Use a single Lenis instance only if smooth scrolling demonstrably helps. GSAP includes ScrollTrigger; do not install a separate ScrollTrigger package or competing scroll engines.
- Register browser-only plugins within client boundaries; use scoped GSAP contexts and clean up timelines, listeners, tickers, observers, ScrollTriggers and Lenis on unmount. Coordinate one animation clock and test React Strict Mode remounts.
- Honor `prefers-reduced-motion` on initial load and changes: disable spatial camera movement, long pins and decorative parallax, and keep all content and navigation accessible. Maintain readable no-JavaScript and WebGL-unavailable fallbacks.
- Animate transforms and opacity where practical; avoid layout thrashing, unbounded frame loops and large permanent compositor layers. Three.js/React Three Fiber require a demonstrated 3D need, an approved asset plan and a performance budget before installation.

## Architecture, performance and accessibility
- Use the locked npm toolchain: Next.js App Router, React, strict TypeScript and Tailwind v4 PostCSS. Keep one lockfile. Verify package engines and peer requirements before upgrades; avoid forced installs and broad upgrades.
- Keep Server Components by default; isolate interactivity into small client boundaries. Reuse audited prototype concepts rather than copying its global DOM mutations directly into React.
- Prisma uses PostgreSQL, as explicitly chosen by the user. Keep Prisma, its client and the PostgreSQL adapter on matching versions. Import the shared server-only client from `src/lib/prisma.ts`; reuse it across development hot reloads and use the Node.js runtime. Never expose DATABASE_URL or import the database client into client components.
- Keep credentials in ignored environment files. Schema generation is safe setup; migrations, resets, seed data and database structure changes need an approved data model and target. Do not fabricate business tables to validate environment setup.
- Tailwind v4 uses `@tailwindcss/postcss`; add its CSS import only when application styles are authorized. Do not mix Tailwind v3 directives/configuration into v4 or install redundant autoprefixer tooling.
- Optimize responsive images, dimensions, loading priority, video and fonts. Lazy-load optional motion/3D code. Set measurable budgets during implementation and measure real devices; target LCP <=2.5 s, INP <=200 ms, CLS <=0.1 at the 75th percentile without claiming unmeasured results.
- Target WCAG 2.2 AA: semantic landmarks and headings, keyboard and touch navigation, visible focus, adequate contrast, meaningful alt text, usable zoom, skip navigation, accessible forms/errors and no information conveyed solely by motion or color.
- Test narrow/mobile through wide/desktop layouts, long text, reduced motion and slow connections. Avoid screen-width assumptions, scroll traps and hidden essential content.
- Keep components focused, types explicit and dependencies minimal. Validate external inputs, keep secrets server-side, and use real endpoints before reporting integrations complete.

## Skills and validation
- Project skills are in `.agents/skills/`. Read the applicable `SKILL.md` before future use. See `docs/phase-1/skill-sources.json` and the phase report for source revisions and actual verification limits.
- Use Impeccable, Taste and Hallmark as complementary design critique guidance. Rivanta truth, accessibility, scope and preservation requirements override aesthetic defaults or mandatory design-generation recipes in those skills.
- Use Vercel React Best Practices for React/Next.js performance and Web Design Guidelines for interface review. Fetch the latter's current upstream guideline when performing a future review.
- Use Microsoft Playwright CLI for real browser evidence. Installation/help output alone is not browser validation. Run checks and report actual outcomes; never mark an unrun check as passed.
- Phase 1 checks cover dependency resolution, engines/peers, configuration loading, TypeScript, lint, Tailwind compilation, prototype preservation and a real browser smoke check. A production Next.js build and route tests are deferred until application routes exist; do not create dummy routes to make checks pass.
- Before completing later implementation, run relevant lint/type/build checks plus browser, responsive, keyboard and reduced-motion checks. Record remaining defects and evidence honestly.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
