<template>
  <div ref="tab-pane" class="w-tab-pane">
    <div class="w-tab-pane-content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-tab-pane'
};
</script>

<script setup>
import { computed, inject, useAttrs } from 'vue';

const props = defineProps({
  label: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const tabs = inject('tabs');
const { key } = useAttrs();
const visible = computed(() => tabs.value === key);
</script>

<style lang="scss" scoped></style>
