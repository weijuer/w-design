import { type ExtractPropTypes } from 'vue'
import { inputProps, inputEmits } from '../../input/src/interface'

export const inputMaskProps = {
    ...inputProps,
    slotChar: {
        type: String,
        default: '_'
    },
    mask: {
        type: String,
        default: undefined
    },
    splitted: Boolean
}

export const inputMaskEmits = [...inputEmits, 'update:modelValue', 'focus', 'blur', 'keydown', 'complete', 'keypress', 'paste']

export type InputMaskProps = ExtractPropTypes<typeof inputMaskProps>
export type InputMaskEmits = typeof inputMaskEmits
