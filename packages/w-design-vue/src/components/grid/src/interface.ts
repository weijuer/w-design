import { type PropType, type ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type GridProvide = {
    toggle: (name: Numeric, expanded: boolean) => void;
    isExpanded: (name: Numeric) => boolean;
};

export const GIRD_KEY: InjectionKey<GridProvide> = Symbol('grid');

export const gridProps = {
    activeKey: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
        dafault: ''
    },
    accordion: Boolean,
    bordered: {
        type: Boolean,
        default: true
    },
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
