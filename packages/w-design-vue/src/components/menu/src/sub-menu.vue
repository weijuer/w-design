<template>
  <li role="menu-item" :class="['w-sub-menu']">
    <span class="w-menu__text">{{ title }}</span>
    <w-menu>
      <slot></slot>
    </w-menu>
  </li>
</template>

<script lang="ts">
export default {
  name: 'w-sub-menu'
}
</script>

<script setup lang="ts">
import { menuItemEmits, menuItemProps } from './interface'
import { useMenuItem } from './useMenuItem'
import WIcon from '../../icon'
import WMenu from '..'
import { WMenuItem } from '..'

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

useMenuItem(props, emit)
</script>
