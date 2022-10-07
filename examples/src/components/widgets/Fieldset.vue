<template>
    <fieldset class="w-fieldset">
        <legend>{{ title }}</legend>
        <slot></slot>
    </fieldset>
</template>

<script>
export default {
    name: 'w-fieldset',
    inheritAttrs: false,
};
</script>

<script setup>
defineProps({
    title: String
});
</script>

<style lang="scss" scoped>
.w-fieldset {
    display: block;
    padding: 10px;
    color: #333;
    border: #ccc solid 1px;

    legend {
        color: #333;
        font-weight: 800;
        background: #fff;
        padding: 4px 6px;
    }

    h4 {
        margin: 6px 0;

        &:before {
            display: inline-block;
            content: '•';
            margin: 0 4px;
        }

        &:after {
            display: inline-block;
            content: ':';
            margin: 0 4px;
        }
    }
}
</style>
