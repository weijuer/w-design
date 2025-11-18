import { PropType, type ExtractPropTypes } from 'vue'
import { type Orientation } from '../../_utils'

export const scrollShadowProps = {
    size: {
        type: Number,
        default: 40
    },
    offset: {
        type: Number,
        default: 0
    },
    orientation: {
        type: String as PropType<Orientation>,
        dafault: 'vertical'
    },
    className: String,
    hideScrollBar: Boolean,
    disabled: Boolean
}

export type ScrollShadowProps = ExtractPropTypes<typeof scrollShadowProps>
