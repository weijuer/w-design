<template>
  <div class="w-radio__group-wrapper">
    <span class="w-radio__group-label">{{ label }}</span>
    <div ref="_fef" class="w-radio__group" :class="radioGroupClass" role="presentation" :data-orientation="orientation">
      <slot>
        <w-radio
          v-for="option in computedOptions"
          :key="option.label"
          :model-value="isChecked(option.value)"
          :value="option.value"
          :name="name"
          @change="updateValue(option.value)"
          :disabled="disabled"
        >
          {{ option.label }}
        </w-radio>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WRadioGroup',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WRadio from './radio.vue'
import { radioGroupEmits, radioGroupProps } from './interface'
import { useRadioGroup } from './useRadioGroup'

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const { _ref, radioGroupClass, computedOptions, isChecked, updateValue } = useRadioGroup(props, emit)

defineExpose({ _ref })
</script>

<style lang="scss" src="./radio-group.scss" />
