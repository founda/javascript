declare const eslint: {
    root: boolean;
    parserOptions: {
        parser: string;
        ecmaVersion: number;
        sourceType: string;
        ecmaFeatures: {
            jsx: boolean;
        };
    };
    env: {
        browser: boolean;
        node: boolean;
    };
    extends: string[];
    plugins: string[];
    rules: {
        'prettier/prettier': string;
        'no-param-reassign': number;
        'class-methods-use-this': number;
        'global-require': number;
        'import/no-extraneous-dependencies': number;
        'import/no-dynamic-require': number;
        'import/prefer-default-export': number;
        'prefer-promise-reject-errors': number;
        'import/extensions': number;
        'no-underscore-dangle': (number | {
            allow: string[];
        })[];
        'max-len': number;
    };
};
