<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input-mask v-model="state.mask1" mask="____-____" placeholder="____-____"></w-input-mask>
    </w-space>
  </w-preview>
</template>

<script setup>
import { watchEffect } from 'vue'
import { reactive } from 'vue'

const state = reactive({
  mask1: ''
})

watchEffect(() => {
  console.log('input-mask1:', state.mask1)
})
</script>
