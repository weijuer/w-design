<script setup lang="ts">
import { usePrevious, useEventListener } from '@w-design/use'
import { onMounted, ref, watchEffect } from 'vue'

const eleRef = ref<HTMLElement | null>(null)
const isInView = ref(false)
const wasInView = usePrevious(isInView)

const checkInView = () => {
  const ele = eleRef.value as HTMLElement
  if (!ele) {
    return
  }
  const rect = ele.getBoundingClientRect()
  isInView.value = rect.top < window.innerHeight && rect.bottom >= 0
}

watchEffect(() => {
  if (!eleRef.value) {
    return
  }

  if (!wasInView.value && isInView.value) {
    eleRef.value.classList.add('card__animated')
  } else if (wasInView.value && !isInView.value) {
    eleRef.value.classList.remove('card__animated')
  }
})

onMounted(() => {
  checkInView()
  useEventListener(document, 'scroll', checkInView)
  useEventListener(window, 'resize', checkInView)
})
</script>

<template>
  <div class="card" ref="eleRef" :data-inview="isInView"><slot></slot></div>
</template>

<style>
.card {
  opacity: 0;
  will-change: transform, opacity;
  transform: translateY(4rem) scale(0.8);
  transition: all 400ms;

  /* Demo purpose */
  align-items: center;
  display: flex;
  justify-content: center;

  border: 1px solid rgb(203 213 225);
  border-radius: 0.25rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;

  height: 8rem;
  width: 8rem;
}
.card__animated {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
