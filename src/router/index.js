import { createRouter, createWebHashHistory } from 'vue-router';
import { generateRoutes } from 'Utils/routerUtils';

const customRoutes = generateRoutes();

console.log('customRoutes', customRoutes)

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
});

export default router;
