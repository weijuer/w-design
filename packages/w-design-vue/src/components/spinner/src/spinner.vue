<template>
  <div class="w-spinner" :class="spinnerClass">
    <div class="w-spinner__spinner"></div>
    <span class="w-spinner__label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WSpinner'
}
</script>

<script lang="ts" setup>
import { spinnerEmits, spinnerProps } from './interface'
import { useSpinner } from './useSpinner'

const props = defineProps(spinnerProps)
const emit = defineEmits(spinnerEmits)

const { spinnerClass } = useSpinner(props, emit)
</script>

<style src="./spinner.scss" lang="scss" />
./useSpinner
