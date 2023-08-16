<template>
  <div
    :class="['w-checkbox2', { 'w-checkbox2__checked': isChecked }, { 'w-checkbox-indeterminate': indeterminate }]"
    @click="onClick"
  >
    <svg class="w-checkbox2__marker" viewBox="0 0 16 16">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2 8l4 4 8-8"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-checkbox2',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './interface'
import { useCheckbox } from './useCheckbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { _ref, isChecked, onChange, onClick } = useCheckbox(props, emit)

defineExpose({
  _ref
})
</script>

<style lang="scss" src="./checkbox2.scss" />
