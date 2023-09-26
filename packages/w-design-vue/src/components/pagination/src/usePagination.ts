import { SetupContext, computed, ref, watch } from 'vue'
import { PaginationEmits, PaginationProps } from './interface'

export const usePagination = (props: PaginationProps, emit: SetupContext<PaginationEmits>['emit']) => {
    const { current, defaultCurrent, pageSize, defaultPageSize } = props
    const _current = ref(current ? current : defaultCurrent)
    const _pageSize = ref(pageSize ? pageSize : defaultPageSize)

    const paginationClass = computed(() => {
        const { className, type, disabled } = props

        return [
            className,
            type ? 'w-pagination__' + type : '',
            {
                'is-disabled': disabled
            }
        ]
    })

    const pages = computed(() => {
        const { total } = props
        return Math.ceil(total / _pageSize.value);
    })

    const isActive = (page: number) => page === _current.value
    const isNext = (page: number) => props.total - page > 0
    const isPrev = (page: number) => props.total - page < 0

    const onChange = (page: number, event: Event) => {
        event.preventDefault();
        emit('update:current', page)
        emit('change', page, _pageSize.value)
    }

    const onPageSizeChange = () => {
        emit('page-size-change')
    }

    watch(
        () => props.current,
        (current) => {
            _current.value = current!
        }
    )

    return {
        paginationClass,
        pages,
        _current,
        isActive,
        isNext,
        isPrev,
        onChange,
        onPageSizeChange
    }
}
