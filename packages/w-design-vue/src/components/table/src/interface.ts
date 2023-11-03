import { PropType, type ExtractPropTypes } from 'vue'
import { Numeric, Type } from 'src/components/_utils'

export type Trigger = 'hover' | 'click'
export type SelectMode = 'single' | 'multiple'

export const tableProps = {
    type: {
        type: String as PropType<Type>,
    },
    columns: {
        type: Array as PropType<any[]>,
        dafault: []
    },
    rows: {
        type: Array as PropType<any[]>,
        dafault() {
            return []
        }
    },
    rowKey: {
        type: String,
        default: 'key'
    },
    rowSelection: {
        type: [Boolean, Object] as PropType<boolean | any>
    },
    pagination: {
        type: [Boolean, Object] as PropType<boolean | any>
    },
    emptyContent: {
        type: [String, Object],
        default: 'No rows to display.'
    },
    selectionMode: {
        type: String as PropType<SelectMode>,
    },
    defaultSelectedKeys: {
        type: Array as PropType<Numeric[]>
    },
    selectedKeys: {
        type: Array as PropType<Numeric[]>
    },
    disabledKeys: {
        type: Array as PropType<Numeric[]>
    },
    className: String,
    color: String,
    hideHeader: Boolean,
    removeWrapper: Boolean,
    hoverable: Boolean,
    striped: Boolean,
    bordered: Boolean
}

export const tableEmits = ['change', 'expand', 'resizeColumn', 'select']

export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = typeof tableEmits
