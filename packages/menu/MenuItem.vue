<template>
    <li role="menu-item" :class="['w-menu-item']"></li>
</template>

<script>
export default {
    name: 'w-menu-item'
}
</script>

<script setup>
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
}
</style>
