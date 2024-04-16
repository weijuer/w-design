<template>
  <ul role="menu" :class="['w-menu__list', mode ? 'w-menu-' + mode : '', theme ? 'w-menu-' + theme : '']">
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
