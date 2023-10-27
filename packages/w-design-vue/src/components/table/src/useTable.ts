import { SetupContext, computed, reactive, ref } from 'vue'
import { TableEmits, TableProps } from './interface'
// import { useEventListener, useDebounceFn } from 'Hooks'
// import { addUnit } from '../../_utils'

export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit']) => {
    const tableRef = ref<HTMLTableElement>()

    const state = reactive({
        top: 0,
        left: 0
    })

    const tableClass = computed(() => {
        const { className, type, striped, bordered } = props

        return [
            className,
            type ? 'w-table__' + type : '',
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
        const { rowSelection, pagination } = props

        return rowSelection && pagination.totalCount > 0;
    })

    // colspan值
    const colspan = computed(() => {
        const { columns } = props

        return isRowSelection.value ? columns!.length + 1 : columns!.length;
    })

    const getRowIndex = (index: number) => {
        const { currentIndex, pageSize } = props.pagination;
        const start = (currentIndex - 1) * pageSize;
        return start + index + 1;
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
        getRowIndex,
        onChange
    }
}
