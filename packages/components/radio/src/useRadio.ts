import { computed, inject, onMounted, ref, SetupContext } from 'vue'
import { RADIOGROUP_KEY, type RadioEmits, type RadioProps } from './interface'

export const useRadio = (props: RadioProps, emit: SetupContext<RadioEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const radioGroupContext: any = inject(RADIOGROUP_KEY, null)

    const isChecked = computed(() => {
        const { value, modelValue, defaultChecked } = props
        if (radioGroupContext) {
            return value === radioGroupContext.props.modelValue
        }

        return defaultChecked ? defaultChecked : modelValue
    })

    const isDisabled = computed(() => {
        const { disabled } = props
        if (radioGroupContext) {
            return radioGroupContext.props.disabled || disabled
        }

        return disabled
    })

    const computedName = computed(() => {
        const { name } = props
        if (radioGroupContext) {
            return radioGroupContext.props.name || name
        }

        return name
    })

    const radioClass = computed(() => {
        const { type, size } = props
        return [
            type ? 'w-radio__' + type : '',
            size ? 'w-radio__' + size : '',
            { 'is-disabled': isDisabled.value }
        ]
    })

    const onChange = () => {
        const { value } = props

        if (isDisabled.value) {
            return
        }

        if (radioGroupContext) {
            radioGroupContext.updateValue(value)
        } else {
            emit('update:modelValue', value)
        }
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

    return {
        _ref,
        radioClass,
        isDisabled,
        isChecked,
        computedName,
        onChange,
        onClick,
        focus,
        blur
    }
}
