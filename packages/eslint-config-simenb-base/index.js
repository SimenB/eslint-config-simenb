module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './overrides',
    './legacy-additions',
    './additions',
  ].map(require.resolve),
  rules: {},
};
