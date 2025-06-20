import { ref, Ref, toRefs, computed } from 'vue'
import { MaybeRefOrGetter, PointerType, Position, Size, toValue } from '../_utils'
import { useEventListener } from '../useEventListener'

export interface useResizableOptions {
    /**
     * 是否为精确匹配
     * @default false
     */
    exact?: boolean

    /**
     * Prevent events defaults
     * @default false
     */
    preventDefault?: boolean

    /**
     * Prevent events propagation
     * @default false
     */
    stopPropagation?: boolean

    /**
     * Whether dispatch events in capturing phase
     *
     * @default true
     */
    capture?: boolean

    /**
     * Element to attach `pointermove` and `pointerup` events to.
     *
     * @default window
     */
    draggingElement?: MaybeRefOrGetter<
        HTMLElement | SVGElement | Window | Document | null | undefined
    >

    /**
     * Element for calculating bounds (If not set, it will use the event's target).
     *
     * @default undefined
     */
    containerElement?: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>

    /**
     * Handle that triggers the drag event
     *
     * @default target
     */
    handle?: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>

    /**
     * Pointer types that listen to.
     *
     * @default ['mouse', 'touch', 'pen']
     */
    pointerTypes?: PointerType[]

    /**
     * Initial position of the element.
     *
     * @default { x: 0, y: 0 }
     */
    initialValue?: MaybeRefOrGetter<Position>

    /**
     * Callback when the dragging starts. Return `false` to prevent dragging.
     */
    onStart?: (position: Position, event: PointerEvent) => void | false

    /**
     * Callback during dragging.
     */
    onMove?: (position: Position, event: PointerEvent) => void

    /**
     * Callback when dragging end.
     */
    onEnd?: (position: Position, event: PointerEvent) => void

    /**
     * Axis to drag on.
     *
     * @default 'both'
     */
    axis?: 'x' | 'y' | 'both'
}

export function useResizable<T>(target: Ref<T>, options: useResizableOptions = {}) {
    const {
        pointerTypes,
        preventDefault,
        stopPropagation,
        exact,
        onMove,
        onEnd,
        onStart,
        initialValue,
        axis = 'both',
        draggingElement = window,
        containerElement,
        handle: draggingHandle = target
    } = options

    const size = ref<Size>({ width: 200, height: 200 })
    const position = ref<Position>(toValue(initialValue) ?? { x: 0, y: 0 })

    let isResizing = ref(false)
    let startX = 0
    let startY = 0

    const handleEvent = (event: PointerEvent) => {
        if (toValue(preventDefault)) {
            event.preventDefault()
        }
        if (toValue(stopPropagation)) {
            event.stopPropagation()
        }
    }

    const updateSize = (width: number, height: number) => {
        size.value.width = width
        size.value.height = height
    }

    const start = (event: PointerEvent) => {
        event.stopPropagation()

        isResizing.value = true

        position.value.x = event.clientX
        position.value.y = event.clientY
        startX = event.clientX - size.value.width
        startY = event.clientY - size.value.height

        onStart?.(position.value, event)
        handleEvent(event)
    }

    const move = (event: PointerEvent) => {
        if (!isResizing.value) {
            return
        }

        if (axis === 'x' || axis === 'both') {
            position.value.x = event.clientX
            const newWidth = event.clientX - startX
            updateSize(newWidth, size.value.height)
        }

        if (axis === 'y' || axis === 'both') {
            position.value.y = event.clientY
            const newHeight = event.clientY - startY
            updateSize(size.value.width, newHeight)
        }

        onMove?.(position.value, event)
        handleEvent(event)
    }

    const end = (event: PointerEvent) => {
        isResizing.value = false
        onEnd?.(position.value, event)
        handleEvent(event)
    }

    const config = { capture: options.capture ?? true }
    useEventListener(draggingHandle, 'pointerdown', start, config)
    useEventListener(draggingElement, 'pointermove', move, config)
    useEventListener(draggingElement, 'pointerup', end, config)

    return {
        ...toRefs(position),
        position,
        isResizing,
        style: computed(() => {
            const { width, height } = size.value

            return {
                width: `${width}px`,
                height: `${height}px`
            }
        })
    }
}
