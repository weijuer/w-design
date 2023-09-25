<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical" fill>
      <w-alert title="Default title" description="default descrition" type="info"></w-alert>
    </w-space>
  </w-preview>

  <w-preview title="Closable" desc="closable">
    <w-space orientation="vertical" fill>
      <w-alert title="Closable title" description="closable descrition" type="info" closable></w-alert>
    </w-space>
  </w-preview>

  <w-preview title="Slot description" desc="slot description">
    <w-space orientation="vertical" fill>
      <w-alert title="Slot title" type="success" closable>
        <template #description>
          <ul style="list-style-type: disc">
            <li>Slot list 01</li>
            <li>Slot list 02</li>
            <li>Slot list 03</li>
          </ul>
        </template>
      </w-alert>
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
