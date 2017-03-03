module.exports = {
  extends: ['eslint-config-airbnb-base/legacy', './overrides', './legacy-additions'].map(require.resolve),
  rules: {},
};
