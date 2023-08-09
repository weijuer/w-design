import { onMounted, inject, ref, SetupContext } from 'vue'
import { CHECKBOX_KEY, type RadioEmits, type RadioProps } from './interface'


export const useRadio = (props: RadioProps, emit: SetupContext<RadioEmits>['emit']) => {

    const _ref = ref<HTMLInputElement>()

    const onChange = (event: Event) => {
        const { checked } = event.target as HTMLInputElement;
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
    })

    // const checkboxGroupContext: any = inject(CHECKBOX_KEY);

    return { _ref, onChange, onClick }
}
