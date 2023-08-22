<template>
  <div class="w-progress">
    <div v-if="type === 'bar'" class="w-progress-bar">
      <div class="w-progress-bar__bg" aria-hidden="true">
        <div class="w-progress-bar__fill" :style="{ width: state.percentText }"></div>
      </div>
      <span class="w-progress-bar__value" aria-hidden="true">{{ state.percentText }}</span>
    </div>

    <div v-if="type === 'circle'" class="w-progress-circle">
      <span class="w-progress-circle__value">{{ state.percentText }}</span>
      <svg viewBox="0 0 100 100" fill="none" stroke-linecap="round">
        <circle class="w-progress-circle__bg" cx="50" cy="50" r="44"></circle>
        <circle
          class="w-progress-circle__fill"
          cx="50"
          cy="50"
          r="44"
          transform="rotate(-90 50 50)"
          :stroke-dashoffset="state.dashoffset"
          :stroke-dasharray="state.dasharray"
        ></circle>
      </svg>
    </div>

    <div v-if="type === 'dashboard'" class="w-progress-circle">
      <span class="w-progress-circle__value">{{ state.percentText }}</span>
      <svg viewBox="0 0 100 100" fill="none" stroke-linecap="round">
        <circle
          class="w-progress-circle__bg"
          cx="50"
          cy="50"
          r="44"
          stroke-dasharray="214px, 276.46px"
          transform="rotate(130 50 50)"
        ></circle>
        <circle
          class="w-progress-circle__fill"
          cx="50"
          cy="50"
          r="44"
          stroke-dasharray="214px, 276.46px"
          :stroke-dashoffset="state.dashoffset"
          transform="rotate(130 50 50)"
        ></circle>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-progress'
}
</script>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { progressProps, progressEmits } from './interface'
import { useProgress } from './useProgress'

const props = defineProps(progressProps)
const emit = defineEmits(progressEmits)

const { getDashArray, getDashoffset } = useProgress(props, emit)

const state = reactive({
  percentText: '0%',
  dasharray: props.type === 'dashboard' ? getDashArray(44) - 62.46 : getDashArray(44),
  dashoffset: 0
})

watch(
  () => props.percent,
  (percent) => {
    state.percentText = percent + '%'
    state.dashoffset = getDashoffset(state.dasharray, Number(props.percent))
  },
  { immediate: true }
)
</script>

<style lang="scss" src="./progress.scss" />
