import { type PropType, type ExtractPropTypes } from 'vue'
import { type Numeric, Size, Type } from '../../_utils/typings'

export type LoadingType = 'eager' | 'lazy'

export const imageProps = {
    type: {
        type: String as PropType<Type>,
        default: ''
    },
    size: String as PropType<Size>,
    src: String,
    alt: String,
    srcSet: String,
    objectFit: String,
    objectPosition: String,
    width: [Number, String] as PropType<Numeric>,
    height: [Number, String] as PropType<Numeric>,
    radius: [Number, String] as PropType<Numeric>,
    loading: String as PropType<LoadingType>,
    rounded: Boolean,
    blurred: Boolean,
    zoomed: Boolean,
}

export const imageEmits = ['close']

export type ImageProps = ExtractPropTypes<typeof imageProps>
export type ImageEmits = typeof imageEmits