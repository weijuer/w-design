import { SetupContext, computed, ref, watch } from 'vue'
import { PaginationEmits, PaginationProps, PaginationItemType } from './interface'
import { range } from '../../_utils'

const sizes = {
    small: -0.25,
    medium: 0,
    large: 0.25
}

export const usePagination = (props: PaginationProps, emit: SetupContext<PaginationEmits>['emit']) => {
    const { current, defaultCurrent, pageSize, defaultPageSize } = props
    const _current = ref(current ? current : defaultCurrent)
    const _pageSize = ref(pageSize ? pageSize : defaultPageSize)

    const paginationClass = computed(() => {
        const { className, size, type, disabled } = props

        return [
            className,
            type ? 'w-pagination__' + type : '',
            size ? 'w-pagination__' + size : '',
            {
                'is-disabled': disabled
            }
        ]
    })

    const shuttleStyle = computed(() => {
        const { size = 'medium' } = props
        const current = _current.value

        const activeIndex = pages.value.findIndex((item) => item === current)
        const offset = (activeIndex + 1) * (2.5 + sizes[size])

        return {
            transform: `translateX(${offset}rem) scale(1)`
        }
    })

    const totalPage = computed(() => {
        const { pageCount, total } = props
        const count = +pageCount || Math.ceil(+total / +_pageSize.value)
        return Math.max(1, count)
    })

    const pages = computed(() => {
        const { siblings = 1, boundaries = 1 } = props
        const totalPageNumbers = siblings * 2 + 3 + boundaries * 2
        const total = totalPage.value
        const current = _current.value

        if (totalPageNumbers >= total) {
            return formatRange(range(1, total))
        }

        const leftSiblingIndex = Math.max(current - siblings, boundaries)
        const rightSiblingIndex = Math.min(current + siblings, total - boundaries)

        const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
        const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1)

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = siblings * 2 + boundaries + 2

            return formatRange([
                ...range(1, leftItemCount),
                PaginationItemType.DOTS,
                ...range(total - (boundaries - 1), total),
            ]);
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = boundaries + 1 + 2 * siblings

            return formatRange([
                ...range(1, boundaries),
                PaginationItemType.DOTS,
                ...range(total - rightItemCount, total),
            ]);
        }

        return formatRange([
            ...range(1, boundaries),
            PaginationItemType.DOTS,
            ...range(leftSiblingIndex, rightSiblingIndex),
            PaginationItemType.DOTS,
            ...range(total - boundaries + 1, total),
        ])
    })

    const isFirst = computed(() => _current.value === 1)
    const isLast = computed(() => _current.value === totalPage.value)
    const isPrev = computed(() => _current.value > 1)
    const isNext = computed(() => totalPage.value > _current.value - 1)

    const isActive = (page: number) => page === _current.value

    const formatRange = (range: any[]) => {
        // const { showControls } = props

        // if (showControls) {
        //     return [PaginationItemType.PREV, ...range, PaginationItemType.NEXT]
        // }

        return range
    }

    const onPrev = () => {
        if (isPrev.value) {
            _current.value--
            emit('update:current', _current.value)
            emit('change', _current.value, _pageSize.value)
        }
    }

    const onNext = () => {
        if (isNext.value) {
            _current.value++
            emit('update:current', _current.value)
            emit('change', _current.value, _pageSize.value)
        }
    }

    const onSpeedChange = (type: string) => {
        const total = totalPage.value
        let page = type === 'pre' ? _current.value - 5 : _current.value + 5
        if (page > total) {
            page = total
        }

        if (page < 1) {
            page = 1
        }

        _current.value = page
        emit('update:current', page)
        emit('change', page, _pageSize.value)
    }

    const onChange = (page: number, event: Event) => {
        event.preventDefault()
        _current.value = page
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
        shuttleStyle,
        pages,
        _current,
        totalPage,
        isFirst,
        isLast,
        isNext,
        isPrev,
        isActive,
        onPrev,
        onNext,
        onChange,
        onSpeedChange,
        onPageSizeChange
    }
}
