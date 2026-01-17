const fs = require('fs');
const Ajv = require('ajv');
const logger = require('../utils/logger');

const CONFIG_PATH = '.claude/config.json';
const SCHEMA = {
  type: 'object',
  required: ['$schema', 'protection_rules', 'agent_defaults'],
  properties: {
    $schema: { type: 'string' },
    comment: { type: 'string' },
    protection_rules: {
      type: 'object',
      required: ['require_confirmation'],
      properties: {
        require_confirmation: { type: 'array' },
        max_context_tokens: { type: 'number' }
      }
    },
    agent_defaults: {
      type: 'object',
      required: ['model', 'temperature'],
      properties: {
        model: { type: 'string' },
        temperature: { type: 'number' }
      }
    },
    sub_agents_path: { type: 'string' }
    // Note: 'comment' and 'color' are optional fields, added flexibly
  },
  additionalProperties: true // Allow additional fields like 'color'
};

/**
 * Validate Claude config JSON structure and references
 * @returns {object} Parsed config
 * @throws {Error} If validation fails
 */
function validateConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    throw new Error('Config file not found');
  }

  const content = fs.readFileSync(CONFIG_PATH, 'utf8');
  let config;

  try {
    config = JSON.parse(content);
  } catch (err) {
    throw new Error(`Invalid JSON: ${err.message}`);
  }

  const ajv = new Ajv();
  const validate = ajv.compile(SCHEMA);
  const valid = validate(config);

  if (!valid) {
    throw new Error(`Schema validation failed: ${ajv.errorsText(validate.errors)}`);
  }

  // Check sub_agents_path exists if specified
  if (config.sub_agents_path && !fs.existsSync(config.sub_agents_path)) {
    throw new Error(
      `sub_agents_path does not exist: ${config.sub_agents_path}`
    );
  }

  return config;
}

/**
 * Main entry point
 */
async function main() {
  logger.header('🔍 Validating Config');

  try {
    const config = validateConfig();
    logger.success('Config validated');
    logger.file(CONFIG_PATH);
    console.log();
    logger.success(`Model: ${config.agent_defaults.model}`);
    logger.success(`Temperature: ${config.agent_defaults.temperature}`);
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
