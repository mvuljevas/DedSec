# Technical Debt

Technical debt must be tracked intentionally. Add an entry whenever the project
accepts a shortcut, delayed decision, incomplete validation, or known risk.

## Severity Levels

- `Critical`: Security, privacy, data loss, or release-blocking risk.
- `High`: Major product behavior risk or difficult migration if ignored.
- `Medium`: Important maintainability, reliability, or UX issue.
- `Low`: Minor cleanup, polish, or documentation gap.

## Status Values

- `Open`
- `In Progress`
- `Accepted`
- `Resolved`

## Entries

| ID | Severity | Status | Area | Debt | Impact | Planned Resolution |
| --- | --- | --- | --- | --- | --- | --- |
| TD-001 | Medium | Resolved | Architecture | Framework choices are documented as a proposed foundation but not implemented in application code yet. | Future scaffolding could drift if the first implementation ignores the foundation docs. | Resolved with the initial Next.js web scaffold, Electron/Vite desktop scaffold, and shared TypeScript packages. |
| TD-002 | High | Open | Security | Desktop permissions and diagnostic boundaries are not modeled in code yet. | A desktop app that touches device diagnostics can overreach if OS permissions and data boundaries are designed late. | Define Electron IPC, local storage, and permission rules before desktop features. |
| TD-003 | High | Open | Privacy | Customer/device data classification is not yet formalized. | Web or desktop features could collect more data than needed. | Create a privacy matrix before account, intake, diagnostics, sync, or support flows. |
| TD-004 | Medium | Open | Release | Download artifact generation and signing are not configured yet. | Website download links could point to unverifiable or platform-incomplete builds. | Add packaging, signing, checksums, and release notes before public downloads. |
| TD-005 | Low | Accepted | Dependencies | `apps/web` uses `next@16.3.0-preview.5` because current stable Next pins a vulnerable PostCSS version. | Preview framework releases can change faster than stable releases. | Move back to the next stable Next release once it includes PostCSS `>=8.5.10` and keeps `npm audit` clean. |
| TD-006 | High | Open | PC Operations | PC repair, cleanup, installer monitoring, network blocking, and registry optimization safety policies are not fully modeled yet. | Implementing privileged desktop operations without a policy could risk data loss, overbroad permissions, or misleading cleanup behavior. | Complete the PC scope and safety architecture block before adding privileged system actions. |
