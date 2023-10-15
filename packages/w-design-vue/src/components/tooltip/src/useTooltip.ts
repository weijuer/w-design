import { SetupContext, computed, onMounted, onUnmounted, reactive, ref, useSlots } from 'vue'
import { TooltipEmits, TooltipProps } from './interface'
import { useEventListener } from 'Hooks'

export const useTooltip = (props: TooltipProps, emit: SetupContext<TooltipEmits>['emit']) => {
    const popperRef = ref<HTMLElement>()
    const targetRef = ref<HTMLElement>()

    const visible = ref(false)
    const state = reactive({
        top: 0,
        left: 0
    })

    const tooltipClass = computed(() => {
        const { className, type, placement } = props

        return [
            className,
            type ? 'w-tooltip__' + type : '',
            placement ? 'w-tooltip__' + placement : ''
        ]
    })

    const tooltipStyle = computed(() => {
        return {
            top: state.top + 'px',
            left: state.left + 'px'
        };
    })

    const target = computed(() => {
        const slots = useSlots()
        return slots.default ? slots.default()[0] : targetRef.value
    })

    const popper = computed(() => popperRef.value)

    const init = () => {
        // 绑定属性
        // target.value?.setAttribute('data-v-target', '');
        // target移形换影
        // popper.value?.parentNode?.insertBefore(target.value, popper.value.nextSibling);
        // popper移形换影
        // document.body.appendChild(popper.value!);
        // 绑定事件
        initEvents()
    }

    const initEvents = () => {
        const { trigger } = props
        // 监听target事件
        // useEventListener(target.value, trigger, handleTrigger);
        useEventListener(window, 'resize', updateTarget);
        useEventListener(window, 'scroll', updateTarget);

        // 
        if (trigger === 'mouseenter') {
            // useEventListener(target.value, 'mouseleave', handleUnTrigger);
        } else {
            useEventListener(document, 'click', handleDocumentClick);
        }
    }

    const handleTrigger = () => {
        const { trigger } = props

        updateTarget();
        visible.value = trigger === 'click' ? !visible.value : true;
    }

    const handleUnTrigger = () => {
        visible.value = false;
    }

    const updateTarget = () => {
        // 角标大小
        const triangleSize = 6;
        // 外部偏移量-防止贴边
        const marginOffset = 16;
        // 角标偏移量
        let triangleOffset = 14;
        // 角标中心点位置
        let triangleCenter = 0;
        // target长度边界处理
        let leftPosFix = 0;
        const { placement } = props
        const { offsetWidth: popperWidth, offsetHeight: popperHeight } = popper.value!
        const { top, left, width, height } = target.value!.getBoundingClientRect()

        // veritcal
        if (placement.startsWith('top')) {
            state.top = top + window.scrollY - popperHeight - triangleSize * 2
        } else if (placement.startsWith('bottom')) {
            state.top = top + window.scrollY + height + triangleSize * 2
        }

        // horizontal
        if (placement.endsWith('left')) {
            leftPosFix = width * 0.5 <= triangleOffset ? width * 0.5 : triangleOffset
            triangleCenter = left - marginOffset - triangleOffset - triangleSize

            state.left = window.scrollX + triangleCenter + leftPosFix
        } else if (placement.endsWith('right')) {
            leftPosFix = width * 0.5 <= triangleOffset ? width * 0.5 : width - triangleOffset
            triangleCenter = left - marginOffset - popperWidth + triangleOffset + triangleSize

            state.left = window.scrollX + triangleCenter + leftPosFix
        } else {
            // center
            triangleOffset = popperWidth * 0.5
            triangleCenter = left - marginOffset - triangleOffset

            state.left = window.scrollX + triangleCenter + width * 0.5
        }
    }

    const handleDocumentClick = (e: Event) => {
        const _target = target.value;
        const popper = popperRef.value;

        if (!_target || _target.contains(e.target) || !popper || popper.contains(e.target)) {
            return;
        }

        visible.value = false;
    }

    const destory = () => {
        if (popper.value) {
            visible.value = false;
            document.body.removeChild(popper.value);
        }
    }

    const onClose = () => {
        emit('close')
    }

    const onChange = (event: Event) => {
        event.preventDefault()
        emit('change', visible.value)
    }

    onMounted(() => {
        init()
    })

    onUnmounted(() => {
        destory()
    })

    return {
        tooltipClass,
        tooltipStyle,
        visible,
        onClose,
        onChange
    }
}
