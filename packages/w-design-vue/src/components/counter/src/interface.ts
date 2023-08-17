import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export type Status = "primary" | "success" | "warning" | "info" | "danger"

export type Position = "top-left" | "bottom-left" | "bottom-right"

export const counterProps = {
    content: [Number, String],
    status: {
        type: String as PropType<Status>,
        default: ''
    },
    color: {
        type: String,
        default: ""
    },
    dot: Boolean,
    max: {
        type: [Number, String],
        dafault: ''
    },
    offset: {
        type: Array as unknown as PropType<[Numeric, Numeric]>,
        dafault: ''
    },
    showZero: {
        type: Boolean,
        default: true
    },
    position: {
        type: String as PropType<Position>,
        default: 'top-right'
    }
}

export type CounterProps = ExtractPropTypes<typeof counterProps>
