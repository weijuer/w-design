<template>
  <ul data-role="menu" :class="menuClass" :style="menuStyle">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'w-menu'
}
</script>

<script setup lang="ts">
import { menuEmits, menuProps } from './interface'
import { useMenu } from './useMenu'

const props = defineProps(menuProps)
const emit = defineEmits(menuEmits)

const { menuClass, menuStyle } = useMenu(props, emit)
</script>

<style lang="scss" src="./menu.scss"></style>
