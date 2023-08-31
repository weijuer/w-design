<template>
  <span class="w-chip" :class="chipClass" :style="chipStyle">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'WChip'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { chipProps } from './interface'

const props = defineProps(chipProps)

const chipClass = computed(() => {
  const { type, outlined, light } = props

  return { [`w-chip__${type}${light ? '-light' : ''}`]: type, 'w-chip__outlined': outlined }
})

const chipStyle = computed(() => ({
  backgroundColor: props.type ? '' : props.color
}))
</script>

<style src="./chip.scss" lang="scss"></style>
