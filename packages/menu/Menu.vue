<template>
    <ul role="menu" class="w-menu">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'w-menu'
}
</script>

<script setup>

</script>

<style scoped lang="scss">
.w-menu {
    box-sizing: border-box;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    font-feature-settings: "tnum";
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .65);
    line-height: 0;
    list-style: none;
    background: #fff;
    outline: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
    transition: background .3s, width .3s cubic-bezier(.2, 0, 0, 1) 0s;
    zoom: 1;
}
</style>
