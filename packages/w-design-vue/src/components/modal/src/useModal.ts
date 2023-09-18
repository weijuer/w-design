import { SetupContext, computed, ref } from 'vue'
import { type ModalProps, ModalEmits } from './interface'
import { type Numeric } from '../../_utils'

export const useModal = (props: ModalProps, emit: SetupContext<ModalEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    // const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const modalClass = computed(() => {
        const { disabled } = props

        return [
            {
                'is-disabled': disabled
            }
        ]
    })

    const updateValue = (value: Numeric) => {
        // inputValue.value = value
        emit('update:modelValue', value)
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    return {
        _ref,
        modalClass,
        onInput,
    }
}
