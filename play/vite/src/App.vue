<script setup lang="ts">
import { computed, onMounted, reactive, ref, useTemplateRef } from 'vue'
import { useDraggable } from '@w-design/use'

import AI from './example/AI.vue'
// import Card from './example/Card.vue'
// import Resize from './example/Resize.vue'
// import Menu from './example/Menu.example.vue'

// import { WButton } from 'w-design-vue'
import {
    Button,
    Tooltip,
    Popover,
    WebTooltip,
    WebPopover,
    WebDialog,
    WebDetailsGroup,
    WebDetails
} from 'w-design-chat'

const target = useTemplateRef<HTMLDivElement>('target')

const { x, y, style } = useDraggable(target, {
    initialValue: { x: 40, y: 40 }
})

const state = reactive({
    visible: false
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

    <section class="prompt">
        <b>Scroll down to the anchor</b>
    </section>

    <Button color="default" size="tiny" radius="tiny" commandfor="dialog" command="show-modal">
        打开对话框
    </Button>

    <web-dialog id="dialog" title="对话框" closeby="any">
        <div>内容</div>
    </web-dialog>

    <!-- <web-tooltip placement="left" content="这是一个提示">
        <Button color="default" size="tiny" radius="tiny">按钮1</Button>
    </web-tooltip> -->

    <!-- <div ref="target" :style="style" class="target">测试, {{ x }}, {{ y }}</div> -->

    <web-popover title="聊天设置" :show-arrow="false" placement="top">
        <template #trigger>
            <Button color="default" size="tiny" radius="tiny">按钮</Button>
            <!-- <Tooltip placement="left" trigger="hover" content="这是一个提示">
            </Tooltip> -->
        </template>

        <template #content>
            <p class="popover__title">Temperature</p>
        </template>
    </web-popover>

    <web-details title="聊天?" content="什么事聊天呢">
        <template #icon>
            <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M17.079 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.579L11.64 6.062q-.147-.146-.153-.345t.158-.363q.165-.16.354-.163q.189-.002.354.163l6.08 6.08q.131.132.184.268q.053.137.053.298t-.053.298q-.052.137-.183.268l-6.081 6.08q-.14.14-.341.15q-.202.01-.367-.15q-.165-.165-.165-.356q0-.192.165-.357z"
                />
            </svg>
        </template>
    </web-details>

    <web-details-group>
        <web-details title="聊天设置1" name="chat-settings">
            <div>内容</div>
            <template #footer>底部信息</template>
        </web-details>
        <web-details title="聊天设置2" name="chat-settings">
            <div>内容</div>
            <template #footer>底部信息</template>
        </web-details>
    </web-details-group>

    <!-- <Menu></Menu> -->
</template>

<style>
#app {
    position: relative;
    display: grid;
    place-content: center;
    place-items: center;
    gap: 10vh;
    padding: 1.5rem;
    /* height: 300vh; */
}

.target {
    position: absolute;
    cursor: move;
}
</style>
