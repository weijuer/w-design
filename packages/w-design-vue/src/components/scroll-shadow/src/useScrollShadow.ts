import { computed } from 'vue'
import { ScrollShadowProps } from './interface'

export const useScrollShadow = (props: ScrollShadowProps) => {

    const scrollShadowClass = computed(() => {
        const { className, size, disabled } = props

        return [
            className,
            size ? 'w-scroll-shadow__' + size : '',
            {
                'is-disabled': disabled
            }
        ]
    })

    return {
        scrollShadowClass,
    }
}
