<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useDraggable } from '@w-design/use'

import AI from './example/AI.vue'
// import Card from './example/Card.vue'
// import Resize from './example/Resize.vue'
// import Menu from './example/Menu.example.vue'

// import { WButton } from 'w-design-vue'
import { WButton, WTooltip, WPopover, WebTooltip, WebPopover } from 'w-design-chat'

const targetRef = ref()

const { position } = useDraggable(targetRef, {
    draggingElement: targetRef
})
const mouseStyle = computed(() => ({
    position: 'absolute'
    // left: `${Math.round(position.x)}px`,
    // top: `${Math.round(position.y)}px`
}))
const state = reactive({
    visible: true
})
</script>

<template>
    {{ position }}
    <AI />
    <!-- <div class="grid">
    <template v-for="index in 40" :key="index">
      <Card class="card">{{ index }}</Card>
    </template>
</div> -->

    <!-- <Resize></Resize> -->

    <!-- <w-button color="default" size="tiny" radius="tiny">按钮</w-button> -->

    <web-popover positionArea="top span-left" trigger="click">
        <template #trigger>
            <w-button
                :ref="targetRef"
                :style="mouseStyle"
                color="default"
                size="tiny"
                radius="tiny"
            >
                按钮1
            </w-button>
        </template>
        <template #content>
            <div class="w-content">
                这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容
            </div>
        </template>
    </web-popover>

    <web-tooltip v-model="state.visible" placement="top" trigger="click">
        <template #trigger>
            <w-button color="default" size="tiny" radius="tiny">按钮2</w-button>
        </template>
        <template #content>
            <div class="w-content">
                这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容
            </div>
        </template>
    </web-tooltip>

    <!-- <Menu></Menu> -->
</template>

<style>
#app {
    border: 4px dashed;
    box-sizing: border-box;
    background-color: rgb(180, 180, 180);
    height: calc(100vh - 80px);
    margin: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
</style>
