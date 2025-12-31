<script setup lang="ts">
import { computed, ref, shallowRef, useAttrs, useId, VNode, watch } from 'vue'
import { WButton } from '../../components/button'

export interface TooltipProps {
    placement?: Placement
    title?: string
    content?: string
    disabled?: boolean
    modelValue?: boolean
    closeby?: string
    transition?: string
    appendToBody?: boolean
    okText?: string
    cancelText?: string
    okType?: Color
    confirmLoading?: boolean
}

// 定义Props及默认值
const {
    disabled = false,
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

const slots = defineSlots<{
    title: () => VNode[]
    default: () => VNode[]
    footer: () => VNode[]
}>()

const attrs = useAttrs()

const _id = useId()
const visible = ref(modelValue)
const dialogRef = shallowRef<HTMLElement>()

const dialogId = computed(() => (attrs.id as string) || `web-dialog-${_id}`)

const dialogClass = computed(() => {
    return [placement ? `web-dialog--${placement}` : '']
})

const onOk = (e: Event) => {
    emit('ok')
}

const onCancel = (e: Event) => {
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
        <transition :name="transition">
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
                                ></path>
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
        ></dialog>
    </transition>
</template>
