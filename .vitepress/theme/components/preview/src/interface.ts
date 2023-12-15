import { type PropType, type ExtractPropTypes, Slot } from 'vue'

export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const previewProps = {
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: ''
    },
    title: String,
    desc: [String, Object] as PropType<string | Slot>,
    status: Boolean,
}

export const previewEmits = ['click']

export type PreviewProps = ExtractPropTypes<typeof previewProps>
export type PreviewEmits = typeof previewEmits