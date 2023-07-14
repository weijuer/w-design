<template>
    <div class="container">


        <!-- <w-button type="primary" @click="onClick">test</w-button>
        <w-modal v-model="state.visible" @close="onClose">
            <template #body>test</template>
        </w-modal> -->


        <!-- <Grid :gutter="20">
            <Grid-item v-for="(item, index) in 10" :key="'grid_' + index" :data-step-target="'grid_' + index">
                {{ item }}
            </Grid-item>
        </Grid> -->

        <!-- <demo1 /> -->

        <!-- <w-breadcrumb separator="/">
            <w-breadcrumb-item>Home</w-breadcrumb-item>
            <w-breadcrumb-item>List</w-breadcrumb-item>
            <w-breadcrumb-item>Content</w-breadcrumb-item>
        </w-breadcrumb> -->

        <collapseDemo />
    </div>
</template>

<script setup lang="ts">
import collapseDemo from './components/collapse/doc/demo1.vue'

</script>

<style>
body {
    font-family: -apple-system, Space Grotesk, Arial, ui-sans-serif, system-ui;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding: 0;
}

.container {
    padding: 16px;
}
</style>