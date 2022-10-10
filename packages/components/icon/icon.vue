<template>
  <svg class="w-icon" v-bind="$attrs" aria-hidden="true">
    <use :xlink:href="symbolId"></use>
  </svg>
</template>

<script>
export default {
  name: 'w-icon',
  inheritAttrs: false
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss">
.w-icon {
  width: 1rem;
  height: 1rem;
  max-width: 100%;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}

.icon-octocat {
  &:hover {
    path.octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}

@keyframes octocat-wave {

  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}
</style>
