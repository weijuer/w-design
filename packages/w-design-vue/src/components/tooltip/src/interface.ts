import { PropType, type ExtractPropTypes } from 'vue'
import { Type } from 'src/components/_utils'

export const tooltipProps = {
    type: {
        type: String as PropType<Type>,
    },
    trigger: {
        type: String,
        validate(value: string) {
            return !['mouseenter', 'click'].includes(value);
        },
        default: 'mouseenter'
    },
    placement: {
        type: String,
        validate(value: string) {
            return ![
                'top-left',
                'top',
                'top-right',
                'bottom-left',
                'bottom',
                'bottom-right'
            ].includes(value);
        },
        default: 'top-left'
    },
    content: [String, Object],
    className: String
}

export const tooltipEmits = ['change', 'close']

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
export type TooltipEmits = typeof tooltipEmits
