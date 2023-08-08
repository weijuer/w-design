<template>
    <w-button v-for="theme of themes" plain :key="theme" :type="theme">{{ theme }}</w-button>
</template>

<script setup>
import { ref } from 'vue'

const themes = ref([
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'brand',
    'focus',
])
</script>