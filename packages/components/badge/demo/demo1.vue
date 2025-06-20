<template>
  <section class="badge-section">
    <w-badge content="5" status="danger"></w-badge>
    <w-badge content="15" status="success"></w-badge>
    <w-badge content="Hot" status="info"></w-badge>
    <w-badge content="Hot" status="warning"></w-badge>
    <w-badge content="Hot" color="#f00"></w-badge>

    <w-badge content="5">
      <template #content> Hot </template>
    </w-badge>

    <w-badge content="5">
      <w-avatar square>W</w-avatar>
    </w-badge>

    <w-badge dot status="danger">
      <w-avatar>W</w-avatar>
    </w-badge>

    <w-badge content="200" max="99" status="danger"></w-badge>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.badge-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
</style>
