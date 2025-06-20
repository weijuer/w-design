import { ref } from 'vue'

export const useInputPassword = () => {
    const _ref = ref<any>()
    const visible = ref(false)

    const onToggle = () => {
        _ref.value?.focus()
        visible.value = !visible.value
    }

    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    return { _ref, visible, onToggle, onMousedown, onMouseup }
}
