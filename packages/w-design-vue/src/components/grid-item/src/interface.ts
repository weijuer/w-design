import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export const gridItemProps = {
    offset: {
        type: [String, Number] as PropType<Numeric>,
        dafault: ''
    },
    span: {
        type: [String, Number] as PropType<Numeric>,
        default: ''
    }
}

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>
