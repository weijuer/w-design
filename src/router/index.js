import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '~pages';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 后退/前进时, 保存浏览位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 }
    }
  }
});

export default router;
