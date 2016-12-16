module.exports = {
  extends: 'plugin:flowtype/recommended',
  plugins: ['flowtype', 'babel'],
  rules: {
    'flowtype/define-flow-type': 'error',
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/object-type-delimiter': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'warn',
    'flowtype/require-parameter-type': ['error', { excludeArrowFunctions: true }],
    'flowtype/require-return-type': ['error', { excludeArrowFunctions: true }],
    'flowtype/require-valid-file-annotation': ['warn', 'always', { annotationStyle: 'line' }],
    'flowtype/sort-keys': 'error',
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',
  },
};
