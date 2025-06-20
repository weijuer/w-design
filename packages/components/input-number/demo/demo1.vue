<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-number default-value="1"></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Step" desc="Step">
    <w-space>
      <w-input-number default-value="1" step="2"></w-input-number>
      <w-input-number default-value="1" step="0.5"></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Min & max" desc="Min & max">
    <w-space>
      <w-input-number default-value="5" min="5" max="8"></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-space>
      <w-input-number default-value="1" disabled></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Disable-input" desc="Disable-input">
    <w-space>
      <w-input-number default-value="1" disable-input></w-input-number>
    </w-space>
  </w-preview>

  <w-preview title="Controled" desc="Controled">
    <w-space>
      <w-input-number v-model="value" :min="0" :max="10"></w-input-number>
      <p>value: {{ value }}</p>
    </w-space>
  </w-preview>

  <w-preview title="Splitted" desc="Splitted">
    <w-space>
      <w-input-number default-value="2" :min="0" :max="10" splitted></w-input-number>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(5)
</script>
