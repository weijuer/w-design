<template>
  <svg class="w-icon" v-bind="$attrs" aria-hidden="true" @click="emit('click')">
    <use :xlink:href="symbolId"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'WBaseIcon',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  }
})

const emit = defineEmits(['click'])

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss">
.w-icon {
  width: 1em;
  height: 1em;
  max-width: 100%;
  pointer-events: none;
  fill: currentColor;
  overflow: hidden;
}
</style>
