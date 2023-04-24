<template>
  <button ref="_ref" class="w-button" @click="handleClick" :disabled="disabled || loading" :autofocus="autofocus"
    :type="attrType" :class="[
        type ? 'w-button-' + type : '',
        size ? 'w-button-' + size : '',
        {
          'is-disabled': disabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle
        }
      ]">
    <w-icon class="w-icon-loading w-icon--left" v-if="loading" name="loading"></w-icon>
    <w-icon class="w-icon--left" v-if="icon && !loading" :name="icon"></w-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'w-button'
}
</script>

<script setup lang="ts">
import WIcon from '../../icon';
import { buttonEmits, buttonProps } from './interface'
import { useButton } from './useButton';

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits)

const { _ref, handleClick } = useButton(props, emit)

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" src="./button.scss" />