import { CSSProperties, computed, useAttrs } from 'vue'
import { ScrollShadowProps } from './interface'
import { addUnit } from '../../_utils'

export const useScrollShadow: any = (props: ScrollShadowProps) => {

    const scrollShadowClass = computed(() => {
        const { className, disabled, hideScrollBar } = props

        return [
            className,
            {
                'is-disabled': disabled,
                'is-scrollbar-hide': hideScrollBar
            }
        ]
    })

    const scrollbarStyle = computed(() => {
        const { size } = props
        const { style } = useAttrs()

        return {
            ...(style as CSSProperties),
            '--scroll-shadow-size': addUnit(size)
        }
    })

    const scrollbarAttrs = computed(() => {
        return {
            class: scrollShadowClass.value,
            style: scrollbarStyle.value
        }
    })

    return {
        scrollbarAttrs
    }
}
