<template>
  <w-icon></w-icon>
  <!-- <w-main></w-main> -->
  <section>
    <div>{{ state.message }}</div>
    <w-button @click="getTest">发送</w-button>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Main as WMain } from 'Layout'

const state = reactive({
  message: 'hello'
})

async function getTest() {
  const res = await fetch('/test')
  state.message = res
}
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
