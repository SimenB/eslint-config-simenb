module.exports = {
  plugins: ['prettier'],
  rules: {
    'no-useless-catch': 'error',
    'import/no-named-export': 'off',
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'prefer-object-has-own': 'off',
    'logical-assignment-operators': 'off',
    'no-constant-binary-expression': 'off',
    'no-empty-static-block': 'off',
    'no-new-native-nonconstructor': 'off',
  },
};
