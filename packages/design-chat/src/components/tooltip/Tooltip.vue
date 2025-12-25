<script setup lang="ts">
import { cloneVNode, computed, nextTick, onMounted, onUnmounted, ref, VNode, watch } from 'vue'

defineOptions({
    name: 'WTooltip'
})

export interface TooltipProps {
    placement?: Placement
    trigger?: Trigger
    title?: string
    content?: string
    disabled?: boolean
    visible?: boolean
    offset?: number
    showArrow?: boolean
    transition?: string
    width?: string | number
    appendToBody?: boolean
    boundariesSelector?: string
}

// Emits接口定义
export interface TooltipEmits {
    (e: 'update:visible', visible: boolean): void
    (e: 'show'): void
    (e: 'hide'): void
}

// 定义Props及默认值
const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    disabled: false,
    visible: false,
    offset: 10,
    showArrow: true,
    transition: 'scale',
    width: 'auto',
    appendToBody: true,
    boundariesSelector: 'body'
})

const emit = defineEmits<TooltipEmits>()

const slots = defineSlots<{
    default: () => VNode[]
    title: () => VNode[]
    content: () => VNode[]
}>()

// 响应式状态
const visible = ref(props.visible)
const tooltipRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
// const tooltipStyle = reactive<Record<string, string>>({})

// 计时器和事件处理器
let timeoutId: number | null = null

// 计算样式
const tooltipStyle = computed(() => {
    const style: Record<string, string> = {}

    if (props.width !== 'auto') {
        style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }

    return style
})

const tooltipClass = computed(() => [
    'w-tooltip',
    [`w-tooltip--${props.placement}`],
    { 'w-tooltip--with-arrow': props.showArrow }
])

function mergeEvents(oldFn: any, newFn: any) {
    return function (e: Event) {
        if (typeof oldFn === 'function') oldFn(e)
        newFn(e)
    }
}

