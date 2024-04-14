<template>
  <li role="menu-item" :class="['w-menu__item']">
    <a href="" class="w-menu__item-link">
      <span class="start">
        <slot name="start">
          <w-icon class="w-button__icon-left" v-if="icon" :name="icon"></w-icon>
        </slot>
      </span>
      <span class="w-menu__text">{{ title }}</span>
      <span class="end">
        <slot name="end"></slot>
      </span>
    </a>
  </li>
</template>

<script lang="ts">
export default {
  name: 'w-menu-item'
}
</script>

<script setup lang="ts">
import { menuItemEmits, menuItemProps } from './interface'
import { useMenuItem } from './useMenuItem'
import WIcon from '../../icon'

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

useMenuItem(props, emit)
</script>
