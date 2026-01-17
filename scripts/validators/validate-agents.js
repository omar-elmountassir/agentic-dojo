const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');
const logger = require('../utils/logger');

const AGENTS_DIR = '.claude/agents';
const ALLOWED_MODELS = [
  'claude-4-5-opus-20251124',
  'claude-sonnet-4-5-20250929',
  'haiku',
  'claude-4-5-haiku-20250131'
];

/**
 * Validate agent YAML front matter and structure
 * @param {string} filePath - Path to agent .md file
 * @returns {object} Parsed front matter data
 * @throws {Error} If validation fails
 */
function validateAgent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  let data;
  try {
    const parsed = matter(content);
    data = parsed.data;
  } catch (err) {
    throw new Error(`YAML parse error: ${err.message}`);
  }

  // Required fields
  if (!data.name) throw new Error('Missing required field: name');
  if (!data.description) throw new Error('Missing required field: description');
  if (!data.model) throw new Error('Missing required field: model');

  // Normalize tools: accept both array and comma-separated string
  if (Array.isArray(data.tools)) {
    // Already an array, use as-is
  } else if (typeof data.tools === 'string') {
    // Convert comma-separated string to array
    data.tools = data.tools.split(',').map(t => t.trim()).filter(t => t);
  } else {
    throw new Error('tools must be an array or comma-separated string');
  }

  // Name format: kebab-case
  if (!/^[a-z0-9-]+$/.test(data.name)) {
    throw new Error('name must be kebab-case');
  }

  // Model validation
  if (!ALLOWED_MODELS.includes(data.model)) {
    throw new Error(
      `Invalid model: ${data.model}. Allowed: ${ALLOWED_MODELS.join(', ')}`
    );
  }

  return data;
}

/**
 * Main entry point
 */
async function main() {
  logger.header('🔍 Validating Agents');

  const agentFiles = await glob(`${AGENTS_DIR}/*.md`);
  if (agentFiles.length === 0) {
    logger.warn('No agent files found');
    return;
  }

  let failures = 0;

  for (const file of agentFiles) {
    try {
      const agent = validateAgent(file);
      logger.success(`${agent.name}`);
      logger.file(path.basename(file));
    } catch (err) {
      logger.error(`${path.basename(file)}: ${err.message}`);
      failures++;
    }
  }

  console.log();

  if (failures > 0) {
    logger.error(`${failures} agent(s) failed validation`);
    process.exit(1);
  }

  logger.success(`All ${agentFiles.length} agent(s) validated`);
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
