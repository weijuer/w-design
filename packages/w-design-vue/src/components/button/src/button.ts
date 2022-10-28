import type { ButtonHTMLAttributes } from "vue"
import { ExtractPropTypes } from "vue"

export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
]

export const buttonNativeTypes = ['button', 'submit', 'reset']

export const buttonProps = {
    type: {
        type: String,
        validator(value: string) {
            return buttonTypes.includes(value)
        }
    },
    size: String,
    icon: {
        type: String,
        default: ''
    },
    nativeType: {
        type: String,
        validator(value: string) {
            return buttonNativeTypes.includes(value)
        }
    },
    outline: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
}

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']