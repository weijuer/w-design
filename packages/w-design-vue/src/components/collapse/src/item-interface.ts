import { ExtractPropTypes } from 'vue'

export const collapseProps = {
    title: {
        type: String,
        dafault: ''
    },
    accordion: Boolean,
    bordered: {
        type: Boolean,
        default: true
    },
} as const

export const emits = {
    change: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export type CollapseEmits = typeof emits
