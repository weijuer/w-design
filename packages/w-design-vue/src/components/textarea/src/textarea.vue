<template>
  <div class="w-textarea">
    <textarea class="w-textarea__textarea" v-bind="textareaAttrs"></textarea>
    <label v-if="label" class="float-label">{{ label }}</label>
    <w-button
      v-if="clearable"
      icon="delete-filled"
      :class="['w-textarea__btn', { active: isClearBtn }]"
      @click="onClear"
    >
    </w-button>
    <div class="w-textarea__helper" aria-live="polite" aria-atomic="true">
      {{ characterCount }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WTextarea',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WButton from '../../button'

import { textareaProps, textareaEmits } from './interface'
import { useTextarea } from './useTextarea'

const props = defineProps(textareaProps)
const emit = defineEmits(textareaEmits)

const { textareaAttrs, isClearBtn, characterCount, onClear } = useTextarea(props, emit)
</script>

<style src="./textarea.scss" lang="scss"></style>
