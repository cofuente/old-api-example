module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    mocha: true
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': ['error'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'never'],
    'global-require': 'off',
    'max-len': ['error', { code: 140 }],
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['electron', 'dotenv']
      }
    ],
    'node/no-missing-require': 'warn',
    'import/no-unresolved': 'warn'
  },
  ignorePatterns: ['**/*.spec.js', '**/*.min.js', 'dist/', 'node_modules']
}
