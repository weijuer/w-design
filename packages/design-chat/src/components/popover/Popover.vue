<script setup lang="ts">
import {
    cloneVNode,
    computed,
    nextTick,
    onMounted,
    onUnmounted,
    ref,
    VNode,
    VNodeArrayChildren,
    watch
} from 'vue'

interface PopoverProps {
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
interface PopoverEmits {
    (e: 'update:visible', visible: boolean): void
    (e: 'show'): void
    (e: 'hide'): void
}

// 定义Props及默认值
const props = withDefaults(defineProps<PopoverProps>(), {
    placement: 'bottom',
    trigger: 'click',
    disabled: false,
    visible: false,
    offset: 10,
    showArrow: true,
    transition: 'scale',
    width: 'auto',
    appendToBody: true,
    boundariesSelector: 'body'
})

const emit = defineEmits<PopoverEmits>()

const slots = defineSlots<{
    trigger: () => VNode[]
    title: () => VNode[]
    content: () => VNode[]
}>()

// 响应式状态
const visible = ref(props.visible)
const popoverRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
// const popoverStyle = reactive<Record<string, string>>({})

// 计时器和事件处理器
let timeoutId: number | null = null

// 计算样式
const popoverStyle = computed(() => {
    const style: Record<string, string> = {}

    if (props.width !== 'auto') {
        style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }

    return style
})

const popoverClass = computed(() => [
    'w-popover',
    [`w-popover--${props.placement}`],
    { 'w-popover--with-arrow': props.showArrow }
])

function mergeEvents(oldFn: any, newFn: any) {
    return function (e: Event) {
        if (typeof oldFn === 'function') oldFn(e)
        newFn(e)
    }
}

// 使用cloneVNode创建带事件的触发器VNode
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
        eventHandlers.onClick = mergeEvents(originalProps.onClick, togglePopover)
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
        class: ['popover-trigger'],
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

// 显示Popover
function showPopover() {
    if (props.disabled || visible.value) return

    visible.value = true
    emit('update:visible', true)
    emit('show')

    nextTick(() => {
        requestAnimationFrame(updatePosition)
    })

    if (props.appendToBody && popoverRef.value) {
        document.body.appendChild(popoverRef.value)
    }
}

// 隐藏Popover
function hidePopover() {
    if (!visible.value) return

    visible.value = false
    emit('update:visible', false)
    emit('hide')

    // 清理body中的popover
    if (props.appendToBody && popoverRef.value && popoverRef.value.parentNode) {
        popoverRef.value.parentNode.removeChild(popoverRef.value)
    }
}

// 切换Popover显示状态
function togglePopover() {
    if (visible.value) {
        hidePopover()
    } else {
        showPopover()
    }
}

// 更新Popover位置
function updatePosition() {
    if (!triggerRef.value || !popoverRef.value) return

    const triggerRect = triggerRef.value.getBoundingClientRect()
    const { offsetWidth: popoverWidth, offsetHeight: popoverHeight } = popoverRef.value
    const scrollX = window.pageXOffset
    const scrollY = window.pageYOffset
    const offset = props.offset
    const triangleSize = Number(
        getComputedStyle(popoverRef.value).getPropertyValue('--arrow-size').replace('px', '')
    )

    let top = 0
    let left = 0

    switch (props.placement) {
        case 'top':
            top = triggerRect.top - popoverHeight - offset
            left = triggerRect.left + (triggerRect.width - popoverWidth) / 2
            break
        case 'top-start':
            top = triggerRect.top - popoverHeight - offset
            left = triggerRect.left - triangleSize / 2
            break
        case 'top-end':
            top = triggerRect.top - popoverHeight - offset
            left = triggerRect.right - popoverWidth + triangleSize / 2
            break
        case 'bottom':
            top = triggerRect.bottom + offset
            left = triggerRect.left + (triggerRect.width - popoverWidth) / 2
            break
        case 'bottom-start':
            top = triggerRect.bottom + offset
            left = triggerRect.left - triangleSize / 2
            break
        case 'bottom-end':
            top = triggerRect.bottom + offset
            left = triggerRect.right - popoverWidth + triangleSize / 2
            break
        case 'left':
            top = triggerRect.top + (triggerRect.height - popoverHeight) / 2
            left = triggerRect.left - popoverWidth - offset
            break
        case 'left-start':
            top = triggerRect.top - triangleSize / 2
            left = triggerRect.left - popoverWidth - offset
            break
        case 'left-end':
            top = triggerRect.bottom - popoverHeight + triangleSize / 2
            left = triggerRect.left - popoverWidth - offset
            break
        case 'right':
            top = triggerRect.top + (triggerRect.height - popoverHeight) / 2
            left = triggerRect.right + offset
            break
        case 'right-start':
            top = triggerRect.top - triangleSize / 2
            left = triggerRect.right + offset
            break
        case 'right-end':
            top = triggerRect.bottom - popoverHeight + triangleSize / 2
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
    const maxLeft = boundariesRect.right - popoverWidth
    const minTop = boundariesRect.top
    const maxTop = boundariesRect.bottom - popoverHeight

    // 确保位置在边界内
    left = Math.max(minLeft, Math.min(left, maxLeft))
    top = Math.max(minTop, Math.min(top, maxTop))

    // 设置位置，考虑滚动偏移
    popoverRef.value.style.top = `${top + scrollY}px`
    popoverRef.value.style.left = `${left + scrollX}px`
}

// 鼠标进入处理
function handleMouseEnter() {
    if (props.trigger !== 'hover' || props.disabled) return

    if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
    }

    timeoutId = window.setTimeout(() => {
        showPopover()
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
        hidePopover()
    }, 100)
}

function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node

    if (
        popoverRef.value &&
        !popoverRef.value.contains(target) &&
        triggerRef.value &&
        !triggerRef.value.contains(target)
    ) {
        hidePopover()
    }
}

// 焦点处理
function handleFocus() {
    if (props.trigger === 'focus' && !props.disabled) {
        showPopover()
    }
}

function handleBlur() {
    if (props.trigger === 'focus' && !props.disabled) {
        hidePopover()
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
                showPopover()
            } else {
                hidePopover()
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
    show: showPopover,
    hide: hidePopover,
    toggle: togglePopover,
    updatePosition
})
</script>

<template>
    <component :is="triggerVNode" v-if="triggerVNode" />

    <teleport v-if="appendToBody" to="body">
        <transition :name="transition">
            <div v-show="visible" ref="popoverRef" :class="popoverClass" :style="popoverStyle">
                <div v-if="showArrow" class="w-popover__arrow" />

                <div v-if="title || $slots.title" class="w-popover__header">
                    <slot name="title">
                        <div class="popover__title">
                            {{ title }}
                        </div>
                    </slot>
                </div>

                <div class="w-popover__content">
                    <slot name="content">
                        <div class="w-popover__text">
                            {{ content }}
                        </div>
                    </slot>
                </div>
            </div>
        </transition>
    </teleport>

    <transition v-else :name="transition">
        <div v-show="visible" ref="popoverRef" :class="popoverClass" :style="popoverStyle">
            <div v-if="showArrow" class="w-popover__arrow" />

            <div v-if="title || $slots.title" class="w-popover__header">
                <slot name="title">
                    <div class="w-popover__title">
                        {{ title }}
                    </div>
                </slot>
            </div>

            <div class="w-popover__content">
                <slot name="content">
                    <div class="w-popover__text">
                        {{ content }}
                    </div>
                </slot>
            </div>
        </div>
    </transition>
</template>
