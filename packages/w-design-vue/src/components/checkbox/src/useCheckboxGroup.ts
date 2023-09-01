import { computed, provide, ref, SetupContext } from 'vue'
import { CHECKBOXGROUP_KEY, type CheckboxGroupEmits, type CheckboxGroupProps } from './interface'

export const useCheckboxGroup = (props: CheckboxGroupProps, emit: SetupContext<CheckboxGroupEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

    const checkboxGroupClass = computed(() => {
        const { orientation, disabled } = props

        return [orientation ? 'w-checkbox__group-' + orientation : '', { 'is-disabled': disabled }]
    })

    const updateValue = (value: unknown) => {
        const { modelValue } = props

        const checkedValue = (modelValue!).indexOf(value) === -1
            ? (modelValue!).push(value) && modelValue!.slice()
            : (modelValue!).filter((option) => value !== option)

        emit('update:modelValue', checkedValue)
        emit('change', checkedValue)
    }

    const onClick = (event: MouseEvent) => {
        emit('click', event)
    }

    const computedOptions = computed(() => {
        return props.options!.map((option) => {
            if (typeof option === 'string' || typeof option === 'number') {
                return {
                    label: option,
                    value: option
                }
            }

            return option
        })
    })

    const isChecked = (value: string) => {
        const { modelValue } = props
        return (modelValue!).some((option) => option === value)
    }

    provide(CHECKBOXGROUP_KEY, { props, updateValue });

    return { _ref, computedOptions, checkboxGroupClass, isChecked, updateValue, onClick }
}
