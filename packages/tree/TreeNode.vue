<template>
  <li
    role="tree-node"
    class="w-tree-node"
    :class="{ 'w-tree-node-selected': selected, 'w-tree-node-expanded': expanded }"
  >
    <div class="w-tree-node__content" :class="{ bold: isFolder, active: expanded }">
      <span class="w-tree-switcher" @click="onExpand">
        <slot name="icon" v-if="$slots.icon"></slot>
        <em
          v-if="isFolder"
          class="fa fa-chevron-right fa-fw"
          :class="{ 'fa-rotate-90': expanded }"
        ></em>
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
  inheritAttrs: false,
  props: {
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
  },
  inject: ['wTree'],
  provide() {
    return {
      wTreeNode: this
    };
  },
  data() {
    return {};
  },
  computed: {
    children() {
      return this.$attrs.children;
    },
    isFolder() {
      return this.$attrs.children && this.$attrs.children.length;
    }
  },
  methods: {
    onSelect(e) {
      const {
        wTree: { onNodeSelect }
      } = this;
      e.preventDefault();
      onNodeSelect(e, this);
    },
    onExpand(e) {
      const {
        wTree: { onNodeExpand }
      } = this;
      onNodeExpand(e, this);
    },
    isNodeSelected(node) {
      const {
        wTree: { isNodeSelected }
      } = this;
      return isNodeSelected(node);
    },
    isNodeExpanded(node) {
      const {
        wTree: { isNodeExpanded }
      } = this;
      return isNodeExpanded(node);
    }
  }
};
</script>
