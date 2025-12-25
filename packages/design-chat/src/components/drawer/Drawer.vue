<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import Icon from '../icon'
import Button from '../button'

export interface drawerProps {
    modelValue?: boolean
    position?: 'left' | 'right' | 'top' | 'bottom'
    title?: string
    width?: string
    height?: string
    overlay?: boolean
    overlayOpacity?: number
    overlayClose?: boolean
    closeOnClickOverlay?: boolean
    closeOnEscape?: boolean
    showCloseButton?: boolean
    zIndex?: number
    transitionDuration?: number
    destroyOnClose?: boolean
    maskClosable?: boolean
    keyboard?: boolean
    getContainer?: string | boolean
}

const props = withDefaults(defineProps<drawerProps>(), {
    modelValue: false,
    position: 'right',
    title: '',
    width: '100%',
    height: '300px',
    overlay: true,
    overlayOpacity: 0.45,
    overlayClose: true,
    closeOnClickOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    zIndex: 1000,
    transitionDuration: 300,
    destroyOnClose: false,
    maskClosable: true,
    keyboard: true,
    getContainer: false
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'open'): void
    (e: 'close'): void
}>()

const isActive = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value)
})

// 计算样式
const drawerStyle = computed(() => {
    const { width, height } = props

    const baseStyle = {
        '--drawer-transition-duration': `${props.transitionDuration}ms`,
        'z-index': props.zIndex
    }

    return {
        ...baseStyle,
        width,
        height
    }
})

const overlayStyle = computed(() => ({
    '--overlay-opacity': props.overlayOpacity,
    'z-index': props.zIndex - 1
}))

// 获取目标容器
const getTargetContainer = computed(() => {
    if (typeof props.getContainer === 'string') {
        return document.querySelector(props.getContainer)
    }
    return props.getContainer ? document.body : null
})

// 打开抽屉
function open() {
    isActive.value = true
    emit('open')
}

// 关闭抽屉
function close() {
    isActive.value = false
    emit('close')
}

// 切换抽屉状态
function toggle() {
    isActive.value ? close() : open()
}

// 处理点击遮罩层
function handleOverlayClick() {
    if (props.maskClosable && props.closeOnClickOverlay) {
        close()
    }
}

// 处理 ESC 键
function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && props.keyboard && props.closeOnEscape && isActive.value) {
        close()
    }
}

// 监听 modelValue 变化
watch(
    () => props.modelValue,
    value => {
        if (value !== isActive.value) {
            value ? open() : close()
        }
    }
)

// 监听 isOpen 变化
watch(isActive, value => {
    if (value) {
        document.addEventListener('keydown', handleKeydown)
        document.body.style.overflow = 'hidden'
    } else {
        document.removeEventListener('keydown', handleKeydown)
        document.body.style.overflow = ''
    }
})

// 生命周期
onMounted(() => {
    if (props.modelValue) {
        open()
    }
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
})

// 暴露方法给父组件
defineExpose({
    open,
    close,
    toggle
})
</script>

<template>
    <Teleport v-if="getTargetContainer" :to="getTargetContainer">
        <div class="w-drawer-wrapper" :class="{ active: isActive }">
            <div
                v-if="isActive && overlay"
                class="w-drawer-mask"
                :style="overlayStyle"
                @click="handleOverlayClick"
            />

            <div class="w-drawer" :class="[`drawer--${position}`]" :style="drawerStyle">
                <div class="w-drawer__header">
                    <h3 class="w-drawer-title">
                        {{ title }}
                    </h3>
                    <Button
                        v-if="showCloseButton"
                        class="w-drawer-close"
                        icon-only
                        aria-label="关闭抽屉"
                        @click="close"
                    >
                        <Icon class="i-carbon:close" />
                    </Button>
                </div>

                <div class="w-drawer__content">
                    <slot />
                </div>

                <div class="w-drawer__footer">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </Teleport>

    <div v-else class="w-drawer-wrapper is-inner" :class="{ active: isActive }">
        <div
            v-if="isActive && overlay"
            class="w-drawer-mask"
            :style="overlayStyle"
            @click="handleOverlayClick"
        />

        <div class="w-drawer" :class="[`drawer--${position}`]" :style="drawerStyle">
            <div class="w-drawer__header">
                <h3 class="w-drawer-title">
                    {{ title }}
                </h3>
                <Button
                    v-if="showCloseButton"
                    class="w-drawer-close"
                    icon-only
                    variant="light"
                    aria-label="关闭抽屉"
                    @click="close"
                >
                    <Icon class="i-carbon:close" />
                </Button>
            </div>

            <div class="w-drawer__content">
                <slot />
            </div>

            <div v-if="$slots.footer" class="w-drawer__footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
