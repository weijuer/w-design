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
    <slot name="left-icon"></slot>
    <slot></slot>
    <slot name="right-icon"></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'WButton'
}
</script>

<script setup lang="ts">
import WIcon from '../../icon'
import { buttonEmits, buttonProps } from './interface'
import { useButton } from './useButton'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { _ref, buttonClass, handleClick } = useButton(props, emit)

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" src="./button.scss" />
