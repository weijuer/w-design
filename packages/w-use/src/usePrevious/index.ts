import { watch, Ref, shallowRef, readonly } from 'vue'

export function usePrevious<T>(value: Ref<T>): Readonly<Ref<T | undefined>>
export function usePrevious<T>(value: Ref<T>, initialValue: T): Readonly<Ref<T>>
export function usePrevious<T>(value: Ref<T>, initialValue?: T) {
    const previous = shallowRef<T | undefined>(initialValue)

    watch(
        value,
        (_, oldValue) => {
            previous.value = oldValue
        },
        { flush: 'sync' }
    )

    return readonly(previous)
}