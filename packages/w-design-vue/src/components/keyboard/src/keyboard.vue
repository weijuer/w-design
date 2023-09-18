<template>
  <kbd class="w-keyboard">
    <template v-for="keyboard of keyboardKeys" :key="keyboard">
      <abbr class="w-keyboard__key" :title="keyboard.label">{{ keyboard.value }}</abbr>
    </template>
    <span><slot></slot></span>
  </kbd>
</template>

<script lang="ts">
export default {
  name: 'WKbd'
}
</script>

<script lang="ts" setup>
import { keyboardEmits, keyboardProps } from './interface'
import { useKeyboard } from './useKeyboard'

const props = defineProps(keyboardProps)
const emit = defineEmits(keyboardEmits)

const { keyboardKeys } = useKeyboard(props, emit)
</script>

<style src="./keyboard.scss" lang="scss" scoped />
