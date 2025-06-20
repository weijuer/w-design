import { SetupContext, ref } from 'vue'
import { type InputSearchEmits, type InputSearchProps } from './interface'

export const useInputSearch = (
    props: InputSearchProps,
    emit: SetupContext<InputSearchEmits>['emit']
) => {
    const _ref = ref<any>()

    const onSearch = (event: Event) => {
        _ref.value?.focus()
        emit('search', _ref.value?.inputValue, event)
    }

    return { _ref, onSearch }
}
