import { computed, ref } from 'vue'
import { COLLAPSE_KEY, CollapseItemProps, CollapseProvide } from './interface'
import { useParent } from '@w-design/use'

export const useCollapseItem = (props: CollapseItemProps) => {

    const _ref = ref<HTMLDivElement>()

    const { parent, index } = useParent(COLLAPSE_KEY)

    const name = computed(() => props.name ?? index.value)
    const expanded = computed(() => (parent as unknown as CollapseProvide).isExpanded(name.value))

    const itemClass = computed(() => ['w-collapse__item', { 'w-collapse__item--expanded': expanded.value }])

    const toggle = (newValue = !expanded.value) => {
        ; (parent as unknown as CollapseProvide).toggle(name.value, newValue)
    }

    const toggleTitle = () => {
        const { disabled, readonly } = props
        if (!disabled && !readonly) {
            toggle()
        }
    }


    return { _ref, itemClass, expanded, toggleTitle }
}
