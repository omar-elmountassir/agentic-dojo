const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');
const logger = require('../utils/logger');

const SKILLS_DIR = '.claude/skills';

/**
 * Validate skill YAML front matter and structure
 * @param {string} skillPath - Path to skill directory
 * @param {string} skillName - Expected skill name (from directory)
 * @returns {object} Parsed front matter data
 * @throws {Error} If validation fails
 */
function validateSkill(skillPath, skillName) {
  const skillMdPath = path.join(skillPath, 'SKILL.md');

  if (!fs.existsSync(skillMdPath)) {
    throw new Error('Missing SKILL.md');
  }

  const content = fs.readFileSync(skillMdPath, 'utf8');

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
  if (!Array.isArray(data.tools)) throw new Error('tools must be an array');

  // Name must match directory
  if (data.name !== skillName) {
    throw new Error(
      `name "${data.name}" does not match directory "${skillName}"`
    );
  }

  // Check for required sections (basic check)
  const hasProtocol = content.includes('##') || content.includes('Protocol');

  if (!hasProtocol) {
    throw new Error('Missing required sections (need ## or Protocol section)');
  }

  return data;
}

/**
 * Main entry point
 */
async function main() {
  logger.header('🔍 Validating Skills');

  const skillDirs = await glob(`${SKILLS_DIR}/*/`);
  if (skillDirs.length === 0) {
    logger.warn('No skill directories found');
    return;
  }

  let failures = 0;

  for (const dir of skillDirs) {
    // Remove trailing slash before getting basename
    const skillName = path.basename(dir.replace(/\/$/, ''));
    try {
      const skill = validateSkill(dir, skillName);
      logger.success(`${skill.name}`);
      logger.file(skillName);
    } catch (err) {
      logger.error(`${skillName}: ${err.message}`);
      failures++;
    }
  }

  console.log();

  if (failures > 0) {
    logger.error(`${failures} skill(s) failed validation`);
    process.exit(1);
  }

  logger.success(`All ${skillDirs.length} skill(s) validated`);
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
