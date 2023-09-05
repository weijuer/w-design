import { SetupContext, computed, nextTick, onMounted, ref, watch } from 'vue'
import { type InputEmits, type InputProps } from './interface'
import { addUnit } from '../../_utils'

export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
    const error = ref(false);
    const loading = ref(true);
    const _ref = ref<HTMLInputElement>()

    const inputClass = computed(() => {
        const { size, type, rounded, blurred, zoomed } = props

        return [
            size ? 'w-input__' + size : '',
            type ? 'w-input__' + type : '',
            {
                'is-rounded': rounded,
                'is-blurred': blurred,
                'is-zoomed': zoomed
            }
        ]
    })

    const inputStyle = computed(() => {
        const { width, height, radius, rounded } = props

        return {
            'width': addUnit(width),
            'height': addUnit(rounded ? width : height),
            'border-radius': addUnit(radius),
        }
    })

    const imgStyle = computed(() => {
        const { objectFit, objectPosition } = props

        return {
            'object-fit': objectFit,
            'object-position': objectPosition,
        }
    })

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
        () => props.src,
        () => {
            error.value = false;
            loading.value = true;
        },
    );

    onMounted(() => {
        nextTick(() => {

        });
    });

    return { _ref, inputClass, inputStyle, imgStyle, onLoad, onError }
}
