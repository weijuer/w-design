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
  tabKey: {
    type: [String, Number],
    require: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { activeKey, setPanes } = inject('tabs');
const tabPane = ref();
console.log('tabPane', tabPane.value);
const visible = computed(() => activeKey === tabPane.key);

onMounted(() => {
  console.log(tabPane.value);

  const { label, key, disabled } = props;
  setPanes({ label, key, disabled });
});

defineExpose({
  tabPane
});
</script>

<style lang="scss" scoped></style>
