module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'filenames'],
  rules: {
    'no-useless-call': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-destructuring': 0,
    'space-infix-ops': 2,
    'class-methods-use-this': 0,

    'filenames/no-index': 2,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 2,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};