// 使用cloneVNode创建带事件的触发器VNode
const triggerVNode = computed(() => {
    const triggerSlot = slots.default?.()
    if (!triggerSlot?.length) {
        return null
    }
    const originalVNode = triggerSlot[0]
    const originalProps = originalVNode.props ?? {}

    // 创建事件处理器对象
    const eventHandlers: Record<string, (event: Event) => void> = {}
    if (props.trigger === 'click' && !props.disabled) {
        eventHandlers.onClick = mergeEvents(originalProps.onClick, toggleTooltip)
    } else if (props.trigger === 'hover' && !props.disabled) {
        eventHandlers.onMouseenter = mergeEvents(originalProps.onMouseenter, handleMouseEnter)
        eventHandlers.onMouseleave = mergeEvents(originalProps.onMouseleave, handleMouseLeave)
    } else if (props.trigger === 'focus' && !props.disabled) {
        eventHandlers.onFocus = mergeEvents(originalProps.onFocus, handleFocus)
        eventHandlers.onBlur = mergeEvents(originalProps.onBlur, handleBlur)
    }

    // 使用cloneVNode克隆VNode并添加新属性
    return cloneVNode(originalVNode, {
        ...originalVNode.props,
        ...eventHandlers,
        ref: setTriggerEl,
        class: ['tooltip-trigger'],
        tabindex: props.trigger === 'focus' ? '0' : originalVNode.props?.tabindex
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

// 显示Tooltip
function showTooltip() {
    if (props.disabled || visible.value) return

    visible.value = true
    emit('update:visible', true)
    emit('show')

    nextTick(() => {
        requestAnimationFrame(updatePosition)
    })

    if (props.appendToBody && tooltipRef.value) {
        document.body.appendChild(tooltipRef.value)
    }
}

// 隐藏Tooltip
function hideTooltip() {
    if (!visible.value) return

    visible.value = false
    emit('update:visible', false)
    emit('hide')

    // 清理body中的tooltip
    if (props.appendToBody && tooltipRef.value && tooltipRef.value.parentNode) {
        tooltipRef.value.parentNode.removeChild(tooltipRef.value)
    }
}

// 切换Tooltip显示状态
function toggleTooltip() {
    if (visible.value) {
        hideTooltip()
    } else {
        showTooltip()
    }
}

// 更新Tooltip位置
function updatePosition() {
    if (!triggerRef.value || !tooltipRef.value) return

    const triggerRect = triggerRef.value.getBoundingClientRect()
    const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltipRef.value
    const scrollX = window.pageXOffset
    const scrollY = window.pageYOffset
    const offset = props.offset
    const triangleSize = Number(
        getComputedStyle(tooltipRef.value).getPropertyValue('--arrow-size').replace('px', '')
    )

    let top = 0
    let left = 0

    switch (props.placement) {
        case 'top':
            top = triggerRect.top - tooltipHeight - offset
            left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2
            break
        case 'top-start':
            top = triggerRect.top - tooltipHeight - offset
            left = triggerRect.left - triangleSize / 2
            break
        case 'top-end':
            top = triggerRect.top - tooltipHeight - offset
            left = triggerRect.right - tooltipWidth + triangleSize / 2
            break
        case 'bottom':
            top = triggerRect.bottom + offset
            left = triggerRect.left + (triggerRect.width - tooltipWidth) / 2
            break
        case 'bottom-start':
            top = triggerRect.bottom + offset
            left = triggerRect.left - triangleSize / 2
            break
        case 'bottom-end':
            top = triggerRect.bottom + offset
            left = triggerRect.right - tooltipWidth + triangleSize / 2
            break
        case 'left':
            top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2
            left = triggerRect.left - tooltipWidth - offset
            break
        case 'left-start':
            top = triggerRect.top - triangleSize / 2
            left = triggerRect.left - tooltipWidth - offset
            break
        case 'left-end':
            top = triggerRect.bottom - tooltipHeight + triangleSize / 2
            left = triggerRect.left - tooltipWidth - offset
            break
        case 'right':
            top = triggerRect.top + (triggerRect.height - tooltipHeight) / 2
            left = triggerRect.right + offset
            break
        case 'right-start':
            top = triggerRect.top - triangleSize / 2
            left = triggerRect.right + offset
            break
        case 'right-end':
            top = triggerRect.bottom - tooltipHeight + triangleSize / 2
            left = triggerRect.right + offset
            break
    }

    // 边界检查
    const boundariesElement = document.querySelector(props.boundariesSelector)
    const boundariesRect = boundariesElement?.getBoundingClientRect() || {
        top: 0,
        left: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
    }

    // 改进的边界检查逻辑
    const minLeft = boundariesRect.left
    const maxLeft = boundariesRect.right - tooltipWidth
    const minTop = boundariesRect.top
    const maxTop = boundariesRect.bottom - tooltipHeight

    // 确保位置在边界内
    left = Math.max(minLeft, Math.min(left, maxLeft))
    top = Math.max(minTop, Math.min(top, maxTop))

    // 设置位置，考虑滚动偏移
    tooltipRef.value.style.top = `${top + scrollY}px`
    tooltipRef.value.style.left = `${left + scrollX}px`
}

// 鼠标进入处理
function handleMouseEnter() {
    if (props.trigger !== 'hover' || props.disabled) return

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
    if (props.trigger !== 'hover' || props.disabled) return

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
        tooltipRef.value &&
        !tooltipRef.value.contains(target) &&
        triggerRef.value &&
        !triggerRef.value.contains(target)
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

// 监听窗口大小变化和滚动
function handleResize() {
    if (visible.value) {
        updatePosition()
    }
}

function handleScroll() {
    if (visible.value) {
        updatePosition()
    }
}

function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
}

// 监听外部visible变化
watch(
    () => props.visible,
    newValue => {
        if (newValue !== visible.value) {
            if (newValue) {
                showTooltip()
            } else {
                hideTooltip()
            }
        }
    }
)

// 组件挂载和卸载
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleScroll, true)

    if (timeoutId) {
        clearTimeout(timeoutId)
    }
})

// 手动控制方法
defineExpose({
    trigger: triggerRef.value,
    show: showTooltip,
    hide: hideTooltip,
    toggle: toggleTooltip,
    updatePosition
})
</script>

<template>
    <component :is="triggerVNode" v-if="triggerVNode" />

    <teleport v-if="appendToBody" to="body">
        <transition :name="transition">
            <div
                v-show="visible"
                ref="tooltipRef"
                :class="tooltipClass"
                :style="tooltipStyle"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
            >
                <div v-if="showArrow" class="w-tooltip__arrow" />

                <div v-if="title || $slots.title" class="w-tooltip__header">
                    <slot name="title">
                        <div class="tooltip__title">
                            {{ title }}
                        </div>
                    </slot>
                </div>

                <div class="w-tooltip__content">
                    <slot name="content">
                        <div class="w-tooltip__text">
                            {{ content }}
                        </div>
                    </slot>
                </div>
            </div>
        </transition>
    </teleport>

    <transition v-else :name="transition">
        <div
            v-show="visible"
            ref="tooltipRef"
            :class="tooltipClass"
            :style="tooltipStyle"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        >
            <div v-if="showArrow" class="w-tooltip__arrow" />

            <div v-if="title || $slots.title" class="w-tooltip__header">
                <slot name="title">
                    <div class="w-tooltip__title">
                        {{ title }}
                    </div>
                </slot>
            </div>

            <div class="w-tooltip__content">
                <slot name="content">
                    <div class="w-tooltip__text">
                        {{ content }}
                    </div>
                </slot>
            </div>
        </div>
    </transition>
</template>
