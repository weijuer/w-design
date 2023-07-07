<template>
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);

watch(activeKey, val => {
    console.log(val);
});
</script>
