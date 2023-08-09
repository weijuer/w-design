<template>
  <w-radio v-model="checked">单选框</w-radio>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>

<style scoped lang="scss"></style>
