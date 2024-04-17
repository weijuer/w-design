<template>
  <li role="sub-menu" :class="['w-sub-menu']">
    <a href="javascript:;" class="w-menu__item-link">
      <slot name="start">
        <w-icon class="w-button__icon-left" v-if="icon" :name="icon"></w-icon>
      </slot>
      <span class="w-menu__text">{{ label }}</span>
      <div class="w-sub-menu__toggle">
        <slot name="end">
          <w-icon name="arrow-left"></w-icon>
        </slot>
      </div>
    </a>
    <ul class="w-menu__list">
      <slot></slot>
    </ul>
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

const props = defineProps(menuItemProps)
const emit = defineEmits(menuItemEmits)

useMenuItem(props, emit)
</script>
