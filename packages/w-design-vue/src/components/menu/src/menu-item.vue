<template>
  <li role="menu-item" :class="['w-menu-item']">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'WMenuItemItem'
}
</script>

<script setup>
import { menuItemEmits, menuItemProps } from './interface'
import { useMenuItemItem } from './useMenuItem'

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

useMenuItemItem(props, emit)
</script>

<style scoped lang="scss" src="./menuItem-item.scss"></style>
