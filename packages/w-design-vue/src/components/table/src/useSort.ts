import { reactive } from 'vue'
import { RecordType, isFunction } from '../../_utils'

type SortDescriptor = {
    field: string;
    order: 'ascend' | 'descend' | 'none';
    sorter: boolean | ((a: any, b: any) => number);
}

export const useSort = () => {

    const sortDescriptor: SortDescriptor = reactive({
        field: '',
        order: 'ascend',
        sorter: false
    })

    const onSorterClick = (column: RecordType) => {
        const { key, sorter, defaultOrder = 'ascend' } = column
        if (!sorter) {
            return null
        }

        if (sortDescriptor.field !== key) {
            sortDescriptor.field = key;
            sortDescriptor.sorter = sorter;
            sortDescriptor.order = defaultOrder
        } else {
            sortDescriptor.order = sortDescriptor.order === 'ascend' ? 'descend' : sortDescriptor.order === 'descend' ? 'none' : 'ascend'
        }
    }

    const compareFn = (a: any, b: any): number => {
        const aValue = a[sortDescriptor.field];
        const bValue = b[sortDescriptor.field];
        const direction = sortDescriptor.order;

        if (isFunction(sortDescriptor.sorter)) {
            const cmp = sortDescriptor.sorter(aValue, bValue)
            return 'ascend' == direction || 'none' == direction ? cmp : -cmp
        }

        if (isNaN(aValue) || isNaN(bValue)) {
            return 'ascend' == direction || 'none' == direction
                ? aValue.toString().localeCompare(bValue)
                : bValue.toString().localeCompare(aValue)
        } else {
            return 'ascend' == direction || 'none' == direction
                ? Number(aValue) - Number(bValue)
                : Number(bValue) - Number(aValue)
        }
    }

    return {
        sortDescriptor,
        onSorterClick,
        compareFn
    }
}