# 🧠 PROPER CONTEXT STRATEGY (Modular)

> **Directive**: NEVER create a monolithic `CONTEXT.md`.
> **Reason**: It is a "Toxic Pattern" (User Voice ID: 1956). It leads to stale data, token waste, and confusion.

## 1. The Strategy: "Index of Pointers"

Instead of _copying_ content, we _point_ to it.

- **Bad**: `CONTEXT.md` containing all rules, 500 lines of code, and history.
- **Good**: `GEMINI.md` (The Index) containing:
  - `@import docs/identity/IDENTITY.md`
  - `@import state/tasks/ACTIVE.md`

## 2. File Types

1.  **Index Files** (`*.index.md` or `GEMINI.md`): Only contain links/imports. Lightweight.
2.  **Source Files**: The actual single-source-of-truth docs.
3.  **Memory Files**: `state/memory/*.md`. Append-only logs.

## 3. Dynamic Loading

- **Agent**: "I need to know about Auth."
- **Action**: Agent reads `docs/auth/README.md` (Limit 800 lines).
- **Result**: Context is loaded _dynamically_, not _statically_.

## 4. The "Preservation" Rule

- When migrating or resetting:
  - **Do NOT** summarize everything into one text block.
  - **DO** move the _files_ themselves (`cp docs/old docs/new`).
  - **DO** update the Index to point to the new location.

---

_Codified 2026-01-17 to prevent "AI Amnesia" and "Context Toxicity"._
