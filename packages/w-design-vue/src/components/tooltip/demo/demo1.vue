<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical" fill>
      <w-tooltip content="Default">
        <div data-test="data-test" class="test-class">test slot</div>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="themes">
    <w-space>
      <w-tooltip v-for="theme of themes" :key="theme" :type="theme">
        {{ theme }}
      </w-tooltip>
    </w-space>
  </w-preview>
</template>

<script setup>
const themes = ['primary', 'success', 'warning', 'info', 'danger']
</script>
