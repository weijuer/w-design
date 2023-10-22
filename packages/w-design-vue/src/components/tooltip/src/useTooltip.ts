import { SetupContext, computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import { TooltipEmits, TooltipProps } from './interface'
import { useEventListener } from 'Hooks'
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

    const handleTrigger = () => {
        const { trigger } = props

        visible.value = trigger === 'click' ? !visible.value : true

        nextTick(() => {
            onChange()
            updateTarget()
        })
    }

    const handleUnTrigger = () => {
        visible.value = false
        onChange()
    }

    const updateVertical = (dir: string, sub: string | undefined) => {
        const triangleSize = 6
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popperRef.value!
        const { top, left, width, height } = targetWrapperRef.value!.getBoundingClientRect()

        // veritcal
        if (dir === 'top') {
            state.top = top + window.scrollY - popperHeight - triangleSize * 2
            state.left = left + window.scrollX + Math.abs(width - popperWidth) * 0.5
        } else if (dir === 'bottom') {
            state.top = top + window.scrollY + height + triangleSize * 2
            state.left = left + window.scrollX + Math.abs(width - popperWidth) * 0.5
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

        // horizontal
        if (dir === 'left') {
            state.top = top + window.scrollY + Math.abs(popperHeight - height) * 0.5
            state.left = window.scrollX + left - popperWidth - triangleSize * 2
        } else if (dir === 'right') {
            state.top = top + window.scrollY + Math.abs(popperHeight - height) * 0.5
            state.left = window.scrollX + left + width + triangleSize * 2
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

        // overflow
        if (state.left < 0) {
            placementInner.value = 'right'
            updateHorizontal('right', sub)
        } else if (state.top < 0) {
            placementInner.value = 'bottom'
            updateVertical('bottom', sub)
        }
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

    const initEvents = () => {
        const { trigger } = props

        // 监听target事件
        useEventListener(targetWrapperRef, trigger === 'hover' ? 'mouseenter' : trigger, handleTrigger)
        useEventListener(window, 'resize', updateTarget)
        useEventListener(window, 'scroll', updateTarget)

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
        onClose,
        onChange
    }
}
