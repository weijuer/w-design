<template>
    <div class="home">
        <div class="brand">
            <Bubble />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<script setup>
import { Bubble } from 'Widgets';
</script>

<style scoped lang="stylus">
.brand {
  display: flex;
  justify-content: center;
  position: relative;
  width: 8rem;
  height: 8rem;
}
</style>
