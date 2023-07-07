import type { PropType } from 'vue'
import { ExtractPropTypes } from 'vue'

export type Direction = 'bottom' | 'top' | 'left' | 'right'

export const stepProps = {
    target: String,
    header: {
        type: [String, Object]
    },
    content: {
        type: [String, Object]
    },
    actions: {
        type: [Boolean, Object],
        default: true
    },
    // 角标位置 top✔ | left | right | bottom
    direction: {
        type: String as PropType<Direction>,
        validator(value: string) {
            return ['bottom', 'top', 'left', 'right'].indexOf(value) !== -1;
        },
        default: 'top'
    },
    isFirst: Boolean,
    isLast: Boolean
}

export const stepEmits = {
    next: (evt: MouseEvent) => evt instanceof MouseEvent,
    prev: (evt: MouseEvent) => evt instanceof MouseEvent,
    skip: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type StepProps = ExtractPropTypes<typeof stepProps>
export type StepEmits = typeof stepEmits