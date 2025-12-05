<script name="WIcon" setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'carbon'
    },
    name: {
        type: String
    },
    size: {
        type: [Number, String],
        default: 18
    }
})

const iconClass = computed(() => {
    return ['w-icon', props.name ? `i-${props.type}:${props.name}` : '']
})
</script>

<template>
    <div :class="iconClass" :data-size="size" />
</template>
