<template>
  <w-progress :percent="percent"></w-progress>
  <w-progress :percent="percent" type="circle" style="width: 120px"></w-progress>

  <w-button @click="add">+</w-button>
  <w-button @click="reduce">-</w-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(20)

const add = () => (percent.value >= 100 ? 100 : percent.value++)
const reduce = () => (percent.value <= 0 ? 0 : percent.value--)
</script>
