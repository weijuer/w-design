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
    objectFit: {
        type: String as PropType<InputFit>,
        default: 'fit'
    },
    objectPosition: {
        type: String as PropType<InputPosition>,
        default: 'center'
    },
    loading: {
        type: String as PropType<InputLoading>,
        default: 'eager'
    },
    size: String as PropType<Size>,
    src: String,
    alt: String,
    srcSet: String,
    fallbackSrc: String,
    width: [Number, String] as PropType<Numeric>,
    height: [Number, String] as PropType<Numeric>,
    radius: [Number, String] as PropType<Numeric>,
    rounded: Boolean,
    blurred: Boolean,
    zoomed: Boolean,
}

export const inputEmits = ['load', 'error']

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits