import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export type Position = 'left' | 'right' | 'center'

export const dividerProps = {
    dashed: Boolean,
    orientation: {
        type: String as PropType<Position>,
        default: 'center'
    },
    vertical: Boolean
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
