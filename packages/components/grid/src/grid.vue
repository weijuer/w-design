<template>
  <div class="w-grid" :class="gridClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-grid'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { gridProps } from './interface';

const props = defineProps(gridProps)

const gridClass = computed(() => [
  { 'w-grid-auto': props.auto }
])

</script>

<style lang="scss" src="./gird.scss" />
