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
- Gitflow, pull request ownership, PR labels, snapshots, and tech debt tracking are
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

## 2026-06-26 - Block 003: PR Ownership Workflow

Branch:

- `chore/002-pr-assignee-workflow`

Current state:

- PR #1 was merged into `develop`.
- Lightweight checkpoint tag `v0.1.0` was created on the `develop` merge commit.
- Workflow rules now require assigning `@mvuljevas` to every pull request rather
  than requesting `@mvuljevas` as reviewer.
- `.github/CODEOWNERS` was removed because CODEOWNERS requests reviews and
  cannot assign pull requests.
- The pull request template now includes an ownership checklist.

Decisions:

- Work branches may use prefixes that match the block scope, such as `chore/*`,
  `docs/*`, `fix/*`, `refactor/*`, `test/*`, and `feature/*`.
- `feature/*` is reserved for product functionality, not repository foundation
  or workflow maintenance.
- Reviewer requests are omitted when `@mvuljevas` is the pull request author to
  avoid GitHub self-review restrictions.

Risks:

- Repository settings may still need to be reviewed in GitHub if branch
  protection was configured to require CODEOWNERS review.

Next suggested step:

- Revisit the assignee workflow if GitHub reports ownership warnings, then keep
  the rest of the PR labeling and Gitflow structure intact.

## 2026-06-27 - Block 004: Automated Merge Workflow

Branch:

- `chore/003-pr-merge-automation`

Current state:

- PR #2 was merged into `develop`.
- Lightweight checkpoint tag `v0.2.0` was created on the PR #2 merge commit.
- The GitHub repository base branch was updated to `develop`.
- Workflow rules now preserve `main`, `staging`, and `develop` as permanent
  branches while deleting obsolete merged work branches.
- Pull request rules no longer require default assignees or default reviewers.
- Pull request automation rules now allow PRs to be merged automatically after
  required verification, labels, and branch targets are confirmed.

Decisions:

- `@mvuljevas` should not be assigned by default because GitHub warns against
  self-assignment in this workflow.
- `@mvuljevas` should not be requested as reviewer by default because GitHub
  blocks self-review requests.
- Scope labels, PR descriptions, commit history, and merge history are the
  source of workflow traceability.
- Merged work branches should be deleted locally and remotely after their merge
  commit has been tagged when applicable.

Risks:

- Automated merging requires care when a PR has unresolved conflicts, failed
  checks, missing labels, or an explicit user hold.

Next suggested step:

- Merge this workflow update automatically, tag the `develop` merge commit, and
  delete obsolete merged work branches.

## 2026-06-27 - Block 005: SemVer Tagging Rules

Branch:

- `docs/004-semver-tagging-rules`

Current state:

- The previous `v0.3.0` tag on the PR #3 merge commit was deleted locally and
  remotely.
- The same PR #3 merge commit was retagged as `v0.2.1` because it was a
  workflow correction, not a new product capability.
- SemVer tagging rules are now documented directly in `AGENTS.md`.

Decisions:

- `PATCH` must be used for fixes, workflow corrections, documentation fixes,
  dependency safety updates, CI/tooling maintenance, and compatible maintenance
  changes.
- `MINOR` must be reserved for new product capabilities, new app surfaces, or
  meaningful compatible user-facing functionality.
- Incorrect tags can be replaced only when they are not tied to public release
  artifacts; otherwise a new corrective tag must be created.

Risks:

- The earlier `v0.2.0` tag remains as historical context from the previous
  workflow block. Future tags should follow the clarified SemVer rules.

Next suggested step:

- Merge this SemVer workflow update automatically, tag it as the next patch,
  and delete the obsolete work branch.

## 2026-06-29 - Block 006: Workflow Governance and PC Scope Alignment

Branch:

- `docs/005-workflow-governance`

Current state:

- The `mvuljevas/AGENTS` reference repository was analyzed for templates,
  presets, workflows, naming, labels, versioning, and context guidance.
- No direct Electron/monorepo template exists in that reference, so DedSec
  adopted the useful `lean-context` preset incrementally instead of copying a
  full template.
- DedSec now includes AI context, search, token-budget, conventions, naming,
  and workflow docs adapted to this project.
- GitHub labels moved to a namespaced model: `type:*`, `status:*`,
  `priority:*`, and `area:*`.
- Public product metadata and shared copy were realigned to PC/Desktop repair,
  diagnostics, resource optimization, safe cleanup, secure installer monitoring,
  and system maintenance.
- The package version was bumped to `0.2.3` for this patch-level governance and
  scope correction.

Decisions:

- DedSec remains a PC/Desktop product. Non-PC repair and optimization workflows
  are out of scope unless explicitly reopened by the project owner.
- The `lean-context` workflow layer is useful for this repository because it
  reduces context waste while preserving DedSec's existing Gitflow and release
  rules.
- Workflow governance changes should continue using patch SemVer unless they
  introduce an incompatible workflow contract.
- Privileged PC operations must be designed with scan-first, confirm-later,
  allowlist, logging, reporting, and user-data protection rules before
  implementation.

Risks:

- Existing GitHub labels may need to be synchronized with
  `.github/create_labels.ps1` after this branch is merged.
- The next PC operations architecture block must define registry optimization,
  network blocking, installer monitoring, and cleanup safety before code ports
  ideas from the legacy PC reference.

Next suggested step:

- Create the PC scope and safety architecture block before implementing
  privileged diagnostics, optimization, cleanup, installer monitoring, or
  registry operations.
