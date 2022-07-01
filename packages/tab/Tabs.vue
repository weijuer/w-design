<template>
  <div class="w-tabs">
    <ul class="w-tabs-label-wrapper" ref="labelWrapper">
      <li
        class="w-tabs-label-item"
        @click="onChange(item)"
        v-for="(item, i) in labels"
        :class="getLabelCls(item)"
        ref="labelItems"
      >
        {{ item.label }}
      </li>
      <div class="line" ref="line"></div>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w-tabs',
  inheritAttrs: false
};
</script>

<script setup>
import { ref, computed, provide, onMounted, nextTick } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number]
  }
});
provide('tabs', { value: props.value });

const emit = defineEmits(['update:modelValue', 'change']);
const labels = ref([]);
const labelWrapper = ref(null);
const labelItems = ref(null);
const line = ref(null);
const activeIndex = computed(() => labels.value.findIndex((label) => label.key === props.value));

function getLabelCls(item) {
  return {
    active: item.key === props.value,
    disabled: item.disabled
  };
}

function getLabels() {
  labels.value = this.$children.map((child) => {
    const { label, key, disabled } = child;
    return { label, key, disabled };
  });
}

function onChange(item) {
  const { key, disabled } = item;
  if (disabled) {
    return;
  }
  emit('update:modelValue', key);
  emit('change', key);
  calculateLinePosition();
}

function calculateLinePosition() {
  nextTick(() => {
    if (activeIndex === -1) {
      return;
    }
    // line width equal active tab width
    const activeLabel = labelItems.value[activeIndex];
    const { left: wrapperLeft } = labelWrapper.value.getBoundingClientRect();
    const { left: labelLeft, width } = activeLabel.getBoundingClientRect();
    line.value.style.left = labelLeft - wrapperLeft + labelWrapper.value.scrollLeft + 'px';
    line.value.style.width = width + 'px';
  });
}

onMounted(() => {
  getLabels();
  calculateLinePosition();
});
</script>

<style lang="scss" scoped>
$primary: #2980b9;

.w-tabs {
  .w-tabs-label-wrapper {
    position: relative;
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }
  .w-tabs-label-item {
    cursor: pointer;
    margin-right: 32px;
    padding: 12px 0;
    &:hover {
      color: $primary;
    }
    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }
    &.active {
      font-weight: bold;
      color: $primary;
    }
  }
  .line {
    position: absolute;
    transition: all 0.3s;
    transition-property: left, width;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: $primary;
  }
}
</style>
