<template>
  <label class="w-checkbox" :class="checkboxClass">
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
  name: 'WCheckbox',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { checkboxEmits, checkboxProps } from './interface'
import { useCheckbox } from './useCheckbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const checkboxClass = computed(() => {
  const { type, size, disabled, indeterminate } = props

  return [
    type ? 'w-checkbox__' + type : '',
    size ? 'w-checkbox__' + size : '',
    { 'is-indeterminate': indeterminate, 'is-disabled': disabled }
  ]
})

const { _ref, isChecked, onChange, onClick } = useCheckbox(props, emit)

defineExpose({
  _ref
})
</script>

<style lang="scss" src="./checkbox.scss" />
