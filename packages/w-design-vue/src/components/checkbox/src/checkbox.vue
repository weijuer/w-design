<template>
  <label class="w-checkbox">
    <input
      ref="input"
      class="w-checkbox__input"
      :value="modelValue"
      :checked="checked"
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
    <slot></slot>
  </label>
</template>

<script lang="ts">
export default {
  name: 'w-checkbox'
}
</script>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './interface'
import { useCheckbox } from './useCheckbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { onChange, onClick } = useCheckbox(props, emit)
</script>

<style lang="scss" src="./checkbox.scss" />
