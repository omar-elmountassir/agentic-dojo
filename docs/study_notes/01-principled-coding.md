# 🎓 Study Notes: Principled AI Coding

> **Session**: 2026-01-17
> **Source**: `docs/learning/agentic-engineering/curriculum/`

## Lesson 1: The Core Trinity

"Tools change, principles remain."

1.  **Context**: The "World" the AI sees.
2.  **Prompt**: The "Instructions" the AI follows.
3.  **Model**: The "Engine" that executes.

**Dojo Alignment Check**:

- **Context**: We have `GEMINI.md` and `CONTEXT_STRATEGY.md` (Modular Context). ✅
- **Prompt**: We have `spec-driven-dev.md` and `reflection-loop.md`. ✅
- **Model**: We use Claude 3.5 Sonnet (Best in class). ✅

## Lesson 8: Mastery

- "Stamina to thrive amid constant change."
- **Insight**: This explains the "Marathon Rule". The only constant is change, so we must be calibrated to handle it without breaking.

## Missing Piece: "Agent Registry Pattern"

User Flag: `AGENTS.md` cannot use `@import`.
**Hypothesis**: `AGENTS.md` is a _Human_ index, not a _System_ configuration.
**Action**: Test if `AGENTS.md` works with just relative links `[Agent Name](path/to/file)`.
