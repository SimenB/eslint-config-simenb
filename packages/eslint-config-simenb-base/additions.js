module.exports = {
  rules: {
    'no-nonoctal-decimal-escape': 'error',
    'no-restricted-properties': 'off', // I can't think of any
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', '@todo', '@fixme'], location: 'start' },
    ],
    'no-unsafe-optional-chaining': 'error',
    'import/no-relative-packages': 'error',
    'import/no-import-module-exports': 'error',
  },
};
