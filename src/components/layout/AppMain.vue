<template>
  <w-layout :has-aside="true">
    <w-aside>
      <w-menu class="app-menu" theme="dark">
        <w-menu-item v-for="route in exampleRoutes" :key="route.name">
          <router-link :to="route.path" class="app-router-link">
            {{ route.name }}
          </router-link>
        </w-menu-item>
      </w-menu>
    </w-aside>
    <w-layout>
      <w-main>
        <router-view />
      </w-main>
    </w-layout>
  </w-layout>
</template>

<script>
export default {
  name: 'app-main'
};
</script>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const exampleRegx = /-example$/i;
const exampleRoutes = computed(() =>
  router.getRoutes().filter((route) => exampleRegx.test(route.name))
);
console.log(exampleRoutes.value);
</script>

<style lang="scss" scoped>
.app-menu {
  line-height: 34px;
  border-bottom: 0;

  .app-router-link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
