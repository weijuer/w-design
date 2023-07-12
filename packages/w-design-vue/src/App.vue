<template>
    <div class="container">


        <!-- <Button data-step-target @click="onClick" type="primary">test</Button> -->

        <!-- <Guide v-model="state.visible" :steps="state.steps"></Guide> -->


        <!-- <w-button type="primary" @click="onClick">test</w-button>
        <w-modal v-model="state.visible" @close="onClose">
            <template #body>test</template>
        </w-modal> -->


        <!-- <Grid :gutter="20">
            <Grid-item v-for="(item, index) in 10" :key="'grid_' + index" :data-step-target="'grid_' + index">
                {{ item }}
            </Grid-item>
        </Grid> -->


        <w-collapse v-model:activeKey="activeKey" @change="changeActivekey" :bordered="true" accordion>
            <w-collapse-item name="1" title="This is item header 1">
                <p>{{ text }}</p>
            </w-collapse-item>
            <w-collapse-item name="2" title="This is item header 2">
                <p>{{ text }}</p>
            </w-collapse-item>
            <w-collapse-item name="3" title="This is item header 3">
                <p>{{ text }}</p>
            </w-collapse-item>
        </w-collapse>


        <!-- <w-breadcrumb separator="/">
            <w-breadcrumb-item>Home</w-breadcrumb-item>
            <w-breadcrumb-item>List</w-breadcrumb-item>
            <w-breadcrumb-item>Content</w-breadcrumb-item>
        </w-breadcrumb> -->
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { WCollapse, WCollapseItem } from './components';


const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref('1');

const changeActivekey = (key: string) => {
    console.log(key);
};

watch(activeKey, val => {
    console.log(val);
});

const state = reactive({
    visible: true,
    steps: [
        {
            target: '[data-step-target]',
            header: 'test',
            content: 'content'
        },
        {
            target: '[data-step-target="grid_3"]',
            header: 'test',
            content: 'content'
        },
        {
            target: '[data-step-target="grid_5"]',
            header: 'test',
            content: 'content'
        },
        {
            target: '[data-step-target="grid_7"]',
            header: 'test',
            content: 'content'
        },
        {
            target: '[data-step-target="grid_9"]',
            header: 'test',
            content: 'content'
        }
    ]
})

function onClick() {
    state.visible = true
}

function onClose() {
    state.visible = false
}
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