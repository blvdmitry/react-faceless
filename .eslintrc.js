module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  ['airbnb-typescript'],
  "env": {
    "browser": true,
  },
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
    "react/prop-types": "off",
    "import/no-unresolved": "off", // baseUrl
    "import/export": "off", // function overload
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "max-len": ["error", 150],
    "object-curly-newline": "off", // props destructuring on the same line
    "jsx-a11y/mouse-events-have-key-events": "off", // onMouseEnter component prop
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
