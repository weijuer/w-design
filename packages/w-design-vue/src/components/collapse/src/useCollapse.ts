import { provide, ref, SetupContext } from 'vue'
import { COLLAPSE_KEY, type CollapseEmits, type CollapseProps, type Numeric } from './interface'

function validateModelValue(modelValue: Numeric | Numeric[], accordion: boolean) {
    if (accordion && Array.isArray(modelValue)) {
        console.error('[W] Collapse: "v-model" should not be Array in accordion mode')
        return false
    }
    if (!accordion && !Array.isArray(modelValue)) {
        console.error('[W] Collapse: "v-model" should be Array in non-accordion mode')
        return false
    }
    return true
}

export const useCollapse = (props: CollapseProps, emit: SetupContext<CollapseEmits>['emit']) => {

    const _ref = ref<HTMLDivElement>()

    const handleChange = (name: Numeric | Numeric[]) => {
        emit('change', name)
        emit('update:activeKey', name)
    }

    const toggle = (name: Numeric, expanded: boolean) => {
        const { activeKey, accordion } = props

        // accordion
        if (accordion) {
            handleChange(name === activeKey ? '' : name)
        } else if (expanded) {
            handleChange((activeKey as Numeric[]).concat(name))
        } else {
            handleChange((activeKey as Numeric[]).filter((activeName) => activeName !== name))
        }
    }

    const isExpanded = (name: Numeric) => {
        const { activeKey, accordion } = props

        if (!validateModelValue((activeKey as Numeric | Numeric[]), accordion)) {
            return false
        }

        return accordion ? activeKey === name : (activeKey as Numeric[]).includes(name)
    }

    provide(COLLAPSE_KEY, { toggle, isExpanded });

    return { _ref, toggle, isExpanded }
}
