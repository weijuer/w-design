<template>
  <ul class="w-tree" role="tree">
    <slot v-if="treeData">
      <w-tree-node
        v-for="(node, index) in treeData"
        :key="'node' + index"
        :node="node.key"
        :title="node.title"
        :selected="isNodeSelected(node.key)"
        :expanded="isNodeExpanded(node.key)"
        :children="node.children"
        v-on="$listeners"
      >
      </w-tree-node>
    </slot>
  </ul>
</template>

<script>
import WTreeNode from './TreeNode.vue';

export default {
  name: 'w-tree',
  inheritAttrs: false,
  components: {
    WTreeNode
  },
  model: {
    prop: 'checkedNodes',
    event: 'check'
  },
  props: {
    treeData: {
      type: Array,
      required: true
    },
    defaultSelectedNodes: Array,
    selectedNodes: Array,
    defaultCheckedNodes: Array,
    checkedNodes: Array,
    defaultExpandedNodes: Array,
    expandedNodes: Array,
    multiple: Boolean,
    disabled: Boolean
  },
  provide() {
    return {
      wTree: this
    };
  },
  data() {
    return {
      _selectedNodes: [], // 当前选中的节点
      _expandedNodes: [] // 当前展开的节点
    };
  },
  watch: {
    selectedNodes(val) {
      this._selectedNodes = [].concat(val);
    },
    expandedNodes(val) {
      this._expandedNodes = [].concat(val);
    }
  },
  mounted: function () {
    this._selectedNodes = [].concat(this.defaultSelectedNodes);
    this._expandedNodes = [].concat(this.defaultExpandedNodes);
  },
  methods: {
    // 选中节点
    onNodeSelect: function (e, treeNode) {
      console.log('onNodeSelect', e, treeNode);
      let { _selectedNodes: selectedNodes } = this.$data;
      const { multiple } = this.$props;
      const { node, selected } = treeNode;
      const targetSelected = !selected;

      if (targetSelected) {
        selectedNodes.push(node);
      } else if (!multiple) {
        selectedNodes = [node];
      } else {
        selectedNodes = selectedNodes.filter((item) => item !== node);
      }

      const eventObj = {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        nativeEvent: e
      };
      this.$emit('select', selectedNodes, eventObj);
    },
    // 展开节点
    onNodeExpand: function (e, treeNode) {
      console.log('onNodeExpand', e, treeNode);
      let { _expandedNodes: expandedNodes } = this.$data;
      const { node, expanded } = treeNode;

      const targetExpanded = !expanded;
      if (targetExpanded) {
        expandedNodes.push(node);
      } else {
        expandedNodes = expandedNodes.filter((item) => item !== node);
      }
      const eventObj = {
        event: 'expand',
        expanded,
        node: treeNode,
        nativeEvent: e
      };
      this.$emit('expand', expandedNodes, eventObj);
    },
    // 子节点是否被选中
    isNodeSelected(node) {
      return this.$data._selectedNodes.indexOf(node) !== -1;
    },
    // 子节点是否展开
    isNodeExpanded(node) {
      return this.$data._expandedNodes.indexOf(node) !== -1;
    }
  }
};
</script>

<style lang="scss">
.w-tree {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  margin: 0;
  padding: 0;

  .w-tree-node {
    position: relative;

    .w-tree-switcher {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin: 0;
      line-height: 24px;
      text-align: center;
      vertical-align: top;
      border: 0;
      outline: none;
      cursor: pointer;
    }

    .w-tree-node__content {
      flex: 1;
      display: flex;
      align-items: center;
      line-height: 24px;

      &.bold {
        font-weight: bold;
      }

      .w-tree-title {
        padding: 0 5px;
        cursor: pointer;
        user-select: none;

        &:hover {
          background-color: #f2f2f2;
        }
      }

      .fa {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
      }
    }

    .w-tree-node__children {
      padding-left: 16px;
      list-style: none;
    }

    &.active {
      background-color: #f5f5f5;
    }

    &.w-tree-node-selected {
      > .w-tree-node__content {
        .w-tree-title {
          color: #1890ff;
          background-color: #f5f5f5;
        }
      }
    }
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease-in-out;
}

.slide-down-enter-to,
.slide-down-leave {
  overflow: hidden;
  max-height: 500px;
}

.slide-down-enter,
.slide-down-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>