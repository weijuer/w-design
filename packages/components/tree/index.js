import Tree from './Tree.vue'
import TreeNode from './TreeNode.vue'

Tree.TreeNode = TreeNode

Tree.install = Vue => {
    Vue.component(Tree.name, Tree)
    Vue.component(TreeNode.name, TreeNode)
}

export default Tree
