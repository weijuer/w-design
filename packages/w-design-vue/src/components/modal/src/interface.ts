import { type ExtractPropTypes } from 'vue'

export type ModalMode = 'vertical' | 'horizontal' | 'vertical-right' | 'inline'
export type ModalTheme = 'light' | 'dark'

export const modalProps = {
    modelValue: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: 'body'
    },
    disabled: Boolean
}

export const modalEmits = ['close', 'update:modelValue']

export type ModalProps = ExtractPropTypes<typeof modalProps>
export type ModalEmits = typeof modalEmits
