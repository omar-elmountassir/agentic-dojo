const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const logger = require('../utils/logger');

const DOCS_DIR = 'docs';
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Check for future dates in content (anti-hallucination)
 * @param {string} filePath - File path
 * @param {string} content - File content
 * @returns {string[]} List of issues found
 */
function checkDates(filePath, content) {
  const issues = [];
  // Match dates like 2026-01, 2025-12, etc.
  const dateRegex = /20[2-9][0-9]-(0[1-9]|1[0-2])/g;
  const matches = content.match(dateRegex) || [];

  for (const date of matches) {
    const [year, month] = date.split('-').map(Number);
    const fileDate = new Date(year, month - 1);
    const now = new Date();

    // Allow current month, flag future months
    if (fileDate > now && fileDate.getMonth() !== now.getMonth()) {
      issues.push(`Future date detected: ${date}`);
    }
  }

  return issues;
}

/**
 * Check for @ imports that reference non-existent files
 * Skips content inside fenced code blocks (```) and inline code (`)
 * @param {string} filePath - File path
 * @param {string} content - File content
 * @returns {string[]} List of issues found
 */
function checkImports(filePath, content) {
  const issues = [];

  // Remove code blocks to avoid checking example code
  let cleanedContent = content.replace(/```[\s\S]*?```/g, '');
  // Also remove inline code (backticks)
  cleanedContent = cleanedContent.replace(/`[^`]+`/g, '');

  const importRegex = /@([^\s\n]+)/g;
  let match;

  while ((match = importRegex.exec(cleanedContent)) !== null) {
    const importPath = match[1];

    // Skip obvious placeholders/examples
    if (importPath.includes('<') || importPath.includes('...') || importPath.includes('path/to')) {
      continue;
    }

    const fullPath = path.resolve(path.dirname(filePath), importPath);

    if (!fs.existsSync(fullPath)) {
      issues.push(`Missing import: @${importPath}`);
    }
  }

  return issues;
}

/**
 * Check for TODO/FIXME comments (indicates incomplete work)
 * Skips content inside fenced code blocks (```) and inline code (`)
 * @param {string} filePath - File path
 * @param {string} content - File content
 * @returns {string[]} List of issues found
 */
function checkTodos(filePath, content) {
  const issues = [];

  // Remove code blocks to avoid checking example code
  let cleanedContent = content.replace(/```[\s\S]*?```/g, '');
  // Also remove inline code (backticks)
  cleanedContent = cleanedContent.replace(/`[^`]+`/g, '');
  const lines = cleanedContent.split('\n');
  // Use word boundaries to avoid matching "hacking" as "HACK"
  const todoRegex = /\b(TODO|FIXME|XXX|HACK)\b/gi;

  lines.forEach((line, idx) => {
    if (todoRegex.test(line)) {
      issues.push(`Line ${idx + 1}: Found TODO/FIXME marker`);
    }
  });

  return issues;
}

/**
 * Main entry point
 */
async function main() {
  logger.header('🛡️ Protocol of Truth: Grounding Check');

  const mdFiles = await glob(`${DOCS_DIR}/**/*.md`);
  if (mdFiles.length === 0) {
    logger.warn('No markdown files found in docs/');
    return;
  }

  let totalIssues = 0;

  for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = [
      ...checkDates(file, content),
      ...checkImports(file, content),
      ...checkTodos(file, content)
    ];

    if (issues.length > 0) {
      logger.error(path.relative(process.cwd(), file));
      issues.forEach((issue) => logger.warn(`  ${issue}`));
      totalIssues += issues.length;
    }
  }

  console.log();

  if (totalIssues > 0) {
    logger.error(`Found ${totalIssues} grounding issue(s)`);
    process.exit(1);
  }

  logger.success(`All ${mdFiles.length} file(s) grounded`);
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
