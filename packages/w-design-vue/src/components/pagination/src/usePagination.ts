import { SetupContext, computed, ref, watch } from 'vue'
import { PaginationEmits, PaginationProps, PaginationItem } from './interface'

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
        const offset = 2.5 + sizes[size]

        return {
            transform: `translateX(${(current) * offset}rem) scale(1)`
        }
    })

    const totalPage = computed(() => {
        const { pageCount, total } = props
        const count = +pageCount || Math.ceil(+total / +_pageSize.value)
        return Math.max(1, count)
    })

    const pages = computed(() => {
        const { showPageSize, ellipses } = props
        const pageCount = totalPage.value
        const current = _current.value
        const pages: PaginationItem[] = []

        let start = 1, end = pageCount
        const isMaxSized = showPageSize < pageCount

        if (isMaxSized) {
            start = Math.max(current - Math.floor(showPageSize / 2), 1);
            end = start + showPageSize - 1;

            console.log(start, end)

            if (end > pageCount) {
                end = pageCount;
                start = end - showPageSize + 1;
            }
        }

        // process middle
        for (let number = start + 1; number <= end - 1; number++) {
            const page = { type: 'number', number, text: number, active: number === current };
            pages.push(page);
        }

        if (ellipses && isMaxSized && showPageSize > 0) {

            if (start > 1) {
                const prevPages = { type: 'dot', number: start - 1, text: '•••', active: false };
                pages.unshift(prevPages);
            }

            if (end < pageCount) {
                const nextPages = { type: 'dot', number: end + 1, text: '•••', active: false };
                pages.push(nextPages);
            }
        }

        // process start and end
        const startItem = { type: 'number', number: 1, text: 1, active: 1 === current }
        const endItem = { type: 'number', number: pageCount, text: pageCount, active: pageCount === current }
        pages.unshift(startItem)
        pages.push(endItem)

        console.log(pages)

        return pages
    })

    const isFirst = computed(() => _current.value === 1)
    const isLast = computed(() => _current.value === totalPage.value)
    const isPrev = computed(() => _current.value > 1)
    const isNext = computed(() => totalPage.value > _current.value - 1)

    const isActive = (page: number) => page === _current.value

    const onPrev = () => {
        if (isPrev.value) {
            _current.value--
            emit('update:current', _current.value)
        }
    }

    const onNext = () => {
        if (isNext.value) {
            _current.value++
            emit('update:current', _current.value)
        }
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
        onPageSizeChange
    }
}
