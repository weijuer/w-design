<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-password v-model="value" label="password" placeholder="password"></w-input-password>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
