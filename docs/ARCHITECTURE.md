# Architecture

## Repository Type

DedSec should start as a TypeScript monorepo with npm workspaces.

Planned applications:

- `apps/web`: public website for product positioning, features, service details,
  support links, and desktop downloads.
- `apps/desktop`: Electron desktop application for Windows, macOS, and Linux.

Planned shared packages:

- `packages/domain`: shared product types, validation schemas, device/service
  states, and business rules.
- `packages/i18n`: shared locale configuration, translation catalogs, message
  keys, and formatting helpers for web and desktop.
- `packages/ui`: shared UI primitives once web and desktop styles converge.

## Recommended Stack

Website:

- Next.js with React and TypeScript.
- Static-first pages for marketing, features, downloads, and documentation.
- Server routes only when needed for contact forms, telemetry opt-in, download
  metadata, or account functionality.

Desktop:

- Electron with React, Vite, and TypeScript.
- Electron main process owns operating system access.
- Renderer uses a typed preload API.
- Native access is introduced behind narrow IPC modules.

Shared foundations:

- TypeScript strict mode.
- Zod or equivalent schema validation for external inputs.
- Scalable i18n foundation shared across web and desktop.
- Shared design tokens once visual direction is established.
- Conventional npm scripts across workspaces: `dev`, `build`, `typecheck`,
  `test`, and `lint`.

## Internationalization

DedSec should be multilingual from the first implementation block, even if the
initial content ships with only one or two locales.

Recommended approach:

- Current scaffold uses route-prefixed locales (`/es`, `/en`) and shared
  message catalogs from `packages/i18n`.
- `next-intl` remains the preferred future web integration once its dependency
  graph is compatible with the secure Next.js version selected by the project.
- Use `i18next` with `react-i18next` for `apps/desktop` because it works well
  in Electron/Vite renderers and supports runtime language switching.
- Keep shared locale metadata, message key conventions, fallback rules, and
  common product strings in `packages/i18n`.
- Store translations as structured JSON catalogs by locale, for example
  `en`, `es`, and future regional variants such as `es-UY`.
- Use ICU-style messages for pluralization, interpolation, dates, numbers, and
  platform-specific download labels.
- Avoid hardcoded UI strings in app code once scaffolding begins.

Initial locale policy:

- Default locale: `es`.
- Required fallback locale: `en`.
- Locale detection: website may use route prefixes such as `/es` and `/en`;
  desktop should use saved preference first, then OS locale, then fallback.
- Translation keys should be stable and product-oriented, not copied from full
  sentence text.

Current implementation:

- `packages/i18n` exports locale metadata and typed messages.
- `apps/web` prerenders `/es` and `/en`.
- `apps/desktop` consumes shared Spanish desktop copy from `packages/i18n`.
- Runtime desktop language switching is deferred until the settings surface
  exists.

Scalability guardrails:

- Keep marketing copy, desktop UI strings, validation messages, release-channel
  labels, and support flows in separate namespaces.
- Validate missing keys during CI once real apps exist.
- Treat legal, privacy, diagnostic warnings, and repair-risk text as
  review-required translations.
- Do not mix locale selection with authentication or user identity; language is
  a preference, not a permission boundary.

## Why This Stack

- Electron is appropriate because DedSec needs a branded desktop app distributed
  across Windows, macOS, and Linux while sharing UI knowledge with the web app.
- Vite keeps desktop renderer development fast and simple.
- Next.js is a good fit for the website because it supports static marketing
  pages, SEO, download routes, and future server-backed pages without forcing a
  separate framework.
- npm workspaces are enough for the current project size and match the reference
  repository workflow.
- Shared packages prevent the website and desktop app from drifting in product
  terminology, validation, translation keys, and UI primitives.

## Desktop Security Boundary

Electron must enforce strict process boundaries:

- Disable Node integration in the renderer.
- Enable context isolation.
- Expose a typed preload API only.
- Keep IPC channels explicit and namespaced by feature.
- Validate all data entering the main process.
- Never pass arbitrary command strings from renderer to main.
- Ask for OS-level permissions only when the feature requires them.
- Store sensitive values with OS-backed secure storage where possible.

Initial desktop modules should be designed before implementation:

- App shell and navigation.
- Settings and preferences.
- Diagnostics permission boundary.
- Local storage adapter.
- Update and download metadata.
- Support/export tools.

## Website Architecture

The website should be the first public trust surface:

- Clear first viewport with the DedSec product signal.
- Feature pages for repair, optimization, diagnostics, and desktop app value.
- Download page with platform-specific installers.
- Release notes and checksum links once builds exist.
- Support and author links.

The website should not imply device access or automated repair capabilities
until those features exist in the desktop app.

## Data Direction

Initial foundation:

- No database is required before application behavior exists.
- Use shared domain schemas first.

When durable local desktop state is needed:

- Use SQLite for local settings, reports, cached download metadata, and offline
  history.

When cloud features are needed:

- Use PostgreSQL for accounts, public product metadata, support intake, release
  channels, and syncable user data.

## Release Architecture

Planned release channels:

- Alpha: private desktop builds and website preview.
- Beta: public download page with clear warnings and signed artifacts.
- Release candidate: staging branch with packaging and security review.
- Stable: production-ready main branch.

Desktop distribution must eventually include:

- Platform-specific installers.
- Code signing strategy.
- Checksums.
- Release notes.
- Auto-update decision.

## Open Decisions

- Exact visual design system and brand tone.
- Whether public website needs server-side contact/support flows in MVP.
- Whether desktop diagnostics require native Node modules or OS-specific helper
  commands.
- Auto-update provider and signing pipeline.
- Privacy classification for device diagnostics and customer data.
- Final list of launch locales beyond `es` and `en`.
