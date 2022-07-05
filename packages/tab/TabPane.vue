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
import { ref, computed, inject, onMounted } from 'vue';

const props = defineProps({
  label: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { key, setPanes } = inject('tabs');
const tabPane = ref();

const visible = computed(() => key === tabPane.key);

onMounted(() => {
  console.log(tabPane.value);

  const { label, disabled } = props;
  setPanes({ label, disabled });
});

defineExpose({
  tabPane
});
</script>

<style lang="scss" scoped></style>
