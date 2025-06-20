<template>
  <div class="w-scroll-shadow" aria-label="ScrollShadow" v-bind="scrollbarAttrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WScrollShadow'
}
</script>

<script lang="ts" setup>
import { scrollShadowProps } from './interface'
import { useScrollShadow } from './useScrollShadow'

const props = defineProps(scrollShadowProps)

const { scrollbarAttrs } = useScrollShadow(props)
</script>

<style src="./scroll-shadow.scss" lang="scss" />
