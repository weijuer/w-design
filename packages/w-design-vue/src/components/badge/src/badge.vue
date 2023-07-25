<template>
  <span class="w-badge" :class="badgeClass" :style="badgeStyle">
    <slot name="content">
      {{ props.content }}
    </slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "w-badge"
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { badgeProps } from './interface';

const props = defineProps(badgeProps)

const badgeClass = computed(() => ['w-badge__' + props.status,])
const badgeStyle = computed(() => ({
  backgroundColor: props.status ? '' : props.color
}))
</script>

<style src="./badge.scss" lang="scss"></style>