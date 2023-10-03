<template>
  <ul class="w-select__list w-select__option-group">
    <li class="w-select__item w-select__item-optgroup">
      <span class="w-select__item-text">{{ label }}</span>
    </li>
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'WSelectOptionGroup'
}
</script>

<script lang="ts" setup>
import { selectOptionGroupProps } from './interface'

defineProps(selectOptionGroupProps)
</script>

<style src="./select-option.scss" lang="scss" />
