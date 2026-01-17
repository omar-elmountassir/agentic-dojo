# 🔒 Closed Loop Prompts Pattern

> Source: Tactical Agentic Coding — Lesson 5

---

## Definition

> "Close the loop(s) and let the code write itself."

Transform brittle agent workflows into **self-correcting systems** with strategic feedback loops.

---

## The Pattern

```
┌──────────────────────────────────────┐
│                                      │
│    ┌─────────┐     ┌──────────┐     │
│    │ Execute │────▶│ Validate │     │
│    └─────────┘     └────┬─────┘     │
│         ▲               │           │
│         │    ┌──────────▼──────┐    │
│         │    │ Errors Found?   │    │
│         │    └────────┬────────┘    │
│         │             │             │
│    ┌────┴────┐   Yes  │  No        │
│    │ Correct │◀───────┤            │
│    └─────────┘        ▼            │
│                   ┌───────┐        │
│                   │ Done! │        │
│                   └───────┘        │
└──────────────────────────────────────┘
```

---

## Key Principle

> "More Compute, More Confidence"

Let the agent:

1. Execute the task
2. Validate its own output
3. Correct errors automatically
4. Loop until success

---

## Implementation

```markdown
# Closed Loop Prompt Template

Execute: [task]
Validate: [success criteria]
If errors: Correct and retry
Max retries: 3
```

---

_Pattern for self-correcting agent systems_
