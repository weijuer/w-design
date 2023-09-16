<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-number v-model="value" label="number" placeholder="number"></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Splitted" desc="Splitted">
    <w-space>
      <w-input-number v-model="value" splitted label="number" placeholder="number"></w-input-number>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
