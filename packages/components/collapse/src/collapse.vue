<template>
  <div ref="_ref" class="w-collapse" :class="collapseClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Collapse'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { collapseEmits, collapseProps } from './interface'
import { useCollapse } from './useCollapse'

const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { _ref } = useCollapse(props, emit)

const collapseClass = computed(() => {
  const { bordered, splitted, shadowed } = props

  return [
    {
      'is-bordered': bordered,
      'is-splitted': splitted,
      'is-shadowed': shadowed
    }
  ]
})

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" src="./collapse.scss" />
