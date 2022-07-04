import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default function useWRouter() {

    const router = useRouter()
    const routeList = ref()
    const childrenRoutes = ref([])

    // 获取路由面包屑
    router.afterEach((to) => {
        routeList.value = router.currentRoute.value.matched.filter((route) => {
            return route.path !== '/index';
        });
    });

    // 当前路由子路由
    childrenRoutes.value = router.getRoutes().filter((_route) => router.currentRoute.value.name === _route.name);

    console.log('routeList', routeList.value, childrenRoutes.value)

    return {
        routeList,
        childrenRoutes
    }
}