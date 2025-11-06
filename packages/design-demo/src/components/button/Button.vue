<template>
    <button :class="['w-btn', `w-btn-${type}`]">
        <slot />
    </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    type?: 'primary' | 'default';
}>(), {
    type: 'default'
});
</script>