import { PropType, type ExtractPropTypes } from 'vue'
import { Type } from 'src/components/_utils';

export type ModalBackdrop = 'transparent' | 'opaque' | 'blur'
export type ModalPlacement = 'auto' | 'top' | 'bottom' | 'center' | 'top-center' | 'bottom-center'

export const modalProps = {
    modelValue: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: 'body'
    },
    type: {
        type: String as PropType<Type>,
        default: '',
        validator(value: string) {
            return ['', 'default', 'primary', 'success', 'warning', 'danger', 'info'].includes(value);
        }
    },
    placement: {
        type: String as PropType<ModalPlacement>,
        default: 'center',
        validator(value: string) {
            return ['auto', 'top', 'bottom', 'center', 'top-center', 'bottom-center'].includes(value);
        }
    },
    backdrop: {
        type: String as PropType<ModalBackdrop>,
        default: '',
        validator(value: string) {
            return ['', 'transparent', 'opaque', 'blur'].includes(value);
        }
    },
    title: {
        type: String,
        default: ''
    },
    closable: {
        type: Boolean,
        default: true
    },
    okType: {
        type: String as PropType<Type>,
        default: 'primary'
    },
    cancelText: {
        type: String,
        default: 'Cancel'
    },
    okText: {
        type: String,
        default: 'Ok'
    },
    dismissable: {
        type: Boolean,
        default: true
    },
    width: [String, Number],
    bodyStyle: Object,
    footer: Object,
    centered: Boolean,
    destroyOnClose: Boolean,
    confirmLoading: Boolean,
}

export const modalEmits = ['ok', 'cancel', 'update:modelValue']

export type ModalProps = ExtractPropTypes<typeof modalProps>
export type ModalEmits = typeof modalEmits
