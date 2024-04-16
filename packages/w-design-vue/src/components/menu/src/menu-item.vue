<template>
  <li role="menu-item" :class="['w-menu__item']">
    <slot>
      <a href="javascript:;" class="w-menu__item-link">
        <span class="start" v-if="icon">
          <slot name="start">
            <w-icon class="w-button__icon-left" :name="icon"></w-icon>
          </slot>
        </span>
        <span class="w-menu__text">{{ title }}</span>
        <span class="end">
          <slot name="end"></slot>
        </span>
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

useMenuItem(props, emit)
</script>
