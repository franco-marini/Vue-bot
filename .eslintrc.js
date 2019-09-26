module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
