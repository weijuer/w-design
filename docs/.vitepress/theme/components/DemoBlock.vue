<template>
  <div class="demo-block" :class="{ dark: isDark }">
    <!-- 演示区 -->
    <div class="demo-preview">
      <div ref="shadowHost" class="shadow-host"></div>
    </div>

    <!-- 描述区域 -->
    <div v-if="desc || title" class="demo-meta">
      <span v-if="title" class="demo-title">{{ title }}</span>
      <span v-if="desc" class="demo-desc">{{ desc }}</span>
    </div>

    <!-- 操作栏 -->
    <div class="demo-actions">
      <button class="action-btn" @click="toggleCode">
        <span>{{ codeVisible ? '收起' : '展开' }}代码</span>
        <svg
          :class="{ rotated: codeVisible }"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="currentColor"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
      <button class="action-btn" @click="copyCode">复制代码</button>
    </div>

    <!-- 源码区域 -->
    <transition name="code-slide">
      <div v-show="codeVisible" class="demo-source">
        <div class="language-vue" v-html="highlightedCode"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { type Component, createApp, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  code: string // 原始代码，用于复制
  highlightedCode: string // 服务端高亮后的 HTML
  component: unknown // 预导入的组件
  title?: string
  desc?: string
}>()

const { isDark } = useData() // 获取 VitePress 的暗黑模式状态
const shadowHost = ref<HTMLElement>()
const codeVisible = ref(false)
let appInstance: any = null

// 挂载组件到 Shadow DOM
onMounted(() => {
  if (!shadowHost.value || !props.component) return

  // 创建 Shadow Root
  const shadowRoot = shadowHost.value.attachShadow({ mode: 'open' })

  // 注入基础样式
  const style = document.createElement('style')
  style.textContent = `
    :host {
      display: block;
      font-family: var(--vp-font-family-base);
    }
  `
  shadowRoot.appendChild(style)

  try {
    // 创建 Vue 应用并挂载到 Shadow Root
    appInstance = createApp(props.component as Component)
    appInstance.mount(shadowRoot)
  } catch (e) {
    console.error('Preview load error:', e)
    shadowRoot.innerHTML = `<p style="color:red;">组件加载失败</p>`
  }
})

// 组件卸载时销毁实例
onBeforeUnmount(() => {
  appInstance?.unmount()
})

// 切换代码显示
function toggleCode() {
  codeVisible.value = !codeVisible.value
}

// 复制代码到剪贴板
function copyCode() {
  navigator.clipboard.writeText(props.code).then(() => {
    // 简易提示（也可使用 toast）
  })
}
</script>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
  background: var(--vp-c-bg-soft);
}

.dark .demo-block {
  border-color: var(--vp-c-divider-dark);
}

.demo-preview {
  padding: 20px;
  background: var(--vp-c-bg);
}

.shadow-host {
  min-height: 40px;
}

.demo-meta {
  padding: 0 20px 10px;
  font-size: 14px;
}

.demo-title {
  font-weight: 600;
  margin-right: 8px;
  color: var(--vp-c-text-1);
}

.demo-desc {
  color: var(--vp-c-text-2);
}

.demo-actions {
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  border-top: 1px solid var(--vp-c-divider);
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  font-size: 13px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.action-btn:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.action-btn svg {
  transition: transform 0.3s;
}

.action-btn svg.rotated {
  transform: rotate(180deg);
}

.demo-source {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-code-block-bg);
}

.demo-source :deep(pre) {
  margin: 0;
  padding: 16px;
  background: transparent !important;
}

/* 折叠过渡 */
.code-slide-enter-active,
.code-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.code-slide-enter-from,
.code-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
