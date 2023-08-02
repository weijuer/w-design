<template>
    <div class="container">
        <demo />
    </div>
</template>

<script setup lang="ts">
import Demo from './components/button/doc/demo1.vue'

</script>

<style lang="scss">
body {
    font-family: -apple-system, Space Grotesk, Arial, ui-sans-serif, system-ui;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding: 0;
}

#app {
    padding: 16px;
}

.container {
    display: flex;
    gap: 6px;
}
</style>