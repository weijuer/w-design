<template>
  <w-switch v-model="checked"></w-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>
