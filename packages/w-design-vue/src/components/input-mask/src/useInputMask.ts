import { SetupContext, computed, nextTick, onMounted, ref } from 'vue'
import { type InputMaskProps, InputMaskEmits } from './interface'
// import { type Numeric } from '../../_utils'

export const useInputMask = (props: InputMaskProps, emit: SetupContext<InputMaskEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const inputMaskClass = computed(() => {
        const { splitted } = props

        return [
            {
                'is-splitted': splitted
            }
        ]
    })

    const inputMaskAttrs = computed(() => {
        const {
            name,
            mask,
            disabled,
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
            mask,
            type: 'text',
            value: inputValue.value,
            disabled,
            readonly: readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect,
            onInput,
            onKeydown: onPressEnter
        }
    })

    const applyMask = (value: string) => {

        const { mask = '', slotChar } = props

        let maskedValue = '';
        let valueIndex = 0;

        for (let i = 0; i < mask.length; i++) {
            const maskChar = mask[i];
            const valueChar = value[valueIndex];
            const validValueChar = /\d/.test(valueChar);

            console.log('applyMask', maskChar, valueChar)

            if (maskChar === slotChar && validValueChar) {
                maskedValue += valueChar;
                valueIndex++;
            } else {
                maskedValue += maskChar;
            }
        }

        return maskedValue;
    };



    const updateValue = (value: string) => {
        const { slotChar } = props

        if (value !== props.modelValue) {
            const formattedValue = applyMask(value)
            inputValue.value = formattedValue;
            emit('update:modelValue', formattedValue);

            // 找到下一个可输入的位置并设置光标
            const cursorIndex = formattedValue.indexOf(slotChar);


            console.log('cursorIndex', cursorIndex);

            if (cursorIndex !== -1 && _ref.value) {
                nextTick(() => {
                    _ref.value?.setSelectionRange(cursorIndex, cursorIndex);
                });
            }
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    const onPressEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            emit('press-enter', event)
        }

        // 处理删除键，确保删除字符后光标位置正确
        if (event.key === 'Backspace' || event.key === 'Delete') {
            nextTick(() => {
                onInput(event as unknown as InputEvent);
            });
        }
    }

    const blur = () => _ref.value?.blur()
    const focus = () => _ref.value?.focus()

    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    // watch(
    //     () => props.modelValue,
    //     (modelValue) => {
    //         inputValue.value = modelValue
    //     },
    // );

    // watch(
    //     () => inputValue.value,
    //     (newValue) => {
    //         // applyMask(newValue as string);
    //     }
    // );

    onMounted(() => {
        // applyMask(inputValue.value as string);
    });

    return {
        _ref,
        inputMaskClass,
        inputMaskAttrs,
        onMousedown,
        onMouseup,
        onPressEnter,
        blur,
        focus
    }
}
