<template>
    <div class="live-repl-wrapper">
        <div class="header">
            <div class="header-left">
                <span v-if="props.title" class="title">{{ props.title }}</span>
                <span v-else class="title">交互式示例</span>
                <span v-if="isModified" class="modified-badge">已修改</span>
            </div>
            <div class="actions">
                <button
                    class="action-btn"
                    :class="{ active: showCode }"
                    @click="toggleCodeVisibility"
                    :title="showCode ? '隐藏代码' : '显示代码'"
                >
                    <span class="icon">📄</span>
                    {{ showCode ? '隐藏代码' : '显示代码' }}
                </button>
                <button
                    class="action-btn"
                    @click="resetCode"
                    :disabled="!isModified"
                    title="重置代码"
                >
                    <span class="icon">🔄</span>
                    重置
                </button>
                <button
                    class="action-btn"
                    @click="toggleLayout"
                    :title="`切换布局: ${editorLayout}`"
                >
                    <span class="icon">📐</span>
                    {{ layoutLabels[editorLayout] }}
                </button>
            </div>
        </div>

        <div class="content" :style="contentStyle">
            <Repl
                :editor="Monaco"
                :store="store"
                :show-compile-output="false"
                :show-import-map="true"
                :show-ts-config="false"
                :clear-console="false"
                :auto-resize="true"
                :layout="editorLayout"
                @change="handleCodeChange"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { Repl, useStore } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'

// 导入 @vue/repl 的样式
import '@vue/repl/style.css'

interface Props {
    rawCode: string
    title?: string
    height?: number
    isEncoded?: boolean
    defaultLayout?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
    height: 400,
    isEncoded: false,
    defaultLayout: 'horizontal'
})

// 响应式状态
const showCode = ref(false)
const editorLayout = ref<'horizontal' | 'vertical'>(props.defaultLayout)
const isModified = ref(false)
const originalCode = ref('')

// 布局标签映射
const layoutLabels = {
    horizontal: '水平',
    vertical: '垂直',
    split: '分屏'
}

// 计算样式
const contentStyle = computed(() => ({
    height: `${props.height}px`
}))

// 解码代码
const decodedCode = computed(() =>
    props.isEncoded ? decodeURIComponent(props.rawCode) : props.rawCode
)

const store = useStore({
    // activeFilename: 'App.vue',
    // mainFile: ref('App.vue'),
    // files: {
    //     'App.vue': decodedCode.value
    // },
})

store.setImportMap({
    imports: {
        'design-demo': '/lib/w-design-demo.mjs'
    }
})

store.setFiles({
    'App.vue': decodedCode.value
})

// 监听代码变化
const handleCodeChange = () => {
    const currentCode = store.files['App.vue']?.code || ''
    isModified.value = currentCode !== originalCode.value
}

// 切换代码可见性
const toggleCodeVisibility = () => {
    showCode.value = !showCode.value
    // 根据显示状态调整布局
    editorLayout.value = showCode.value ? 'horizontal' : 'vertical'
}

// 切换布局
const toggleLayout = () => {
    const layouts: Array<'horizontal' | 'vertical'> = ['horizontal', 'vertical']
    const currentIndex = layouts.indexOf(editorLayout.value)
    const nextIndex = (currentIndex + 1) % layouts.length
    editorLayout.value = layouts[nextIndex]
}

// 重置代码
const resetCode = async () => {
    if (isModified.value) {
        store.setFiles({
            'App.vue': decodedCode.value
        })
        isModified.value = false
        await nextTick()
    }
}

// 初始化
onMounted(() => {
    originalCode.value = decodedCode.value

    // 监听外部代码变化
    watch(decodedCode, newCode => {
        if (!isModified.value) {
            store.setFiles({
                'App.vue': newCode
            })
            originalCode.value = newCode
        }
    })
})

// 监听布局变化，自动调整代码显示状态
watch(editorLayout, newLayout => {
    showCode.value = newLayout !== 'vertical'
})
</script>

<style scoped>
.live-repl-wrapper {
    margin: 1.5em 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--vp-c-bg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;
}

.live-repl-wrapper:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.live-repl-wrapper .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75em 1.25em;
    background-color: var(--vp-c-bg-soft);
    border-bottom: 1px solid var(--vp-c-divider);
    font-size: 0.9em;
    color: var(--vp-c-text-1);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.title {
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.modified-badge {
    background-color: var(--vp-c-yellow-soft);
    color: var(--vp-c-yellow-1);
    padding: 0.2em 0.6em;
    border-radius: 12px;
    font-size: 0.8em;
    font-weight: 500;
}

.actions {
    display: flex;
    gap: 0.5em;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 0.4em;
    background-color: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    padding: 0.4em 0.8em;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.85em;
    color: var(--vp-c-text-2);
    white-space: nowrap;
}

.action-btn:hover:not(:disabled) {
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
    border-color: var(--vp-c-brand-1);
    transform: translateY(-1px);
}

.action-btn:active:not(:disabled) {
    transform: translateY(0);
}

.action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

.action-btn.active {
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
    border-color: var(--vp-c-brand-1);
}

.icon {
    font-size: 0.9em;
}

.content {
    position: relative;
}

/* 覆盖 @vue/repl 内部样式 */
.live-repl-wrapper :deep(.vue-repl) {
    height: 100% !important;
    border-radius: 0 !important;
}

.live-repl-wrapper :deep(.repl-sfc-editor) {
    height: 100% !important;
}

.live-repl-wrapper :deep(.vue-repl .split-pane) {
    border-radius: 0 !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .live-repl-wrapper {
        margin: 1em 0;
        border-radius: 8px;
    }

    .live-repl-wrapper .header {
        padding: 0.6em 1em;
        flex-direction: column;
        gap: 0.5em;
        align-items: stretch;
    }

    .header-left {
        justify-content: center;
    }

    .actions {
        justify-content: center;
        flex-wrap: wrap;
    }

    .action-btn {
        font-size: 0.8em;
        padding: 0.3em 0.6em;
    }
}

/* 深色主题适配 */
@media (prefers-color-scheme: dark) {
    .live-repl-wrapper {
        border-color: var(--vp-c-divider-dark);
        background-color: var(--vp-c-bg-alt);
    }

    .live-repl-wrapper .header {
        background-color: var(--vp-c-bg-soft-dark);
        border-bottom-color: var(--vp-c-divider-dark);
    }

    .action-btn {
        background-color: var(--vp-c-bg-soft-dark);
        border-color: var(--vp-c-divider-dark);
    }
}

/* 打印样式 */
@media print {
    .live-repl-wrapper {
        border: 1px solid #ccc;
        box-shadow: none;
        break-inside: avoid;
    }

    .actions {
        display: none;
    }
}
</style>
