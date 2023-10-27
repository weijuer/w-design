import { PropType, type ExtractPropTypes } from 'vue'
import { Type } from 'src/components/_utils'

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
        type: [Boolean, Object] as PropType<boolean | any>,
        default: false
    },
    pagination: {
        type: [Boolean, Object] as PropType<boolean | any>,
        default() {
            return {
                currentIndex: 1,
                pageSize: 10,
                totalCount: 0,
                pageSizes: [10, 20, 30]
            };
        }
    },
    emptyContent: {
        type: [String, Object],
        default: 'No rows to display.'
    },
    selectioMode: {
        type: String as PropType<SelectMode>,
    },
    defaultSelectedKeys: {
        type: Array
    },
    className: String,
    color: String,
    hideHeader: Boolean,
    removeWrapper: Boolean,
    striped: Boolean,
    bordered: Boolean
}

export const tableEmits = ['change', 'expand', 'resizeColumn']

export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = typeof tableEmits
