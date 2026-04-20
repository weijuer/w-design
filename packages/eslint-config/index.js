import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        ignores: ['node_modules', 'dist', 'play', '!.vscode', '!.github', '!.devcontainer']
    },
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.es2025, ...globals.node }
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
            // js/ts
            camelcase: ['error', { properties: 'never' }],
            'no-debugger': 'error',
            'no-console': ['error', { allow: ['warn', 'error', 'info', 'clear'] }],
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'no-return-await': 'error',
            'no-var': 'error',
            'no-duplicate-imports': 'error',
            'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
            'sort-imports': [
                'warn',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                    allowSeparatedGroups: false
                }
            ],

            // ts
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/prefer-ts-expect-error': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    fixStyle: 'inline-type-imports',
                    disallowTypeAnnotations: false
                }
            ],

            // vue
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/html-self-closing': [
                'error',
                {
                    html: { component: 'always', normal: 'any', void: 'always' },
                    math: 'always',
                    svg: 'always'
                }
            ]
        }
    }
])
