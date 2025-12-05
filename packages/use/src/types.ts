/**
 * Void function
 */
export type Fn = () => void

/**
 * Any function
 */
export type AnyFn = (...args: any[]) => any

export type PointerType = 'mouse' | 'touch' | 'pen'

export interface Position {
    x: number
    y: number
}

export interface Size {
    width: number
    height: number
}
