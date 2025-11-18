import { PropType, type ExtractPropTypes } from 'vue'
import { type Size, Type, Numeric } from '../../_utils'

export enum PaginationItemType {
    NEXT = 'next',
    PREV = 'prev',
    DOTS = 'dot'
}

export type PaginationItem = {
    type: string
    text: Numeric
    number: number
    active?: boolean
}

type VariantType = 'flat' | 'bordered' | 'light' | 'faded'

export const paginationProps = {
    type: {
        type: String as PropType<Type>
    },
    size: {
        type: String as PropType<Size>
    },
    defaultCurrent: {
        type: Number,
        default: 1
    },
    defaultPageSize: {
        type: Number,
        default: 10
    },
    total: {
        type: Number,
        default: 0
    },
    pageCount: {
        type: Number,
        default: 0
    },
    siblings: {
        type: Number,
        default: 1
    },
    boundaries: {
        type: Number,
        default: 1
    },
    pageSizeOptions: {
        type: Array as PropType<Numeric[]>,
        default: [10, 20, 30]
    },
    renderItem: {
        type: Function,
        default: () => {}
    },
    showControls: {
        type: Boolean
    },
    variant: {
        type: String as PropType<VariantType>
    },
    current: Number,
    pageSize: Number,
    className: String,
    title: String,
    simple: Boolean,
    ellipses: Boolean,
    disabled: Boolean,
    closable: Boolean,
    compact: Boolean
}

export const paginationEmits = ['update:current', 'update:page-size', 'change', 'page-size-change']

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = typeof paginationEmits
