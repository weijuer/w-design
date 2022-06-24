<template>
  <section :class="['w-layout', { 'w-layout--has-aside': hasAside }]">
    <slot></slot>
  </section>
</template>



<script>
export default {
  name: 'w-layout',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  hasAside: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss">
.w-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;

  &--has-aside {
    flex-direction: row;
  }
}
</style>