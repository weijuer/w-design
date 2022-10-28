<template>
  <span class="w-tooltip" :class="[type]" data-tooltip="tip">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'w-tooltip',
}
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tooltip: { type: String, default: '', required: true },
  direction: { type: String, default: 'top' }
});

const type = computed(() => (props.direction ? `w-tooltip-${props.direction}` : ''));
</script>

<style lang="stylus">
.w-tooltip {
  position: relative;

  &:after, &:before {
    position: absolute;
    transform: translate3d(0, 0, 0);
    visibility: hidden;
    opacity: 0;
    z-index: 10000;
    pointer-events: none;
    transition: 0.3s ease;
  }

  &:before {
    content: '';
    position: absolute;
    background: 0 0;
    border: 8px solid transparent;
    z-index: 10001;
  }

  &:after {
    content: attr(data-tooltip);
    padding: 8px 10px;
    font-size: 12px;
    line-height: 12px;
    white-space: nowrap;
    color: #fff;
    background: #383838;
  }

  &:hover {
    &:after, &:before {
      visibility: visible;
      opacity: 1;
      transition-delay: 100ms;
    }
  }

  /* w-tooltip-top */
  &.w-tooltip-top {
    &:before {
      margin-bottom: -11px;
      left: calc(50% - 6px);
      border-top-color: #383838;
    }

    &:after {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      &:before {
        transform: translateY(8px);
      }

      &:after {
        transform: translateX(-50%) translateY(8px);
      }
    }
  }

  /* w-tooltip-bottom */
  &.w-tooltip-bottom {
    &:before {
      margin-top: -15px;
      left: calc(50% - 8px);
      border-bottom-color: #383838;
    }

    &:after {
      transform: translateX(-50%);
    }

    &:hover {
      &:before {
        transform: translateY(8px);
      }

      &:after {
        transform: translateX(-50%) translateY(8px);
      }
    }
  }
}
</style>
