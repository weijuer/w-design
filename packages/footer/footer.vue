<template>
  <footer class="w-footer" :style="{ '--w-footer-height': height }">
    <slot></slot>
  </footer>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: null
  }
})
</script>