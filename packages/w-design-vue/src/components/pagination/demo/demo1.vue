<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical" fill>
      <w-pagination v-model:current="state.current1" :total="50" type="info"></w-pagination>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  current1: 1
})

// const themes = ['primary', 'success', 'warning', 'info', 'danger']
</script>
