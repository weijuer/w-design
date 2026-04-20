<script setup lang="ts">
import { type VNode, computed, ref, shallowRef, useId, watch } from 'vue'

export interface TooltipProps {
    placement?: Placement
    title?: string
    content?: string
    id?: string
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
const {
    id,
    disabled = false,
    placement = 'top',
    modelValue = false,
    closeby = 'none',
    transition = 'scale',
    appendToBody = true
} = defineProps<TooltipProps>()

defineEmits<TooltipEmits>()

defineSlots<{
    default: () => VNode[]
}>()

const _id = useId()
const visible = ref(modelValue)
const dialogRef = shallowRef<HTMLElement>()

const dialogId = computed(() => id || `web-dialog-${_id}`)

const dialogClass = computed(() => {
    return [placement ? `web-dialog--${placement}` : '']
})

watch(
    () => modelValue,
    value => {
        visible.value = value
    }
)

defineExpose({
    visible,
    dialogRef
})
</script>

<template>
    <select
        ref="dialogRef"
        :id="dialogId"
        class="web-select"
        :class="dialogClass"
        v-show="visible"
        :data-closeby="closeby"
        :data-transition="transition"
        :disabled="disabled"
        :data-append-to-body="appendToBody"
    >
        <!-- <button>
            <selectedcontent></selectedcontent>
            <span class="arrow"></span>
        </button> -->
        <slot />
    </select>
</template>
