module.exports = {
  parser: 'babel-eslint',
  extends: 'plugin:ava/recommended',
  plugins: ['ava', 'babel'],
  rules: {
    'arrow-parens': 'off',
    'babel/arrow-parens': ['error', 'as-needed'],
    'ava/prefer-power-assert': 'error',
  },
};
