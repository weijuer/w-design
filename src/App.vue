<template>
  <w-icon></w-icon>
  <w-badge>1</w-badge>
  <w-badge text="2"></w-badge>
  <!-- <w-main></w-main> -->
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Main as WMain } from 'Layout'

const state = reactive({
  message: 'hello'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
