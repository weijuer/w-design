<script setup lang="ts">
import { computed, ref } from 'vue'

// 定义 props
const props = defineProps({
    // 卡片标题
    title: {
        type: String,
        default: ''
    },
    // 是否显示边框
    bordered: {
        type: Boolean,
        default: true
    },
    // 是否显示阴影
    shadow: {
        type: Boolean,
        default: true
    },
    // 是否可折叠
    collapsible: {
        type: Boolean,
        default: false
    },
    // 是否默认折叠
    defaultCollapsed: {
        type: Boolean,
        default: false
    },
    // 是否显示头部
    showHeader: {
        type: Boolean,
        default: true
    },
    // 是否显示底部
    showFooter: {
        type: Boolean,
        default: true
    },
    // 自定义样式类
    customClass: {
        type: String,
        default: ''
    },
    // 头部样式
    headerStyle: {
        type: Object,
        default: () => ({})
    },
    // 内容样式
    contentStyle: {
        type: Object,
        default: () => ({})
    },
    // 底部样式
    footerStyle: {
        type: Object,
        default: () => ({})
    }
})

// 折叠状态
const collapsed = ref(props.defaultCollapsed)

// 切换折叠状态
function toggleCollapse() {
    if (props.collapsible) {
        collapsed.value = !collapsed.value
    }
}

// 计算卡片类名
const cardClasses = computed(() => {
    return [props.bordered ? 'is-bordered' : '', props.customClass]
})

// 计算标题样式
const titleStyle = computed(() => ({
    fontWeight: '600',
    fontSize: '16px',
    color: 'inherit',
    ...props.headerStyle
}))
</script>

<template>
    <div class="w-card" :class="cardClasses">
        <div v-if="showHeader || $slots.header" class="w-card__header" :style="headerStyle">
            <div class="w-card__header-content">
                <div v-if="title" class="w-card__header-title" :style="titleStyle">
                    {{ title }}
                </div>
                <slot name="header" />
                <button
                    v-if="collapsible"
                    class="collapse-btn"
                    :aria-expanded="!collapsed"
                    @click="toggleCollapse"
                >
                    <div
                        class="i-carbon:chevron-down transition-transform duration-300"
                        :class="{ 'rotate-180': collapsed }"
                    />
                </button>
            </div>
        </div>

        <div v-if="!collapsed || !collapsible" class="w-card__content" :style="contentStyle">
            <slot />
        </div>

        <div v-if="showFooter || $slots.footer" class="w-card__footer" :style="footerStyle">
            <slot name="footer" />
        </div>
    </div>
</template>
