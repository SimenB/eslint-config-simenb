module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    'eslint-config-prettier',
    './overrides',
    './legacy-additions',
  ].map(require.resolve),
  rules: {},
};
