<script setup lang="ts">
import { cloneVNode, computed, onMounted, onUnmounted, ref, shallowRef, useId, VNode } from 'vue'

export interface TooltipProps {
    placement?: Placement
    trigger?: Trigger
    title?: string
    content?: string
    disabled?: boolean
    modelValue?: boolean
    offset?: number
    showArrow?: boolean
    transition?: string
    width?: string | number
    appendToBody?: boolean
}

export interface TooltipEmits {
    (e: 'update:modelValue', visible: boolean): void
    (e: 'show'): void
    (e: 'hide'): void
}

// 定义Props及默认值
const props = withDefaults(defineProps<TooltipProps>(), {
    trigger: 'click',
    disabled: false,
    modelValue: false,
    offset: 10,
    showArrow: true,
    transition: 'scale',
    width: 'auto',
    appendToBody: true
})

const emit = defineEmits<TooltipEmits>()

const slots = defineSlots<{
    trigger: () => VNode[]
    title: () => VNode[]
    content: () => VNode[]
}>()

const id = useId()
const visible = ref(props.modelValue)
const triggerRef = shallowRef<HTMLElement>()
const popoverRef = shallowRef<HTMLElement>()

const popoverId = computed(() => `web-popover-${id}`)

const popoverClass = computed(() => {
    const { placement } = props

    return [
        placement ? `web-popover--${placement}` : '',
        props.showArrow ? 'web-popover--with-arrow' : ''
    ]
})

const triggerVNode = computed(() => {
    const triggerSlot = slots.trigger?.()
    if (!triggerSlot?.length) {
        return null
    }
    const originalVNode = triggerSlot[0]
    const originalProps = originalVNode.props ?? {}

    return cloneVNode(originalVNode, {
        ...originalProps,
        ref: setTriggerEl,
        tabindex: props.trigger === 'focus' ? '0' : originalProps?.tabindex
    })
})

// 设置触发元素
function setTriggerEl(el: any) {
    if (el instanceof HTMLElement) {
        triggerRef.value = el
    } else if (el?.$el) {
        triggerRef.value = el.$el
    }
}
</script>

<template>
    <Component
        class="web-popover-trigger"
        :popovertarget="trigger === 'click' ? popoverId : ''"
        :interestfor="trigger === 'hover' ? popoverId : ''"
        :is="triggerVNode"
        v-if="triggerVNode"
    />

    <teleport v-if="appendToBody" to="body">
        <transition :name="transition">
            <div
                ref="popoverRef"
                popover="auto"
                :id="popoverId"
                class="web-popover"
                :class="popoverClass"
                aria-label="actions"
            >
                <slot name="content" />
            </div>
        </transition>
    </teleport>

    <transition v-else :name="transition">
        <div
            v-show="visible"
            ref="popoverRef"
            popover="auto"
            :id="popoverId"
            class="web-popover"
            :class="popoverClass"
            aria-label="actions"
        >
            <slot name="content" />
        </div>
    </transition>
</template>
