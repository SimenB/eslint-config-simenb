module.exports = {
  plugins: ['prettier'],
  rules: {
    'no-useless-catch': 'error',
    'import/no-named-export': 'off',
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
  },
};
