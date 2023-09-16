import { PropType, type ExtractPropTypes } from 'vue'
import { inputProps, inputEmits } from '../../input/src/interface'
import { type Numeric } from '../../_utils'

export const inputNumberProps = {
    ...inputProps,
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
    splitted: Boolean
}

export const inputNumberEmits = [...inputEmits, 'press-enter']

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>
export type InputNumberEmits = typeof inputNumberEmits
