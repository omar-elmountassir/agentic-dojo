# 📝 The Ultimate Spec Prompt

> **Purpose**: To force the Agent into "Architect Mode" before "Coder Mode".
> **Trigger**: When starting ANY complex feature or refactor.

## The Prompt

```markdown
@context_files (Add relevant files here)

# 🏗️ Feature Specification Request

I need to implement [FEATURE NAME].
Do NOT write code yet.
Instead, strictly follow the **Spec-First Protocol**:

## 1. Context Analysis

- Summarize the current state of the related code.
- Identify potential risks/side-effects.

## 2. Architecture Design

- Proposed file structure/changes.
- Key functions/classes signatures.
- Data models (JSON/Interfaces).

## 3. Implementation Plan (Step-by-Step)

- Break down the work into atomic steps (max 1 file change per step).
- define the "Definition of Done" for this task.

## 4. Verification Strategy

- How will we prove it works? (Test command, manual check).

---

Produce this as a markdown artifact: `specs/[feature-name].md`.
WAIT for my approval before writing code.
```
