#!/usr/bin/env node

const { execSync } = require('child_process');

// Get commits since last tag
const lastTag = execSync('git describe --tags --abbrev=0').toString().trim();
const commits = execSync(`git log ${lastTag}..HEAD --oneline --format="%h|%s|%an"`).toString().trim().split('\n');

const categories = {
  '🚀 Features': [],
  '🐛 Bug Fixes': [],
  '📚 Documentation': [],
  '⚡ Performance': [],
  '🔧 Refactors': [],
  '✅ Tests': [],
  '📦 Chores': [],
  '📋 Other Changes': []
};

commits.forEach(commit => {
  const [sha, message, author] = commit.split('|');
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.startsWith('feat:') || lowerMessage.startsWith('feature:')) {
    categories['🚀 Features'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('fix:') || lowerMessage.startsWith('bug:')) {
    categories['🐛 Bug Fixes'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('docs:')) {
    categories['📚 Documentation'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('perf:')) {
    categories['⚡ Performance'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('refactor:')) {
    categories['🔧 Refactors'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('test:')) {
    categories['✅ Tests'].push(`- ${message} [${sha}] by ${author}`);
  } else if (lowerMessage.startsWith('chore:')) {
    categories['📦 Chores'].push(`- ${message} [${sha}] by ${author}`);
  } else {
    categories['📋 Other Changes'].push(`- ${message} [${sha}] by ${author}`);
  }
});

// Generate markdown
let changelog = `# v${process.env.npm_package_version} (${new Date().toISOString().split('T')[0]})\n\n`;

Object.entries(categories).forEach(([title, commits]) => {
  if (commits.length > 0) {
    changelog += `### ${title}\n${commits.join('\n')}\n\n`;
  }
});

console.log(changelog);
