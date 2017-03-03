module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier', './overrides', './legacy-additions', './additions'].map(require.resolve),
  rules: {},
};
