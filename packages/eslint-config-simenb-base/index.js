module.exports = {
  extends: ['eslint:recommended'].concat(
    [
      'eslint-config-airbnb-base',
      'eslint-config-prettier',
      './overrides',
      './legacy-additions',
      './additions',
    ].map(require.resolve)
  ),
  rules: {},
};
