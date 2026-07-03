# Workflows

This document complements `AGENTS.md` with repeatable project workflows.

## Starting a Session

When asked to analyze the repository:

1. Read `README.md`, `AGENTS.md`, `docs/AI_CONTEXT.md`, and recent snapshots.
2. Inspect git branch and working tree state.
3. Use `docs/AI_SEARCH.md` to locate relevant files.
4. Summarize current state, risks, and next useful action.

## Work Blocks

Each block should include:

- Clear scope or assumptions.
- Focused documentation or implementation.
- Local verification when applicable.
- Snapshot update when project state changes.
- Roadmap update when product direction changes.
- Technical debt update when risk is created, changed, accepted, or resolved.
- Version update when the iteration changes project state.
- Gitflow PR, merge, and branch cleanup when publishing the block.

## Gitflow

DedSec uses:

```text
work branch -> develop -> staging -> main
```

Rules:

- Work branches start from `develop`.
- Work branch PRs target `develop`.
- Release-candidate PRs move `develop` to `staging`.
- Production release PRs move `staging` to `main`.
- Keep `main`, `staging`, and `develop` present at all times.
- Delete obsolete work branches after merge.

## Pull Requests

Every PR should include:

- Scope.
- Verification.
- Documentation updates.
- Risks.
- At least one scope label.

Do not assign or request reviewers by default. Request review only when another
GitHub user or team is explicitly responsible.

## Versioning

DedSec uses SemVer versions before `1.0.0`. Git tags are reserved for approved
release milestones.

- `MAJOR`: incompatible public behavior, data, API, packaging, or workflow
  contract changes.
- `MINOR`: new compatible product capability or app surface.
- `PATCH`: fixes, workflow corrections, documentation fixes, dependency safety
  updates, CI/tooling maintenance, and compatible maintenance changes.

The authoritative version source is `package.json`. Workspace package versions
and `package-lock.json` should stay synchronized for versioned blocks.

Tagging rules:

- Do not tag routine `develop` merges.
- Do not tag foundation/scaffolding unless the project owner explicitly
  approves a release milestone.
- Never create lightweight tags.
- All tags must be annotated and GPG-signed.
- All commits must be GPG-signed. If signing is unavailable, stop and report
  the blocker.

## GitHub Labels

Use namespaced labels:

- `type:*`
- `status:*`
- `priority:*`
- `area:*`

The source is `.github/labels.yml`; synchronize with `.github/create_labels.ps1`.

## Next-Step Fallback

Use this order:

1. `docs/ROADMAP.md`
2. `TECHDEBT.md`
3. Ask the project owner
