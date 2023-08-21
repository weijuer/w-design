import { ref, SetupContext } from 'vue'
import { type ProgressEmits, type ProgressProps } from './interface'

export const useProgress = (props: ProgressProps, emit: SetupContext<ProgressEmits>['emit']) => {
  const _ref = ref<HTMLElement>()
  const expanded = ref(false)

  const onClick = (event: MouseEvent) => {
    expanded.value = !expanded.value
    emit('click', event)
  }

  const getDashArray = (r: number) => {
    return Number((2 * Math.PI * r).toFixed(2))
  }

  const getDashoffset = (dasharray: number, percent: number) => {
    return Number(((dasharray * (100 - percent)) / 100).toFixed(2))
  }

  return { _ref, expanded, getDashArray, getDashoffset, onClick }
}
