<template>
  <w-divider dashed>Default</w-divider>
  <section class="space">
    <w-avatar></w-avatar>
    <w-avatar>W</w-avatar>
  </section>

  <w-divider dashed>bordered</w-divider>
  <section class="space">
    <w-avatar bordered></w-avatar>
    <w-avatar bordered>W</w-avatar>
    <w-avatar square bordered></w-avatar>
    <w-avatar square bordered>W</w-avatar>
  </section>

  <w-divider dashed>Shape</w-divider>
  <section class="space">
    <w-avatar></w-avatar>
    <w-avatar>W</w-avatar>
    <w-avatar square></w-avatar>
    <w-avatar square>W</w-avatar>
  </section>

  <w-divider dashed>Status</w-divider>
  <section class="space">
    <w-avatar status></w-avatar>
    <w-avatar status status-color="green"></w-avatar>
    <w-avatar status status-color="red"></w-avatar>
  </section>

  <w-divider dashed>Sizes</w-divider>
  <section class="space">
    <w-avatar v-for="size of sizes" :key="size" :size="size">W</w-avatar>
    <w-avatar :size="64">W</w-avatar>
  </section>

  <w-divider dashed>Group</w-divider>
  <w-avatar-group>
    <w-avatar></w-avatar>
    <w-avatar></w-avatar>
    <w-avatar></w-avatar>
  </w-avatar-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sizes = ref(['small', '', 'medium', 'large'])
</script>

<style lang="scss">
.space {
  display: flex;
  gap: 1rem;
}
</style>
