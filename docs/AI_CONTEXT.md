# AI Context

This file is the compact project summary agents should read before searching
the repository. Keep it short and update it when stack, commands, scope, or
important project boundaries change.

## Project

- Name: DedSec
- Author: Mauricio Vuljevas
- Author URI: https://www.mvuljevas.com
- Repository: https://github.com/mvuljevas/DedSec
- Current version: 0.1.0
- Purpose: open source PC repair, diagnostics, resource optimization, safe
  cleanup, secure installer monitoring, and system maintenance product.
- Current scope: PC/Desktop only. Do not introduce non-PC repair workflows
  unless the project owner explicitly reopens that direction.

## Stack

- Runtime: Node.js 22+
- Package manager: npm workspaces
- Language: TypeScript
- Website: Next.js, React, route-prefixed locales
- Desktop: Electron, React, Vite, typed preload bridge
- Shared packages: `@dedsec/domain`, `@dedsec/i18n`, `@dedsec/ui`

## Repository Shape

```text
apps/web       Public product website.
apps/desktop   Cross-platform Electron desktop shell.
packages/domain Shared product models and business rules.
packages/i18n   Shared locale metadata and message catalogs.
packages/ui     Shared UI primitives.
docs            Architecture, roadmap, workflows, snapshots, and ADRs.
```

## Key Commands

```bash
npm install
npm run build
npm run typecheck
npm run test
npm run lint
npm run dev:web
npm run dev:desktop
```

## Important Files

- `AGENTS.md`: Gitflow, PR automation, SemVer, and agent workflow rules.
- `docs/ROADMAP.md`: product milestones and next product direction.
- `docs/ARCHITECTURE.md`: stack and security boundary decisions.
- `docs/SECURITY_PRIVACY.md`: diagnostics, local data, and release guardrails.
- `docs/SNAPSHOTS.md`: chronological project memory.
- `TECHDEBT.md`: accepted risks and delayed decisions.

## Current Decisions

- DedSec uses full Gitflow: work branches target `develop`, release candidates
  move to `staging`, production releases move to `main`.
- `main`, `staging`, and `develop` must remain present.
- Electron renderer must not receive arbitrary system command execution.
- Desktop system actions must live behind narrow, validated IPC in Electron
  main with explicit user consent.
- PC operations should follow scan-first, confirm-later, log, report, and
  allowlist rules.
- `lean-context` is adopted as a workflow layer for efficient context loading.

## Current Risks

- Desktop diagnostics, repair tools, resource optimization, installer
  monitoring, and cleanup modules are not implemented yet.
- Safe privileged-operation boundaries must be designed before porting ideas
  from the legacy PC reference project.
- Packaging, signing, checksums, release notes, and public downloads are not
  configured yet.
- Next.js is temporarily on a preview version due to dependency security
  constraints recorded in `TECHDEBT.md`.

## Search Notes

- Use `docs/AI_SEARCH.md` before opening broad directories.
- Prefer `rg` searches and file slices.
- Avoid generated paths, dependencies, lockfiles, build output, caches, and
  secrets unless directly relevant.
