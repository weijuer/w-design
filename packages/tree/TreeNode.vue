<template>
  <li
    role="tree-node"
    class="w-tree-node"
    :class="{ 'w-tree-node-selected': selected, 'w-tree-node-expanded': expanded }"
  >
    <div class="w-tree-node__content" :class="{ bold: isFolder, active: expanded }">
      <span class="w-tree-switcher" @click="onExpand">
        <slot name="icon" v-if="$slots.icon"></slot>
        <w-icon v-if="isFolder" name="chevron-right" :class="{ 'fa-rotate-90': expanded }"></w-icon>
      </span>
      <span class="w-tree-title" @click="onSelect">
        <slot name="title" v-if="$slots.title || title">
          {{ title }}
        </slot>
      </span>
    </div>
    <transition name="slide-down">
      <ul class="w-tree-node__children" v-if="isFolder" v-show="expanded">
        <w-tree-node
          v-for="(node, index) in children"
          :key="'node' + index"
          :node="node.key"
          :title="node.title"
          :selected="isNodeSelected(node.key)"
          :expanded="isNodeExpanded(node.key)"
          :children="node.children"
          v-on="$listeners"
        >
        </w-tree-node>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'w-tree-node',
  inheritAttrs: false
};
</script>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  node: {
    type: [String, Number],
    required: true
  },
  title: {
    type: [String, Object],
    required: true
  },
  icon: {
    type: Object,
    default: null
  },
  expanded: Boolean,
  selected: Boolean,
  checked: Boolean,
  halfChecked: Boolean,
  checkable: Boolean,
  selectable: Boolean,
  disabled: Boolean
});

const wtree = inject('wTree', {});
</script>
