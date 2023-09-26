import { PropType, type ExtractPropTypes } from 'vue'
import { type Size, Type, Numeric } from 'src/components/_utils'

export enum PaginationItemType {
    NEXT = 'next',
    PREV = 'prev',
    DOT = 'dot',
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
    pageSizeOptions: {
        type: Array as PropType<Numeric[]>,
        default: [10, 20, 30]
    },
    current: Number,
    pageSize: Number,
    className: String,
    title: String,
    renderItem: Function,
    disabled: Boolean,
    closable: Boolean,
}

export const paginationEmits = ['update:current', 'update:page-size', 'change', 'page-size-change']

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = typeof paginationEmits
