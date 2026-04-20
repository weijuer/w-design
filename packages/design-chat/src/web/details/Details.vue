<script setup lang="ts">
import { type VNode, ref } from 'vue'

export interface DetailsProps {
    title?: string
    content?: string
    open?: boolean
}

const { open = false } = defineProps<DetailsProps>()

const emit = defineEmits<{
    toggle: [visible: boolean]
    show: []
    hide: []
}>()

const slots = defineSlots<{
    icon(props: { visible: boolean }): VNode
    default(): VNode
    footer(): VNode
}>()

const visible = ref(open)

const onToggle = (event: Event) => {
    visible.value = (event.target as HTMLDetailsElement)?.open
    emit('toggle', visible.value)

    if (visible.value) {
        emit('show')
    } else {
        emit('hide')
    }
}

defineExpose({
    visible
})
</script>

<template>
    <details class="web-details" :open="open" @toggle="onToggle">
        <summary>
            <slot name="icon" :visible="visible">
                <svg aria-hidden viewBox="0 0 16 16" width="16" height="16">
                    <path d="M5 2 L12 8 L5 14" />
                </svg>
            </slot>
            <div class="web-details__title">{{ title }}</div>
        </summary>
        <div class="web-details__content">
            <slot>
                <div v-if="content" class="web-details__text">{{ content }}</div>
            </slot>
        </div>
        <footer v-if="slots.footer" class="web-details__footer">
            <slot name="footer"></slot>
        </footer>
    </details>
</template>
