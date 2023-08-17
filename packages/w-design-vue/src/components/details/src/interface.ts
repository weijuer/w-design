import { type PropType, type ExtractPropTypes } from 'vue'

export type Size = number | 'default' | 'small' | 'medium' | 'large'

export const detailsProps = {
    size: {
        type: [Number, String] as PropType<Size>,
        dafault: ''
    },
    square: Boolean,
    status: Boolean,
    summary: String,
}

export const detailsEmits = ['click']

export type DetailsProps = ExtractPropTypes<typeof detailsProps>
export type DetailsEmits = typeof detailsEmits