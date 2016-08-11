module.exports = {
  parser: 'babel-eslint',
  extends: 'plugin:ava/recommended',
  plugins: ['flowtype', 'babel'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'arrow-parens': 'off',
    'babel/arrow-parens': ['error', 'as-needed'],
    'flowtype/define-flow-type': 'error',
    'flowtype/require-parameter-type': ['error', { excludeArrowFunctions: true }],
    'flowtype/require-return-type': ['error', { excludeArrowFunctions: true }],
    'flowtype/require-valid-file-annotation': ['warn', 'always'],
    'flowtype/space-after-type-colon': 'error',
    'flowtype/space-before-type-colon': 'error',
    'flowtype/type-id-match': 'error',
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'off', // disable until 2.6.2 is released
  },
};
