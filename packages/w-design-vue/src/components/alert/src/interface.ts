import { PropType, type ExtractPropTypes } from 'vue'
import { type Type } from 'src/components/_utils'

export const alertProps = {
    type: {
        type: String as PropType<Type>,
        default: ''
    },
    className: String,
    title: String,
    description: String,
    closable: Boolean,
}

export const alertEmits = ['click', 'close']

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertEmits = typeof alertEmits
