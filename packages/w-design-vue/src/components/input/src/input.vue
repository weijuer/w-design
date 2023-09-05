<template>
  <div class="w-input" :class="inputClass" :style="inputStyle">
    <input class="w-input__input" :style="imgStyle" :loading="loading" :srcset="srcSet" :src="src" :alt="alt" />
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

const { inputClass, inputStyle, imgStyle } = useInput(props, emit)
</script>

<style src="./input.scss" lang="scss"></style>
./useInput
