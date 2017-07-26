module.exports = {
  rules: {
    'no-restricted-properties': 'off', // I can't think of any
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', '@todo', '@fixme'], location: 'start' },
    ],
  },
};
