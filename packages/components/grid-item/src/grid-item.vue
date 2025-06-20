<template>
  <div class="w-grid__item" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-grid-item'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { gridItemProps } from './interface'

const props = defineProps(gridItemProps)

const itemClass = computed(() => ({ [`w-col-${props.span}`]: props.span, [`w-col__offset-${props.offset}`]: props.offset }))
</script>
