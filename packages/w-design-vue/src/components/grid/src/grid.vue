<template>
  <div class="w-grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-grid'
}
</script>

<script setup lang="ts">
import { gridProps } from './interface';

const props = defineProps(gridProps)
</script>

<style lang="scss" src="./gird.scss" />
