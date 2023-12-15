# useHover

## Usage

## Demo
```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { useHover } from '@w-design/use'
const hoverRef = ref<HTML>()
const { isHovered } = useHover(hoverRef)
</script>

<template>
<div ref="hoverRef" class="hover-section" :data-hovered="isHovered"></div>
</template>

<style lang="scss">
.hover-section {
    width: 200px;
    height: 200px;
    border: 1px dashed #c00;
    transition: all 0.2s;

    &[data-hovered=true] {
        opacity: 0.5;
        background-color: gold;
    }
}
</style>
```