import { SetupContext, computed, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue'
import { type InputEmits, type InputProps } from './interface'
// import { addUnit } from '../../_utils'

export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
    const error = ref(false);
    const loading = ref(true);
    const _ref = ref<HTMLInputElement>()
    const instance = getCurrentInstance()

    const inputClass = computed(() => {
        const { size, type, bordered, disabled, readonly } = props
        const { slots: { start, end } } = instance!

        return [
            size ? 'w-input__' + size : '',
            type ? 'w-input__' + type : '',
            start ? 'w-input__start' : '',
            end ? 'w-input__end' : '',
            {
                'is-bordered': bordered,
                'is-disabled': disabled,
                'is-readonly': readonly
            }
        ]
    })

    const inputAttrs = computed(() => {
        const { name, disabled, readonly, autofocus, placeholder, autocomplete, autocapitalize, autocorrect } = props

        return {
            ref: _ref,
            name,
            disabled,
            readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect
        }
    })

    const blur = () => _ref.value?.blur();
    const focus = () => _ref.value?.focus();

    const onClear = (event: Event) => {
        event.preventDefault()
        emit('update:modelValue', '');
        emit('clear', event);
    };

    const onLoad = (event: Event) => {
        if (loading.value) {
            loading.value = false;
            emit('load', event);
        }
    }

    const onError = (event?: Event) => {
        error.value = true;
        loading.value = false;
        emit('error', event);
    }


    watch(
        () => props.modelValue,
        () => {
            error.value = false;
            loading.value = true;
        },
    );

    onMounted(() => {
        nextTick(() => {

        });
    });

    return { _ref, inputClass, inputAttrs, blur, focus, onClear, onLoad, onError }
}
