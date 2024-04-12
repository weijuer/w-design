<template>
  <ul role="menu" :class="['w-menu', mode ? 'w-menu-' + mode : '', theme ? 'w-menu-' + theme : '']">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'WMenu',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { menuEmits, menuProps } from './interface'
import { useMenu } from './useMenu'

const props = defineProps(menuProps)
const emit = defineEmits(menuEmits)

useMenu(props, emit)
</script>

<style scoped lang="scss" src="./menu.scss"></style>
