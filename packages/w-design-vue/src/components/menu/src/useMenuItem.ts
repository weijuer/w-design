import { SetupContext, computed, inject } from 'vue'
import { type MenuItemProps, MenuItemEmits, MENU_KEY } from './interface'
import { Numeric } from 'src/components/_utils'

export const useMenuItem = (props: MenuItemProps, emit: SetupContext<MenuItemEmits>['emit']) => {

    const menuContext: any = inject(MENU_KEY, null)

    const menuItemClass = computed(() => {

        return [
            'w-menu__item',
            {
                'is-selected': isSelected.value,
                'is-disabled': isDisabled.value,
            }
        ]
    })

    const isSelected = computed(() => {
        const { value, selected } = props

        if (menuContext) {
            const { multiple, modelValue: selectedVal } = menuContext.props
            return multiple ? selectedVal.includes(value) : selectedVal === value
        } else {
            return selected
        }
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
        isSelected,
        isDisabled,
        onSelect
    }
}
