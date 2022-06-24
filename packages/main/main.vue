<template>
  <main class="w-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'w-main',
}
</script>

<style lang="scss" scoped>
.w-main {
  flex: 1;
  min-height: 120px;
  line-height: 120px;
}
</style>