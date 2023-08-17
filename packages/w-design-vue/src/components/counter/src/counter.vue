<template>
  <div v-if="slots.default" class="w-counter__wrapper">
    <span class="w-counter" :class="counterClass" :style="counterStyle">
      <slot name="content">
        {{ renderContent() }}
      </slot>
    </span>
    <slot></slot>
  </div>
  <span v-else class="w-counter" :class="counterClass" :style="counterStyle">
    <slot name="content">
      {{ renderContent() }}
    </slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'w-counter'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { counterProps } from './interface'

const props = defineProps(counterProps)
const slots = useSlots()

const counterClass = computed(() => ({
  [`w-counter__${props.status}`]: props.status,
  [`w-counter__${props.position}`]: slots.default && props.position,
  'w-counter__dot': props.dot
}))

const counterStyle = computed(() => ({
  backgroundColor: props.status ? '' : props.color
}))

const renderContent = () => {
  const { dot, max, content } = props

  if (!dot) {
    if (Number(content) > Number(max)) {
      return `${max}+`
    }

    if (content) {
      return content
    }
  }
}
</script>

<style src="./counter.scss" lang="scss"></style>
