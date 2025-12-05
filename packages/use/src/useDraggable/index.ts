import type { MaybeRefOrGetter } from 'vue'
import type { PointerType, Position, Size } from '../types'
import { ref, toRefs, computed, reactive, toValue } from 'vue'
import { useEventListener } from '../useEventListener'

export interface useDraggableOptions {
    /**
     * Only start the dragging when click on the element directly
     * @default false
     */
    exact?: MaybeRefOrGetter<boolean>

    /**
     * Prevent events defaults
     * @default false
     */
    preventDefault?: MaybeRefOrGetter<boolean>

    /**
     * Prevent events propagation
     * @default false
     */
    stopPropagation?: MaybeRefOrGetter<boolean>

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

    /**
     * Disabled drag and drop.
     *
     * @default false
     */
    disabled?: MaybeRefOrGetter<boolean>
}

export function useDraggable(
    target: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>,
    options: useDraggableOptions = {}
) {
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

    const position = reactive<Position>(toValue(initialValue) ?? { x: 0, y: 0 })

    const isDragging = ref(false)

    const filterEvent = (e: PointerEvent) => {
        if (pointerTypes) return pointerTypes.includes(e.pointerType as PointerType)
        return true
    }

    const handleEvent = (event: PointerEvent) => {
        if (toValue(preventDefault)) {
            event.preventDefault()
        }
        if (toValue(stopPropagation)) {
            event.stopPropagation()
        }
    }

    const start = (event: PointerEvent) => {
        if (toValue(options.disabled) || !filterEvent(event)) return
        if (toValue(exact) && event.target !== toValue(target)) return

        isDragging.value = true

        position.x = event.clientX
        position.y = event.clientY

        onStart?.(position, event)
        handleEvent(event)
    }

    const move = (event: PointerEvent) => {
        if (toValue(options.disabled) || !filterEvent(event)) return

        if (!isDragging.value) {
            return
        }

        if (axis === 'x' || axis === 'both') {
            position.x = event.clientX
        }

        if (axis === 'y' || axis === 'both') {
            position.y = event.clientY
        }

        onMove?.(position, event)
        handleEvent(event)
    }

    const end = (event: PointerEvent) => {
        if (toValue(options.disabled) || !filterEvent(event)) return

        isDragging.value = false
        onEnd?.(position, event)
        handleEvent(event)
    }

    const config = () => ({
        capture: options.capture ?? true,
        passive: !toValue(preventDefault)
    })
    useEventListener(draggingHandle, 'pointerdown', start, config)
    useEventListener(draggingElement, 'pointermove', move, config)
    useEventListener(draggingElement, 'pointerup', end, config)

    return {
        ...toRefs(position),
        position,
        isDragging,
        style: computed(() => `left: ${position.x}px; top: ${position.y}px;`)
    }
}
