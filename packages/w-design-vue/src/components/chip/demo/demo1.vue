<template>
  <w-preview title="Default" desc="Default">
    <w-chip>default</w-chip>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-chip disabled type="primary">disabled</w-chip>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space>
      <w-chip v-for="size of sizes" :key="size" :size="size">{{ size }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="Themes">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Light" desc="Light">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme" light>{{ theme }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Outlined" desc="Outlined">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-chip>
    </w-space>
  </w-preview>
</template>

<script lang="ts" setup>
const themes = ['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus']
const sizes = ['small', 'medium', 'large']
</script>
