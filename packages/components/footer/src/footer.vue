<template>
  <footer class="w-footer" :style="{ '--w-footer-height': height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'w-footer',
}
</script>

<script setup>
defineProps({
  height: {
    type: [String, Number],
    default: null
  }
})
</script>

<style lang="scss">
:root {
  --w-footer-height: 24px;
}

.w-footer {
  flex: 0 0 auto;
  padding: 24px 50px;
  height: var(--w-footer-height, 24px);
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  background: #f0f2f5;
}
</style>