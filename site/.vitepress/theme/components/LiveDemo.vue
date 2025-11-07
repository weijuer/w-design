<template>
  <div class="live-demo">
    <Repl
      :store="store"
      :show-compile-output="false"
      :show-import-map="false"
      :show-ts-config="false"
      :clear-console="false"
    />
  </div>
  <div style="display: none" ref="codeSlot">
    <slot />
  </div>
</template>

<script setup>
import { Repl, ReplStore } from '@vue/repl'
import { ref, onMounted, version } from 'vue'

// 1. 导入 @vue/repl 的样式
import '@vue/repl/style.css'

const codeSlot = ref(null)
const store = ref(null)

onMounted(() => {
  // 2. 从隐藏插槽中获取原始代码
  const rawCode = codeSlot.value?.textContent || '<h3>Hello World</h3>'

  // 3. 创建 REPL Store
  const appStore = new ReplStore({
    // 默认主文件
    defaultMainFile: 'App.vue',
    // 默认 Vue 运行时 (使用 unpkg)
    defaultVueRuntimeURL: `https://unpkg.com/vue@${version}/dist/vue.runtime.esm-browser.js`
  })

  // 4. [核心] 设置 REPL 的文件
  // 我们将用户的代码注入到 App.vue 的 <template> 中
  appStore.setFiles({
    'App.vue': `
          <script setup>
          // 我们的库会通过 importMap 自动导入
          import { MyButton } from 'my-antd-lib'
          </script>

<template>
  ${rawCode}
</template>

<style>
/* [核心] 导入我们库的 CSS */
@import '/lib/my-antd-lib.css';
</style>
`
})

// 5. [核心] 设置 Import Map
// 这告诉 REPL "my-antd-lib" 应该从哪里加载
appStore.setImportMap({
imports: {
'vue': `https://unpkg.com/vue@${version}/dist/vue.runtime.esm-browser.js`,
'my-antd-lib': '/lib/my-antd-lib.mjs' // 指向我们 public 目录下的文件
}
})

store.value = appStore
})


</script>

<style>
.live-demo {
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.live-demo .vue-repl {
  height: 100% !important;
  /* 强制 REPL 占满容器 */
}
</style>