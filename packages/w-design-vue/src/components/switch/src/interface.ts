import { type PropType, type ExtractPropTypes } from 'vue'

export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger'
export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const switchProps = {
    modelValue: Boolean,
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: 'default'
    },
    type: {
        type: String as PropType<Type>,
        default: 'default'
    },
    name: String,
    autoFocus: Boolean,
    loading: Boolean,
    disabled: Boolean,
}

export const switchEmits = ['update:modelValue', 'change']

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = typeof switchEmits