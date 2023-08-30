import { ref, SetupContext } from 'vue'
import { type CheckboxGroupEmits, type CheckboxGroupProps } from './interface'

export const useCheckboxGroup = (props: CheckboxGroupProps, emit: SetupContext<CheckboxGroupEmits>['emit']) => {


    const _ref = ref<HTMLInputElement>()

    const onChange = (event: Event) => {
        const { checked, value } = event.target as HTMLInputElement
        const { modelValue } = props
        const checkedValue = checked ? (<string[]>modelValue).push(value) : (<string[]>modelValue).filter((option: string) => value !== option);
        emit('change', checkedValue)
        emit('update:modelValue', checkedValue)
    }

    const onClick = (event: MouseEvent) => {
        emit('click', event)
    }

    // const checkboxGroupContext: any = inject(CHECKBOX_KEY);

    return { _ref, onChange, onClick }
}
