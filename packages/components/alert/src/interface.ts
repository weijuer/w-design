import { PropType, type ExtractPropTypes } from 'vue'
import { type Type } from '../../_utils'

export const alertProps = {
    type: {
        type: String as PropType<Type>,
        default: ''
    },
    description: [String, Object],
    className: String,
    title: String,
    closable: Boolean
}

export const alertEmits = ['click', 'close']

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertEmits = typeof alertEmits
