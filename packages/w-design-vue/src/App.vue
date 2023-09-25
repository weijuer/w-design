<template>
  <w-container class="demo-section">
    <demo />
  </w-container>
</template>

<script setup lang="ts">
import Demo from './components/alert/demo/demo1.vue'
</script>

<style lang="scss">
:root {
  --accent: rgb(115, 0, 255);
  --bg: rgb(249, 249, 249);
  --fg: rgb(103, 103, 103);
  --font-primary: Inter, system-ui, sans-serif;
  --font-apple: -apple-system, Space Grotesk, Arial, ui-sans-serif, system-ui;
}

html,
body {
  touch-action: manipulation;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  background-color: var(--bg);
  color: var(--fg);
}

html {
  background-color: var(--bg);
  color: var(--fg);
  accent-color: var(--accent);
  overflow: auto;
  overflow-wrap: break-word;
  font-family:
    Hiragino Maru Gothic Pro,
    BIZ UDGothic,
    Roboto,
    HelveticaNeue,
    Arial,
    sans-serif;
  font-size: 16px;
  line-height: 1.35;
  text-size-adjust: 100%;
  tab-size: 2;
}

body {
  font-family: var(--font-primary);
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

#app {
  padding: 16px;

  .demo-section {
    padding: 16px;
    gap: 8px;
    background-color: transparent;
  }
}
</style>
./components/kbd/demo/demo1.vue
