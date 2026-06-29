# Naming

This document defines naming standards for DedSec.

## Branch Names

Use descriptive, neutral branch names with a scope prefix:

```text
docs/005-workflow-governance
chore/006-operation-engine-foundation
feature/007-system-inventory
fix/008-installer-monitor-report
```

Use `feature/*` only for product functionality. Use `docs/*`, `chore/*`,
`fix/*`, `refactor/*`, or `test/*` when the work is not a user-facing product
capability.

Avoid agent names, AI tool names, provider names, personal scratch labels, and
generic names such as `update`, `changes`, or `fixes`.

## Commit Messages

Use concise, product-focused messages:

```text
docs: adopt workflow governance
chore: scaffold operation engine
feat: add system inventory service
fix: preserve installer monitor report paths
```

## Tags

Use SemVer tags:

```text
vX.Y.Z
vX.Y.Z-rc.N
```

Examples:

```text
v0.2.3
v0.3.0
v1.0.0-rc.1
```

## Snapshot Titles

Use:

```text
## YYYY-MM-DD - Block NNN: Short Title
```

## Document Names

Use uppercase names for governance documents:

```text
AGENTS.md
README.md
ROADMAP.md
SNAPSHOTS.md
TECHDEBT.md
ARCHITECTURE.md
SECURITY_PRIVACY.md
```

Use numbered lowercase ADR files:

```text
docs/adr/0001-monorepo-and-application-stack.md
```
