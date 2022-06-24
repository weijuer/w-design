<template>
  <header class="w-header" :style="{ '--w-header-height': height }">
    <slot> </slot>
  </header>
</template>

<script>
export default {
  name: 'w-header'
};
</script>

<script setup>
defineProps({
  height: {
    type: String,
    default: null
  }
});
</script>

<style lang="scss">
.w-header {
  --w-header-height: 64px;
  height: var(--w-header-height);
  padding: 0 50px;
  line-height: 64px;
  background: #001529;
}
</style>
