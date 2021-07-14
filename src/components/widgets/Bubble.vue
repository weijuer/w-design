<template>
  <div class="bubble" :class="[bubbleType]">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: String
})

const bubbleType = computed(() => (props.type ? `bubble-${props.type}` : ''))
</script>

<style lang="stylus">
$theme-color = #2ecc71;

.bubble {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: auto;
  background: radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4));
  border-radius: 100%;
  cursor: pointer;
  transform: translate(0, -20px);

  &.bubble-moving {
    animation: bubble-moving 2s 0.5s ease-in-out infinite;
  }

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    filter: blur(2px);
    z-index: 2;
    transform: rotateZ(-30deg);
  }

  &:after {
    height: 80%;
    width: 40%;
    background: radial-gradient(circle at 130% 130%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 58%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);
    transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
  }

  &:before {
    background: radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 74%, white 80%, white 84%, rgba(255, 255, 255, 0) 100%);
  }
}

@keyframes bubble-moving {
  0%, 100% {
    transform: translate(0, -20px) scale(1, 1);
  }

  60% {
    transform: translate(0, 26px) scale(1.16, 0.94);
  }
}
</style>
