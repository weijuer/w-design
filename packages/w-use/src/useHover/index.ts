import { ref, Ref } from 'vue';
import { Position } from '../_utils';
import { useEventListener } from '../useEventListener';

export interface useHoverOptions {
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
}

export function useHover<T>(target: Ref<T>, options: useHoverOptions = {}) {
    const isHovered = ref(false);

    const toggle = (entering: boolean) => {
        isHovered.value = entering;
    }

    useEventListener(target, 'mouseenter', () => toggle(true), { passive: true });
    useEventListener(target, 'mouseleave', () => toggle(false), { passive: true });

    return { isHovered };
}