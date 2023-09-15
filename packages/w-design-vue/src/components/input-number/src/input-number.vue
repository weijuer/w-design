<template>
  <w-input ref="_ref" class="w-input-number" v-bind="$attrs" type="number">
    <template #end>
      <div class="w-input-number__btns">
        <w-button
          size="tiny"
          icon="arrow-up"
          class="w-input-number__btn"
          @click="onToggle"
          @mouseup="onMouseup"
          @mousedown="onMousedown"
        >
        </w-button>
        <w-button
          size="tiny"
          icon="arrow-down"
          class="w-input-number__btn"
          @click="onToggle"
          @mouseup="onMouseup"
          @mousedown="onMousedown"
        >
        </w-button>
      </div>
    </template>
  </w-input>
</template>

<script lang="ts">
export default {
  name: 'WInputNumber',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WInput from '../../input'
import WButton from '../../button'
import { inputNumberProps } from './interface'
import { useInputNumber } from './useInputNumber'

defineProps(inputNumberProps)

const { _ref, onToggle, onMousedown, onMouseup } = useInputNumber()
</script>

<style src="./input-number.scss" lang="scss"></style>
