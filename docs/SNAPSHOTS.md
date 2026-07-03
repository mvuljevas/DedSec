# Project Snapshots

Snapshots preserve context between small blocks of work.

## 2026-07-03 - Block 001: Clean PC Foundation

Branch:

- `develop`

Current state:

- DedSec is a TypeScript monorepo for PC/Desktop repair and optimization.
- The repository contains a public website surface in `apps/web` and an
  Electron desktop surface in `apps/desktop`.
- Shared packages exist for domain models, i18n, and UI foundations:
  `packages/domain`, `packages/i18n`, and `packages/ui`.
- The public product scope is PC repair, diagnostics, resource optimization,
  safe cleanup, secure installer monitoring, remnant cleanup, and system
  maintenance.
- The website is intended as a product showcase and download surface.
- The desktop app is intended as the user-controlled PC operations surface.
- The repository uses Gitflow with permanent `main`, `staging`, and `develop`
  branches.
- The repository adopts lean context workflow docs for efficient assisted
  development: `docs/AI_CONTEXT.md`, `docs/AI_SEARCH.md`, and
  `docs/AI_TOKEN_BUDGET.md`.
- GitHub labels use namespaced groups: `type:*`, `status:*`, `priority:*`, and
  `area:*`.
- Version `0.1.0` is the clean foundation/scaffolding version. It is not tagged
  because no release milestone has been approved yet.

Decisions:

- DedSec remains PC/Desktop-focused.
- Non-PC repair and optimization workflows are out of scope unless the project
  owner explicitly reopens that product direction in a future block.
- Privileged PC operations must be designed before implementation.
- Future cleanup, repair, optimization, installer monitoring, registry, process,
  and network actions must follow scan-first, confirm-later, allowlist, logging,
  reporting, and user-data protection rules.
- Electron main owns OS access; the renderer must use a narrow typed preload
  API and must never pass arbitrary command strings.
- Repository documentation and code comments should be written in English.
- User-facing copy should live in i18n catalogs when it belongs to the product.

Risks:

- PC operations safety architecture is not fully modeled yet.
- Registry optimization policy is not defined yet.
- Secure installer monitoring and optional network blocking need a dedicated
  architecture decision before implementation.
- Packaging, signing, checksums, and public release artifacts are not
  configured yet.
- `apps/web` still uses a Next.js preview release due to dependency security
  constraints tracked in `TECHDEBT.md`.

Next suggested step:

- Create the PC scope and safety architecture block before implementing
  privileged diagnostics, optimization, cleanup, installer monitoring, registry,
  process, or network operations.
