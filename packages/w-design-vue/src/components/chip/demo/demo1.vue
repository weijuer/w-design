<template>
  <section class="chip-section">
    <w-chip>default</w-chip>
    <w-chip v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-chip>
    <w-divider dashed></w-divider>
    <w-chip v-for="theme of themes" :key="theme" :type="theme" light>{{ theme }}</w-chip>
    <w-divider dashed></w-divider>
    <w-chip v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-chip>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
</script>

<style scoped>
.chip-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
