<template>
    <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme ? theme : 'default' }}</w-button>
</template>

<script setup>
import { ref } from 'vue'

const themes = ref([
    '',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'brand',
    'focus',
])
</script>