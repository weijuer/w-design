import { SetupContext, computed, ref } from 'vue'
import { type ModalProps, ModalEmits } from './interface'
import { addUnit } from '../../_utils'

export const useModal = (props: ModalProps, emit: SetupContext<ModalEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    // const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const modalClass = computed(() => {
        const { type, backdrop, centered } = props

        return [
            type ? 'w-modal__' + type : '',
            backdrop ? 'w-modal__' + backdrop : '',
            {
                'is-centered': centered
            }
        ]
    })

    const modalStyle = computed(() => {
        const { width } = props;

        return {
            width: addUnit(width)
        };
    })

    const onOk = (e: Event) => {
        emit('ok', e)
    }

    const onCancel = (e: Event) => {
        emit('cancel', e)
        emit('update:modelValue', false)
    }

    return {
        _ref,
        modalClass,
        modalStyle,
        onOk,
        onCancel
    }
}
