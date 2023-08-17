<template>
  <span class="w-badge" :class="badgeClass" :style="badgeStyle">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'w-badge'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { badgeProps } from './interface'

const props = defineProps(badgeProps)
const slots = useSlots()

const badgeClass = computed(() => {
  const { type, outlined, light } = props

  return { [`w-badge__${type}${light ? '-light' : ''}`]: type, 'w-badge__outlined': outlined }
})

const badgeStyle = computed(() => ({
  backgroundColor: props.type ? '' : props.color
}))
</script>

<style src="./badge.scss" lang="scss"></style>
