import { CSSProperties, SetupContext, computed, provide, ref, useAttrs, watch } from 'vue'
import { type MenuProps, MenuEmits, MENU_KEY } from './interface'
import { type Numeric } from '../../_utils'

export const useMenu = (props: MenuProps, emit: SetupContext<MenuEmits>['emit']) => {
    const _ref = ref<HTMLUListElement>()

    const inputValue = ref(props.defaultSelectedKeys ? props.defaultSelectedKeys : props.modelValue);
    const isExpanded = ref(false)

    const menuClass = computed(() => {
        const { mode, theme, disabled } = props

        return [
            'w-menu__list',
            mode ? 'w-menu__' + mode : '',
            theme ? 'w-menu__' + theme : '',
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
        const { multiple } = props
        // multiple
        if (multiple) {
            return (inputValue.value as Numeric[]).includes(value)
        } else {
            return inputValue.value === value
        }
    }

    const onToggle = () => {
        isExpanded.value = !isExpanded.value
    }

    const updateValue = (value: Numeric) => {
        if (value !== props.modelValue) {
            // inputValue.value = value
            emit('update:modelValue', value)
        }
    }

    watch(
        () => props.modelValue,
        (modelValue) => {
            inputValue.value = modelValue
        }
    )

    provide(MENU_KEY, { props, updateValue });

    return {
        _ref,
        menuClass,
        menuStyle
    }
}
