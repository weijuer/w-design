import { SetupContext, computed, inject } from 'vue'
import { type MenuItemProps, MenuItemEmits, MENU_KEY } from './interface'
import { Numeric } from 'src/components/_utils'

export const useMenuItem = (props: MenuItemProps, emit: SetupContext<MenuItemEmits>['emit']) => {

    const menuContext: any = inject(MENU_KEY, null)

    console.log('menuContext', menuContext)

    const menuItemClass = computed(() => {

        const { value } = props

        return [
            'w-menu__item',
            {
                'is-selected': menuContext.isSelected(value),
                'is-disabled': isDisabled.value,
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

    const onSelect = (value: Numeric) => {
        const { disabled } = props
        if (disabled) {
            return
        }

        if (menuContext) {
            menuContext.updateValue(value)
        } else {
            emit('select', value)
        }
    }
    return {
        menuItemClass,
        isDisabled,
        onSelect
    }
}
