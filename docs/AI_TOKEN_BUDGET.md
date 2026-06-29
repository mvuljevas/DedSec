# AI Token Budget

These rules keep context loading bounded during assisted development.

## Budget Rules

- Do not read the whole repository by default.
- Do not inspect generated files, dependencies, build artifacts, caches, local
  reports, or lockfiles unless directly relevant.
- Do not inspect secrets or `.env` files unless the project owner explicitly
  asks and the task requires it.
- Prefer summaries, snapshots, search results, and targeted slices before raw
  repository dumps.
- Stop searching once enough evidence exists to make a safe change or plan.

## Default Read Order

1. `README.md`
2. `AGENTS.md`
3. `docs/AI_CONTEXT.md`
4. Recent entries in `docs/SNAPSHOTS.md`
5. Version source for the stack, usually `package.json`
6. Search results from `docs/AI_SEARCH.md`
7. Targeted file slices

## Output Rules

- Summarize command results instead of quoting long output.
- Link to files and line numbers when useful.
- Keep final answers focused on decisions, changes, verification, risks, and
  next steps.

## Large Files

Before opening a large file, locate the target:

```bash
rg "target-pattern" path/to/file
```

Then read only the relevant section.
