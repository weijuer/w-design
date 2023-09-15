import { PropType, type ExtractPropTypes } from 'vue'
import { type Numeric } from '../../_utils'

export const inputNumberProps = {
    icon: {
        type: Object
    },
    min: {
        type: [String, Number] as PropType<Numeric>,
        default: 0
    },
    max: {
        type: [String, Number] as PropType<Numeric>,
        default: 10
    },
    step: {
        type: [String, Number] as PropType<Numeric>,
        default: 1
    },

}

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>
