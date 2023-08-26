<template>
  <w-divider dashed>Default</w-divider>
  <w-switch default-checked></w-switch>

  <w-divider dashed>With label</w-divider>
  <w-switch default-checked>label</w-switch>

  <w-divider dashed>Disabled</w-divider>
  <w-switch default-checked disabled>label</w-switch>

  <w-divider dashed>Sizes</w-divider>
  <section class="space">
    <w-switch v-for="size of sizes" :key="size" :size="size" default-checked>{{ size ? size : 'default' }}</w-switch>
  </section>

  <w-divider dashed>Themes</w-divider>
  <section class="space">
    <w-switch v-for="theme of themes" :key="theme" :type="theme" default-checked>{{ theme }}</w-switch>
  </section>

  <w-divider dashed>With Icons</w-divider>
  <section>
    <w-switch default-checked>
      <template #on>
        <w-icon name="sun"></w-icon>
      </template>
      <template #off>
        <w-icon name="moon"></w-icon>
      </template>
    </w-switch>
    <w-switch default-checked>
      <template #on>ON</template>
      <template #off>OFF</template>
    </w-switch>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sizes = ref(['small', '', 'medium', 'large'])
const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
</script>

<style lang="scss">
.space {
  display: flex;
  gap: 1rem;
}
</style>
