<template>
    <span class="w-popover-anchor" :style="{ anchorName: anchorName }" :popovertarget="popoverId">
        <slot />
    </span>

    <div :id="popoverId" popover="auto" class="w-popover-content" :style="{ positionAnchor: anchorName }">
        <slot name="content">
            <span>Popover Content</span>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue';

// [核心] 生成一个在服务端和客户端都唯一的 ID
// 1. useId() 用于 popover 和 popovertarget 之间的关联
const popoverId = useId();

// 2. 我们基于此 ID 创建一个 CSS 兼容的锚点名称
const anchorName = computed(() => `--w-popover-anchor-${popoverId}`);
</script>