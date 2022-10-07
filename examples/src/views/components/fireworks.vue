<template>
  <div class="fireworks">
    <Firework />
  </div>
</template>

<script>
export default {
  name: 'fireworks'
};
</script>

<script setup>
import { Firework } from 'Widgets';
</script>

<style scoped lang="scss">
.fireworks {
  position: relative;
  height: 100%;
  background-color: black;
}
</style>
