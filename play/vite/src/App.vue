<script setup lang="ts">
import { computed, onMounted, reactive, ref, useTemplateRef } from 'vue'
import { useDraggable } from '@w-design/use'

import AI from './example/AI.vue'
// import Card from './example/Card.vue'
// import Resize from './example/Resize.vue'
// import Menu from './example/Menu.example.vue'

// import { WButton } from 'w-design-vue'
import { Button, Tooltip, Popover, WebTooltip, WebPopover } from 'w-design-chat'

const target = useTemplateRef<HTMLDivElement>('target')

const { x, y, style } = useDraggable(target, {
    initialValue: { x: 40, y: 40 }
})

const state = reactive({
    visible: true
})

onMounted(() => {
    console.log('onMounted: -->', target.value)
})
</script>

<template>
    <!-- <AI /> -->
    <!-- <div class="grid">
    <template v-for="index in 40" :key="index">
      <Card class="card">{{ index }}</Card>
    </template>
</div> -->

    <!-- <Resize></Resize> -->

    <!-- <w-button color="default" size="tiny" radius="tiny">按钮</w-button> -->

    <web-tooltip placement="left" content="这是一个提示">
        <template #trigger>
            <Button color="default" size="tiny" radius="tiny">按钮1</Button>
        </template>
        <!-- <template #content>
            <div class="w-content">
                这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容这是另一个内容
            </div>
        </template> -->
    </web-tooltip>

    <div ref="target" :style="style" class="target">测试, {{ x }}, {{ y }}</div>

    <popover title="聊天设置" :show-arrow="false" placement="top">
        <template #trigger>
            <Tooltip placement="left" trigger="hover" content="这是一个提示">
                <template #trigger>
                    <Button color="default" size="tiny" radius="tiny">按钮</Button>
                </template>
            </Tooltip>
        </template>

        <template #content>
            <div class="popover-body">
                <h5 class="popover__title">Temperature</h5>
                <Slider :min="0" :max="2" :step="1" />

                <h5 class="popover__title">TopK</h5>
                <Slider :min="0" :max="128" :step="1" />
            </div>
        </template>
    </popover>

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

.target {
    position: absolute;
    cursor: move;
}
</style>
