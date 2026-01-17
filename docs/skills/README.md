# 🧰 Agent Skills Registry

> **Purpose**: A catalog of persistent capabilities ("Skills") available to all Antigravity instances.
> **Standard**: Each skill is a directory in `.claude/skills/<name>/` properly defined by `SKILL.md`.

## 📦 Installed Skills

| Skill Name      | Description                                                 | Tools Used      |
| :-------------- | :---------------------------------------------------------- | :-------------- |
| `skill-creator` | **Meta-Skill**: Defines how to create new skills correctly. | `Write`, `Read` |

## 🛠️ How to Use Skills

Skills are "Knowledge Folders". To use one:

1.  **Read**: Load the `SKILL.md`.
2.  **Execute**: Follow the instructions (or run the included scripts).

## ➕ How to Add a Skill

Use the `skill-creator` skill!
Or manually:

1.  Create `.claude/skills/<name>/`.
2.  Add `SKILL.md` (See `docs/standards/SKILL_TEMPLATE.md`).
3.  Add scripts/resources.
