<template>
  <label class="w-radio">
    <input
      ref="input"
      class="w-radio__input"
      :value="modelValue"
      :checked="checked"
      :disabled="disabled"
      :autoFocus="autoFocus"
      @change="onChange"
      @click="onClick"
      type="radio"
      aria-label="Radio label"
    />
    <div class="w-radio__marker" aria-hidden="true"></div>
    <slot></slot>
  </label>
</template>

<script lang="ts">
export default {
  name: 'w-radio'
}
</script>

<script setup lang="ts">
import { radioEmits, radioProps } from './interface'
import { useRadio } from './useRadio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { onChange, onClick } = useRadio(props, emit)
</script>

<style lang="scss" src="./radio.scss" />
