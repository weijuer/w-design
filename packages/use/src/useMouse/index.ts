import { ref } from 'vue'
import { useEventListener } from '../useEventListener'

export function useMouse() {
    let x = ref(0)
    let y = ref(0)

    useEventListener(document, 'mousemove', (e: any) => {
        x.value = e.pageX
        y.value = e.pageY
    })

    return { x, y }
}
