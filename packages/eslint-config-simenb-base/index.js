module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended',
    './overrides',
    './legacy-additions',
    './additions',
  ].map(require.resolve),
  rules: {},
};
