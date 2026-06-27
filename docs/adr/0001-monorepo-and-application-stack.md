# ADR 0001: Monorepo and Application Stack

## Status

Proposed

## Context

DedSec needs a public website and a cross-platform desktop application. The
repository should support both surfaces without duplicating product language,
validation logic, or future UI primitives.

## Decision

Use a TypeScript monorepo with npm workspaces.

Applications:

- `apps/web`: Next.js, React, TypeScript.
- `apps/desktop`: Electron, React, Vite, TypeScript.

Shared packages:

- `packages/domain`: product types, schemas, and shared business rules.
- `packages/ui`: shared UI primitives and design tokens when the UI stabilizes.

## Consequences

Positive:

- Shared code can evolve without publishing private packages.
- Web and desktop can use one product vocabulary.
- Electron and Next.js both fit the TypeScript/React foundation.
- npm workspaces keep the setup understandable at the current scale.

Tradeoffs:

- Workspace boundaries must stay disciplined.
- Desktop code must not leak privileged APIs into shared packages.
- Next.js and Electron build pipelines require separate packaging rules.

## Follow-up Work

- Scaffold the web app in `apps/web`.
- Scaffold the desktop app in `apps/desktop`.
- Add domain package schemas before data-bearing features.
- Add packaging and release ADR before public downloads.
