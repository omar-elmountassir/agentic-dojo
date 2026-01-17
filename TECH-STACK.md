# 🛠️ Tech Stack: Agentic Dojo

> **Status**: Living Document
> **Optimization**: Maximum Agent Capability

## 1. Core Intelligence

- **Primary Brain**: Claude 3.7 Sonnet (via Anthropic API)
- **Reasoning**: OpenAI o1 / o3-mini (via API)
- **Orchestrator**: Antigravity (Google Gemini 2.0 Pro)

## 2. Agentic Runtime

- **CLI Tool**: `Claude Code CLI` (Anthropic)
- **Protocol**: MCP (Model Context Protocol) 1.0
- **Environment**: Node.js (Latest LTS), Linux (Pop!\_OS)

## 3. Knowledge Management

- **Format**: Markdown (GFM)
- **Structure**: `docs/learning/` (Curriculum Based)
- **Context Loading**: Absolute Paths (`@/home/user/...`)

## 4. UI Generation (Experimental)

- **Engine**: `vercel-labs/json-render`
- **Pattern**: Agent Output (JSON) -> Dynamic Rendering
- **Framework**: Next.js 15 (if UI required)

## 5. Development Tools

- **Version Control**: Git
- **Terminal**: Bash
- **Vector DB**: ChromaDB (Future: for RAG)
