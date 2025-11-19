---
layout: home
sidebar: false

hero:
  name: W-Design
  text: A Collection of Vue Composition Utilities designed by W
  tagline: Collection of Essential Vue Composition Utilities
---

```vue
<script setup>
import { ref } from 'vue'
const message = ref('message')
</script>

<template>
  <div class="message">{{ message }}</div>
</template>

<style lang="scss">
.message {
  color: red;
}
</style>
```
