<template>
  <w-preview title="Default" desc="默认">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="Vertical" desc="Vertical">
    <w-space orientation="vertical" fill>
      <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space :size="20">
      <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    </w-space>

    <w-space size="2rem">
      <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    </w-space>
  </w-preview>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
</script>

<style lang="scss">
.w-space ~ .w-space {
  margin-block: 1em;
}
</style>
