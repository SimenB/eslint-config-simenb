module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // nagging and unnecessary. see https://github.com/typescript-eslint/typescript-eslint/issues/65
    '@typescript-eslint/explicit-function-return-type': 'off',
    // why? seems silly
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // this is dumb. the automerging is really a footgun
    '@typescript-eslint/prefer-interface': 'off',
  },
};
