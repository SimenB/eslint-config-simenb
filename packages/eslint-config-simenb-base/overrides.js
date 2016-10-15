module.exports = {
  rules: {
    'max-len': ['error', 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'linebreak-style': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/test.js', '**/spec.js', '**/*.test.js', '**/*.spec.js'],
      optionalDependencies: false,
    }],
  },
};
