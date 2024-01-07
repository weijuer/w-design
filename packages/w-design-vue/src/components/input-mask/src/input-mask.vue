<template>
  <div class="w-input-mask" :class="inputMaskClass">
    <input class="w-input-mask__input" v-bind="inputMaskAttrs" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'WInputMask',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { inputMaskEmits, inputMaskProps } from './interface'
import { useInputMask } from './useInputMask'

const props = defineProps(inputMaskProps)
const emit = defineEmits(inputMaskEmits)

const { inputMaskClass, inputMaskAttrs } = useInputMask(props, emit)
</script>

<style src="./input-mask.scss" lang="scss"></style>
