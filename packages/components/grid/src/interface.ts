import { type PropType, type ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type GridProvide = {
    auto: Boolean
    toggle: (name: Numeric, expanded: boolean) => void
}

export const GIRD_KEY: InjectionKey<GridProvide> = Symbol('grid')

export const gridProps = {
    activeKey: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
        dafault: ''
    },
    auto: Boolean
}

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

export const gridEmits = ['change', 'update:activeKey']

export type GridProps = ExtractPropTypes<typeof gridProps>
export type GridItemProps = ExtractPropTypes<typeof gridItemProps>
export type GridEmits = typeof gridEmits
