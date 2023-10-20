import { computed } from 'vue'
import { type SpaceProps } from './interface'
import { addUnit } from '../../_utils'

export const useSpace = (props: SpaceProps) => {
    const spaceClass = computed(() => {
        const { orientation, size, align, justify, wrap, fill } = props

        return [
            orientation && orientation === 'vertical' ? 'w-space__' + orientation : '',
            align ? 'w-space__align-' + align : '',
            justify ? 'w-space__justify-' + justify : '',
            size && typeof size === 'string' ? 'w-space__' + size : '',
            {
                'is-wrap': wrap,
                'is-fill': fill
            }
        ]
    })

    const spaceStyle = computed(() => {
        const { size } = props

        const spaceGap = Array.isArray(size) ? size.map(addUnit).join(' ') : addUnit(size!)

        return {
            '--w-space-gap': spaceGap
        }
    })

    return {
        spaceClass,
        spaceStyle
    }
}
