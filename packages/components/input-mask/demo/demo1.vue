<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-mask v-model="state.date" mask="11/11/1111" placeholder="dd/mm/yyyy"></w-input-mask>
    </w-space>
  </w-preview>
</template>

<script setup>
import { watchEffect } from 'vue'
import { reactive } from 'vue'

const state = reactive({
  date: ''
})

watchEffect(() => {
  console.log('input-date:', state.date)
})
</script>
