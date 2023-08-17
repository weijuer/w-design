<template>
  <div class="w-avatar" :class="avatarClass" :style="avatarStyle" @click="onClick">
    <figure class="w-avatar__figure" role="img" :aria-label="alt">
      <svg
        class="w-avatar__placeholder"
        aria-hidden="true"
        viewBox="0 0 20 20"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="10" cy="6" r="2.5" stroke="currentColor"></circle>
        <path
          d="M10,10.5a4.487,4.487,0,0,0-4.471,4.21L5.5,15.5h9l-.029-.79A4.487,4.487,0,0,0,10,10.5Z"
          stroke="currentColor"
        ></path>
      </svg>
      <slot name="icon">
        <img v-if="props.src" class="w-avatar__img" :src="props.src" :alt="alt" />
      </slot>
      <div v-if="slots.default" class="w-avatar__initials"><slot></slot></div>
    </figure>
    <span v-if="props.status" role="status" class="w-avatar__status" :style="statusComputedStyle"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'w-avatar'
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { avatarProps, avatarEmits } from './interface'
import { useAvatar } from './useAvatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const slots = useSlots()
const { onClick } = useAvatar(props, emit)
const toPixel = (size: number) => size + 'px'

const avatarStyle = computed(() => {
  const { size = 0 } = props
  if (typeof size !== 'number') return

  const sizePixel = toPixel(size)
  const fontSizePixel = toPixel(size / 2)

  if (size) {
    return {
      '--w-avatar-width': sizePixel,
      '--w-avatar-height': sizePixel,
      fontSize: fontSizePixel
    }
  }
})

const avatarClass = computed(() => ({
  'w-avatar__square': props.square,
  'w-avatar__with-status': props.status,
  [`w-avatar__${props.size}`]: typeof props.size === 'string'
}))

const statusComputedStyle = computed(() => ({
  ...props.statusStyle,
  backgroundColor: props.statusColor
}))
</script>

<style lang="scss" src="./avatar.scss" />
