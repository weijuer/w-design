<template>
  <label class="w-switch" :class="switchClass">
    <input
      :value="modelValue"
      :checked="isChecked"
      :disabled="disabled"
      :autoFocus="autoFocus"
      :name="name"
      @change="onChange"
      class="w-switch__input"
      type="checkbox"
    />
    <div class="w-switch__marker">
      <div v-if="slots.on" class="w-switch__on">
        <slot name="on"></slot>
      </div>
      <div v-if="slots.off" class="w-switch__off">
        <slot name="off"></slot>
      </div>
      <div v-if="slots['thumb-icon']" class="w-switch__thumb-icon">
        <slot name="thumb-icon" v-bind="{ isChecked }"></slot>
      </div>
    </div>
    <span class="w-switch__text">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'WSwitch'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { switchProps, switchEmits } from './interface'
import { useSwitch } from './useSwitch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)
const slots = useSlots()

const { isChecked, onChange } = useSwitch(props, emit)

const switchClass = computed(() => {
  const { type, size, disabled, loading } = props

  return [
    type ? 'w-switch__' + type : '',
    size ? 'w-switch__' + size : '',
    slots.on || slots.off || slots['thumb-icon'] ? 'w-switch__icon' : '',
    {
      'is-disabled': disabled || loading,
      'is-loading': loading
    }
  ]
})
</script>

<style lang="scss" src="./switch.scss" />
