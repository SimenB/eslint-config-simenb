module.exports = {
  rules: {
    'max-len': [
      'error',
      140,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'linebreak-style': 'off',
    'no-plusplus': 'off',
  },
};
