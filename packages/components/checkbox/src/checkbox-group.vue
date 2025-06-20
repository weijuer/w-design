<template>
  <div class="w-checkbox__group-wrapper">
    <span class="w-checkbox__group-label">{{ label }}</span>
    <div
      ref="_fef"
      class="w-checkbox__group"
      :class="checkboxGroupClass"
      role="presentation"
      :data-orientation="orientation"
    >
      <slot>
        <w-checkbox
          v-for="option in computedOptions"
          :key="option.label"
          :model-value="isChecked(option.value)"
          :value="option.value"
          :name="name"
          @change="updateValue(option.value)"
          :disabled="disabled"
        >
          {{ option.label }}
        </w-checkbox>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WCheckboxGroup',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WCheckbox from './checkbox.vue'
import { checkboxGroupEmits, checkboxGroupProps } from './interface'
import { useCheckboxGroup } from './useCheckboxGroup'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const { _ref, checkboxGroupClass, computedOptions, isChecked, updateValue } = useCheckboxGroup(props, emit)

defineExpose({ _ref })
</script>

<style lang="scss" src="./checkbox-group.scss" />
