module.exports = {
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
