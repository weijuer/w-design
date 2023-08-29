import { onMounted, ref, SetupContext } from 'vue'
import { type CheckboxEmits, type CheckboxProps } from './interface'


export const useCheckbox = (props: CheckboxProps, emit: SetupContext<CheckboxEmits>['emit']) => {

    const { checked, defaultChecked, indeterminate } = props;
    const isChecked = ref(checked ? checked : defaultChecked);
    const isIndeterminate = ref(indeterminate);

    const _ref = ref<HTMLInputElement>()

    const onChange = (event: Event) => {
        const { checked } = event.target as HTMLInputElement;
        // TODO
        isIndeterminate.value = false
        emit('change', event)
        emit('update:modelValue', checked)
    }

    const onClick = (event: MouseEvent) => {
        emit('click', event)
    }

    onMounted(() => {
        if (props.autoFocus) {
            _ref.value?.focus()
        }

        if (_ref.value) {
            _ref.value.indeterminate = isIndeterminate.value
        }
    })

    // const checkboxGroupContext: any = inject(CHECKBOX_KEY);

    return { _ref, isChecked, isIndeterminate, onChange, onClick }
}
