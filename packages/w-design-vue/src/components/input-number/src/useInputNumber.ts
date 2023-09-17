import { SetupContext, computed, ref } from 'vue'
import { type InputNumberProps, InputNumberEmits } from './interface'
import { type Numeric } from '../../_utils'

export const useInputNumber = (props: InputNumberProps, emit: SetupContext<InputNumberEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const inputNumberClass = computed(() => {
        const { splitted } = props

        return [
            {
                'is-splitted': splitted
            }
        ]
    })

    const inputNumberAttrs = computed(() => {
        const {
            name,
            min,
            max,
            step = 1,
            disabled,
            disableInput,
            readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect
        } = props

        return {
            ref: _ref,
            name,
            type: 'number',
            value: inputValue.value,
            disabled,
            readonly: readonly ? readonly : disableInput,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect,
            min,
            max,
            step,
            onInput,
            onKeydown: onPressEnter
        }
    })

    const isIncreaseBtnDisabled = computed(() => {
        const { disabled, max = Infinity } = props

        return disabled ? disabled : inputValue.value >= max
    })

    const isDecreaseBtnDisabled = computed(() => {
        const { disabled, min = 1 } = props

        return disabled ? disabled : inputValue.value <= min
    })

    const onPressEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            emit('press-enter', event)
        }
    }

    const updateValue = (value: Numeric) => {
        if (value !== props.modelValue) {
            inputValue.value = value
            emit('update:modelValue', value)
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    const blur = () => _ref.value?.blur()
    const focus = () => _ref.value?.focus()

    const onIncrease = () => {
        const { step, max = Infinity } = props

        if (inputValue.value < max) {
            inputValue.value = Number(inputValue.value) + Number(step)
        } else {
            inputValue.value = max
        }
        _ref.value?.focus()
        updateValue(inputValue.value!)
    }

    const onDecrease = () => {
        const { step, min = 1 } = props

        if (inputValue.value > min) {
            inputValue.value = Number(inputValue.value) - Number(step)
        } else {
            inputValue.value = min
        }
        _ref.value?.focus()
        updateValue(inputValue.value!)
    }

    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    return {
        _ref,
        inputNumberClass,
        inputNumberAttrs,
        isIncreaseBtnDisabled,
        isDecreaseBtnDisabled,
        onIncrease,
        onDecrease,
        onMousedown,
        onMouseup,
        onPressEnter,
        blur,
        focus
    }
}
