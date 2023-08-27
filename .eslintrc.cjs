module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'error',
    'prefer-const': 'error',
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules'],
};
