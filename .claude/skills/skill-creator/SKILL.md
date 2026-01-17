---
name: skill-creator
description: A meta-skill that teaches the agent how to create other skills adhering to the Antigravity standard.
tools:
  - Write
  - Read
---

# 🧬 Skill Creator Protocol

> **Purpose**: Ensure all new skills follow the strict `SKILL.md` open standard.

## 1. Structure

When asked to "create a skill", YOU MUST:

1.  Create a directory: `.claude/skills/<skill-name>/`.
2.  Create `SKILL.md` in that directory.
3.  (Optional) Create `scripts/` or `resources/` if needed.

## 2. SKILL.md Template

Every `SKILL.md` MUST have this Frontmatter:

```yaml
---
name: <kebab-case-name>
description: <Short, search-friendly description>
tools:
  - <Tool1>
  - <Tool2>
---
```

## 3. Instructional Body

After the YAML, provided a clear **Markdown Guide**:

1.  **Goal**: What does this skill achieve?
2.  **Protocol**: Step-by-step instructions.
3.  **Validation**: How to check if it worked.

## 4. Registration

After creating the skill, UPDATE `docs/skills/README.md` to list it in the table.
