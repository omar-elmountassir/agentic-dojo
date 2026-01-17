# 🧠 State Management: The "Brain Dump"

> **Purpose**: Physical persistence of Agentic Memory.
> **Rule**: "If it's not in `state/`, it didn't happen."

## Directory Structure

### 1. `state/checkpoints/` (Milestones)

- **Usage**: When a major phase is done (e.g., `phase-0-complete.md`).
- **Content**: Summary of what was achieved, list of active files, decisions made.
- **Frequency**: After every Task Boundary "Completion".

### 2. `state/memory/` (Context)

- **Usage**: Storing rigid context that must survive sessions.
- **Examples**:
  - `USER_VOICE_ARCHIVE.md` (Already moved here).
  - `DECISION_LOG.md` (Why we chose X over Y).

### 3. `state/proofs/` (Validation)

- **Usage**: Storing evidence that a task worked.
- **Examples**:
  - `test_results_2026-01-17.log`
  - `verification_diff.patch`
  - `ui_render_snapshot.png`

## Operational Workflow

1.  **Start Task**: Read `state/checkpoints/LATEST.md`.
2.  **End Task**: Write new entry to `state/checkpoints/`.
3.  **Verify**: Save proof to `state/proofs/`.
