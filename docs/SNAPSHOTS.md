# Project Snapshots

Snapshots preserve context between small blocks of work.

## 2026-06-26 - Block 001: Project Foundation

Branch:

- `main`

Current state:

- Repository started from a minimal README.
- No application code exists yet.
- Foundation files were added for monorepo structure, Gitflow, GitHub labels,
  CODEOWNERS, architecture, roadmap, security/privacy, ADR, snapshots, and
  technical debt tracking.
- Placeholder directories exist for `apps/web`, `apps/desktop`,
  `packages/domain`, `packages/i18n`, and `packages/ui`.

Decisions:

- DedSec should start as a TypeScript monorepo using npm workspaces.
- Proposed website stack is Next.js with React and TypeScript.
- Proposed desktop stack is Electron, React, Vite, and TypeScript.
- DedSec should include a scalable multilingual foundation from the first app
  implementation block, using shared locale conventions in `packages/i18n` and
  app-level integrations as each surface matures.
- Application development is intentionally deferred until the repo foundation is
  reviewed.
- Gitflow, code owner review, PR labels, snapshots, and tech debt tracking are
  adopted from the GameDeck reference and adapted to DedSec.

Risks:

- The proposed app stack is not implemented yet.
- Desktop diagnostic/security boundaries must be designed before any privileged
  feature is built.
- Public downloads require packaging, signing, checksums, and release notes
  before they can be trusted.
- Legal, privacy, diagnostics, and repair-risk copy will need reviewed
  translations before multilingual public release.

Next suggested step:

- Create `develop` and `staging` branches, then scaffold the web and desktop
  apps in a dedicated feature branch after the foundation is approved.

## 2026-06-26 - Block 002: Application Scaffold

Branch:

- `main`

Current state:

- `apps/web` now contains a Next.js landing scaffold with route-prefixed
  locales: `/es` and `/en`.
- `apps/desktop` now contains an Electron, React, and Vite desktop shell.
- `packages/domain`, `packages/i18n`, and `packages/ui` now compile to `dist`
  and expose package exports.
- Root scripts build packages before apps.
- `npm run build` and `npm run typecheck` pass.
- `npm audit` reports zero vulnerabilities after removing unused `next-intl`
  from the initial scaffold.

Decisions:

- The first app implementation remains a shell and showcase foundation, not a
  repair feature implementation.
- i18n starts with shared typed messages in `packages/i18n`.
- Website routes are statically generated for Spanish and English.
- Desktop uses a typed preload boundary and keeps OS/system actions in Electron
  main.
- Next is temporarily pinned to `16.3.0-preview.5` because current stable Next
  pins a vulnerable PostCSS version.

Risks:

- Next preview should be moved back to stable when a secure stable release is
  available.
- Desktop diagnostics, repair tasks, and optimization actions still need
  consent, privacy, and IPC designs before implementation.
- Packaging, signing, checksums, and release artifacts are not configured yet.

Next suggested step:

- Design the first public website content structure and desktop navigation
  model before adding repair or diagnostic behavior.
