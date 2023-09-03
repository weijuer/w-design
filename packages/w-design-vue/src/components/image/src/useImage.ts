import { SetupContext, computed, ref } from 'vue'
import { type ImageEmits, type ImageProps } from './interface'
import { normalizedStyle } from '../../_utils'

export const useImage = (props: ImageProps, emit: SetupContext<ImageEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

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
        const { width, height } = props

        return {
            'max-width': width && normalizedStyle(width),
            'max-height': height && normalizedStyle(height),
        }
    })

    const onClose = (event: MouseEvent) => {
        emit('close', event)
    }

    return { _ref, imageClass, imageStyle, onClose }
}
