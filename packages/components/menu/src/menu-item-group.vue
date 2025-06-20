<template>
  <li role="menu-item-group" class="w-menu__item w-menu__item-group">
    <span class="w-menu__text">{{ label }}</span>
    <ul class="w-menu__list">
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
export default {
  name: 'w-menu-item-group'
}
</script>

<script setup lang="ts">
import { menuItemGroupProps } from './interface'

defineProps(menuItemGroupProps)
</script>

<style lang="scss" src="./menu-item-group.scss"></style>
