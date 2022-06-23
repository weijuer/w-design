<template>
    <div class="examples">
        <w-container>
            <w-aside>
                <nav class="w-nav">
                    <router-link class="w-nav-item" v-for="route in exampleRoutes" :to="route.path" :key="route.name">
                        {{ route.name }}
                    </router-link>
                </nav>
            </w-aside>

            <article>
                <router-view />
            </article>
        </w-container>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = ref(router.getRoutes())

const exampleRegx = /-example$/ig;
const exampleRoutes = computed(() => routes.value.filter(route => exampleRegx.test(route.name)))
console.log(exampleRoutes.value)
</script>

<style scoped lang="stylus">

</style>
