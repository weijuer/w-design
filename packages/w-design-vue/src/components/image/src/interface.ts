import { type PropType, type ExtractPropTypes } from 'vue'
import { type Numeric, Size, Type } from '../../_utils/typings'

export type ImageLoading = 'eager' | 'lazy'
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export type ImagePosition = 'center' | 'top' | 'right' | 'bottom' | 'left';

export const imageProps = {
    type: {
        type: String as PropType<Type>,
        default: ''
    },
    objectFit: {
        type: String as PropType<ImageFit>,
        default: 'fit'
    },
    objectPosition: {
        type: String as PropType<ImagePosition>,
        default: 'center'
    },
    loading: {
        type: String as PropType<ImageLoading>,
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

export const imageEmits = ['load', 'error']

export type ImageProps = ExtractPropTypes<typeof imageProps>
export type ImageEmits = typeof imageEmits