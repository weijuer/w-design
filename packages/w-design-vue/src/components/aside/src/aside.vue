<template>
  <aside class="w-aside" :style="{ '--w-aside-width': asideWith }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'w-aside',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: {
    type: [String, Number],
    default: 200
  }
});

const asideWith = computed(() => typeof props.width === 'string' ? props.width : `${props.width}px`)
</script>

<style lang="scss" scoped>
.w-aside {
  --w-aside-width: 200px;

  position: relative;
  flex: 0 0 var(--w-aside-width);
  min-width: var(--w-aside-width);
  max-width: var(--w-aside-width);
  width: var(--w-aside-width);
  background: #001529;
  transition: all .2s;
}
</style>