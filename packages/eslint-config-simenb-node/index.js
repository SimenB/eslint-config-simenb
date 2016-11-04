module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    'node/exports-style': 'error',
  },
};
