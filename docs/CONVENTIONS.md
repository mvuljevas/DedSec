# Conventions

This document records DedSec repository conventions.

## Language

- Repository documentation and code comments should be written in English.
- User-facing product copy may be localized through `packages/i18n`.
- Spanish can appear in translation catalogs and user-facing examples.

## Product Scope

- DedSec is currently a PC/Desktop repair and optimization product.
- Current desktop priorities include diagnostics, resource optimization, safe
  cleanup, secure installer monitoring, network/process visibility, remnant
  cleanup, and local reports.
- Non-PC repair and optimization workflows are out of scope unless the project
  owner explicitly reopens that direction.

## Public Metadata

Do not include agent names, AI tool names, provider names, generated-by
signatures, or unrelated metadata in public files, branches, commits, PRs, tags,
release notes, or product copy.

## Documentation Updates

Update documentation when work changes:

- Product scope or roadmap.
- Setup, commands, or usage.
- Workflow rules.
- Architecture decisions.
- Security or privacy assumptions.
- Known risks or technical debt.
- Release or version state.

## Desktop Safety

Future PC operations should follow these defaults:

- Scan before changing anything.
- Explain what will be inspected or modified.
- Ask for explicit confirmation before destructive actions.
- Use allowlisted operations, not arbitrary renderer-provided commands.
- Log results and produce local reports.
- Treat usernames, paths, hostnames, logs, process data, network data, and
  installer traces as potentially sensitive.
