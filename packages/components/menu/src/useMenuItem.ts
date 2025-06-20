import { SetupContext, computed, inject } from 'vue'
import { type MenuItemProps, MenuItemEmits, MENU_KEY, MenuProvide } from './interface'
import { Numeric } from 'src/components/_utils'

export const useMenuItem = (props: MenuItemProps, emit: SetupContext<MenuItemEmits>['emit']) => {
    const menuContext: any = inject(MENU_KEY, null)

    const menuItemClass = computed(() => {
        const { value } = props

        return [
            'w-menu__item',
            {
                'is-selected': menuContext.isSelected(value),
                'is-expanded': expanded.value,
                'is-disabled': isDisabled.value
            }
        ]
    })

    const isDisabled = computed(() => {
        const { disabled } = props

        if (menuContext) {
            return menuContext.props.disabled || disabled
        } else {
            return disabled
        }
    })

    const expanded = computed(() => (menuContext as unknown as MenuProvide).isExpanded(props.value))

    const onSelect = (value: Numeric) => {
        const { disabled } = props
        if (disabled) {
            return
        }

        if (menuContext) {
            menuContext.select(value)
        } else {
            emit('select', value)
        }
    }

    const onToggle = () => {
        console.log('onToggle', props.value, expanded.value)
        menuContext.toggle(props.value, expanded.value)
    }

    return {
        menuItemClass,
        isDisabled,
        expanded,
        onSelect,
        onToggle
    }
}
