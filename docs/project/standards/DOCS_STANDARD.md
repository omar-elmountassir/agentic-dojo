# 📄 AI-Native Documentation Standard (2026)

> **Purpose**: Ensure every project has the context required for Autonomous Agents (ZTE).
> **Rule**: "If it's not documented, the Agent cannot see it."

## 1. Strategic Context (The "Why")

| File         | Purpose                                                                        | Audience        |
| ------------ | ------------------------------------------------------------------------------ | --------------- |
| `MISSION.md` | The North Star. Vision and core values.                                        | Humans & Agents |
| `PRD.md`     | **Product Requirements Document**. What are we building and why? User stories. | Humans & Agents |
| `ROADMAP.md` | Timeline, phases, and active tasks. Source of truth for "What's Next".         | Humans & Agents |
| `TEAM.md`    | Roles, responsibilities (User vs Antigravity), and stakeholders.               | Humans          |

## 2. Technical Context (The "How")

| File              | Purpose                                                                          | User                  |
| ----------------- | -------------------------------------------------------------------------------- | --------------------- |
| `TECH-STACK.md`   | Precise list of choices (e.g., "Next.js 15, Tailwind, Claude Code CLI").         | **Agents** (Critical) |
| `ARCHITECTURE.md` | System design, data flow, agentic layers (Orchestrator pattern).                 | Agents                |
| `SRS.md`          | **Software Requirements Spec**. Functional details, data schemas, API contracts. | Agents                |
| `CONVENTIONS.md`  | Coding style, naming rules, folder structure.                                    | Agents (Linter)       |

## 3. Operational Context (The "Now")

| File        | Purpose                                                                 | Update Freq   |
| ----------- | ----------------------------------------------------------------------- | ------------- |
| `GEMINI.md` | **The Brain**. Active context, behavioral rules, partnership status.    | Session-based |
| `CLAUDE.md` | **The Tool**. Instructions for Claude Code CLI (commands, build steps). | Project-based |
| `AGENTS.md` | **The Fleet**. Registry of available sub-agents and their capabilities. | As needed     |

## 4. Legacy & Learning

| File             | Purpose                                 |
| ---------------- | --------------------------------------- |
| `docs/learning/` | Knowledge base (Lessons, Patterns).     |
| `archive/`       | Deprecated approaches (Reference only). |

---

_Created by Antigravity for Agentic Dojo._
