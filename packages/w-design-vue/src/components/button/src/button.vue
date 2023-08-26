<template>
  <button
    ref="_ref"
    class="w-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="attrType"
    :class="buttonClass"
  >
    <w-icon class="w-button__loading w-button__icon-left" v-if="loading" name="loading"></w-icon>
    <w-icon class="w-button__icon-left" v-if="icon && !loading" :name="icon"></w-icon>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'WButton'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import WIcon from '../../icon'
import { buttonEmits, buttonProps } from './interface'
import { useButton } from './useButton'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const slots = useSlots()

const buttonClass = computed(() => {
  const { type, icon, size, outlined, disabled, loading, light, round, dashed, circle } = props

  return [
    type ? 'w-button__' + type : '',
    size ? 'w-button__' + size : '',
    icon || (loading && !slots.default) ? 'w-button__icon' : '',
    {
      'is-disabled': disabled || loading,
      'is-outlined': outlined,
      'is-loading': loading,
      'is-light': light,
      'is-round': round,
      'is-dashed': dashed,
      'is-circle': circle
    }
  ]
})

const { _ref, handleClick } = useButton(props, emit)

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" src="./button.scss" />
