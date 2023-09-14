import { ref } from 'vue'

export const useInputPassword = () => {

    const _ref = ref<any>()
    const visible = ref(false)

    const onToggle = () => {
        _ref.value?.focus()
        visible.value = !visible.value
    };

    return { _ref, visible, onToggle }
}
