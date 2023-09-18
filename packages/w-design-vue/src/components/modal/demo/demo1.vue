<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-button type="primary" @click="visible = true">open</w-button>
      <w-modal v-model="visible"></w-modal>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
