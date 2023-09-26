import { SetupContext, computed, ref } from 'vue'
import { PaginationEmits, PaginationProps } from './interface'

export const usePagination = (props: PaginationProps, emit: SetupContext<PaginationEmits>['emit']) => {

    const isActive = ref(true)

    const paginationClass = computed(() => {
        const { className, type, disabled } = props

        return [
            className,
            type ? 'w-pagination__' + type : '',
            {
                'active': isActive.value,
                'is-disabled': disabled
            }
        ]
    })

    const paginationIconName = computed(() => {
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
        paginationClass,
        paginationIconName,
        onClose
    }
}
