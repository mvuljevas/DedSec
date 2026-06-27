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
4. Work branches start from `develop`.
5. Merge transitions must be done via Pull Requests on GitHub:
   - `feature/*`, `chore/*`, `docs/*`, `fix/*`, `refactor/*`, `test/*` -> PR -> `develop` (Integration)
   - `develop` -> PR -> `staging` (Release Candidate)
   - `staging` -> PR -> `main` (Production Release)
6. Do not assign `@mvuljevas` or request `@mvuljevas` as reviewer by default.
   GitHub may warn about self-assignment and blocks self-review requests. Keep
   ownership visible through branch names, labels, PR scope, and merge history.
7. After merging a work branch PR to `develop`, create a lightweight Git tag
   on the merge commit following the SemVer rules below.
8. For release candidates merged to `staging` via PR, tag the commit as
   `v<major>.<minor>.<patch>-rc.<num>`, for example `v1.0.0-rc.1`.
9. For production releases merged to `main` via PR, tag the commit with the
   GPG-signed tag `v<major>.<minor>.<patch>`, for example `v1.0.0`.
10. Push relevant branches and tags after each completed block using
    `git push origin <branch> --tags`.
11. Keep `main`, `staging`, and `develop` present at all times.
12. Delete obsolete work branches after their pull requests are merged.

Branch names must describe the product change, for example:

- `chore/001-project-foundation`
- `chore/002-monorepo-scaffold`
- `docs/003-workflow-rules`
- `feature/004-web-download-page`
- `fix/005-desktop-launch-error`

## Pull Request Rules

When opening pull requests on GitHub, follow these guidelines:

1. Assignees: do not set assignees by default.
2. Reviewers: do not request reviewers by default. Request a reviewer only when
   a different GitHub user or team is explicitly responsible for review.
3. PR labels: every PR must have at least one label representing the scope of
   the change. Standard labels are configured in `.github/labels.yml` and can
   be synced using `.github/create_labels.ps1`.
4. PR descriptions must include scope, verification, risks, and documentation
   updates.
5. Foundation, architecture, security, and workflow changes must update
   `docs/SNAPSHOTS.md`.

## Pull Request Automation

Pull requests should be merged automatically when all of the following are
true:

- The PR is not a draft.
- The PR targets the correct Gitflow branch.
- Required local verification for the block has passed.
- The PR has at least one scope label.
- The PR has no known unresolved conflicts or explicit user hold.

Automation rules:

1. Work branch PRs targeting `develop` may be merged with a normal merge commit.
2. After a PR is merged into `develop`, fetch the remote, create a lightweight
   checkpoint tag on the merge commit, and push the tag.
3. Release-candidate PRs from `develop` to `staging` may be merged once release
   verification passes, then tagged as `v<major>.<minor>.<patch>-rc.<num>`.
4. Production PRs from `staging` to `main` may be merged once release approval
   is clear, then tagged with a GPG-signed stable tag.
5. After a PR is merged and tagged, delete the obsolete work branch locally and
   remotely.
6. Never delete `main`, `staging`, or `develop`.

## SemVer Tagging

DedSec uses SemVer tags even before `1.0.0`.

Use the version segment that matches the real change:

- `MAJOR`: incompatible public behavior, data, API, packaging, or workflow
  contract changes.
- `MINOR`: new product capability, new app surface, or meaningful compatible
  user-facing functionality.
- `PATCH`: bug fixes, workflow corrections, documentation fixes, dependency
  safety updates, CI/tooling maintenance, and other compatible maintenance
  changes.

Examples:

- Initial foundation or first usable scaffold: `v0.1.0`.
- Workflow correction after `v0.1.0`: `v0.1.1`.
- Dependency security fix after `v0.2.0`: `v0.2.1`.
- New desktop diagnostic capability after `v0.2.1`: `v0.3.0`.

Tagging rules:

1. Do not use a `MINOR` bump for a fix or workflow correction.
2. Do not use a `PATCH` bump for a new product capability.
3. If a tag was created with the wrong SemVer level and has not been used for a
   release artifact, replace it with the correct tag and document the
   correction in `docs/SNAPSHOTS.md`.
4. Once a tag is tied to public release artifacts, do not rewrite it; create a
   new corrective tag instead.

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
7. Delete the obsolete work branch after the merge and tag are complete.
8. Suggested next logical step.

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
