
export const useSorter = (sortInfo: any) => {



    const sorter = (a: any, b: any) => {
        const aValue = a[sortInfo.field];
        const bValue = b[sortInfo.field];

        console.log('sortInfo', sortInfo)
        console.log('a Vs. b', aValue, bValue)

        if (sortInfo.order === 'ascend') {
            return aValue - bValue;
        } else {
            return bValue - aValue;
        }
    }

    return {
        sorter
    }
}