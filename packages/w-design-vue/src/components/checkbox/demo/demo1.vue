<template>
    <w-checkbox v-model="checked">复选框</w-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
</script>

<style scoped lang="scss"></style>
