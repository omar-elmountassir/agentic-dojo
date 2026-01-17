# 🛑 Reliability Patterns: Anti-Toxic Protocols

> **Objective**: Eliminate Hallucinations, Assumptions, and Silent Failures.
> **Source**: Industry Best Practices (Reflection, Grounding, CoVe).

## 1. The Toxicity Spectrum

We must actively fight these agentic diseases:

- **Hallucination**: Inventing facts (versions, dates).
- **Silent Failure**: Ignoring error outputs and continuing.
- **Assumption**: Guessing instead of verifying (Lazy Thinking).

## 2. Mitigation Patterns (Mandatory)

### A. Reflection (The "Double Check")

_Before finalizing any complex task:_

1.  **Draft**: Generate the solution.
2.  **Critique**: Switch role to `@auditor`. Criticism: "Did I check the version? Did I run the code?"
3.  **Refine**: Fix issues found in critique.

### B. Grounding (The "Fact Anchor")

_Never assert without a source._

- **Technique**: RAG / Search-First.
- **Rule**: If `current_date` < `release_date`, assume you don't know it. Search web.

### C. Tool-Use Resilience

_Tools fail. Agents must handle it._

- **Pattern**: `try/catch/retry`.
- **Protocol**:
  - If `read_file` fails -> Check path (`ls -R`).
  - If `grep` returns empty -> Widen search.
  - **NEVER** ignore a non-zero exit code.

## 3. The "State" Architecture

We persist our brain state to avoid "Context Amnesia".

- `state/checkpoints/`: Major milestones (Git tags, Release-like snapshots).
- `state/memory/`: Context dumps (like `USER_VOICE_ARCHIVE.md`).
- `state/proofs/`: Evidence of success (Logs, Screenshots, Diff outputs).

---

_Standardized by Antigravity (Gemini 3 Pro) for Agentic Dojo._
