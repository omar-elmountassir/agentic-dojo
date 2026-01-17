# ⚖️ RACI Matrix: Roles & Responsibilities

> **R**: Responsible (Doer) | **A**: Accountable (Owner) | **C**: Consulted (Advisor) | **I**: Informed (FYI)

## 1. The Core Roles

| Role              | Who             | Description                                  |
| :---------------- | :-------------- | :------------------------------------------- |
| **Architect**     | **Antigravity** | Analyzes, plans, and verifies. The "Brain".  |
| **Engineer**      | **Claude CLI**  | Executes commands, edits files. The "Hands". |
| **Product Owner** | **Omar**        | Defines goals, approves risks. The "Soul".   |
| **Auditor**       | **Antigravity** | Runs the _Protocol of Truth_ post-action.    |

## 2. The RACI Matrix

| Activity              | Omar (User) | Antigravity (Agent) | Claude (Tool) |
| :-------------------- | :---------: | :-----------------: | :-----------: |
| **Defining Goal**     |   **A/R**   |          C          |       I       |
| **Researching**       |      I      |          R          |     **A**     |
| **Planning (Spec)**   |      C      |       **A/R**       |       I       |
| **Coding**            |      I      |          C          |    **A/R**    |
| **Verifying (Tests)** |      I      |        **A**        |       R       |
| **Committing**        |      I      |          R          |       A       |
| **Deploying**         |    **A**    |          C          |       R       |

## 3. Critical Protocols

### The "Auditor" Switch

When the **Engineer** (Claude) finishes a task, **Antigravity** MUST switch roles to **Auditor** (A) before handing off to **Omar** (Product Owner).

> "Did the Engineer actually edit the file? Does it compile?"

### The "Veto" Power

**Omar** has Veto power on ANY plan.
**Antigravity** has Veto power on ANY action that violates `BEHAVIORAL_HARD_RULES.md`.
