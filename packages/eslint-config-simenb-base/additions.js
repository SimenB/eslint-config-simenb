module.exports = {
  plugins: ['prettier'],
  rules: {
    'line-comment-position': 'off',
    'lines-around-directive': 'error',
    'no-restricted-properties': 'off', // I can't think of any
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', '@todo', '@fixme'], location: 'start' }],
    'prefer-numeric-literals': 'error',
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true, printWidth: 120 }],
  },
};
