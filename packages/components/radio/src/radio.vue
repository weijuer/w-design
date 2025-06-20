<template>
  <label class="w-radio" :class="radioClass">
    <input
      ref="input"
      class="w-radio__input"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      :autoFocus="autoFocus"
      :name="computedName"
      @change="onChange"
      @click="onClick"
      type="radio"
      aria-label="Radio label"
    />
    <div class="w-radio__marker" aria-hidden="true"></div>
    <span class="w-radio__label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'WRadio'
}
</script>

<script setup lang="ts">
import { radioEmits, radioProps } from './interface'
import { useRadio } from './useRadio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { _ref, isDisabled, isChecked, computedName, radioClass, onChange, onClick, focus, blur } = useRadio(props, emit)

defineExpose({ _ref, focus, blur })
</script>

<style lang="scss" src="./radio.scss" />
