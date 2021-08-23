<template>
  <section class="w-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: ''
  }
})
const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  if (slots && slots.default) {
    const vNodes = slots.default()
    return vNodes.some((vNode) => {
      const tag = vNode.type.name
      return tag === 'ElHeader' || tag === 'ElFooter'
    })
  } else {
    return false
  }
})
</script>