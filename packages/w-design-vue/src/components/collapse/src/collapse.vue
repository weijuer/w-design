<template>
    <div ref="_ref" class="collapse">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: "collapse"
}
</script>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { collapseProps } from './interface';

const props = defineProps(collapseProps);
const _ref = ref<HTMLDivElement>()

provide('collapse', props);

defineExpose({
    ref: _ref
})
</script>

<style lang="scss" scoped src="./collapse.scss" />