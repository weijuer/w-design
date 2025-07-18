import { unref } from 'vue'
import { AnyFn, MaybeRefOrGetter } from './types'

/**
 * Get the value of value/ref/getter.
 */
export function toValue<T>(r: MaybeRefOrGetter<T>): T {
    return typeof r === 'function' ? (r as AnyFn)() : unref(r)
}
