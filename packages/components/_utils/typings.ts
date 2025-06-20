import { type PropType } from 'vue'

export type Numeric = string | number
export type RecordType = Record<string, any>

export type Size = 'small' | 'medium' | 'large'
export type Orientation = 'vertical' | 'horizontal'
export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'

export const unknownProp = null as unknown as PropType<unknown>
export const unknownProps = null as unknown as PropType<unknown[]>
