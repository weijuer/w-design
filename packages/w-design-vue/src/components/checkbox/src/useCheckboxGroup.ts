import { computed, provide, ref, SetupContext } from 'vue'
import { CHECKBOXGROUP_KEY, Option, type CheckboxGroupEmits, type CheckboxGroupProps } from './interface'

export const useCheckboxGroup = (props: CheckboxGroupProps, emit: SetupContext<CheckboxGroupEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

    const { name, disabled } = props

    const toggleOption = (option: Option) => {
        const { value } = option
        const { modelValue } = props

        const checkedValue = (<string[]>modelValue).indexOf(value) === -1
            ? (<string[]>modelValue).push(value) && modelValue.slice()
            : (<string[]>modelValue).filter((option: string) => value !== option)

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
        return (<string[]>modelValue).some((option) => option === value)
    }

    const checkboxGroupClass = computed(() => {
        const { disabled } = props

        return [{ 'is-disabled': disabled }]
    })

    provide(CHECKBOXGROUP_KEY, { name, disabled, toggleOption });

    return { _ref, isChecked, computedOptions, checkboxGroupClass, toggleOption, onClick }
}
