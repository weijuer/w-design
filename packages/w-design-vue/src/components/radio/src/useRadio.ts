import { computed, onMounted, ref, SetupContext, watch } from 'vue'
import { type RadioEmits, type RadioProps } from './interface'

export const useRadio = (props: RadioProps, emit: SetupContext<RadioEmits>['emit']) => {
    const { modelValue, defaultChecked } = props
    const isChecked = ref(modelValue ? modelValue : defaultChecked)

    const _ref = ref<HTMLInputElement>()

    const radioClass = computed(() => {
        const { type, size, disabled } = props

        return [type ? 'w-radio__' + type : '', size ? 'w-radio__' + size : '', { 'is-disabled': disabled }]
    })

    const onChange = (event: Event) => {
        const { disabled } = props
        const { checked } = event.target as HTMLInputElement
        if (disabled) {
            return
        }

        if (props.modelValue === undefined) {
            isChecked.value = checked
        }

        emit('update:modelValue', checked)
        emit('change', event)
    }

    const onClick = (event: MouseEvent) => {
        emit('click', event)
    }

    const focus = () => {
        _ref.value?.focus()
    }

    const blur = () => {
        _ref.value?.blur()
    }

    onMounted(() => {
        if (props.autoFocus) {
            _ref.value?.focus()
        }
    })

    watch(
        () => props.modelValue,
        (modelValue) => {
            isChecked.value = modelValue!
        }
    )

    // const radioGroupContext: any = inject(CHECKBOX_KEY);

    return {
        _ref,
        isChecked,
        radioClass,
        onChange,
        onClick,
        focus,
        blur
    }
}
