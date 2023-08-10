<template>
  <label :class="['w-checkbox', { 'w-checkbox-indeterminate': indeterminate }]">
    <input
      ref="input"
      class="w-checkbox__input"
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
    <div class="w-checkbox__marker" aria-hidden="true"></div>
    <span class="w-checkbox__label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'w-checkbox',
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

<style lang="scss" src="./checkbox.scss" />
