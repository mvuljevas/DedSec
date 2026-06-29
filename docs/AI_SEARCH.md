# AI Search

Use this file to locate the smallest useful context before opening files.

## General Rules

- Prefer `rg` over recursive grep.
- Search by subsystem, route, symbol, command, or error before reading files.
- Use `rg --files` to discover paths.
- Prefer small file slices after locating a target.
- Avoid dependency folders, build outputs, caches, lockfiles, local reports,
  and secrets unless directly relevant.

## Common Commands

```bash
rg --files
rg "pattern"
git status --short --branch
git diff --stat
git log --oneline --decorate -n 10
```

## Product Scope

```bash
rg "PC|desktop|diagnostic|optimization|installer|cleanup|repair" README.md AGENTS.md docs apps packages
rg "non-PC|out of scope|scope" README.md AGENTS.md docs apps packages
```

## Web App

```bash
rg --files apps/web
rg "metadata|generateStaticParams|locale|page" apps/web
rg "getMessages|serviceAreas|product" apps/web packages
```

## Desktop App

```bash
rg --files apps/desktop
rg "contextIsolation|preload|ipc|BrowserWindow" apps/desktop
rg "window\\.dedsec|electronAPI|mainWorld" apps/desktop
```

## Shared Packages

```bash
rg --files packages
rg "product|serviceAreas|Locale|messages" packages
rg "export " packages
```

## Workflow and Release

```bash
rg "Gitflow|Pull Request|SemVer|tag|label|version" AGENTS.md docs .github package.json
rg "v[0-9]+\\.[0-9]+\\.[0-9]+" docs AGENTS.md
```

## When Search Is Not Enough

Read only the relevant slice or short canonical file. Read complete files only
when the file is short, authoritative, or directly required for correctness.
