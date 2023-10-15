<template>
  <slot ref="targetRef">
    <w-icon name="info" />
  </slot>
  <teleport to="body">
    <div class="w-tooltip" ref="popperRef" :class="tooltipClass" :style="tooltipStyle" :data-triggered="visible">
      <slot name="content">
        <div class="w-tooltip__content">{{ content }}</div>
      </slot>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'WTooltip'
}
</script>

<script lang="ts" setup>
import WIcon from '../../icon'
import { tooltipEmits, tooltipProps } from './interface'
import { useTooltip } from './useTooltip'

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

const { tooltipClass, tooltipStyle, visible } = useTooltip(props, emit)
</script>

<style src="./tooltip.scss" lang="scss" />
