# 🎓 Study Notes: Agentic Patterns (AGENTS.md vs CLAUDE.md)

> **Topic**: Context Architecture
> **Problem**: User flagged `@import` failure in `AGENTS.md`.

## The Findings

1.  **CLAUDE.md** = **Active Memory**.
    - Supports `@import`.
    - Is loaded into the context window automatically by Claude Code.
    - _Purpose_: "What I need to know RIGHT NOW to work on this repo."

2.  **AGENTS.md** = **Passive Library**.
    - **does NOT** support `@import` (it is a standard markdown file).
    - _Purpose_: "The Registry of who does what." (Human/AI readable documentation).

## The Correction

We must **NOT** try to make `AGENTS.md` dynamic.

- **Bad**: `AGENTS.md` containing `@import .claude/agents/git-manager.md`.
- **Good**:
  - `AGENTS.md`: Lists agents and links to their definitions.
  - `CLAUDE.md`: Imports the _Core Standards_ and _Active Agent Protocols_ (if needed).

## Action for Rescue

- In `villa-thaifa`, `GEMINI.md` (our CLAUDE.md equivalent) **IS** the place for `@import`.
- `AGENTS.md` should be a static Table of Contents.
