<template>
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref('1');

const changeActivekey = (key: string) => {
    console.log(key);
};

watch(activeKey, val => {
    console.log(val);
});
</script>
