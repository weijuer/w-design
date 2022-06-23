import WTree from './Tree.vue';
import WTreeNode from './TreeNode.vue';

WTree.node = WTreeNode;

WTree.install = (Vue) => {
  Vue.component(WTree.name, WTree);
  Vue.component(WTreeNode.name, WTreeNode);
};

export default WTree;
