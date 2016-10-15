module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    'global-require': 'off',
    'node-console': 'off',
    'node/exports-style': 'error',
    'node/process-exit-as-throw': 'error',
  },
};
