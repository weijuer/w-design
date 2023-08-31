import { computed, provide, ref, SetupContext } from 'vue'
import { CHECKBOXGROUP_KEY, Option, type CheckboxGroupEmits, type CheckboxGroupProps } from './interface'

export const useCheckboxGroup = (props: CheckboxGroupProps, emit: SetupContext<CheckboxGroupEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

    const { name, disabled } = props

    const toggleOption = (option: Option) => {
        const { value } = option
        const { modelValue } = props

        const checkedValue = (modelValue).indexOf(value) === -1
            ? (modelValue).push(value) && modelValue.slice()
            : (modelValue).filter((option) => value !== option)

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
        return (modelValue).some((option) => option === value)
    }

    const checkboxGroupClass = computed(() => {
        const { orientation, disabled } = props

        return [orientation ? 'w-checkbox__group-' + orientation : '', { 'is-disabled': disabled }]
    })

    provide(CHECKBOXGROUP_KEY, { name, disabled, toggleOption });

    return { _ref, isChecked, computedOptions, checkboxGroupClass, toggleOption, onClick }
}
