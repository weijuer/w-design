<template>
  <w-checkbox2 v-model="checked" @change="onChange">复选框</w-checkbox2>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)

const onChange = (e) => {
  console.log(e)
}
</script>

<style scoped lang="scss"></style>
