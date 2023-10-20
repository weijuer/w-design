<template>
  <span ref="targetWrapperRef" class="w-tooltip__target-wrapper">
    <slot ref="targetRef"></slot>
  </span>
  <teleport to="body">
    <transition name="fade-out">
      <div
        class="w-tooltip"
        ref="popperRef"
        :class="tooltipClass"
        :style="tooltipStyle"
        :data-placement="placement"
        :data-open="visible"
        role="tooltip"
      >
        <slot name="content">
          <div class="w-tooltip__content">{{ content }}</div>
        </slot>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'WTooltip'
}
</script>

<script lang="ts" setup>
import { tooltipEmits, tooltipProps } from './interface'
import { useTooltip } from './useTooltip'

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

const { targetWrapperRef, popperRef, tooltipClass, tooltipStyle, visible } = useTooltip(props, emit)
</script>

<style src="./tooltip.scss" lang="scss" />
