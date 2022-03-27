module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/base'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['error', 'always'],
        'no-else-return': 'error',
        'no-nested-ternary': 'error',
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 0
        }],
        'no-multi-assign': 'error',
        'max-len': ['error', {
            code: 130,
            ignoreComments: true
        }],
        'no-whitespace-before-property': 'error',
        'semi-spacing': 'error',
        'eqeqeq': ['error', 'always'],
        'no-alert': 'error',
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
            exceptions: {
                BinaryExpression: true,
                VariableDeclarator: true,
                Property: true
            }
        }],
        'new-cap': 'error',
        'space-before-blocks': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['if']
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['function']
            }
        ],
        'one-var': ['error', 'never'],
        'no-use-before-define': ['error', {
            variables: false
        }],
        'no-array-constructor': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            avoidEscape: true
        }],
        'key-spacing': ['error', {
            mode: 'strict'
        }],
        'no-new-object': 'error',
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 4
        }],
        'prefer-const': 'error',
        'no-eval': 'error',
        'camelcase': ['error', {
            properties: 'never'
        }],
        'newline-after-var': ['error', 'always'],
        'no-global-assign': 'error',
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'max-params': ['error', 4],
        'dot-notation': 0
    },
    globals: {
        document: true,
        window: true,
        location: true,
        setTimeout: true,
        setInterval: true,
        clearTimeout: true,
        clearInterval: true,
        localStorage: true,
        sessionStorage: true,
        dataLayer: true,
        XMLHttpRequest: true,
        performance: true,
        Lap: true,
        lap: true,
        Laraplay: true,
        global: true,
        $config: true,
        $nuxt: true,
        $gsap: true
    }
};
