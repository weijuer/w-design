<template>
    <div class="container">
        <w-button type="primary" @click="onClick">test</w-button>
        <w-modal v-model="state.visible" @close="onClose">
            <template #body>test</template>
        </w-modal>
        <!-- <w-grid>
            <w-grid-item>1</w-grid-item>
            <w-grid-item>2</w-grid-item>
            <w-grid-item>3</w-grid-item>
        </w-grid> -->

        <!-- <w-breadcrumb separator="/">
            <w-breadcrumb-item>Home</w-breadcrumb-item>
            <w-breadcrumb-item>List</w-breadcrumb-item>
            <w-breadcrumb-item>Content</w-breadcrumb-item>
        </w-breadcrumb> -->
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { WButton, WIcon, WModal, WGrid, WGridItem, WBreadcrumb,WBreadcrumbItem } from './components'


const state = reactive({
    visible: false
})

function onClick() {
    console.log(123)
    state.visible = true
}

function onClose() {
    state.visible = false
}
</script>