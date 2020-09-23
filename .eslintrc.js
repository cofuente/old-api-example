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
    'max-len': [
      'error',
      { code: 140 },
    ],
    'node/no-unpublished-require': ['error', {
      allowModules: ['electron', 'dotenv'],
    }],
  },
  ignorePatterns: [
    // TODO: consider these should also be added to the git ignore, as well as any other build script produced file
    '**/*.spec.js',
    'client/src/scripts/*.*',
    '**/*.min.js',
  ],
}
