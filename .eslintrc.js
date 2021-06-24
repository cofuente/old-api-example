module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'eol-last': ['error', 'never'],
    'import/no-unresolved': 'warn',
    'node/no-unpublished-require': ['error'],
    'node/no-missing-require': 'warn',
    'node/no-unsupported-features/es-syntax': ['warn', {'version': '14.17.0'}]
  },
  ignorePatterns: ['**/*.spec.js', '**/*.min.js', 'dist/', 'node_modules']
}