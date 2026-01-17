const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const logger = require('../utils/logger');

const SCRIPTS_DIR = 'scripts';

/**
 * Check for proper error handling in scripts
 * @param {string} filePath - File path
 * @param {string} content - File content
 * @returns {string[]} List of issues found
 */
function checkErrorHandling(filePath, content) {
  const issues = [];

  // Skip utility files (they don't need exit codes)
  if (filePath.includes('utils/logger.js')) {
    return issues;
  }

  // Check for main().catch() pattern (valid error handling)
  const hasMainCatch = /main\(\)\.catch\(/.test(content);

  // Check for process.exit(1) on errors
  const hasExitCode = /process\.exit\(1\)/.test(content);
  const hasThrow = /throw\s+(new\s+)?Error/.test(content);

  if (hasThrow && !hasExitCode && !hasMainCatch) {
    issues.push('Uses throw but missing process.exit(1)');
  }

  // Check for console.error usage (only for main entry points)
  const hasConsoleError = /console\.error/.test(content);
  const isEntryPoint = /async\s+function\s+main/.test(content);

  if (hasConsoleError && !hasExitCode && !hasMainCatch && isEntryPoint) {
    issues.push('Uses console.error but missing process.exit(1)');
  }

  // Check for try/catch in async functions (only if no main().catch())
  const hasAsync = /async\s+function/.test(content) || /async\s*\(/.test(content);
  const hasTryCatch = /try\s*{/.test(content);

  if (hasAsync && !hasTryCatch && !hasMainCatch) {
    issues.push('Async function without try/catch or main().catch()');
  }

  return issues;
}

/**
 * Main entry point
 */
async function main() {
  logger.header('🛡️ Protocol of Truth: Resilience Check');

  const jsFiles = await glob(`${SCRIPTS_DIR}/**/*.js`);
  if (jsFiles.length === 0) {
    logger.warn('No JavaScript files found in scripts/');
    return;
  }

  let totalIssues = 0;

  for (const file of jsFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const issues = checkErrorHandling(file, content);

    if (issues.length > 0) {
      logger.error(path.relative(process.cwd(), file));
      issues.forEach((issue) => logger.warn(`  ${issue}`));
      totalIssues += issues.length;
    } else {
      logger.success(path.relative(process.cwd(), file));
    }
  }

  console.log();

  if (totalIssues > 0) {
    logger.error(`Found ${totalIssues} resilience issue(s)`);
    process.exit(1);
  }

  logger.success(`All ${jsFiles.length} script(s) resilient`);
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
