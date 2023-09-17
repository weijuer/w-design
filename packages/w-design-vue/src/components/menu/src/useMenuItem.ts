import { SetupContext, computed, ref } from 'vue'
import { type MenuItemProps, MenuItemEmits } from './interface'

export const useMenuItem = (props: MenuItemProps, emit: SetupContext<MenuItemEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

    const menuItemClass = computed(() => {
        const { disabled } = props

        return [
            {
                'is-disabled': disabled
            }
        ]
    })

    const onPressEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            emit('press-enter', event)
        }
    }

    const blur = () => _ref.value?.blur()
    const focus = () => _ref.value?.focus()

    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    return {
        _ref,
        menuItemClass,
        onMousedown,
        onMouseup,
        onPressEnter,
        blur,
        focus
    }
}
