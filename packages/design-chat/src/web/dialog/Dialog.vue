<script setup lang="ts">
import { cloneVNode, computed, ref, shallowRef, useId, VNode, watch } from 'vue'

export interface TooltipProps {
    placement?: Placement
    title?: string
    content?: string
    disabled?: boolean
    modelValue?: boolean
    closeby?: string
    transition?: string
    appendToBody?: boolean
}

export interface TooltipEmits {
    (e: 'update:modelValue', visible: boolean): void
    (e: 'show'): void
    (e: 'hide'): void
}

// 定义Props及默认值
const props = withDefaults(defineProps<TooltipProps>(), {
    disabled: false,
    modelValue: false,
    closeby: 'none',
    transition: 'scale',
    appendToBody: true
})

const emit = defineEmits<TooltipEmits>()

const slots = defineSlots<{
    title: () => VNode[]
    content: () => VNode[]
}>()

const id = useId()
const visible = ref(props.modelValue)
const dialogRef = shallowRef<HTMLElement>()

const dialogId = computed(() => `web-dialog-${id}`)

const dialogClass = computed(() => {
    const { placement } = props

    return [placement ? `web-dialog--${placement}` : '']
})

watch(
    () => props.modelValue,
    value => {
        visible.value = value
    }
)
</script>

<template>
    <teleport v-if="appendToBody" to="body">
        <transition :name="transition">
            <dialog
                ref="dialogRef"
                :closeby="closeby"
                :id="dialogId"
                class="web-dialog"
                :class="dialogClass"
                aria-label="actions"
                :open="visible"
            >
                <slot name="content" />
            </dialog>
        </transition>
    </teleport>

    <transition v-else :name="transition">
        <dialog
            v-show="visible"
            ref="dialogRef"
            :closeby="closeby"
            :id="dialogId"
            class="web-dialog"
            :class="dialogClass"
            aria-label="actions"
            :open="visible"
        >
            <slot name="content" />
        </dialog>
    </transition>
</template>
