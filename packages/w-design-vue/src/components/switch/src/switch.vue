<template>
  <label class="w-switch">
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
    <div class="w-switch__marker"></div>
  </label>
</template>

<script lang="ts">
export default {
  name: 'w-switch'
}
</script>

<script setup lang="ts">
import { switchProps, switchEmits } from './interface'
import { useSwitch } from './useSwitch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { _ref, isChecked, onChange } = useSwitch(props, emit)
</script>

<style lang="scss" src="./switch.scss" />
