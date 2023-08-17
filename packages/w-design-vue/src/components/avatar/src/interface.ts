import { type PropType, type ExtractPropTypes } from 'vue'

export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const avatarProps = {
    icon: {
        type: Object,
        default: () => { }
    },
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: ''
    },
    square: Boolean,
    status: Boolean,
    statusColor: String,
    statusStyle: Object,
    alt: String,
    src: String,
    srcSet: String,
}

export const avatarEmits = ['click']

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarEmits = typeof avatarEmits