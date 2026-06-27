# Agent Workflow

This file defines the working rules for anyone contributing to DedSec through
automated or assisted coding sessions.

## Core Rules

- Never use agent names, tool names, or signatures in branch names, commit
  messages, pull requests, or generated documentation.
- Work in small, traceable blocks.
- Prefer conservative changes that match the current project stage.
- Do not revert user changes unless explicitly requested.
- Keep documentation updated when a decision affects architecture, security,
  workflow, or product scope.
- Use frequent project snapshots so the project remains understandable after
  context compaction or handoff.
- Do not begin application implementation during foundation-only blocks.

## Gitflow

DedSec uses a full Gitflow path managed through Pull Requests:

1. `main` is the production-ready branch.
2. `develop` is the integration branch for completed features.
3. `staging` is the release-candidate branch before `main`.
4. Feature branches start from `develop`.
5. Merge transitions must be done via Pull Requests on GitHub:
   - `feature/*` -> PR -> `develop` (Feature Integration)
   - `develop` -> PR -> `staging` (Release Candidate)
   - `staging` -> PR -> `main` (Production Release)
6. All Pull Requests require code owner review and approval by `@mvuljevas`
   before merging.
7. After merging a feature branch PR to `develop`, create a lightweight Git tag
   on the merge commit following the semantic release sequence, for example
   `v0.10.0`.
8. For release candidates merged to `staging` via PR, tag the commit as
   `v<major>.<minor>.<patch>-rc.<num>`, for example `v1.0.0-rc.1`.
9. For production releases merged to `main` via PR, tag the commit with the
   GPG-signed tag `v<major>.<minor>.<patch>`, for example `v1.0.0`.
10. Push relevant branches and tags after each completed block using
    `git push origin <branch> --tags`.

Branch names must describe the product change, for example:

- `feature/001-project-foundation`
- `feature/002-monorepo-scaffold`
- `feature/003-web-download-page`
- `feature/004-desktop-shell`

## Pull Request Rules

When opening pull requests on GitHub, follow these guidelines:

1. Reviewers: `@mvuljevas` must always be configured as reviewer for all pull
   requests. This is enforced through `.github/CODEOWNERS`.
2. PR labels: every PR must have at least one label representing the scope of
   the change. Standard labels are configured in `.github/labels.yml` and can
   be synced using `.github/create_labels.ps1`.
3. PR descriptions must include scope, verification, risks, and documentation
   updates.
4. Foundation, architecture, security, and workflow changes must update
   `docs/SNAPSHOTS.md`.

Standard labels:

- `feature`: New product functionality or capabilities.
- `bug`: Runtime, behavior, or interface defect fixes.
- `hotfix`: Urgent fixes for critical production or staging issues.
- `refactor`: Code structure improvements without external behavior changes.
- `documentation`: Documentation, workflow, and snapshot changes.
- `performance`: Resource, memory, or speed optimization.
- `security`: Security, dependency audit, or privacy changes.
- `dependencies`: npm, Electron, framework, or library dependency updates.
- `utility`: Tooling, development scripts, CI/CD, and maintenance tasks.
- `design`: Visual design, CSS, layout, palette, and animation changes.
- `testing`: Unit, integration, or verification script changes.

## Commit Style

Commit messages must be clear and product-focused:

- `docs: add project foundation plan`
- `chore: scaffold monorepo workspace`
- `feat: add desktop shell`
- `fix: handle missing download artifact`

Do not include generated-by signatures, agent/tool names, or unrelated metadata.
All release commits and tags should be cryptographically signed using GPG where
the local Git environment supports it.

## Block Workflow

Each block should include:

1. Scope confirmation or a clear assumption.
2. Focused implementation or documentation change.
3. Local verification when applicable.
4. Update to `docs/SNAPSHOTS.md`.
5. Update to `TECHDEBT.md` when debt is created, changed, or retired.
6. Commit, merge through Gitflow, tag the merge commit on `develop`, and push
   with tags when the block is ready for repository publication.
7. Suggested next logical step.

## Snapshot Rules

Record snapshots frequently in `docs/SNAPSHOTS.md`, especially after:

- Architecture decisions.
- New feature foundations.
- Security/privacy decisions.
- Release or branch merges.
- Context compaction risk.

Each snapshot should state:

- Date.
- Branch or block.
- Current state.
- Decisions made.
- Risks or open questions.
- Next suggested step.

## Product Priorities

DedSec prioritizes:

1. Clear, trustworthy presentation of the mobile repair and optimization
   product.
2. Secure desktop behavior with explicit OS permissions.
3. Cross-platform desktop compatibility for Windows, macOS, and Linux.
4. Privacy-first handling of diagnostic or customer device information.
5. Download flows that are verifiable and easy to maintain.
6. Shared product language and UI consistency between web and desktop.
