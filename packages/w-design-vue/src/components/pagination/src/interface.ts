import { PropType, type ExtractPropTypes } from 'vue'
import { type Type } from 'src/components/_utils'

export const paginationProps = {
    type: {
        type: String as PropType<Type>,
    },
    total: Number,
    current: Number,
    pageSize: Number,
    defaultCurrent: Number,
    defaultPageSize: Number,
    description: [String, Object],
    className: String,
    title: String,
    disabled: Boolean,
    closable: Boolean,
}

export const paginationEmits = ['click', 'close']

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
export type PaginationEmits = typeof paginationEmits
