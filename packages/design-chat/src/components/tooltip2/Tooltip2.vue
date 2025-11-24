<script setup lang="ts">
import { computed, useId } from 'vue';

// [核心] 生成一个在服务端和客户端都唯一的 ID
// 1. useId() 用于 popover 和 popovertarget 之间的关联
const popoverId = useId();

// 2. 我们基于此 ID 创建一个 CSS 兼容的锚点名称
const anchorStyle = computed(() => ({
    anchorName: `--w-popover-anchor-${popoverId}`
}));

const popoverStyle = computed(() => ({
    positionAnchor: `--w-popover-anchor-${popoverId}`,
    positionArea: 'center left'
}));
</script>

<template>
    <span class="w-popover-anchor" :style="anchorStyle" :popovertarget="popoverId">
        <slot />
    </span>

    <div :id="popoverId" class="w-popover-content" :style="popoverStyle">
        <slot name="content">
            <span>Popover Content</span>
        </slot>
    </div>
</template>

<style scoped>
.w-popover-content {
    --w-popover-gap: 8px;
    --w-tooltip: v-bind('anchorStyle.anchorName');

    &::before {
        /* vertical position from tooltip  */
        top: calc(anchor(var(--w-tooltip) top) - var(--w-popover-gap));
        bottom: calc(anchor(var(--w-tooltip) bottom) - var(--w-popover-gap));
        /* horizontal position from anchor */
        left: calc(anchor(var(--w-tooltip) center) - var(--w-popover-size)/2);
    }
}
</style>