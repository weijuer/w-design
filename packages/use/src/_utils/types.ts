import { ComputedRef, Ref } from 'vue'

/**
 * Void function
 */
export type Fn = () => void

/**
 * Any function
 */
export type AnyFn = (...args: any[]) => any

/**
 * Maybe it's a ref, or a plain value
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * Maybe it's a ref, or a plain value, or a getter function
 *
 * ```ts
 * type MaybeRefOrGetter<T> = (() => T) | T | Ref<T> | ComputedRef<T>
 * ```
 */
export type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)

/**
 * Maybe it's a computed ref, or a readonly value, or a getter function
 */
export type ReadonlyRefOrGetter<T> = ComputedRef<T> | (() => T)

export type PointerType = 'mouse' | 'touch' | 'pen'

export interface Position {
    x: number
    y: number
}

export interface Size {
    width: number
    height: number
}
