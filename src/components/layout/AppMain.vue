<template>
  <w-layout :has-aside="true">
    <w-aside>
      <w-menu class="app-menu" theme="dark" mode="horizontal">
        <w-menu-item>
          <router-link
            v-for="route in exampleRoutes"
            :to="route.path"
            :key="route.name"
            class="app-router-link"
            to="/"
          >
            {{ route.name }}
          </router-link>
        </w-menu-item>
      </w-menu>
    </w-aside>
    <w-main>
      <router-view />
    </w-main>
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
const routes = ref(router.getRoutes());

const exampleRegx = /-example$/gi;
const exampleRoutes = computed(() => routes.value.filter((route) => exampleRegx.test(route.name)));
console.log(exampleRoutes.value);
</script>
