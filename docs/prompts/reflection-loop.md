# 🪞 The Reflection Loop Prompt

> **Purpose**: To force the Agent to self-correct _during_ execution, not after.
> **Theory**: "Rubber Ducking" with oneself.

## The Prompt

```markdown
# 🛑 CHECKPOINT: Reflection

You have just executed a set of actions.
Before proceeding, answer these three questions:

1.  **The Result**: What did the tools _actually_ return? (Quote the output).
2.  **The Gap**: How does this result differ from what I expected?
3.  **The Correction**: Do I need to pivot my strategy?

If the result is an ERROR, do NOT retry blindly. STOP and Analyze.
```

---

_Use this prompt after every major "Act" block._
