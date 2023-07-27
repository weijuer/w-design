<template>
  <div v-if="slots.default" class="w-badge__wrapper">
    <span class="w-badge" :class="badgeClass" :style="badgeStyle">
      <slot name="content">
        {{ renderContent() }}
      </slot>
    </span>
    <slot></slot>
  </div>
  <span v-else class="w-badge" :class="badgeClass" :style="badgeStyle">
    <slot name="content">
      {{ renderContent() }}
    </slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "w-badge"
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { badgeProps } from './interface';

const props = defineProps(badgeProps)
const slots = useSlots();

const badgeClass = computed(() => ({
  [`w-badge__${props.status}`]: props.status,
  [`w-badge__${props.position}`]: slots.default && props.position,
  'w-badge__dot': props.dot,
}))

const badgeStyle = computed(() => ({
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

<style src="./badge.scss" lang="scss"></style>