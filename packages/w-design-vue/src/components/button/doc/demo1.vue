<template>
    <w-button v-for="theme of themes" round :key="theme" :type="theme">{{ theme }}</w-button>
</template>

<script setup>
import { ref } from 'vue'

const themes = ref([
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'brand',
    'focus',
])
</script>