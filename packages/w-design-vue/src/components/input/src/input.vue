<template>
  <div class="w-input" :class="inputClass">
    <span class="start-content">
      <slot name="start"></slot>
    </span>
    <input class="w-input__input" v-bind="inputAttrs" />
    <label v-if="label" class="float-label">{{ label }}</label>
    <span class="end-content">
      <slot name="end"></slot>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WInput',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { inputProps, inputEmits } from './interface'
import { useInput } from './useInput'

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const { inputClass, inputAttrs } = useInput(props, emit)
</script>

<style src="./input.scss" lang="scss"></style>
./useInput
