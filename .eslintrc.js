module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
    'no-console': [
      'error',
    ],
    'global-require': 'off',
  },
}
