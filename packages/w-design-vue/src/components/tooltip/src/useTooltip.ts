import { SetupContext, computed, nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import { TooltipEmits, TooltipProps } from './interface'
import { useEventListener } from 'Hooks'

export const useTooltip = (props: TooltipProps, emit: SetupContext<TooltipEmits>['emit']) => {
    const targetWrapperRef = ref<HTMLSpanElement>()
    const popperRef = ref<HTMLDivElement>()
    // const targetRef = ref<HTMLElement>()

    const visible = ref(false)
    const state = reactive({
        top: 0,
        left: 0
    })

    const tooltipClass = computed(() => {
        const { className, type, placement, arrowed } = props

        return [
            className,
            type ? 'w-tooltip__' + type : '',
            placement ? 'w-tooltip__' + placement : '',
            {
                'is-arrowed': arrowed
            }
        ]
    })

    const tooltipStyle = computed(() => {
        return {
            top: state.top + 'px',
            left: state.left + 'px'
        }
    })

    const handleTrigger = () => {
        const { trigger } = props

        visible.value = trigger === 'click' ? !visible.value : true

        nextTick(() => {
            updateTarget()
        })
    }

    const handleUnTrigger = () => {
        visible.value = false
    }

    const updateTarget = () => {
        // 角标大小
        const triangleSize = 6
        // 外部偏移量-防止贴边
        const marginOffset = 16
        // 角标偏移量
        let triangleOffset = 14
        // 角标中心点位置
        let triangleCenter = 0
        // target长度边界处理
        let leftPosFix = 0
        const { placement } = props
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popperRef.value!
        const { top, left, width, height } = targetWrapperRef.value!.getBoundingClientRect()

        const [dir, sub] = placement.split('-');
        console.log('updateTarget', dir, sub)

        // veritcal
        if (dir === 'top') {
            // top
            state.top = top + window.scrollY - popperHeight - triangleSize * 2
        } else if (dir === 'bottom') {
            // bottom
            state.top = top + window.scrollY + height + triangleSize * 2
        } else if (['left', 'right'].includes(dir)) {
            // left or right
            if (sub === 'start') {
                state.top = top + window.scrollY + height * 0.5
            } else if (sub === 'end') {
                state.top = top + window.scrollY + height * 0.5
            } else {
                state.top = top + window.scrollY + height * 0.5
            }
        }

        // horizontal
        if (sub === 'start') {
            // start
            leftPosFix = width * 0.5 <= triangleOffset ? width * 0.5 : triangleOffset
            triangleCenter = left - marginOffset - triangleOffset - triangleSize

            state.left = window.scrollX + triangleCenter + leftPosFix
        } else if (sub === 'end') {
            // end
            leftPosFix = width * 0.5 <= triangleOffset ? width * 0.5 : width - triangleOffset
            triangleCenter = left - marginOffset - popperWidth + triangleOffset + triangleSize

            state.left = window.scrollX + triangleCenter + leftPosFix
        } else if (!sub) {
            // center
            triangleOffset = popperWidth * 0.5
            triangleCenter = left - marginOffset - triangleOffset

            state.left = window.scrollX + triangleCenter + width * 0.5
        }

        // left
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

    const onChange = (event: Event) => {
        event.preventDefault()
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
