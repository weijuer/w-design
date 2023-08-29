<template>
  <details class="w-details">
    <summary class="w-details__summary" role="button" :aria-expanded="expanded" @click="onClick">
      <slot name="summary">
        <span class="w-details__summary-content">
          <svg class="w-details__summary-icon" aria-hidden="true" viewBox="0 0 12 12">
            <path
              d="M2.783.088A.5.5,0,0,0,2,.5v11a.5.5,0,0,0,.268.442A.49.49,0,0,0,2.5,12a.5.5,0,0,0,.283-.088l8-5.5a.5.5,0,0,0,0-.824Z"
            ></path>
          </svg>
          <span>{{ summary }}</span>
        </span>
      </slot>
    </summary>
    <div class="w-details__content" :aria-hidden="!expanded">
      <slot></slot>
    </div>
  </details>
</template>

<script lang="ts">
export default {
  name: 'WDetails'
}
</script>

<script setup lang="ts">
import { detailsProps, detailsEmits } from './interface'
import { useDetails } from './useDetails'

const props = defineProps(detailsProps)
const emit = defineEmits(detailsEmits)

const { expanded, onClick } = useDetails(props, emit)
</script>

<style lang="scss" src="./details.scss" />
