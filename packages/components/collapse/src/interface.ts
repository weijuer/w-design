import { type PropType, type ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type CollapseProvide = {
    toggle: (name: Numeric, expanded: boolean) => void
    isExpanded: (name: Numeric) => boolean
}

export const COLLAPSE_KEY: InjectionKey<CollapseProvide> = Symbol('collpase')

export const collapseProps = {
    activeKey: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
        dafault: ''
    },
    accordion: Boolean,
    shadowed: Boolean,
    splitted: Boolean,
    bordered: {
        type: Boolean,
        default: false
    }
}

export const collapseEmits = ['change', 'update:activeKey']

export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export type CollapseEmits = typeof collapseEmits
