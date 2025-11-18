// eslint.config.js
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
    {
        ignores: ['**/node_modules', '**/dist', '!.vscode', '!.github', '!.devcontainer']
    },
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: { parser: tseslint.parser }
        }
    },
    {
        rules: {
            'no-debugger': 'error',
            'no-console': ['error', { allow: ['warn', 'error', 'info', 'clear'] }],
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'prefer-const': 'error',
            'sort-imports': ['error', { ignoreDeclarationSort: true }],
            'no-duplicate-imports': 'error',
            // This rule enforces the preference for using '@ts-expect-error' comments in TypeScript
            // code to indicate intentional type errors, improving code clarity and maintainability.
            '@typescript-eslint/prefer-ts-expect-error': 'error',
            // Enforce the use of 'import type' for importing types
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    fixStyle: 'inline-type-imports',
                    disallowTypeAnnotations: false
                }
            ],
            // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
            '@typescript-eslint/no-import-type-side-effects': 'error',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/html-self-closing': [
                'error',
                {
                    html: { component: 'always', normal: 'always', void: 'any' },
                    math: 'always',
                    svg: 'always'
                }
            ]
        }
    }
]
