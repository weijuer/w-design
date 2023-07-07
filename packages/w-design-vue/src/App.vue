<template>
    <div class="container">


        <Button data-step-target @click="onClick" type="primary">test</Button>

        <!-- <Guide v-model="state.visible" :steps="state.steps"></Guide> -->


        <!-- <w-button type="primary" @click="onClick">test</w-button>
        <w-modal v-model="state.visible" @close="onClose">
            <template #body>test</template>
        </w-modal> -->


        <Grid :gutter="20">
            <Grid-item v-for="(item, index) in 10" :key="'grid_' + index" :data-step-target="'grid_' + index">
                {{ item }}
            </Grid-item>
        </Grid>


        <w-collapse v-model:activeKey="activeKey">
            <w-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
            </w-collapse-panel>
            <w-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
            </w-collapse-panel>
            <w-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
                <p>{{ text }}</p>
            </w-collapse-panel>
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