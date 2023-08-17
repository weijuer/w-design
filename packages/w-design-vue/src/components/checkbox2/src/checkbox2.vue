<template>
  <label :class="['w-checkbox2', { 'w-checkbox-indeterminate': indeterminate }]">
    <input
      ref="input"
      class="w-checkbox2__input"
      :value="modelValue"
      :checked="isChecked"
      :disabled="disabled"
      :autoFocus="autoFocus"
      @change="onChange"
      @click="onClick"
      :true-value="trueValue"
      :false-value="falseValue"
      type="checkbox"
      aria-label="Checkbox label"
    />
    <div class="w-checkbox2__marker" aria-hidden="true">
      <svg class="w-checkbox2__marker-icon" viewBox="0 0 16 16">
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
    <span class="w-checkbox2__label"><slot></slot></span>
  </label>
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
