import { type ExtractPropTypes } from 'vue'
import { inputProps, inputEmits } from '../../input/src/interface'

export const textareaProps = Object.assign({}, inputProps, {
    autosize: {
        type: [Boolean, Object],
        default: true
    },
    modelValue: {
        type: String,
        default: ''
    },
    rows: {
        type: String,
        default: '6'
    },
    defaultValue: String,
    clearable: Boolean,
    showCount: Boolean
})

export const textareaEmits = [...inputEmits, 'press-enter']

export type TextareaProps = ExtractPropTypes<typeof textareaProps>
export type TextareaEmits = typeof textareaEmits
