import { ref, unref } from 'vue'

export interface useCounterOptions {
    min?: number
    max?: number
}

export function useCounter(initialValue: number = 0, options: useCounterOptions = {}) {
    let _initialValue = unref(initialValue)
    const count = ref(initialValue)

    const { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = options

    const increment = (delta: number = 1) => (count.value = Math.min(max, count.value + delta))
    const decrement = (delta: number = 1) => (count.value = Math.max(min, count.value - delta))
    const get = () => count.value
    const set = (val: number) => (count.value = Math.max(min, Math.min(max, val)))
    const reset = (val = _initialValue) => {
        _initialValue = val
        return set(val)
    }

    return {
        count,
        increment,
        decrement,
        get,
        set,
        reset
    }
}
