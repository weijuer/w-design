import { computed, provide, ref, SetupContext } from 'vue'
import { RADIOGROUP_KEY, type RadioGroupEmits, type RadioGroupProps } from './interface'

export const useRadioGroup = (props: RadioGroupProps, emit: SetupContext<RadioGroupEmits>['emit']) => {

    const _ref = ref<HTMLInputElement>()

    const radioGroupClass = computed(() => {
        const { orientation, disabled } = props
        return [orientation ? 'w-radio__group-' + orientation : '', { 'is-disabled': disabled }]
    })

    const updateValue = (value: unknown) => {
        emit('update:modelValue', value)
        emit('change', value)
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
        return modelValue === value
    }

    provide(RADIOGROUP_KEY, { props, updateValue });

    return { _ref, isChecked, computedOptions, radioGroupClass, updateValue, onClick }
}
