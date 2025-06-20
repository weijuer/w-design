import { type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export const collapseItemProps = {
    title: {
        type: [String, Object],
        dafault: ''
    },
    name: {
        type: [String, Number],
        default: ''
    },
    disabled: Boolean,
    readonly: Boolean
}

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
