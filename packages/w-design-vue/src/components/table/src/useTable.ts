import { SetupContext, computed, reactive, ref } from 'vue'
import { TableEmits, TableProps } from './interface'
import { Numeric } from 'src/components/_utils'
// import { useEventListener, useDebounceFn } from 'Hooks'
// import { addUnit } from '../../_utils'

export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit']) => {
    const tableRef = ref<HTMLTableElement>()
    const { defaultSelectedKeys } = props
    const selectedKeys = ref(defaultSelectedKeys ? defaultSelectedKeys : [])
    const selectedRows = ref<any>([])

    const state = reactive({
        top: 0,
        left: 0
    })

    const tableClass = computed(() => {
        const { className, type, selectionMode, striped, bordered } = props

        return [
            className,
            type ? 'w-table__' + type : '',
            selectionMode ? 'w-table__selection-' + selectionMode : '',
            {
                'is-striped': striped,
                'is-bordered': bordered
            }
        ]
    })

    const tableStyle = computed(() => {
        return {
            top: state.top + 'px',
            left: state.left + 'px',
        }
    })

    // input类型
    const inputType = computed(() => {
        const { rowSelection } = props

        return rowSelection?.type ? rowSelection.type : 'checkbox';
    })

    const isRowSelection = computed(() => {
        const { selectionMode, rowSelection, pagination } = props
        return selectionMode === 'multiple' || rowSelection && pagination.totalCount > 0;
    })

    // colspan值
    const colspan = computed(() => {
        const { columns } = props

        return isRowSelection.value ? columns!.length + 1 : columns!.length;
    })

    const getCheckbleDataSource = () => {
        const {
            rows = [],
            rowSelection: { getCheckboxProps }
        } = props;

        if (getCheckboxProps) {
            return rows.filter((row: any) => {
                const { disabled } = getCheckboxProps(row);
                return !disabled;
            });
        } else {
            return rows;
        }
    }
    const getCheckAllStatus = () => {
        const { rowKey } = props;

        const selectedRowKeys = selectedKeys.value;

        if (selectedRowKeys.length === 0) {
            return 'none';
        }

        const checkbleDataSource = getCheckbleDataSource();
        const isAllChecked = checkbleDataSource.every((row: any) =>
            selectedRowKeys.includes(row[rowKey])
        );
        const isPartChecked = checkbleDataSource.some((row: any) =>
            selectedRowKeys.includes(row[rowKey])
        );

        if (isAllChecked) {
            return 'all';
        }

        if (isPartChecked) {
            return 'part';
        }
    }

    const getRowIndex = (index: number) => {
        const { currentIndex, pageSize } = props.pagination;
        const start = (currentIndex - 1) * pageSize;
        return start + index + 1;
    }

    const isRowSelected = (rowKey: string) => {
        return selectedKeys.value.includes(rowKey)
    }

    const isRowSelectedAll = () => {
        const { rowKey } = props;
        const selectedRowKeys = selectedKeys.value;

        const checkbleDataSource = getCheckbleDataSource();
        const isAllChecked = checkbleDataSource.every((row: any) =>
            selectedRowKeys.includes(row[rowKey])
        );

        return selectedRowKeys.length !== 0 && isAllChecked;
    }

    const onSelectAll = (e: MouseEvent) => {
        const { checked } = e.target as HTMLInputElement;
        const { rowKey } = props;

        const checkbleDataSource = getCheckbleDataSource();

        // 全选
        if (checked) {
            selectedKeys.value = checkbleDataSource.map((row) => row[rowKey]);
        } else {
            selectedKeys.value = [];
        }

        emit('select', selectedKeys.value)
    }

    const onSelect = (row: any, event: MouseEvent) => {
        console.log('onSelect', row)
        const { rowKey, selectionMode } = props
        const { disabled } = event.target as HTMLInputElement;

        if (disabled) {
            return;
        }

        console.log('onSeletc', disabled)

        const copiedSelectedKeys = selectedKeys.value.slice()
        if (selectionMode === 'single') {
            if (copiedSelectedKeys.includes(row[rowKey])) {
                selectedKeys.value = []
            } else {
                selectedKeys.value = [row[rowKey]]
            }
        } else {
            if (copiedSelectedKeys.includes(row[rowKey])) {
                selectedKeys.value = copiedSelectedKeys.filter((key: Numeric) => row[rowKey] != key)
            } else {
                copiedSelectedKeys.push(row[rowKey])
                selectedKeys.value = copiedSelectedKeys
            }
        }

        // if (checked) {
        //     selectedRows.value.push(row);
        //     selectedKeys.value.push(row[rowKey]);
        // } else {
        //     selectedRows.value = selectedRows.value.filter((item: any) => item !== row);
        //     selectedKeys.value = selectedKeys.value.filter((item) => item !== row[rowKey]);
        // }

        emit('select', selectedKeys.value)
    }

    const onChange = () => {
        const { pagination } = props
        emit('change', pagination)
    }

    return {
        tableRef,
        tableClass,
        tableStyle,
        inputType,
        colspan,
        isRowSelection,
        getRowIndex,
        isRowSelected,
        isRowSelectedAll,
        getCheckAllStatus,
        onSelectAll,
        onSelect,
        onChange
    }
}
