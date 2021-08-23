<template>
  <aside class="w-aside" :style="{ '--w-aside-width': width }">
    <slot></slot>
  </aside>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: null
  }
})
</script>