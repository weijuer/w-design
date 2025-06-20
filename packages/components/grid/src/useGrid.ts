import { provide, ref, SetupContext } from 'vue'
import { GIRD_KEY, type GridEmits, type GridProps, type Numeric } from './interface'

export const useGrid = (props: GridProps, emit: SetupContext<GridEmits>['emit']) => {
    const _ref = ref<HTMLDivElement>()

    const handleChange = (name: Numeric | Numeric[]) => {
        emit('change', name)
        emit('update:activeKey', name)
    }

    const toggle = (name: Numeric, expanded: boolean) => {
        const { activeKey } = props
    }

    provide(GIRD_KEY, { auto: props.auto, toggle })

    return { _ref, toggle }
}
