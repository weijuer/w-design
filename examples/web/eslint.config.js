import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  // add more generic rulesets here
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    // override/add rules settings here
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'error', // 禁止使用 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 禁止多个空行

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 强制组件名称为多个单词
      'vue/no-unused-vars': 'error', // 禁止未使用的变量
    },
  },
];
