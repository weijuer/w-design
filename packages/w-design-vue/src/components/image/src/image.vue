<template>
  <div class="w-image" :class="imageClass" :style="imageStyle">
    <img class="w-image__img" :srcset="srcSet" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'WImage',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { imageProps, imageEmits } from './interface'
import { useImage } from './useImage'

const props = defineProps(imageProps)
const emit = defineEmits(imageEmits)

const { imageClass, imageStyle } = useImage(props, emit)
</script>

<style src="./image.scss" lang="scss"></style>
