# Next.js and PostgreSQL environment addendum

Validated 16 November 2026. The user selected PostgreSQL. This extends the environment-only scope; no website UI, pages, API endpoints or business data models were added.

## Setup

- Retained Next.js 16.4.6, React 19.3.1, strict TypeScript and the verified Tailwind v4 pipeline.
- Installed matching Prisma CLI, Prisma Client and `@prisma/adapter-pg` 7.10.1, plus `pg` 8.23.1, `dotenv` 18.0.10 and `server-only` 0.0.1. The currently tagged Prisma 8 release candidate was deliberately not adopted.
- Added `prisma7.config.ts`, an empty PostgreSQL schema with an explicit ESM client generation destination, environment example and ignored local credentials. The v7-specific config filename follows the [official PostgreSQL setup guide](https://www.prisma.io/docs/v7/prisma-orm/quickstart/postgresql).
- Added a shared server-only Prisma client and PostgreSQL URL validation. It reuses the client across Next.js development hot reloads; it is intended for Node.js server code, never client components or Edge execution.
- Added validation, generation, read-only connectivity, migration and Studio commands. Postinstall regenerates the client. Generated code is ignored in Git and ESLint; TypeScript checks its use through the server helper.
- PostgreSQL 18 is installed and its local service is running. Independently, an existing PostgreSQL DATABASE_URL was available in the process environment and securely copied into the ignored `.env`. The successful query used that configured target; it is not evidence that the target is the local service.
- Removed the initially prepared SQLite-specific dependency and configuration after the user's selection. No SQLite dependency, file, model or migration was retained.

## Actual validation

| Check | Result |
| --- | --- |
| Prisma schema validation | Passed |
| Prisma client generation with no models | Passed |
| Server-only Prisma client read-only `SELECT 1` | Passed against the existing configured PostgreSQL target |
| TypeScript | Passed, including Prisma configuration and database helpers |
| ESLint | Passed with zero lint warnings |
| Environment verification | Passed, including matching Prisma versions, Next config loading and Tailwind compilation |
| Dependency tree | No invalid, missing or extraneous dependencies reported |
| Production dependency audit | Zero vulnerabilities reported |
| Full dependency audit | Existing seven moderate development-tooling advisories remain; no high or critical advisories |
| Prototype | All 14 original files remain byte-identical; JavaScript syntax check passed |
| Next.js production build | Deferred: no application routes exist, as required by the environment-only scope |

Evidence: `dependency-tree.prisma.json`, `npm-audit.prisma.json`, `npm-audit.production.prisma.json` and the repeatable `db:check` command.

The PostgreSQL driver emitted its upstream notice about legacy SSL mode aliases on the existing URL. No weaker SSL setting was enabled; connection credentials and SSL parameters were left intact. This is a driver notice, not a failed connection.

No database creation, schema writes, migration, reset, seed or production deployment was performed. The project is ready for authorized Next.js/PostgreSQL development; business schema and route implementation remain pending. Existing Phase 1 lint-tooling caveats are detailed in `REPORT.md`.
