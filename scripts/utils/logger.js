const chalk = require('chalk');

/**
 * Colored logger for validation scripts
 * Provides consistent, readable output with emojis and colors
 */
module.exports = {
  error: (msg) => console.error(chalk.red('✗ ERROR:'), msg),
  warn: (msg) => console.warn(chalk.yellow('⚠ WARNING:'), msg),
  success: (msg) => console.log(chalk.green('✓'), msg),
  info: (msg) => console.log(chalk.blue('ℹ'), msg),
  header: (msg) => console.log(chalk.bold.cyan(`\n${msg}\n`)),
  file: (file) => console.log(chalk.gray(`  → ${file}`))
};
