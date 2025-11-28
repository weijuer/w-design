<script setup lang="ts">
import { computed } from 'vue';
import { useMouse } from '@w-design/use'
const { x, y } = useMouse()

const aiStyle = computed(() => ({
    '--w-ai-x': `${Math.round(x.value)}px`,
    '--w-ai-y': `${Math.round(y.value)}px`,
}))
</script>

<template>
    <div class="ai" :style="aiStyle"></div>
</template>

<style scoped>
.ai {
    --inner-spacing: 1.5rem;
    --ai-size: 5rem;

    position: fixed;
    top: var(--inner-spacing);
    left: var(--inner-spacing);

    display: flex;
    padding: 10px;

    height: var(--ai-size);
    width: var(--ai-size);
    border-radius: 9999px;

    --height-gradient: 40vmin;
    --width-gradient: 40vmin;
    --angle: atan(var(--height-gradient) / var(--width-gradient));
    --rotation: calc(90deg - var(--angle));

    background: conic-gradient(from 0deg at bottom left,
            #b9eee1 calc(var(--angle) * 1 / 3),
            #79d3be calc(var(--angle) * 1 / 3) calc(var(--angle) * 2 / 3),
            #39b89a calc(var(--angle) * 2 / 3) calc(var(--angle) * 3 / 3),
            transparent var(--angle));

    box-shadow: 3px 3px 4px 4px #0005;

    &::before,
    &::after {
        content: "";
        display: block;

        height: calc(var(--ai-size) / 3);
        width: calc(var(--ai-size) / 3);
        border-radius: 100%;

        background: radial-gradient(black 50%, transparent 50%) top left / 50% 50%,
            white;
        background-repeat: no-repeat;
        rotate: calc(135deg + atan2(var(--w-ai-y) - var(--inner-spacing) - var(--ai-size) / 2,
                    var(--w-ai-x) - var(--inner-spacing) - var(--ai-size) / 2));
    }
}
</style>