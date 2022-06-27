<template>
  <ul role="menu" :class="['w-menu', mode ? 'w-menu-' + mode : '', theme ? 'w-menu-' + theme : '']">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'w-menu'
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  mode: {
    type: String,
    validator(value) {
      return ['vertical', 'horizontal', 'vertical-right', 'inline'].includes(value);
    },
    default: 'vertical'
  },
  theme: {
    type: String,
    validator(value) {
      return ['light', 'dark'].includes(value);
    },
    default: 'light'
  }
});
</script>

<style scoped lang="scss">
.w-menu {
  box-sizing: border-box;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: 'tnum';
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
  list-style: none;
  background: #fff;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
  zoom: 1;

  &-horizontal {
    display: flex;
    align-items: center;
    line-height: 46px;
    white-space: nowrap;
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: none;

    .w-menu-item {
      position: relative;
      top: 1px;
      display: inline-block;
      vertical-align: bottom;
      border-bottom: 2px solid transparent;
    }
  }

  @each $theme in dark, light {
    &-#{$theme} {
      @if #{$theme}==dark {
        color: hsla(0, 0%, 100%, 0.65);
        background: #001529;
      }
    }
  }
}
</style>
