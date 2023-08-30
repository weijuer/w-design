<template>
  <div class="w-checkbox__group" :class="checkboxGroupClass">
    <slot>
      <w-checkbox v-for="option in computedOptions" :key="option.label" :model-value="option.value" @change="onChange">
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
import { computed } from 'vue'
import WCheckbox from './checkbox.vue'
import { checkboxGroupEmits, checkboxGroupProps } from './interface'
import { useCheckboxGroup } from './useCheckboxGroup'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const { _ref, onChange } = useCheckboxGroup(props, emit)

const computedOptions = computed(() => {
  const { options = [] } = props
  return options.map((option) => {
    if (typeof option === 'string') {
      return {
        label: option,
        value: option
      }
    } else {
      return option
    }
  })
})

const checkboxGroupClass = computed(() => {
  const { disabled } = props

  return [{ 'is-disabled': disabled }]
})

defineExpose({
  _ref
})
</script>

<style lang="scss" src="./checkbox-group.scss" />
