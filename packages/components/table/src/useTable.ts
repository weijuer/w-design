import { SetupContext, computed, ref, watch } from 'vue'
import { TableEmits, TableProps } from './interface'
import { Numeric, RecordType } from '../../_utils'
import { useSort } from './useSort'

export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit']) => {
    const tableRef = ref<HTMLTableElement>()
    const { defaultSelectedKeys, selectedKeys = [], hoverable, selectionMode } = props
    const selectedRowKeys = ref<Numeric[]>(defaultSelectedKeys ? defaultSelectedKeys : selectedKeys)
    const selectedRows = ref<any>([])
    const isHoverable = ref(hoverable ? hoverable : selectionMode)

    // sort
    const { sortDescriptor, onSorterClick, compareFn } = useSort()

    const tableClass = computed(() => {
        const { className, type, selectionMode, striped, bordered } = props

        return [
            className,
            type ? 'w-table__' + type : '',
            selectionMode ? 'w-table__selection-' + selectionMode : '',
            {
                'is-striped': striped,
                'is-bordered': bordered,
                'is-hoverable': isHoverable.value
            }
        ]
    })

    const dataSource = computed(() => {
        const { field, order } = sortDescriptor
        const copiedRows = getTableDataSource()

        if (field && order !== 'none') {
            return copiedRows.sort(compareFn)
        } else {
            return copiedRows
        }
    })

    // 是否支持选择
    const isRowSelection = computed(() => {
        const { selectionMode, rowSelection, pagination } = props
        return selectionMode === 'multiple' || (rowSelection && pagination.totalCount > 0)
    })

    // colspan值
    const colspan = computed(() => {
        const { columns = [] } = props

        return isRowSelection.value ? columns.length + 1 : columns.length
    })

    // 全选不确定状态
    const getIndeterminate = computed(() => {
        if (selectedRowKeys.value.length === 0) {
            return false
        }
        const checkbleDataSource = getCheckbleDataSource()
        return checkbleDataSource.length != selectedRowKeys.value.length
    })

    const isloading = computed(() => {
        const { loadingState } = props

        console.log('loadingState', loadingState)
        return loadingState === 'loading'
    })

    const getColumnClass = (column: RecordType) => {
        const { key, sticky, sorter } = column
        const { field, order } = sortDescriptor

        return [
            'w-table__thead-column',
            order && field === key ? `w-table__thead-column--${order}` : '',
            {
                'w-table__thead-column-sticky': sticky,
                'w-table__thead-column-sort': sorter
            }
        ]
    }

    const getTableDataSource = () => {
        const { rowKey, rows = [], disabledKeys = [] } = props
        const copiedRows = [...rows]

        return copiedRows.map(row => {
            const disabled = disabledKeys.includes(row[rowKey])
            return { ...row, disabled }
        })
    }

    const getCheckbleDataSource = () => {
        const { rows = [], rowKey, disabledKeys = [] } = props

        if (disabledKeys.length > 0) {
            return rows.filter((row: RecordType) => {
                return !disabledKeys.includes(row[rowKey])
            })
        } else {
            return rows
        }
    }

    const getSelectedRows = () => {
        const { rows = [], rowKey } = props
        const selectedKeys = selectedRowKeys.value
        return rows.filter(row => selectedKeys.includes(row[rowKey]))
    }

    const getRowIndex = (index: number) => {
        const { currentIndex, pageSize } = props.pagination
        const start = (currentIndex - 1) * pageSize
        return start + index + 1
    }

    const isRowSelected = (rowKey: string) => {
        return selectedRowKeys.value.includes(rowKey)
    }

    const isRowSelectedAll = () => {
        const { rowKey } = props

        const checkbleDataSource = getCheckbleDataSource()
        const isAllChecked = checkbleDataSource.every((row: RecordType) =>
            selectedRowKeys.value.includes(row[rowKey])
        )

        return selectedRowKeys.value.length !== 0 && isAllChecked
    }

    const onSelectAll = (event: MouseEvent) => {
        const { checked } = event.target as HTMLInputElement
        const { rowKey } = props

        const checkbleDataSource = getCheckbleDataSource()

        // 全选
        if (checked) {
            selectedRowKeys.value = checkbleDataSource.map(row => row[rowKey])
        } else {
            selectedRowKeys.value = []
        }

        emit('select', selectedRowKeys.value)
    }

    const onSelect = (row: RecordType) => {
        const { rowKey, selectionMode, disabledKeys = [] } = props

        const disabled = disabledKeys.includes(row[rowKey])

        if (disabled || !selectionMode) {
            return
        }

        const copiedSelectedKeys = [...selectedRowKeys.value]
        if (selectionMode === 'single') {
            if (copiedSelectedKeys.includes(row[rowKey])) {
                selectedRowKeys.value = []
                selectedRows.value = []
            } else {
                selectedRowKeys.value = [row[rowKey]]
                selectedRows.value = [row]
            }
        } else {
            if (copiedSelectedKeys.includes(row[rowKey])) {
                selectedRowKeys.value = copiedSelectedKeys.filter(
                    (key: Numeric) => row[rowKey] != key
                )
                selectedRows.value = selectedRows.value.filter(
                    (item: any) => item[rowKey] != row[rowKey]
                )
            } else {
                selectedRowKeys.value.push(row[rowKey])
                selectedRows.value.push(row)
            }
        }

        emit('select', selectedRowKeys.value, selectedRows.value)
    }

    watch(
        [() => props.selectedKeys, () => defaultSelectedKeys],
        () => {
            selectedRows.value = getSelectedRows()
        },
        { immediate: true }
    )

    return {
        tableRef,
        tableClass,
        dataSource,
        colspan,
        isRowSelection,
        getIndeterminate,
        isloading,
        getColumnClass,
        getRowIndex,
        isRowSelected,
        isRowSelectedAll,
        onSelectAll,
        onSelect,
        onSorterClick
    }
}
