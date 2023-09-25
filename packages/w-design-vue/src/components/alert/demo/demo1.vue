<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical" fill>
      <w-alert title="Title" description="descrition" type="info" closable></w-alert>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="Themes">
    <w-space orientation="vertical" fill>
      <template v-for="theme of themes" :key="theme">
        <w-alert :title="theme + ' title'" :description="theme + ' descrition'" :type="theme"></w-alert>
      </template>
    </w-space>
  </w-preview>
</template>

<script setup>
// import { ref } from 'vue'

// const visible = ref(false)
const themes = ['primary', 'success', 'warning', 'info', 'danger']
</script>
