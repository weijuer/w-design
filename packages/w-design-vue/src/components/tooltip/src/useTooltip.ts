import { SetupContext, computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import { TooltipEmits, TooltipProps } from './interface'
import { useEventListener, useDebounceFn } from 'Hooks'
import { addUnit } from '../../_utils'

export const useTooltip = (props: TooltipProps, emit: SetupContext<TooltipEmits>['emit']) => {
    const targetWrapperRef = ref<HTMLSpanElement>()
    const popperRef = ref<HTMLDivElement>()
    // const targetRef = ref<HTMLElement>()
    const { modelValue, defaultOpen, placement } = props
    const visible = ref(defaultOpen ? defaultOpen : modelValue)
    const placementInner = ref(placement ? placement : 'top')

    const state = reactive({
        top: 0,
        left: 0
    })

    const tooltipClass = computed(() => {
        const { className, type, arrowed } = props

        return [
            className,
            type ? 'w-tooltip__' + type : '',
            placementInner.value ? 'w-tooltip__' + placementInner.value : '',
            {
                'is-arrowed': arrowed
            }
        ]
    })

    const tooltipStyle = computed(() => {
        const { openDelay, closeDelay } = props

        return {
            top: state.top + 'px',
            left: state.left + 'px',
            transitionDelay: visible.value ? addUnit(openDelay, 'ms') : addUnit(closeDelay, 'ms')
        }
    })

    const checkOverflow = (dir: string, sub: string) => {
        const triangleSize = 6
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popperRef.value!
        const { top, left, width, height } = targetWrapperRef.value!.getBoundingClientRect()

        // overflow
        const minBoundary = 0
        const maxRightBoundary = window.innerWidth
        const maxBottomBoundary = window.innerHeight
        const targetTop = top
        const popperOffsetTop = -(popperHeight + triangleSize * 2)
        const popperOffsetBottom = popperHeight + height + triangleSize * 2
        const targetLeft = left
        const popperOffsetLeft = -(popperWidth + triangleSize * 2)
        const popperOffsetRight = popperWidth + width + triangleSize * 2

        // horizontal
        if (['left', 'right'].includes(dir)) {
            if (targetLeft + popperOffsetLeft < minBoundary) {
                dir = 'right'
            } else if (targetLeft + popperOffsetRight > maxRightBoundary) {
                dir = 'left'
            }
            placementInner.value = sub ? dir + '-' + sub : dir
            updateHorizontal(dir, sub)
        }

        // vertical
        if (['top', 'bottom'].includes(dir)) {
            if (targetTop + popperOffsetTop < minBoundary) {
                dir = 'bottom'
            } else if (targetTop + popperOffsetBottom > maxBottomBoundary) {
                dir = 'top'
            }
            placementInner.value = sub ? dir + '-' + sub : dir
            updateVertical(dir, sub)
        }
    }

    const updateVertical = (dir: string, sub: string | undefined) => {
        const triangleSize = 6
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popperRef.value!
        const { top, left, width, height } = targetWrapperRef.value!.getBoundingClientRect()

        const targetTop = top + window.scrollY
        const popperOffsetTop = -(popperHeight + triangleSize * 2)
        const popperOffsetBottom = height + triangleSize * 2

        // vertical
        if (dir === 'top') {
            state.top = targetTop + popperOffsetTop
            state.left = left + window.scrollX + (width - popperWidth) * 0.5
        } else if (dir === 'bottom') {
            state.top = targetTop + popperOffsetBottom
            state.left = left + window.scrollX + (width - popperWidth) * 0.5
        }

        // start-end
        if (sub === 'start') {
            state.left = left + window.scrollX
        } else if (sub === 'end') {
            state.left = left + window.scrollX + width - popperWidth
        }
    }

    const updateHorizontal = (dir: string, sub: string | undefined) => {
        const triangleSize = 6
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popperRef.value!
        const { top, left, width, height } = targetWrapperRef.value!.getBoundingClientRect()

        const targetLeft = left + window.scrollX
        const popperOffsetLeft = -(popperWidth + triangleSize * 2)
        const popperOffsetRight = width + triangleSize * 2

        // horizontal
        if (dir === 'left') {
            state.left = targetLeft + popperOffsetLeft
            state.top = top + window.scrollY + Math.abs(popperHeight - height) * 0.5
        } else if (dir === 'right') {
            state.left = targetLeft + popperOffsetRight
            state.top = top + window.scrollY + Math.abs(popperHeight - height) * 0.5
        }

        // start-end
        if (sub === 'start') {
            state.top = top + window.scrollY
        } else if (sub === 'end') {
            state.top = top + window.scrollY + height - popperHeight
        }
    }

    const updateTarget = () => {
        const [dir, sub] = placementInner.value.split('-');

        if (['top', 'bottom'].includes(dir)) {
            updateVertical(dir, sub)
        } else {
            updateHorizontal(dir, sub)
        }

        checkOverflow(dir, sub)
    }

    const handleDocumentClick = (e: Event) => {
        const targetWrapper = targetWrapperRef.value
        const popper = popperRef.value

        if (
            !targetWrapper ||
            targetWrapper.contains(e.target as HTMLElement) ||
            !popper ||
            popper.contains(e.target as HTMLElement)
        ) {
            return
        }

        visible.value = false
    }

    const destory = () => {
        const popper = popperRef.value

        if (popper) {
            visible.value = false
            document.body.removeChild(popper)
        }
    }

    const reset = () => {
        placementInner.value = props.placement
        state.top = 0
        state.left = 0
    }

    const handleTrigger = () => {
        const { trigger } = props
        visible.value = trigger === 'click' ? !visible.value : true

        nextTick(() => {
            reset()
            updateTarget()
            onChange()
        })
    }

    const handleUnTrigger = () => {
        visible.value = false
        onChange()
        onClose()
    }

    const debouncedUpdateTarget = useDebounceFn(updateTarget, 500)

    const initEvents = () => {
        const { trigger } = props

        // 监听target事件
        useEventListener(targetWrapperRef, trigger === 'hover' ? 'mouseenter' : trigger, handleTrigger)
        useEventListener(window, 'resize', debouncedUpdateTarget)
        useEventListener(window, 'scroll', debouncedUpdateTarget)

        //
        if (trigger === 'hover') {
            useEventListener(targetWrapperRef, 'mouseleave', handleUnTrigger)
        } else {
            useEventListener(document, 'click', handleDocumentClick)
        }
    }

    const onClose = () => {
        emit('close')
    }

    const onChange = () => {
        emit('update:modelValue', visible.value)
        emit('change', visible.value)
    }

    onBeforeUnmount(() => {
        destory()
    })

    initEvents()

    return {
        targetWrapperRef,
        popperRef,
        tooltipClass,
        tooltipStyle,
        visible,
        reset,
        onClose,
        onChange
    }
}
