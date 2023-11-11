import { reactive } from 'vue'
import { RecordType } from '../../_utils'
export const useSorter = () => {

    const sortInfo = reactive({
        field: '',
        order: 'descend',
        sorter: (): any => { }
    })

    const onSorterClick = (column: RecordType) => {
        const { key, sorter, defaultOrder = 'none' } = column

        if (sortInfo.field !== key) {
            sortInfo.field = key;
            sortInfo.sorter = sorter;
            sortInfo.order = defaultOrder
        } else {
            sortInfo.order = sortInfo.order === 'descend' ? 'ascend' : 'descend'
        }

        console.log('onSorterClick', sortInfo)
    }

    const compareFn = (a: any, b: any): number => {
        const aValue = a[sortInfo.field];
        const bValue = b[sortInfo.field];
        const direction = sortInfo.order;

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
        sortInfo,
        onSorterClick,
        compareFn
    }
}