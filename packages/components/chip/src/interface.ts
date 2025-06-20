import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number
export type Size = 'small' | 'medium' | 'large'
export type Status = 'primary' | 'success' | 'warning' | 'info' | 'danger'

export const chipProps = {
    type: {
        type: String as PropType<Status>,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    size: String as PropType<Size>,
    outlined: Boolean,
    flat: Boolean,
    disabled: Boolean,
    closeable: Boolean
}

export const chipEmits = ['close']

export type ChipProps = ExtractPropTypes<typeof chipProps>
export type ChipEmits = typeof chipEmits
