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
    'max-len': ['warn', { code: 140, ignoreUrls: true }],
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