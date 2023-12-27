import { SetupContext, computed, inject } from 'vue'
import { SELECT_KEY, SelectOptionEmits, SelectOptionProps } from './interface'
import { Numeric } from '../../_utils'

export const useSelectOption = (props: SelectOptionProps, emit: SetupContext<SelectOptionEmits>['emit']) => {

    const selectContext: any = inject(SELECT_KEY, null)

    const selectOptionClass = computed(() => {

        return [
            {
                'is-selected': isSelected.value,
                'is-disabled': isDisabled.value,
            }
        ]
    })

    const isSelected = computed(() => {
        const { value, selected } = props

        if (selectContext) {
            const { multiple, modelValue: selectedVal } = selectContext.props
            return multiple ? selectedVal.includes(value) : selectedVal === value
        } else {
            return selected
        }
    })

    const isDisabled = computed(() => {
        const { disabled } = props

        if (selectContext) {
            return selectContext.props.disabled || disabled
        } else {
            return disabled
        }
    })

    const onSelect = (value: Numeric) => {
        const { disabled } = props
        if (disabled) {
            return
        }

        if (selectContext) {
            selectContext.updateValue(value)
        } else {
            emit('select', value)
        }
    }

    return {
        selectOptionClass,
        isSelected,
        isDisabled,
        onSelect
    }
}
