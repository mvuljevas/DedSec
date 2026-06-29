# DedSec Roadmap

## Product Vision

DedSec is a product ecosystem for PC repair and optimization, with a public
website for trust, explanation, and downloads, plus a desktop app that supports
future diagnostics, resource optimization, safe cleanup, secure installer
monitoring, and maintenance workflows.

The product has two verticals:

- Website: product presentation, features, support links, author identity,
  release notes, and platform-specific downloads.
- Desktop app: cross-platform workspace for future PC repair, optimization,
  secure installer monitoring, local tools, settings, diagnostics, and support
  handoff.

## Foundation 1: Repository Preparation

Goal: prepare the repository without building app behavior.

Scope:

- Monorepo workspace metadata.
- Gitignore and editor defaults.
- Gitflow, PR, CODEOWNERS, labels, and contributor rules.
- Architecture, roadmap, security/privacy, ADR, snapshots, and tech debt docs.
- Empty app/package directories as placeholders.
- Shared i18n architecture placeholder.
- Lean context workflow docs and search-first repository guidance.
- Namespaced GitHub labels for type, status, priority, and area.
- PC/Desktop product scope cleanup in public metadata and docs.

Out of scope:

- Web app implementation.
- Electron app implementation.
- UI design implementation.
- Packaging or release artifacts.

## Foundation 2: PC Scope and Safety Architecture

Goal: document the PC/Desktop product scope before adding privileged features.

Scope:

- System diagnostics boundaries.
- Resource optimization boundaries.
- Safe cleaner scan/confirm/report workflow.
- Secure installer monitor workflow.
- Optional installer network blocking model.
- Real-time process and network visibility model.
- Remnant cleanup categories and user-data protections.
- Registry optimization policy, including what is allowed, risky, or excluded.

Out of scope:

- Implementing OS-level repair commands.
- Running cleanup or registry changes.
- Installer monitoring implementation.
- Packaging or release artifacts.

## MVP 1: Public Website Shell

Goal: publish a credible product surface before downloads exist.

Scope:

- DedSec brand/product first viewport.
- Product features.
- Repair and optimization service explanation.
- Author and trust links.
- Download page placeholder with platform readiness states.
- Basic SEO metadata.
- Locale-ready routing and translation catalog structure.

Out of scope:

- Actual installer downloads.
- Accounts.
- Device diagnostics.
- Payment flows.

## MVP 2: Desktop Shell

Goal: create a cross-platform desktop foundation for PC optimization and repair.

Scope:

- Electron shell for Windows, macOS, and Linux.
- React/Vite renderer.
- Typed preload bridge.
- Secure app settings surface.
- Language preference foundation.
- About, version, and support links.
- No privileged diagnostics yet.

Out of scope:

- PC repair actions.
- OS-level optimization commands.
- Background services.
- Auto-update.

## MVP 3: Desktop Diagnostics Foundation

Goal: define a safe diagnostic workflow before optimization features.

Scope:

- Explicit consent screens.
- System/session data classification.
- Local diagnostic report structure.
- Export/delete report controls.
- Platform capability detection.

Out of scope:

- Automated system repair.
- Cloud sync.
- Remote support.

## MVP 4: Optimization Tools

Goal: add carefully scoped optimization utilities.

Scope:

- Clear preflight checks.
- Reversible or explainable actions first.
- Action logs.
- Platform-specific capability guards.
- Strong warnings for risky operations.

Out of scope:

- Unverified system modifications.
- Hidden background cleanup.
- Commands without user confirmation.

## MVP 5: Downloads and Release Pipeline

Goal: make public downloads reliable and verifiable.

Scope:

- Platform installers.
- Signing strategy.
- Checksums.
- Release notes.
- Website download metadata.

## MVP 6: Accounts, Support, and Sync

Goal: introduce cloud features only after privacy rules are clear.

Scope:

- Optional account.
- Support intake.
- Optional report upload.
- Privacy-first sync.
- Data export and deletion.

## Release Channels

- Alpha: internal website and desktop shell.
- Beta: public website with clearly labeled preview desktop downloads.
- Release candidate: staging branch with security and packaging review.
- Stable: main branch.
