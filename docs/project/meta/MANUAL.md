# 🕹️ Operational Manual: Agentic Dojo

> **Audience**: User (Omar) & Agent (Antigravity)
> **Purpose**: Standard Operating Procedures (SOPs) for the Lab.

## 1. Starting a Session

1.  **Open Workspace**: `/home/omar/omar-el-mountassir/projects/internal/agentic-dojo`.
2.  **Wake Up Agent**: "Hello Antigravity. Let's resume [Phase X]."
3.  **Context Check**: Agent reads `GEMINI.md` and `ROADMAP.md`.

## 2. Running a Learning Module

The curriculum is in `docs/learning/`.

1.  **Select Module**: E.g., `docs/learning/agentic-engineering/curriculum/01-principled-ai-coding/`.
2.  **Read Theory**: Agent reads the markdown files.
3.  **Execute Lab**: Agent performs the exercises in `experiments/`.
4.  **Reflect**: Agent updates `docs/learning/patterns/` with new insights.

## 3. State Management (The Save Game)

We use a "Double Save" system:

1.  **Git**: For code history and versioning.
    ```bash
    git add .
    git commit -m "feat(module): complete lesson 1"
    ```
2.  **Checkpoints**: For "Mental State" (Roadmap + Thoughts).
    - Update `ROADMAP.md`.
    - Create `state/checkpoints/checkpoint_YYYY-MM-DD.md` (optional, for major milestones).

## 4. Creating Sub-Agents

When we need a specialized tool:

1.  **Define**: Create `.claude/agents/my-agent.md`.
2.  **Register**: Update `CLAUDE.md` or `AGENTS.md` (if it exists).
3.  **Run**: `claude -p "@my-agent 'Task'"`

## 5. Troubleshooting (The "Red Button")

If Antigravity starts hallucinating:

1.  **STOP**.
2.  **Say**: "PROTOCOL_OF_TRUTH violation."
3.  **Reset**: Agent must re-read `IDENTITY.md` and `BEHAVIORAL_HARD_RULES.md`.
