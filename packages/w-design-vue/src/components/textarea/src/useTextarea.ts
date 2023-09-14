import { SetupContext, computed, ref, watch } from 'vue'
import { type TextareaEmits, type TextareaProps } from './interface'

export const useTextarea = (props: TextareaProps, emit: SetupContext<TextareaEmits>['emit']) => {

    const _ref = ref<HTMLTextAreaElement>()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue);

    const textareaAttrs = computed(() => {
        const { name, disabled, readonly, autofocus, rows, maxlength, placeholder, autocomplete, autocapitalize, autocorrect } = props

        return {
            ref: _ref,
            name,
            value: inputValue.value,
            disabled,
            readonly,
            autofocus,
            rows,
            maxlength,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect,
            onInput,
            onKeydown: onPressEnter
        }
    })

    const isClearBtn = computed(() => {
        const { clearable } = props
        return clearable && !!inputValue.value
    })

    const characterCount = computed(() => {
        const { showCount, maxlength } = props

        return showCount ? `${inputValue.value?.length} / ${maxlength}` : ''
    })

    const onPressEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            emit('press-enter', event);
        }
    };

    const updateValue = (value: string) => {
        if (value !== props.modelValue) {
            inputValue.value = value
            emit('update:modelValue', value);
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLTextAreaElement).value);
        }
    };

    const blur = () => _ref.value?.blur();
    const focus = () => _ref.value?.focus();

    const onClear = (event: Event) => {
        event.preventDefault()
        if (isClearBtn.value) {
            inputValue.value = ''
            emit('update:modelValue', '');
            emit('clear', event);
        }
    };



    watch(
        () => props.modelValue,
        (modelValue) => {
            inputValue.value = modelValue
        },
    );

    return { _ref, textareaAttrs, isClearBtn, characterCount, onClear, onPressEnter, blur, focus }
}
