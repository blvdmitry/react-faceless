module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType: 'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  rules:  {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off"
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};