import { type PropType, type ExtractPropTypes } from 'vue'
import { type Numeric, Size, Type } from '../../_utils/typings'

export type InputLoading = 'eager' | 'lazy'
export type InputFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type InputPosition = 'center' | 'top' | 'right' | 'bottom' | 'left';

export const inputProps = {
    type: {
        type: String as PropType<Type>,
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
    size: String as PropType<Size>,
    label: String,
    name: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    bordered: Boolean,
    autofocus: Boolean,
    spellcheck: {
        type: Boolean,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: null,
    },
    readonly: {
        type: Boolean,
        default: null,
    },
}

export const inputEmits = ['load', 'error']

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits