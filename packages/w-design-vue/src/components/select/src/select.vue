<template>
  <div ref="_ref" class="w-select" aria-label="Select" :class="selectClass">
    <w-button readonly :disabled="isDisabled" @click="onToggle">
      {{ selectedText }}
      <template #end>
        <w-icon class="w-select__loading" v-if="loading" name="loading"></w-icon>
        <w-icon v-else name="arrow-down"></w-icon>
      </template>
    </w-button>
    <div class="w-select__dropdown" :aria-expanded="isExpanded">
      <slot>
        <template v-if="isOptGroup">
          <w-select-option-group v-for="group of optionGroupList" :key="group.label" :label="group.label">
            <w-select-option
              v-for="option in group.options"
              :name="name"
              :key="option.label"
              :value="option.value"
              :selected="isSelected(option.value)"
              :disabled="option.disabled"
              @select="updateValue(option.value)"
            >
              {{ option.label }}
            </w-select-option>
          </w-select-option-group>
        </template>
        <transition-group v-else name="dropdown" tag="ul" class="w-select__list" role="listbox">
          <w-select-option
            v-for="option in optionList"
            :name="name"
            :key="option.label"
            :value="option.value"
            :selected="isSelected(option.value)"
            :disabled="option.disabled"
            @select="updateValue(option.value)"
          >
            {{ option.label }}
          </w-select-option>
        </transition-group>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WSelect'
}
</script>

<script lang="ts" setup>
import WButton from '../../button'
import WIcon from '../../icon'
import WSelectOptionGroup from './select-option-group.vue'
import WSelectOption from './select-option.vue'
import { selectEmits, selectProps } from './interface'
import { useSelect } from './useSelect'

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const {
  _ref,
  selectClass,
  isOptGroup,
  isExpanded,
  isDisabled,
  selectedText,
  optionList,
  optionGroupList,
  onToggle,
  isSelected,
  updateValue
} = useSelect(props, emit)
</script>

<style src="./select.scss" lang="scss" />
