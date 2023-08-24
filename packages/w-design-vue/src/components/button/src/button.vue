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
    <w-icon class="w-icon-loading w-icon--left" v-if="loading" name="loading"></w-icon>
    <w-icon class="w-icon--left" v-if="icon && !loading" :name="icon"></w-icon>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'w-button'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import WIcon from '../../icon'
import { buttonEmits, buttonProps } from './interface'
import { useButton } from './useButton'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const buttonClass = computed(() => {
  const { type, icon, size, outlined, disabled, loading, light, round, dashed, circle } = props

  return [
    type ? 'w-button__' + type : '',
    size ? 'w-button__' + size : '',
    icon ? 'w-button__icon' : '',
    {
      'is-disabled': disabled,
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
