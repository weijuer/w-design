<template>
  <div class="w-tabs">
    <slot></slot>
    <ul class="w-tabs-label-wrapper" ref="labelWrapper">
      <li
        class="w-tabs-label-item"
        @click="onLableClick(item, index)"
        v-for="(item, index) in panes"
        :class="getLabelCls(item)"
        ref="labelItems"
      >
        {{ item.label }}
      </li>
      <div class="line" ref="line"></div>
    </ul>
    <div class="w-tabs-panes">
      <template v-for="(pane, index) in panes" :key="'pane-' + index">
        <div ref="tab-pane" :class="['w-tab-pane', { active: isActive(pane, index) }]">
          <div class="w-tab-pane-content" v-if="isActive(pane, index)">
            <!-- <slot :slots="pane.slots"></slot> -->
          </div>
        </div>
      </template>
    </div>
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
    type: [String, Number],
    default: 0
  }
});

const emit = defineEmits(['update:modelValue', 'change']);
const panes = ref([]);
const labelWrapper = ref();
const labelItems = ref();
const line = ref();

const activeKey = ref(props.modelValue);

const activeIndex = computed(() => panes.value.findIndex((pane) => pane.name === activeKey.value));

provide('tabs', { activeKey, setTabPanes });

function getLabelCls(item) {
  return {
    active: item.name === activeKey.value,
    disabled: item.disabled
  };
}

function setTabPanes(pane) {
  console.log('setTabPanes', pane);
  panes.value.push(pane);
}

function onLableClick(item, index) {
  const { name, disabled } = item;
  if (disabled) {
    return;
  }

  activeKey.value = name || index + 1;
  emit('change', name, index);
  emit('update:modelValue', name);
  calculateLinePosition();
}

function isActive(pane, index) {
  return activeKey.value === pane.name ? pane.name : index + 1;
}

function calculateLinePosition() {
  nextTick(() => {
    if (activeIndex.value === -1) {
      return;
    }
    // line width equal active tab width
    const activeLabel = labelItems.value[activeIndex.value];
    const { left: wrapperLeft } = labelWrapper.value.getBoundingClientRect();
    const { left: labelLeft, width } = activeLabel.getBoundingClientRect();
    line.value.style.left = labelLeft - wrapperLeft + labelWrapper.value.scrollLeft + 'px';
    line.value.style.width = width + 'px';
  });
}

onMounted(() => {
  calculateLinePosition();
});
</script>

<style lang="scss" scoped>
$primary: #2980b9;

.w-tabs {
  .w-tabs-label-wrapper {
    position: relative;
    display: flex;
    padding: 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    overflow-x: auto;
    list-style: none;

    &::-webkit-scrollbar {
      height: 0;
      background: transparent;
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
