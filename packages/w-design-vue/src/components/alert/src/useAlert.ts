import { SetupContext, computed, ref } from 'vue'
import { type AlertProps, AlertEmits } from './interface'

export const useAlert = (props: AlertProps, emit: SetupContext<AlertEmits>['emit']) => {

    const isActive = ref(true)

    const alertClass = computed(() => {
        const { className, type } = props

        return [
            className,
            type ? 'w-alert__' + type : '',
            { 'active': isActive.value }
        ]
    })

    const alertIconName = computed(() => {
        const { type } = props

        switch (type) {
            case 'default':
            case 'primary':
            case 'info':
                return 'info-outlined'
            case 'success':
                return 'check-outlined'
            case 'warning':
            case 'danger':
                return 'exclamation-outlined'
        }
    })

    const onClose = () => {
        isActive.value = false
        emit('close')
    }

    return {
        alertClass,
        alertIconName,
        onClose
    }
}
