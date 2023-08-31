<template>
    <div class="w-space" :class="spaceClass" :style="spaceStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'WSpace'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { spaceProps } from './interface'

const props = defineProps(spaceProps)

const size2px = (size: number | string) => {
    return typeof size === 'number' ? size + 'px' : size
}

const spaceClass = computed(() => {
    const { orientation, size, align, wrap, fill } = props

    return [
        orientation && orientation === 'vertical' ? 'w-space__' + orientation : '',
        align ? 'w-space__' + align : '',
        {
            'is-wrap': wrap,
            'is-fill': fill
        }
    ]
})

const spaceStyle = computed(() => {
    const { size } = props

    const spaceGap = Array.isArray(size) ? size.map(size2px).join(' ') : size2px(size!)

    return {
        '--w-space-gap': spaceGap
    }
})
</script>

<style src="./space.scss" lang="scss"></style>
