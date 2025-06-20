// eslint.config.js
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
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
            // 'no-multiple-empty-lines': ['warn', { max: 1 }],

            // 'vue/script-setup-uses-vars': 'error',
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTernary: true
                }
            ]
        }
    },
    {
        ignores: ['node_modules', 'dist', '!.vscode', '!.github', '!.devcontainer']
    }
]
