import { CSSProperties, SetupContext, computed, provide, ref, useAttrs } from 'vue'
import { type MenuProps, MenuEmits, MENU_KEY } from './interface'
import { type Numeric } from '../../_utils'

export const useMenu = (props: MenuProps, emit: SetupContext<MenuEmits>['emit']) => {
    const _ref = ref<HTMLUListElement>()

    const menuClass = computed(() => {
        const { mode, theme, disabled } = props

        return [
            'w-menu__list',
            mode ? 'w-menu__list--' + mode : '',
            theme ? 'w-menu__list--' + theme : '',
            {
                'is-disabled': disabled
            }
        ]
    })

    const menuStyle = computed(() => {
        const { style } = useAttrs()

        return {
            ...(style as CSSProperties)
        }
    })

    const isSelected = (value: Numeric) => {
        const { selectedKeys, multiple } = props
        // multiple
        if (multiple) {
            return (selectedKeys as Numeric[]).includes(value)
        } else {
            return selectedKeys === value
        }
    }

    const isExpanded = (value: Numeric) => {

        const { accordion, expandedKeys = [] } = props

        console.log('isExpanded value(%s) accordion(%o) expandedKeys(%o)', value, accordion, expandedKeys)

        return accordion ? expandedKeys === value : (expandedKeys as Numeric[]).includes(value)
    }

    const updateSelectedKeys = (value: Numeric | Numeric[]) => {
        console.log('updateSelectedKeys', value)
        emit('update:selectedKeys', value)
    }

    const updateExpandedKeys = (value: Numeric | Numeric[]) => {
        console.log('updateExpandedKeys', value)
        emit('update:expandedKeys', value)
    }

    const select = (value: Numeric | Numeric[]) => {
        console.log('select', value)
        const { selectedKeys, multiple } = props
        // multiple
        if (multiple) {
            updateSelectedKeys((selectedKeys as Numeric[]).concat(value))
        } else {
            updateSelectedKeys(value)
        }
    }

    const toggle = (value: Numeric, expanded: boolean) => {
        const { accordion, expandedKeys } = props

        console.log('toggle', value, expanded)

        // accordion
        if (accordion) {
            updateExpandedKeys(value === expandedKeys ? '' : value)
        } else if (expanded) {
            updateExpandedKeys((expandedKeys as Numeric[]).filter((activeName) => activeName !== value))
        } else {
            updateExpandedKeys((expandedKeys as Numeric[]).concat(value))
        }
    }

    provide(MENU_KEY, { props, isSelected, isExpanded, select, toggle });

    return {
        _ref,
        menuClass,
        menuStyle
    }
}
