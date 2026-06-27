# DedSec

Mobile phone repair and optimization, made simple.

DedSec is an open source tool by Mauricio Vuljevas for mobile phone repair,
maintenance, device identification, diagnostics, and optimization.

The repository is a TypeScript monorepo with two product surfaces:

- Public website: product showcase, documentation, release notes, and download
  links.
- Desktop app: Electron application for Windows, macOS, and Linux.

Project metadata:

- Author: Mauricio Vuljevas
- Author URI: https://www.mvuljevas.com
- Repository: https://github.com/mvuljevas/DedSec

## Current Status

The first application scaffold is active:

- `apps/web` builds a multilingual Next.js landing surface with `/es` and `/en`.
- `apps/desktop` builds an Electron/Vite/React shell with a typed preload
  boundary.
- `packages/domain`, `packages/i18n`, and `packages/ui` provide shared
  foundations.

## Proposed Monorepo Layout

```text
apps/
  web/       Public website, Next.js app.
  desktop/   Cross-platform Electron desktop app.
packages/
  domain/    Shared product types, validation schemas, and business rules.
  i18n/      Shared locale configuration and product messages.
  ui/        Shared UI primitives once web and desktop converge.
docs/
  adr/       Architecture decision records.
```

## Recommended Stack

- Language: TypeScript.
- Package manager: npm workspaces.
- Website: Next.js with React.
- Desktop: Electron, React, Vite.
- Shared validation: Zod or similar schema library.
- Local desktop storage: SQLite when durable local state is required.
- Cloud backend: PostgreSQL-backed service when accounts, sync, or downloads
  require server state.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full foundation
analysis.

## Development

Install dependencies:

```bash
npm install
```

Build everything:

```bash
npm run build
```

Type-check everything:

```bash
npm run typecheck
```

Run the website:

```bash
npm run dev:web
```

Run the desktop app:

```bash
npm run dev:desktop
```

## Repository Workflow

DedSec follows the Gitflow and PR rules documented in [AGENTS.md](AGENTS.md).
All meaningful project changes should update [docs/SNAPSHOTS.md](docs/SNAPSHOTS.md)
and, when applicable, [TECHDEBT.md](TECHDEBT.md).
