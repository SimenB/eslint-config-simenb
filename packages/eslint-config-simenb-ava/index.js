module.exports = {
  extends: 'plugin:ava/recommended',
  plugins: 'ava',
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'ava/no-async-fn-without-await': 'error',
    'ava/no-duplicate-modifiers': 'error',
    'ava/prefer-power-assert': 'error',
  },
};
