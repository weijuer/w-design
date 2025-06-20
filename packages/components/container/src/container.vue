<template>
  <section class="w-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>



<script>
export default {
  name: 'w-container',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  direction: {
    type: String,
    default: ''
  }
});

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true;
  } else if (props.direction === 'horizontal') {
    return false;
  }
});
</script>

<style lang="scss">
.w-container {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
}
</style>