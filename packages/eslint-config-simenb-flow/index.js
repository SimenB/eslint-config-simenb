module.exports = {
  extends: ['plugin:flowtype/recommended', 'eslint-config-prettier/flowtype'],
  parser: '@babel/eslint-parser',
  plugins: ['flowtype', 'babel'],
  rules: {
    'flowtype/define-flow-type': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'warn',
    'flowtype/require-parameter-type': [
      'error',
      { excludeArrowFunctions: true },
    ],
    'flowtype/require-return-type': [
      'error',
      'always',
      { excludeArrowFunctions: true },
    ],
    'flowtype/require-valid-file-annotation': [
      'warn',
      'always',
      { annotationStyle: 'line' },
    ],
    'flowtype/sort-keys': 'error',
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
  },
};
