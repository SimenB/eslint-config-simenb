module.exports = {
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'line-comment-position': 'off',
    'lines-around-directive': 'error',
    'no-restricted-properties': 'off', // I can't think of any
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', '@todo', '@fixme'], location: 'start' }],
    'prefer-numeric-literals': 'error',
  },
};
