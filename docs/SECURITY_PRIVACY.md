# Security and Privacy

Security and privacy are product requirements, not late-stage polish.

## Privacy Defaults

- Collect the minimum data needed for each feature.
- Local desktop reports are private by default.
- Diagnostic data must stay local unless the user explicitly exports or uploads
  it.
- Support uploads must be opt-in.
- Public website analytics, if added, must be privacy-conscious and documented.
- Accounts and sync must be optional unless a feature strictly requires them.

## Data Classification

Before implementing diagnostics or support workflows, classify data as:

- `public`: product copy, release notes, download metadata.
- `user_profile`: account or contact information.
- `device_metadata`: model, OS, storage, battery, or diagnostic details.
- `sensitive_device_data`: identifiers, logs, serials, personal files, tokens,
  or anything that could identify a customer or device owner.
- `operational_secret`: API keys, signing certificates, tokens, and credentials.

## Desktop Security

Electron requirements:

- Disable Node integration in renderer.
- Enable context isolation.
- Use a typed preload API.
- Keep IPC handlers small and explicit.
- Validate every renderer request in the main process.
- Never accept arbitrary command strings from the renderer.
- Keep OS-level actions behind user-visible consent.
- Prefer OS-backed secure storage for secrets.
- Log actions without storing unnecessary personal or device data.

## Diagnostics and Optimization Guardrails

Any future repair or optimization feature must:

- Explain what it will inspect or change before running.
- Ask for confirmation before risky actions.
- Prefer read-only diagnostics before write actions.
- Record an action log the user can inspect.
- Provide export/delete controls for local reports.
- Avoid irreversible actions unless the user receives clear warnings.

## Website Security

The website must:

- Use HTTPS in production.
- Avoid exposing secrets in client bundles.
- Validate contact/support forms server-side if forms are added.
- Avoid misleading download links.
- Provide checksums once installers exist.

## Release Security

Required before public desktop downloads:

- Dependency audit.
- Electron IPC review.
- Packaging review for Windows, macOS, and Linux.
- Signing and notarization plan where applicable.
- Checksum publication.
- Release notes with known risks.

## Data Rights

Users should be able to:

- Export local diagnostic reports.
- Delete local reports.
- Delete optional cloud account data.
- Revoke support access or uploaded report access where applicable.
- Understand what data was collected and why.
