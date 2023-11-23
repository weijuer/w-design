<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-spinner label="loading..."></w-spinner>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space>
      <w-spinner v-for="size of sizes" :key="size" :size="size"></w-spinner>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="Themes">
    <w-space size="1rem">
      <w-spinner v-for="theme of themes" :key="theme" :type="theme" :label="theme">
        <w-button :type="theme" light>{{ theme }}</w-button>
      </w-spinner>
    </w-space>
  </w-preview>
</template>

<script setup>
const sizes = ['small', 'medium', 'large']
const themes = ['primary', 'success', 'warning', 'info', 'danger']
</script>

<style scoped lang="scss">
.demo-content-container {
  .title {
    font-weight: 700;
  }
  .sub-title {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}
.placements-demo {
  .w-button {
    width: 8rem;
    height: 4rem;
  }
}
</style>
