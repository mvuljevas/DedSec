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
