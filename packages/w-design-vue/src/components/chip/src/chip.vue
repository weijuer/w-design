<template>
  <span class="w-chip" :class="chipClass" :style="chipStyle">
    <span class="w-chip__text">
      <slot></slot>
    </span>
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
  const { size, type, outlined, light, disabled } = props

  return [
    size ? 'w-chip__' + size : '',
    type ? `w-chip__${type}${light ? '-light' : ''}` : '',
    { 'is-outlined': outlined, 'is-disabled': disabled }
  ]
})

const chipStyle = computed(() => ({
  backgroundColor: props.type ? '' : props.color
}))
</script>

<style src="./chip.scss" lang="scss"></style>
