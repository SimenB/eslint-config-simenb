module.exports = {
  plugins: ['prettier'],
  rules: {
    'line-comment-position': 'off',
    'lines-around-directive': 'error',
    'no-restricted-properties': 'off', // I can't think of any
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', '@todo', '@fixme'], location: 'start' }],
    'prefer-numeric-literals': 'error',
    // TODO: Remove when airbnb has a release
    'no-compare-neg-zero': 'off',
  },
};
