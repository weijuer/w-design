<script setup lang="ts">
import type { VNode } from 'vue'
import { computed, useSlots } from 'vue'

export interface AvatarProps {
    icon?: VNode
    size?: Size
    square?: boolean
    status?: boolean
    bordered?: boolean
    statusColor?: string
    statusStyle?: Object
    alt?: string
    src?: string
    srcSet?: string
}

const { size = 0, status, square, bordered, statusColor, statusStyle } = defineProps<AvatarProps>()

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const slots = useSlots()
const toPixel = (size: number) => size + 'px'

const avatarStyle = computed(() => {
    if (typeof size !== 'number') return

    const sizePixel = toPixel(size)
    const fontSizePixel = toPixel(size / 2)

    if (size) {
        return {
            '--w-avatar-width': sizePixel,
            '--w-avatar-height': sizePixel,
            fontSize: fontSizePixel
        }
    }
})

const avatarClass = computed(() => {
    return [
        square ? 'w-avatar__square' : '',
        status ? 'w-avatar__with-status' : '',
        size && typeof size === 'string' ? 'w-avatar__' + size : '',
        {
            'is-bordered': bordered
        }
    ]
})

const statusComputedStyle = computed(() => {
    return [
        {
            ...statusStyle,
            backgroundColor: statusColor
        }
    ]
})
</script>

<template>
    <div class="w-avatar" :class="avatarClass" :style="avatarStyle" @click="onClick">
        <figure class="w-avatar__figure" role="img" :aria-label="alt">
            <svg
                v-if="!slots.icon"
                class="w-avatar__placeholder"
                aria-hidden="true"
                viewBox="0 0 20 20"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="10" cy="6" r="2.5" stroke="currentColor"></circle>
                <path
                    d="M10,10.5a4.487,4.487,0,0,0-4.471,4.21L5.5,15.5h9l-.029-.79A4.487,4.487,0,0,0,10,10.5Z"
                    stroke="currentColor"
                ></path>
            </svg>
            <slot name="icon">
                <img v-if="src" class="w-avatar__img" :src="src" :alt="alt" />
            </slot>
            <div v-if="slots.default" class="w-avatar__initials">
                <slot></slot>
            </div>
        </figure>
        <span
            v-if="status"
            role="status"
            class="w-avatar__status"
            :style="statusComputedStyle"
        ></span>
    </div>
</template>
