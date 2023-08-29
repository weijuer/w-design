<template>
  <div class="w-preview">
    <div class="w-preview__render" role="render">
      <slot name="render"></slot>
    </div>
    <div class="w-preview__meta">
      <div class="w-preview__meta-title">{{ title }}</div>
      <div class="w-preview__meta-desc">
        <slot></slot>
      </div>
      <div class="w-preview__meta-actions">
        <w-button icon="delete" @click="onClick"></w-button>
      </div>
    </div>
    <div class="w-preview__code" :aria-hidden="!expanded">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WPreview'
}
</script>

<script setup lang="ts">
// import { computed, useSlots } from 'vue'
import { previewProps, previewEmits } from './interface'
import { usePreview } from './usePreview'

const props = defineProps(previewProps)
const emit = defineEmits(previewEmits)

// const slots = useSlots()
const { expanded, onClick } = usePreview(props, emit)
</script>

<style lang="scss" src="./preview.scss" />
