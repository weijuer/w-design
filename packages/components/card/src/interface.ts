import { type PropType, type ExtractPropTypes } from 'vue'

export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const previewProps = {
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: ''
    },
    type: String,
    title: { default: () => {}, type: [Object, String] },
    footer: { default: () => {}, type: [Object, String] },
    desc: String,
    hoverable: Boolean,
    loading: Boolean,
    bordered: Boolean
}

export const previewEmits = ['click']

export type PreviewProps = ExtractPropTypes<typeof previewProps>
export type PreviewEmits = typeof previewEmits
