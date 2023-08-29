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
      :indeterminate="isIndeterminate"
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

const { _ref, isChecked, isIndeterminate, onChange, onClick } = useCheckbox(props, emit)

const checkboxClass = computed(() => {
  const { type, size, disabled } = props

  return [
    type ? 'w-checkbox__' + type : '',
    size ? 'w-checkbox__' + size : '',
    { 'is-indeterminate': isIndeterminate.value, 'is-disabled': disabled }
  ]
})

defineExpose({
  _ref
})
</script>

<style lang="scss" src="./checkbox.scss" />
