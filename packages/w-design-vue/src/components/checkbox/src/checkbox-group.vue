<template>
  <div ref="_fef" class="w-checkbox__group" :class="checkboxGroupClass">
    <slot>
      <w-checkbox
        v-for="option in computedOptions"
        :key="option.label"
        :checked="isChecked(option.value)"
        :model-value="option.value"
        :name="name"
        @change="toggleOption(option)"
      >
        {{ option.label }}
      </w-checkbox>
    </slot>
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

const { _ref, checkboxGroupClass, computedOptions, isChecked, toggleOption } = useCheckboxGroup(props, emit)

defineExpose({
  _ref
})
</script>

<style lang="scss" src="./checkbox-group.scss" />
