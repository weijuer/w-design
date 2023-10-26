// src/hooks/useThrottleFn.ts

import { onBeforeUnmount } from 'vue';

export function useThrottleFn<T extends (...args: any[]) => any>(
    func: T,
    delay?: number
): (...args: Parameters<T>) => void {
    //   let lastExecutionTime: number | null = null;
    let isThrottled = false;

    const throttledFunction = (...args: Parameters<T>) => {
        if (!isThrottled) {
            func(...args);
            //   lastExecutionTime = Date.now();
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay || 500);
        }
    };

    onBeforeUnmount(() => {
        isThrottled = false;
    });

    return throttledFunction;
}
