import type { PropType } from 'vue'
import { ExtractPropTypes } from 'vue'

export type Size = 'tiny' | 'small' | 'medium' | 'large'

export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'brand' | 'foucs'

export type AttrType = 'button' | 'submit' | 'reset'

export const buttonProps = {
    type: {
        type: String as PropType<Type>,
        dafault: 'default'
    },
    size: String as PropType<Size>,
    icon: {
        type: String,
        default: ''
    },
    attrType: {
        type: String as PropType<AttrType>,
        default: 'button'
    },
    outline: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
} as const

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonAttrType = ButtonProps['attrType']
