<template>
  <div class="w-divider" :class="dividerClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-divider'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { dividerProps } from './interface'

const props = defineProps(dividerProps)
const slots = useSlots()

const dividerClass = computed(() => [
  { [`w-divider__content-${props.orientation}`]: slots.default && props.orientation },
  { 'w-divider__dashed': props.dashed }
])
</script>

<style lang="scss" src="./divider.scss" />
