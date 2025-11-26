<script setup lang="ts">
import { cloneVNode, computed, nextTick, ref, useId, VNode } from 'vue';

interface TooltipProps {
    placement?: Placement
    positionArea?: string
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
    boundariesSelector?: string
}

interface TooltipEmits {
    (e: 'update:modelValue', visible: boolean): void
    (e: 'show'): void
    (e: 'hide'): void
}

// 定义Props及默认值
const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
    positionArea: '',
    trigger: 'click',
    disabled: false,
    modelValue: false,
    offset: 10,
    showArrow: true,
    transition: 'scale',
    width: 'auto',
    appendToBody: true,
    boundariesSelector: 'body',
})

const emit = defineEmits<TooltipEmits>()

const slots = defineSlots<{
    trigger: () => VNode[]
    title: () => VNode[]
    content: () => VNode[]
}>()

let timeoutId: number | null = null

const tooltipId = useId();
const visible = ref(props.modelValue)
const triggerRef = ref<HTMLElement>()
const tooltipRef = ref<HTMLElement>()

const anchorName = computed(() => `--w-anchor-${tooltipId}`);
const tooltipAnchorName = computed(() => `--w-tooltip-${tooltipId}`);

const anchorStyle = computed(() => {

    return {
        anchorName: anchorName.value,
    }
});

const tooltipClass = computed(() => {
    const { positionArea, placement } = props;

    return [
        placement ? `w-tooltip--${placement}` : '',
        positionArea ? 'w-tooltip--position-area' : '',
        props.showArrow ? 'w-tooltip2--arrow' : '',
    ]
})

const tooltipStyle = computed(() => {
    const { positionArea, placement } = props;

    return {
        ['--w-anchor']: anchorName.value,
        ['--w-tooltip']: tooltipAnchorName.value,
        ['--w-tooltip__placement']: placement,
        ['--w-tooltip__position-area']: positionArea,
        // positionAnchor: anchorName.value,
        // anchorName: tooltipAnchorName.value,
        // positionArea
    }
});

const triggerVNode = computed(() => {
    const triggerSlot = slots.trigger?.()
    if (!triggerSlot?.length) {
        return null
    }
    const originalVNode = triggerSlot[0]
    const originalProps = originalVNode.props ?? {}

    // 创建事件处理器对象
    const eventHandlers: Record<string, (event: Event) => void> = {}
    if (props.trigger === 'click' && !props.disabled) {
        eventHandlers.onClick = mergeEvents(originalProps.onClick, toggleTooltip)
    }
    else if (props.trigger === 'hover' && !props.disabled) {
        eventHandlers.onMouseenter = mergeEvents(originalProps.onMouseenter, handleMouseEnter)
        eventHandlers.onMouseleave = mergeEvents(originalProps.onMouseleave, handleMouseLeave)
    }
    else if (props.trigger === 'focus' && !props.disabled) {
        eventHandlers.onFocus = mergeEvents(originalProps.onFocus, handleFocus)
        eventHandlers.onBlur = mergeEvents(originalProps.onBlur, handleBlur)
    }

    return cloneVNode(originalVNode, {
        ...originalProps,
        ...eventHandlers,
        ref: setTriggerEl,
        tabindex: props.trigger === 'focus' ? '0' : originalProps?.tabindex,
    })
})

function mergeEvents(oldFn: any, newFn: any) {
    return function (e: Event) {
        if (typeof oldFn === 'function')
            oldFn(e)
        newFn(e)
    }
}

// 设置触发元素
function setTriggerEl(el: any) {
    if (el instanceof HTMLElement) {
        triggerRef.value = el
    }
    else if (el?.$el) {
        triggerRef.value = el.$el
    }
}

// 显示Tooltip
function showTooltip() {
    if (props.disabled || visible.value)
        return

    visible.value = true
    emit('update:modelValue', true)
}

// 隐藏Tooltip
function hideTooltip() {
    if (!visible.value)
        return

    visible.value = false
    emit('update:modelValue', false)
}

// 切换Tooltip显示状态
function toggleTooltip() {
    if (visible.value) {
        hideTooltip()
    }
    else {
        showTooltip()
    }
}

// 鼠标进入处理
function handleMouseEnter() {
    if (props.trigger !== 'hover' || props.disabled)
        return

    if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
    }

    timeoutId = window.setTimeout(() => {
        showTooltip()
    }, 100)
}

// 鼠标离开处理
function handleMouseLeave() {
    if (props.trigger !== 'hover' || props.disabled)
        return

    if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
    }

    timeoutId = window.setTimeout(() => {
        hideTooltip()
    }, 100)
}

function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node

    if (
        tooltipRef.value
        && !tooltipRef.value.contains(target)
        && triggerRef.value
        && !triggerRef.value.contains(target)
    ) {
        hideTooltip()
    }
}

// 焦点处理
function handleFocus() {
    if (props.trigger === 'focus' && !props.disabled) {
        showTooltip()
    }
}

function handleBlur() {
    if (props.trigger === 'focus' && !props.disabled) {
        hideTooltip()
    }
}
</script>

<template>
    <component class="w-anchor tooltip-trigger" :style="anchorStyle" :is="triggerVNode" v-if="triggerVNode" />

    <teleport v-if="appendToBody" to="body">
        <transition :name="transition">
            <div v-show="visible" ref="tooltipRef" :id="tooltipId" class="w-tooltip2" :class="tooltipClass"
                :style="tooltipStyle">
                <slot name="content" />
            </div>
        </transition>
    </teleport>
</template>