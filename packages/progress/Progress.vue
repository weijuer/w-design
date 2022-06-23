<template>
  <div class="w-progress">
    <div ref="inner" class="w-progress-inner"></div>
  </div>
</template>

<script>
export default {
  name: 'w-progress'
};
</script>

<script setup>
import { watch, nextTick, ref } from 'vue';

const inner = ref(null);

const props = defineProps({
  percent: {
    type: Number,
    default: 0
  }
});

watch(
  () => props.percent,
  (percent) => {
    nextTick(() => {
      inner.value.style.width = percent + '%';
    });
  }
);
</script>

<style lang="scss" scoped>
.w-progress {
  background-color: #eaeef4;
  border-radius: 100px;
  width: 100%;
  height: 4px;

  .w-progress-inner {
    background-color: #1890ff;
    height: 100%;
    border-radius: 100px;
    transition: width 0.2s linear;
  }
}
</style>