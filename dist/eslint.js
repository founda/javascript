const eslint = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:vue/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'prettier/vue'
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-param-reassign': 0,
        'class-methods-use-this': 0,
        'global-require': 1,
        'import/no-extraneous-dependencies': 0,
        'import/no-dynamic-require': 0,
        'import/prefer-default-export': 0,
        'prefer-promise-reject-errors': 0,
        'import/extensions': 0,
        'no-underscore-dangle': [
            2,
            {
                allow: ['_embedded']
            }
        ],
        'max-len': 0
    }
};
module.exports = eslint;
