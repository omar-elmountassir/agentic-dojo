# Agentic Dojo Makefile
# Agentic Validation Infrastructure

.PHONY: verify lint check-truth validate-agents validate-skills ci help format clean

help:
	@echo "🥋 Agentic Dojo Commands"
	@echo "-----------------------"
	@echo "make verify         - Run all validations (lint + truth)"
	@echo "make lint           - Lint markdown, agents, and links"
	@echo "make check-truth    - Run Protocol of Truth checks"
	@echo "make validate-agents- Validate agent configurations"
	@echo "make validate-skills- Validate skill configurations"
	@echo "make ci             - Full CI pipeline"
	@echo "make format         - Format markdown files"
	@echo "make clean          - Remove temp artifacts"

verify: lint check-truth
	@echo "\n✅ All validations passed"

lint:
	@echo "🔍 Linting Markdown..."
	npm run lint:markdown
	@echo "🔍 Validating Agents..."
	npm run lint:agents
	@echo "🔍 Validating Skills..."
	npm run lint:skills
	@echo "🔍 Validating Config..."
	npm run lint:config

check-truth:
	@echo "🛡️ Protocol of Truth: Grounding..."
	npm run truth:grounding
	@echo "🛡️ Protocol of Truth: Resilience..."
	npm run truth:resilience

validate-agents:
	npm run lint:agents

validate-skills:
	npm run lint:skills

ci:
	npm run ci

format:
	npm run format

clean:
	rm -rf dist/ build/ node_modules/.cache/
