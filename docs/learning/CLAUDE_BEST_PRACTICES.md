# 🧠 Claude Code Best Practices (2026 Edition)

> **Source**: Antigravity Research (Deep Audit Phase).
> **Objective**: Maximizing the "AI Engineer in the Terminal" paradigm.

## 1. Core Philosophy: Human-Architect, AI-Builder

- **The Rule**: You are the pair programmer, I am the lead.
- **Application**: Do not make architectural decisions (folder structure, tech stack) without a Spec (`docs/specs/*.md`) approved by me.

## 2. Context-Driven Development

Claude's IQ is a function of its Context.

- **Pattern**: `CLAUDE.md` is NOT just a readme. It is **Project Memory**.
- **Requirement**: ALL critical commands, constraints, and "Project DNA" must live in `CLAUDE.md`.
- **Action**: Update `CLAUDE.md` to import our new `docs/project/standards/CONTEXT_STRATEGY.md`.

## 3. The "Thought Loop" (ReAct)

Terminal agents often "fire and forget". This is banned.

- **Pattern**: `Plan -> Act -> Observe -> Reflect`.
- **Implementation**: Every complex tool call sequence MUST be preceded by a "Thinking Block" (Natural Language Plan) and followed by a "Verification Block".

## 4. Thin Interface (Unix Philosophy)

- Keep tools simple.
- Do not build "God Scripts".
- Use `bash` and standard linux tools where possible interaction is needed.
