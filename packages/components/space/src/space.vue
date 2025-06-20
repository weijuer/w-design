<template>
  <div class="w-space" :class="spaceClass" :style="spaceStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WSpace'
}
</script>

<script setup lang="ts">
import { spaceProps } from './interface'
import { useSpace } from './useSpace'

const props = defineProps(spaceProps)
const { spaceClass, spaceStyle } = useSpace(props)
</script>

<style src="./space.scss" lang="scss"></style>
