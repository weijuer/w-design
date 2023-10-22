import { PropType, type ExtractPropTypes } from 'vue'
import { Numeric, Type } from 'src/components/_utils'

export type Trigger = 'hover' | 'click'

export const tooltipProps = {
    type: {
        type: String as PropType<Type>,
    },
    trigger: {
        type: String as PropType<Trigger>,
        validate(value: string) {
            return !['hover', 'click'].includes(value);
        },
        default: 'hover'
    },
    placement: {
        type: String,
        validate(value: string) {
            return ![
                'top-start',
                'top',
                'top-end',
                'bottom-start',
                'bottom',
                'bottom-end',
                'left-start',
                'left',
                'left-end',
                'right-start',
                'right',
                'right-end'
            ].includes(value);
        },
        default: 'top-start'
    },
    openDelay: {
        type: [String, Number] as PropType<Numeric>,
        default: 0
    },
    closeDelay: {
        type: [String, Number] as PropType<Numeric>,
        default: 200
    },
    content: [String, Object],
    modelValue: Boolean,
    defaultOpen: Boolean,
    className: String,
    color: String,
    arrowed: Boolean
}

export const tooltipEmits = ['update:modelValue', 'change', 'close']

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
export type TooltipEmits = typeof tooltipEmits
