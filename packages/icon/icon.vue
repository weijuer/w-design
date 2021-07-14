<template>
  <svg class="w-icon">
    <use :xlink:href="iconName" :class="[useClass]" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  useClass: String
})

const iconName = computed(() => (props.name ? `#${props.name}` : '#'))
</script>

<style lang="stylus" scoped>
.w-icon {
  width: 24px;
  height: 24px;
  max-width: 100%;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;

  use {
    &:hover {
      path.octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  }
}

@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0);
  }

  20%, 60% {
    transform: rotate(-25deg);
  }

  40%, 80% {
    transform: rotate(10deg);
  }
}
</style>
