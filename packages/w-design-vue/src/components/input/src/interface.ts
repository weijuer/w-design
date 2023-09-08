import { type PropType, type ExtractPropTypes } from 'vue'
import { type Numeric, Size } from '../../_utils/typings'

export type InputType =
    | 'tel'
    | 'url'
    | 'date'
    | 'file'
    | 'text'
    | 'time'
    | 'week'
    | 'color'
    | 'digit'
    | 'email'
    | 'image'
    | 'month'
    | 'radio'
    | 'range'
    | 'reset'
    | 'button'
    | 'hidden'
    | 'number'
    | 'search'
    | 'submit'
    | 'checkbox'
    | 'password'
    | 'textarea'
    | 'datetime-local'

export type InputFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
export type InputPosition = 'center' | 'top' | 'right' | 'bottom' | 'left'

export const inputProps = {
    type: {
        type: String as PropType<InputType>,
        default: ''
    },
    modelValue: {
        type: [Number, String] as PropType<Numeric>,
        default: ''
    },
    description: {
        type: [String, Object]
    },
    errorMessage: {
        type: [String, Object]
    },
    spellcheck: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    },
    size: String as PropType<Size>,
    defaultValue: String,
    label: String,
    name: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    bordered: Boolean,
    autofocus: Boolean,
    clearable: Boolean,

}

export const inputEmits = [
    'blur',
    'focus',
    'clear',
    'keypress',
    'clickInput',
    'endValidate',
    'startValidate',
    'clickLeftIcon',
    'clickRightIcon',
    'update:modelValue'
]

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
