module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './overrides',
    './additions',
  ].map(require.resolve),
  rules: {},
};
