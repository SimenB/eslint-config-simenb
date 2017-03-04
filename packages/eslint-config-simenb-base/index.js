module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    './overrides',
    './legacy-additions',
    './additions',
  ].map(require.resolve),
  rules: {},
};
