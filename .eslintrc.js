module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'off',
    'no-console': 'off'
  },
};
