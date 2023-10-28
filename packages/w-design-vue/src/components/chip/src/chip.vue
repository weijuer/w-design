<template>
  <span class="w-chip" :class="chipClass" :style="chipStyle">
    <slot name="start"></slot>
    <span class="w-chip__text">
      <slot></slot>
    </span>
    <slot name="end"></slot>
    <span v-if="closeable" class="w-chip__btn" role="button" @click="onClose">
      <w-icon name="delete-filled"></w-icon>
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: 'WChip'
}
</script>

<script setup lang="ts">
import WIcon from '../../icon'
import { chipProps, chipEmits } from './interface'
import { useChip } from './useChip'

const props = defineProps(chipProps)
const emit = defineEmits(chipEmits)

const { chipClass, chipStyle, onClose } = useChip(props, emit)
</script>

<style src="./chip.scss" lang="scss"></style>
