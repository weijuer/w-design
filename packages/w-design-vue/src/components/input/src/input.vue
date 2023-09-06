<template>
  <div class="w-input" :class="inputClass">
    <slot name="start"></slot>
    <input class="w-input__input" v-bind="inputAttrs" />
    <label v-if="label" class="float-label">{{ label }}</label>
    <slot name="end"></slot>
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
