<template>
  <div class="w-scroll-shadow" aria-label="ScrollShadow" :class="scrollShadowClass">
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

const { scrollShadowClass } = useScrollShadow(props)
</script>

<style src="./scroll-shadow.scss" lang="scss" />
