import { type PropType, type ExtractPropTypes } from 'vue'

export type Type = 'line' | 'circle' | 'dashboard'
export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const progressProps = {
    percent: {
        type: [Number, String],
        default: 0
    },
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: 'default'
    },
    type: {
        type: String as PropType<Type>,
        default: 'line'
    }
}

export const progressEmits = ['click']

export type ProgressProps = ExtractPropTypes<typeof progressProps>
export type ProgressEmits = typeof progressEmits