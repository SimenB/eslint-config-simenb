module.exports = {
  plugins: ['node'],
  extends: ['plugin:node/recommended'],
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    'node/exports-style': 'error',
    'node/process-exit-as-throw': 'error',
  },
};
