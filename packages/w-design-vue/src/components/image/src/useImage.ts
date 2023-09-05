import { SetupContext, computed, nextTick, onMounted, ref, watch } from 'vue'
import { type ImageEmits, type ImageProps } from './interface'
import { addUnit } from '../../_utils'

export const useImage = (props: ImageProps, emit: SetupContext<ImageEmits>['emit']) => {
    const error = ref(false);
    const loading = ref(true);
    const _ref = ref<HTMLImageElement>()

    const imageClass = computed(() => {
        const { size, type, rounded, blurred, zoomed } = props

        return [
            size ? 'w-image__' + size : '',
            type ? 'w-image__' + type : '',
            {
                'is-rounded': rounded,
                'is-blurred': blurred,
                'is-zoomed': zoomed
            }
        ]
    })

    const imageStyle = computed(() => {
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

    const triggerLoad = () => {
        const loadEvent = new Event('load');
        Object.defineProperty(loadEvent, 'target', {
            value: _ref.value,
            enumerable: true,
        });
        onLoad(loadEvent);
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
            if (_ref.value?.complete && props.loading) {
                triggerLoad();
            }
        });
    });

    return { _ref, imageClass, imageStyle, imgStyle, onLoad, onError }
}
