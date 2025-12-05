<script setup lang="ts">
import { computed } from 'vue'
import { useMouse } from '@w-design/use'
const { x, y } = useMouse()

const aiStyle = computed(() => ({
    '--w-ai-x': `${Math.round(x.value)}px`,
    '--w-ai-y': `${Math.round(y.value)}px`
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
    justify-content: center;
    padding: 10px;

    height: var(--ai-size);
    width: var(--ai-size);
    border-radius: 9999px;

    --height-gradient: 10vmin;
    --width-gradient: 10vmin;
    --angle: atan(var(--height-gradient) / var(--width-gradient));
    --rotation: calc(90deg - var(--angle));

    background-image: conic-gradient(
        from 80deg at 45% 65%,
        rgba(255, 255, 255, 0.3) 0.08turn,
        transparent 0.08turn 0.5turn,
        transparent 0.5turn 0.75turn,
        transparent 0.75turn 1turn
    );

    box-shadow: 3px 3px 6px 4px #0005;

    &::before,
    &::after {
        content: '';
        display: block;
        margin: 6px;

        height: calc(var(--ai-size) / 3);
        width: calc(var(--ai-size) / 3);
        border-radius: 100%;

        background:
            radial-gradient(black 50%, transparent 50%) top left / 50% 50%,
            white;
        background-repeat: no-repeat;
        rotate: calc(
            135deg +
                atan2(
                    var(--w-ai-y) - var(--inner-spacing) - var(--ai-size) / 2,
                    var(--w-ai-x) - var(--inner-spacing) - var(--ai-size) / 2
                )
        );
    }
}
</style>
