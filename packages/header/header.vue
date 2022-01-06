<template>
  <header class="w-header" :style="{ '--w-header-height': height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'w-header',
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