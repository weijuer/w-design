<template>
  <main class="w-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'w-main'
};
</script>

<style lang="scss" scoped>
.w-main {
  flex: auto;
  min-height: 0;
}
</style>
