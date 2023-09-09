<template>
  <div class="w-input__group">
    <div class="w-input__main-wrapper">
      <div class="w-input" :class="inputClass">
        <slot name="start"></slot>
        <input class="w-input__input" v-bind="inputAttrs" />
        <label v-if="label" class="float-label">{{ label }}</label>
        <slot name="end"></slot>
        <span v-if="clearable" class="w-input__btn" role="button" @click="onClear">
          <w-icon name="delete"></w-icon>
        </span>
      </div>
    </div>

    <div
      v-if="$slots.description || description || $slots['error-message'] || errorMessage"
      class="w-input__helper-wrapper"
    >
      <div class="description">
        <slot name="description">{{ description }}</slot>
      </div>
      <div class="error-message">
        <slot name="error-message">{{ errorMessage }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WInput',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WIcon from '../../icon'
import { inputProps, inputEmits } from './interface'
import { useInput } from './useInput'

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const { inputClass, inputAttrs, onClear } = useInput(props, emit)
</script>

<style src="./input.scss" lang="scss"></style>
