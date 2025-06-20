import { onBeforeUnmount } from 'vue'

export function useDebounceFn<T extends (...args: any[]) => any>(
    func: T,
    delay?: number
): (...args: Parameters<T>) => void {
    let timeoutId: number | any = null

    const debouncedFunction = (...args: Parameters<T>) => {
        // Clear any existing timeout
        clearTimeout(timeoutId!)
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay || 500)
    }

    onBeforeUnmount(() => {
        clearTimeout(timeoutId!)
    })

    return debouncedFunction
}
