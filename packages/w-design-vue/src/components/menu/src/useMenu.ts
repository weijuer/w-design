import { SetupContext, computed, ref } from 'vue'
import { type MenuProps, MenuEmits } from './interface'
import { type Numeric } from '../../_utils'

export const useMenu = (props: MenuProps, emit: SetupContext<MenuEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    // const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const menuClass = computed(() => {
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

    const updateValue = (value: Numeric) => {
        if (value !== props.modelValue) {
            // inputValue.value = value
            emit('update:modelValue', value)
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    const blur = () => _ref.value?.blur()
    const focus = () => _ref.value?.focus()



    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    return {
        _ref,
        menuClass,
        onMousedown,
        onMouseup,
        onPressEnter,
        onInput,
        blur,
        focus
    }
}
