import { SetupContext, computed, ref } from 'vue'
import { type ModalProps, ModalEmits } from './interface'
import { addUnit } from '../../_utils'
import { useEventListener } from '@w-design/use'

export const useModal = (props: ModalProps, emit: SetupContext<ModalEmits>['emit']) => {
    const _ref = ref<HTMLElement>()

    const modalClass = computed(() => {
        const { type, backdrop, placement, centered, bordered } = props

        return [
            type ? 'w-modal__' + type : '',
            placement ? 'w-modal__' + placement : '',
            backdrop && backdrop != 'opaque' ? 'w-modal__overlay-' + backdrop : '',
            {
                'is-centered': centered,
                'is-bordered': bordered
            }
        ]
    })

    const modalStyle = computed(() => {
        const { width } = props

        return {
            width: addUnit(width)
        }
    })

    const onOk = (e: Event) => {
        emit('ok', e)
    }

    const onCancel = (e: Event) => {
        emit('cancel', e)
        emit('update:modelValue', false)
    }

    const onOverlayClick = (event: Event) => {
        const { dismissable } = props

        if (!dismissable) {
            return
        }

        onCancel(event)
    }

    const onEsc = (event: Event) => {
        const { dismissable } = props

        if (!dismissable) {
            return
        }

        if ((event as KeyboardEvent).code === 'Escape') {
            onCancel(event)
        }
    }

    useEventListener(document, 'keydown', onEsc)

    return {
        _ref,
        modalClass,
        modalStyle,
        onOk,
        onCancel,
        onOverlayClick
    }
}
