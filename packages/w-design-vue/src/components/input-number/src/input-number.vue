<template>
  <div class="w-input-number" :class="inputNumberClass">
    <input class="w-input-number__input" v-bind="inputNumberAttrs" />
    <template v-if="splitted">
      <w-button
        icon="minus"
        class="w-input-number__btn w-input-number__btn-minus"
        round
        :disabled="isDecreaseBtnDisabled"
        @click="onDecrease"
        @mouseup="onMouseup"
        @mousedown="onMousedown"
      >
      </w-button>
      <w-button
        icon="plus"
        class="w-input-number__btn w-input-number__btn-plus"
        round
        :disabled="isIncreaseBtnDisabled"
        @click="onIncrease"
        @mouseup="onMouseup"
        @mousedown="onMousedown"
      >
      </w-button>
    </template>
    <div v-if="controls && !splitted" class="w-input-number__btns">
      <w-button
        icon="arrow-up"
        class="w-input-number__btn"
        :disabled="isIncreaseBtnDisabled"
        @click="onIncrease"
        @mouseup="onMouseup"
        @mousedown="onMousedown"
      >
      </w-button>
      <w-button
        icon="arrow-down"
        class="w-input-number__btn"
        :disabled="isDecreaseBtnDisabled"
        @click="onDecrease"
        @mouseup="onMouseup"
        @mousedown="onMousedown"
      >
      </w-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WInputNumber',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WButton from '../../button'
import { inputNumberEmits, inputNumberProps } from './interface'
import { useInputNumber } from './useInputNumber'

const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)

const {
  inputNumberClass,
  inputNumberAttrs,
  isIncreaseBtnDisabled,
  isDecreaseBtnDisabled,
  onIncrease,
  onDecrease,
  onMousedown,
  onMouseup
} = useInputNumber(props, emit)
</script>

<style src="./input-number.scss" lang="scss"></style>
