import { MaybeRef, isRef, onUnmounted, unref, watchEffect } from 'vue'

export function useEventListener(...args: any[]) {
    let target: MaybeRef<EventTarget> | undefined
    let event: string
    let listener: any
    let options: any

    if (typeof args[0] === 'string') {
        ;[event, listener, options] = args
        target = window
    } else {
        ;[target, event, listener, options] = args
    }

    if (!target) {
        return
    }

    const stopWatch = watchEffect(() => {
        if (isRef(target)) {
            if (target.value) {
                target = unref(target)
                ;(target as HTMLElement).addEventListener(event, listener, options)
            }
        } else {
            ;(target as HTMLElement).addEventListener(event, listener, options)
        }
    })

    onUnmounted(() => {
        stopWatch()
        ;(target as HTMLElement).removeEventListener(event, listener, options)
    })
}
