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
    type: String,
    default: null
  }
})
</script>