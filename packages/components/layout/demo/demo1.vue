<template>
    <w-layout class="layout-demo" has-aside>
        <w-aside>
            aside
        </w-aside>
        <w-layout>
            <w-header>header</w-header>
            <w-main>main</w-main>
            <w-footer>footer</w-footer>
        </w-layout>
    </w-layout>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.layout-demo {
    .w-aside {
        background: #3ba0e9;
        color: #fff;
        line-height: 120px;
    }

    .w-header,
    .w-footer {
        background: #7dbcea;
        color: #fff;
    }

    .w-main {
        background: #108ee9;
        color: #fff;
        min-height: 120px;
        line-height: 120px;
    }
}
</style>