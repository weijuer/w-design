<template>
  <li role="menu-item" :class="['w-menu-item']">
    <slot></slot>
  </li>
</template>

<script lang="ts">
export default {
  name: 'WMenuItemItem'
}
</script>

<script setup lang="ts">
import { menuItemEmits, menuItemProps } from './interface'
import { useMenuItem } from './useMenuItem'

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

useMenuItem(props, emit)
</script>

<style scoped lang="scss" src="./menuItem-item.scss"></style>
