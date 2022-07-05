import { createRouter, createWebHashHistory } from 'vue-router';
import { generateRoutes } from 'Utils/routerUtils';

const customRoutes = generateRoutes();

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
  },
  ...customRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0, left: 0 }
  }
});

export default router;
