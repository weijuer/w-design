<template>
  <li role="menu-item" :class="menuItemClass" @click="onSelect(value)">
    <slot>
      <a href="javascript:;" :class="['w-menu__item-link', icon ? 'has-icon' : '']">
        <slot name="start">
          <w-icon class="w-button__icon-left" v-if="icon" :name="icon"></w-icon>
        </slot>
        <span class="w-menu__text">{{ label }}</span>
        <slot name="end"></slot>
      </a>
    </slot>
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

const { menuItemClass, onSelect } = useMenuItem(props, emit)
</script>
