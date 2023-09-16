import { type PropType, type ExtractPropTypes } from 'vue'
import { Numeric, Size, Type } from '../../_utils'

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

export type ValidityState = 'valid' | 'invalid'
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
    validityState: {
        type: String as PropType<ValidityState>,
        default: ''
    },
    theme: {
        type: String as PropType<Type>,
        default: ''
    },
    size: String as PropType<Size>,
    defaultValue: [Number, String] as PropType<Numeric>,
    label: String,
    name: String,
    maxlength: [Number, String],
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    required: Boolean,
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
