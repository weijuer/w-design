<template>
  <section class="badge-section">
    <w-badge>default</w-badge>
    <w-badge v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-badge>
    <w-divider dashed></w-divider>
    <w-badge v-for="theme of themes" :key="theme" :type="theme" light>{{ theme }}</w-badge>
    <w-divider dashed></w-divider>
    <w-badge v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-badge>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
</script>

<style scoped>
.badge-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
