<template>
  <w-layout :has-aside="true">
    <w-aside>
      <w-menu class="app-menu" theme="dark">
        <w-menu-item v-for="route in routes" :key="route.name">
          <router-link :to="{ name: route.name }" class="app-router-link">
            {{ route.name }}
          </router-link>
        </w-menu-item>
      </w-menu>
    </w-aside>
    <w-layout>
      <w-breadcrumb>
        <w-breadcrumb-item v-for="(route, index) in routeList" :key="route.name">
          <router-link
            v-if="index != routeList.length - 1"
            :to="route.path"
            class="app-router-link"
          >
            {{ route.name }}
          </router-link>
          <template v-else>
            {{ route.name }}
          </template>
        </w-breadcrumb-item>
      </w-breadcrumb>
      <w-main class="app-main">
        <router-view v-slot="{ Component }">
          <transition name="left-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
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
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const routes = ref(router.getRoutes());
const routeList = ref([]);
const childrenRoutes = ref([]);

watch(
  () => route.name,
  (newName) => {
    const children = routes.value.find((_route) => newName === _route.name)?.children;
    childrenRoutes.value = children;
  }
);

// 获取路由面包屑
router.afterEach((to) => {
  routeList.value = route.matched.filter((route) => {
    return route.path !== '/index';
  });
});
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

:deep(.app-main).app-main {
  padding: 24px 0;
  min-height: calc(100vh - 64px);
}

.left-fade-enter-active {
  transition: all 1.2s ease;
}

.left-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}

.left-fade-leave-to,
.left-fade-enter-from {
  transform: translate(10px);
  opacity: 0;
}
</style>
