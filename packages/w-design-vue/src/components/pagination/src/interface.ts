import { PropType, type ExtractPropTypes } from 'vue'
import { type Size, Type, Numeric } from 'src/components/_utils'

export enum PaginationItemType {
    NEXT = 'next',
    PREV = 'prev',
    DOT = 'dot',
}

export type PaginationItem = {
    type: string,
    text: Numeric,
    number: number,
    active?: boolean
}

export const paginationProps = {
    type: {
        type: String as PropType<Type>,
    },
    size: {
        type: String as PropType<Size>,
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
    showPageSize: {
        type: Number,
        default: 5
    },
    pageSizeOptions: {
        type: Array as PropType<Numeric[]>,
        default: [10, 20, 30]
    },
    renderItem: {
        type: Function,
        default: () => { }
    },
    showControls: {
        type: Boolean,
        default: true
    },
    current: Number,
    pageSize: Number,
    className: String,
    title: String,
    simple: Boolean,
    ellipses: Boolean,
    disabled: Boolean,
    closable: Boolean,
}

export const paginationEmits = ['update:current', 'update:page-size', 'change', 'page-size-change']

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = typeof paginationEmits
