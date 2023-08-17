import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export type Status = "primary" | "success" | "warning" | "info" | "danger"

export const badgeProps = {
    type: {
        type: String as PropType<Status>,
        default: ''
    },
    color: {
        type: String,
        default: ""
    },
    outlined: Boolean,
    light: Boolean,
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
