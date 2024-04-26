<template>
  <li role="sub-menu" :class="menuItemClass">
    <a @click="onToggle()" href="javascript:;" class="w-menu__item-link">
      <slot name="start">
        <w-icon class="w-button__icon-left" v-if="icon" :name="icon"></w-icon>
      </slot>
      <span class="w-menu__text">{{ label }}</span>
      <div class="w-menu__item--toggle">
        <slot name="end" :expanded="expanded">
          <w-icon name="arrow-left"></w-icon>
        </slot>
      </div>
    </a>
    <transition>
      <ul class="w-menu__list" v-show="expanded">
        <slot></slot>
      </ul>
    </transition>
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

const { menuItemClass, onToggle, expanded } = useMenuItem(props, emit)
</script>
