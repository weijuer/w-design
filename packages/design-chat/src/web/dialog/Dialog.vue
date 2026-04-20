<script setup lang="ts">
import { type VNode, computed, ref, shallowRef, useId, watch } from 'vue'
import { WButton } from '../../components/button'

export interface TooltipProps {
    id: string
    placement?: Placement
    title?: string
    content?: string
    modelValue?: boolean
    closeby?: 'none' | 'closerequest' | 'any'
    transition?: string
    appendToBody?: boolean
    okText?: string
    cancelText?: string
    okType?: Color
    confirmLoading?: boolean
}

// 定义Props及默认值
const {
    id = 'web-dialog',
    placement = 'top',
    modelValue = false,
    closeby = 'none',
    transition = 'scale',
    appendToBody = true,
    okText = 'Ok',
    cancelText = 'Cancel',
    okType = 'primary',
    confirmLoading = false
} = defineProps<TooltipProps>()

const emit = defineEmits<{
    'update:modelValue': [visible: boolean]
    ok: []
    cancel: []
}>()

defineSlots<{
    title: () => VNode[]
    default: () => VNode[]
    footer: () => VNode[]
}>()

const _id = useId()
const visible = ref(modelValue)
const dialogRef = shallowRef<HTMLElement>()

const dialogId = computed(() => id || `web-dialog-${_id}`)

const dialogClass = computed(() => {
    return [placement ? `web-dialog--${placement}` : '']
})

const onOk = () => {
    emit('ok')
}

const onCancel = () => {
    emit('cancel')
    emit('update:modelValue', false)
}

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
    <teleport v-if="appendToBody" to="body">
        <dialog
            ref="dialogRef"
            :closeby="closeby"
            :id="dialogId"
            class="web-dialog"
            :class="dialogClass"
            :open="visible"
        >
            <slot name="title">
                <header class="web-dialog__header">
                    <span class="web-dialog__title">{{ title }}</span>
                    <w-button
                        color="default"
                        class="web-dialog__close-button"
                        icon-only
                        :commandfor="dialogId"
                        command="close"
                    >
                        <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </w-button>
                </header>
            </slot>

            <div class="web-dialog__body">
                <slot name="default"></slot>
            </div>

            <slot name="footer">
                <footer class="web-dialog__footer">
                    <w-button
                        color="default"
                        :commandfor="dialogId"
                        command="close"
                        @click="onCancel"
                    >
                        {{ cancelText }}
                    </w-button>
                    <w-button :color="okType" :loading="confirmLoading" @click="onOk">
                        {{ okText }}
                    </w-button>
                </footer>
            </slot>
        </dialog>
    </teleport>

    <transition v-else :name="transition">
        <dialog
            v-show="visible"
            ref="dialogRef"
            :closeby="closeby"
            :id="dialogId"
            class="web-dialog"
            :class="dialogClass"
            :open="visible"
        >
            <slot name="title">
                <header class="web-dialog__header">
                    <span class="web-dialog__title">{{ title }}</span>
                    <w-button
                        color="default"
                        class="web-dialog__close-button"
                        icon-only
                        :commandfor="dialogId"
                        command="close"
                    >
                        <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </w-button>
                </header>
            </slot>

            <div class="web-dialog__body">
                <slot name="default"></slot>
            </div>

            <slot name="footer">
                <footer class="web-dialog__footer">
                    <w-button
                        color="default"
                        :commandfor="dialogId"
                        command="close"
                        @click="onCancel"
                    >
                        {{ cancelText }}
                    </w-button>
                    <w-button :color="okType" :loading="confirmLoading" @click="onOk">
                        {{ okText }}
                    </w-button>
                </footer>
            </slot>
        </dialog>
    </transition>
</template>
