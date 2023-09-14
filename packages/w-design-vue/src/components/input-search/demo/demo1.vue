<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-search v-model="value" @search="onSearch" label="Name" placeholder="Name"></w-input-search>
      <p>value: {{ value }}</p>
    </w-space>
  </w-preview>

  <w-preview title="Loading" desc="Loading">
    <w-space>
      <w-input-search loading label="Name" placeholder="Name"></w-input-search>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const onSearch = (value, event) => {
  console.log('onSearch:==>', value, event)
}
</script>
