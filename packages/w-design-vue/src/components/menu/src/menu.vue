<template>
  <nav class="w-menus" aria-label="Menus">
    <ul role="menu" :class="['w-menu', mode ? 'w-menu-' + mode : '', theme ? 'w-menu-' + theme : '']">
      <slot></slot>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'w-menu',
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

<style lang="scss" src="./menu.scss"></style>
