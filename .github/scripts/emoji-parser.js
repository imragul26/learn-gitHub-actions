#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Emoji mapping for common commit types
const EMOJI_MAP = {
  feat: '🚀',
  fix: '🐛',
  docs: '📚',
  style: '💎',
  refactor: '♻️',
  perf: '⚡',
  test: '✅',
  chore: '🔧',
  build: '📦',
  ci: '⚙️',
  revert: '↩️',
  security: '🛡️',
  spring: '🌐',
  api: '📱',
  config: '🔧',
  dep: '📦'
};

// Category patterns
const CATEGORY_PATTERNS = [
  { regex: /(feat|feature|add|implement|new)/i, emoji: '🚀', category: 'Features' },
  { regex: /(fix|bug|error|issue|resolve)/i, emoji: '🐛', category: 'Bug Fixes' },
  { regex: /(doc|readme|wiki|guide|manual)/i, emoji: '📚', category: 'Documentation' },
  { regex: /(refactor|cleanup|restructure|reorganize)/i, emoji: '♻️', category: 'Refactoring' },
  { regex: /(spring|boot|actuator|jpa|repository)/i, emoji: '🌐', category: 'Spring Boot' },
  { regex: /(api|endpoint|rest|controller|service)/i, emoji: '📱', category: 'API Changes' },
  { regex: /(test|spec|coverage|assert)/i, emoji: '✅', category: 'Tests' },
  { regex: /(config|setup|property|environment)/i, emoji: '🔧', category: 'Configuration' },
  { regex: /(dep|dependency|upgrade|bump|version)/i, emoji: '📦', category: 'Dependencies' }
];

function categorizeCommit(message) {
  const lowerMessage = message.toLowerCase();
  
  for (const pattern of CATEGORY_PATTERNS) {
    if (pattern.regex.test(lowerMessage)) {
      return pattern;
    }
  }
  
  return { emoji: '🔧', category: 'Chores' };
}

module.exports = { EMOJI_MAP, CATEGORY_PATTERNS, categorizeCommit };
