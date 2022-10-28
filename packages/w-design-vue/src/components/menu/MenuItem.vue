<template>
    <li role="menu-item" :class="['w-menu-item']">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'w-menu-item'
}
</script>

<script setup>
const props = defineProps({
    disabled: Boolean,
    key: String,
    title: String
});
</script>

<style scoped lang="scss">
.w-menu-item {
    position: relative;
    display: block;
    margin: 0;
    padding: 0 20px;
    white-space: nowrap;
    cursor: pointer;
    transition: color .3s cubic-bezier(.645, .045, .355, 1), border-color .3s cubic-bezier(.645, .045, .355, 1), background .3s cubic-bezier(.645, .045, .355, 1), padding .15s cubic-bezier(.645, .045, .355, 1);

    &-selected {
        color: #fff;
        border-right: 0;
        background-color: #1890ff;
    }
}
</style>
