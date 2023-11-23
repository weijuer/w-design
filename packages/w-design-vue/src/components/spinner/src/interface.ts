import { PropType, type ExtractPropTypes } from 'vue'
import { Type, Size } from 'src/components/_utils'

export const spinnerProps = {
    type: {
        type: String as PropType<Type>,
    },
    size: {
        type: String as PropType<Size>,
    },
    label: [String, Object],
    className: String,
    color: String
}

export const spinnerEmits = ['update:modelValue', 'change', 'close']

export type SpinnerProps = ExtractPropTypes<typeof spinnerProps>
export type SpinnerEmits = typeof spinnerEmits
