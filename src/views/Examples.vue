<template>
  <div class="examples"> </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = ref(router.getRoutes());

const exampleRegx = /-example$/gi;
const exampleRoutes = computed(() => routes.value.filter((route) => exampleRegx.test(route.name)));
console.log(exampleRoutes.value);
</script>

<style scoped lang="stylus"></style>
