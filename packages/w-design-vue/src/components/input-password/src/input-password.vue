<template>
  <w-input ref="_ref" class="w-input-password" v-bind="$attrs" :type="visible ? 'text' : 'password'">
    <template #end>
      <w-button
        size="tiny"
        class="w-input-password__btn"
        @click="onToggle"
        @mouseup="onMouseup"
        @mousedown="onMousedown"
      >
        <slot name="icon">
          <w-icon :name="visible ? 'password-on' : 'password-off'"></w-icon>
        </slot>
      </w-button>
    </template>
  </w-input>
</template>

<script lang="ts">
export default {
  name: 'WInputPassword',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WIcon from '../../icon'
import WButton from '../../button'
import WInput from '../../input'
import { inputPasswordProps } from './interface'
import { useInputPassword } from './useInputPassword'

defineProps(inputPasswordProps)

const { _ref, visible, onToggle, onMousedown, onMouseup } = useInputPassword()
</script>

<style src="./input-password.scss" lang="scss"></style>
