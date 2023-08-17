<template>
  <section class="counter-section">
    <w-counter content="5" status="danger"></w-counter>
    <w-counter content="15" status="success"></w-counter>
    <w-counter content="Hot" status="info"></w-counter>
    <w-counter content="Hot" status="warning"></w-counter>
    <w-counter content="Hot" color="#f00"></w-counter>

    <w-counter content="5">
      <template #content> Hot </template>
    </w-counter>

    <w-counter content="5">
      <w-avatar square>W</w-avatar>
    </w-counter>

    <w-counter dot status="danger">
      <w-avatar>W</w-avatar>
    </w-counter>

    <w-counter content="200" max="99" status="danger"></w-counter>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.counter-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
</style>
