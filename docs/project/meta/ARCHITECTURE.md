# 🏗️ Architecture: Agentic Dojo

> **Type**: Agentic Learning Lab
> **Core Pattern**: Human-in-the-Loop Orchestration (Antigravity + User)

## 1. Physical Architecture (Repository Layout)

The repository is structured to separate "Context" (Static) from "State" (Dynamic).

```
agentic-dojo/
├── docs/                   # STATIC KNOWLEDGE
│   ├── context/            # Identity & Personas
│   ├── learning/           # The Curriculum (patterns, lessons)
│   └── project/            # Meta-docs (Mission, Standards, Architecture)
├── state/                  # DYNAMIC MEMORY
│   ├── checkpoints/        # Major milestones (restore points)
│   ├── memory/             # User voice, decisions, critical context
│   └── proofs/             # Evidence of execution (screenshots, logs)
├── experiments/            # SANDBOX
│   └── (R&D projects)      # Dirty/Temporary code
├── GEMINI.md               # CORTEX (Context Index)
├── CLAUDE.md               # TOOLING (CLI Configuration)
└── ROADMAP.md              # DIRECTION (Active Tasks)
```

## 2. Cognitive Architecture (The "Entity")

The "Agent" is not a single script. It is a composite system:

### 🧠 The Cortex (Antigravity)

- **Host**: Gemini 3 Pro (2026).
- **Function**: Reasoning, Planning, Identity, "Protocol of Truth".
- **Context Source**: `GEMINI.md` (and its imports).

### 🛠️ The Hands (Claude Code CLI)

- **Host**: Claude Opus 4 / Sonnet 4.
- **Function**: File I/O, Terminal Execution, Diff Generation.
- **Protocol**: MCP 2.0.

### 🔄 The Loop (Reflexion Pattern)

A strict confirmation loop enforced by `PROTOCOL_OF_TRUTH.md`.
`Execute (Claude) -> Verify (Antigravity) -> Commit (Git)`.

## 3. Data Flow

1.  **Input**: User Request (Natural Language) capture in `state/memory/USER_VOICE_ARCHIVE.md`.
2.  **Processing**: Antigravity loads `GEMINI.md` + `ROADMAP.md` + `active files`.
3.  **Action**: Antigravity delegates to `Claude Code CLI` tools.
4.  **Verification**: Antigravity checks stdout/stderr and file contents.
5.  **Output**: `notify_user` or artifact creation.

## 4. Sub-Agent Integration (Planned)

Future "agents" (e.g., specific MCP servers or automated scripts) will live in `.claude/agents/` and be orchestrated by Antigravity via the CLI.
