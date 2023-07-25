<template>
    <div class="avatar" :class="avatarClass" :style="avatarStyle">
        <slot name="icon">
            <img v-if="props.src" class="avatar__image" :src="props.src" />
        </slot>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: "w-avatar"
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { avatarProps } from './interface'

const props = defineProps(avatarProps);

const shape = computed(() => props.shape ?? 'square')

const toPixel = (size: number) => size + 'px'

const avatarStyle = computed(() => {
    const { size = 0 } = props
    if (typeof size !== 'number') return

    const sizePixel = toPixel(size)

    if (size) {
        return {
            width: sizePixel,
            height: sizePixel,
            lineHeight: sizePixel,
            fontSize: toPixel(size / 2)
        }
    }
})

const avatarClass = computed(() => ({
    [`avatar__${shape.value}`]: shape.value,
    [`avatar__${props.size}`]: props.size,
}))

</script>

<style lang="scss" src="./avatar.scss" />