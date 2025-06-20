<template>
  <li class="w-select__item w-select__item-option" :class="selectOptionClass" @click="onSelect(value!)">
    <span class="w-select__item-text">{{ value }}</span>
    <svg class="w-select__item-marker" viewBox="0 0 16 16">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2 8l4 4 8-8"
      ></path>
    </svg>
  </li>
</template>

<script lang="ts">
export default {
  name: 'WSelectOption'
}
</script>

<script lang="ts" setup>
import { selectOptionProps, selectOptionEmits } from './interface'
import { useSelectOption } from './useSelectOption'

const props = defineProps(selectOptionProps)
const emit = defineEmits(selectOptionEmits)

const { selectOptionClass, onSelect } = useSelectOption(props, emit)
</script>

<style src="./select-option.scss" lang="scss" />
