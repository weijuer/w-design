<template>
  <label class="w-checkbox" :class="checkboxClass">
    <input
      ref="input"
      class="w-checkbox__input"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      :autoFocus="autoFocus"
      @change="onChange"
      :true-value="trueValue"
      :false-value="falseValue"
      :indeterminate="indeterminate"
      type="checkbox"
      aria-label="Checkbox label"
    />
    <div class="w-checkbox__marker" aria-hidden="true">
      <slot name="icon" v-bind="{ isChecked }">
        <svg class="w-checkbox__marker-icon" viewBox="0 0 16 16">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2 8l4 4 8-8"
          ></path>
        </svg>
      </slot>
    </div>
    <span class="w-checkbox__label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'WCheckbox',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './interface'
import { useCheckbox } from './useCheckbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { _ref, checkboxClass, isChecked, isDisabled, focus, blur, onChange } = useCheckbox(props, emit)

defineExpose({ _ref, focus, blur })
</script>

<style lang="scss" src="./checkbox.scss" />
