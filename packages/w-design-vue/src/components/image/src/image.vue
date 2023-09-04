<template>
  <div class="w-image" :class="imageClass" :style="imageStyle">
    <img class="w-image__img" :style="imgStyle" :loading="loading" :srcset="srcSet" :src="src" :alt="alt" role="img" />
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

const { imageClass, imageStyle, imgStyle } = useImage(props, emit)
</script>

<style src="./image.scss" lang="scss"></style>
