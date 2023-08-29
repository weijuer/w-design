<template>
  <div class="w-card" :class="cardClass">
    <header v-if="$slots.title || title" class="w-card__header">
      <h3 class="w-card__title" v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <div class="w-card__extra" v-if="$slots.extra || extra" @click="descHandler">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </header>
    <div class="w-card__body">
      <slot></slot>
    </div>

    <slot name="footer">
      <footer class="w-card__footer" v-if="props.footer" v-html="props.footer"></footer>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WCard'
}
</script>

<script setup>
import { computed } from 'vue'
import { previewProps } from './interface'
const props = defineProps(previewProps)

const cardClass = computed(() => {
  const { type, size, bordered, loading, hoverable } = props

  return [
    type ? 'w-card__' + type : '',
    size ? 'w-card__' + size : '',
    {
      'is-loading': loading,
      'is-hoverable': hoverable,
      'is-bordered': bordered
    }
  ]
})
</script>

<style lang="scss" src="./card.scss"></style>
