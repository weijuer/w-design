<template>
    <div ref="_ref" class="collapse" :class="{ 'collapse--borderless': !props.bordered }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: "collapse"
}
</script>

<script setup lang="ts">
import { collapseEmits, collapseProps } from './interface';
import { useCollapse } from './useCollapse'

const props = defineProps(collapseProps);
const emit = defineEmits(collapseEmits)

const { _ref } = useCollapse(props, emit)

defineExpose({
    ref: _ref
})
</script>

<style lang="scss" src="./collapse.scss" />