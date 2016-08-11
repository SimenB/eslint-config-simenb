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
    'define-flow-type': 'error',
    'require-parameter-type': 'error',
    'require-return-type': 'error',
    'require-valid-file-annotation': ['warn', 'always'],
    'space-after-type-colon': 'error',
    'space-before-type-colon': 'error',
    'type-id-match': 'error',
    'use-flow-type': 'error',
    'valid-syntax': 'error',
  },
};
