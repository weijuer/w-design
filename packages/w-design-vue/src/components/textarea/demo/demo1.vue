<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical" align="start">
      <w-textarea v-model="value" clearable @press-enter="onPressEnter" label="Name" placeholder="Name"></w-textarea>
      <p>value: {{ value }}</p>
    </w-space>
  </w-preview>

  <w-preview title="ShowCount" desc="ShowCount">
    <w-space>
      <w-textarea label="Name" placeholder="Name" show-count :maxlength="100"></w-textarea>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const onPressEnter = (event) => {
  console.log('onPressEnter:==>', event)
}
</script>
