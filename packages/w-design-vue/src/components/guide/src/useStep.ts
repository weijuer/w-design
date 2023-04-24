import { ref, SetupContext } from 'vue'
import type { StepEmits, StepProps } from './interface'
export const useStep = (props: StepProps, emit: SetupContext<StepEmits>['emit']) => {

    const _ref = ref<HTMLElement>()

    const next = (evt: MouseEvent) => {
        emit('next', evt)
    }
    const prev = (evt: MouseEvent) => {
        emit('prev', evt)
    }
    const skip = (evt: MouseEvent) => {
        emit('skip', evt)
    }
    return { _ref, next, prev, skip }
}