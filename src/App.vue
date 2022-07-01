<template>
  <app-layout class="app-layout" />
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { AppLayout } from 'Layout';
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  min-height: 100vh;
}
</style>

<style lang="scss" src="Assets/scss/app/app.scss"></style>
