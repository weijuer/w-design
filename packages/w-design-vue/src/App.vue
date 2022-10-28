<template>
    <div class="container">
        <w-button type="primary" @click="onClick">test</w-button>
        <w-icon name="delete"></w-icon>
        <w-modal v-model="state.visible" @close="onClose" />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { WButton, WIcon, WModal } from './components'


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