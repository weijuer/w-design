import { type PropType, type ExtractPropTypes } from 'vue'

export type Size = number | 'default' | 'small' | 'medium' | 'large'

export type Shape = "circle" | "square"

export const avatarProps = {
    icon: {
        type: Object,
        default: () => { }
    },
    shape: {
        type: String as PropType<Shape>,
        dafault: 'square'
    },
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: ''
    },
    alt: String,
    src: String,
    srcSet: String,
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
