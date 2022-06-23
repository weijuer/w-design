<template>
  <div class="tree-example">
    <w-input-search placeholder="请输入" />
    <w-tree
      v-model="checkedNodes"
      checkable
      :expanded-nodes="expandedNodes"
      :auto-expand-parent="autoExpandParent"
      :selected-nodes="selectedNodes"
      :tree-data="treeData"
      @expand="onExpand"
      @select="onSelect"
    >
      <template slot="title" slot-scope="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </w-tree>
  </div>
</template>

<script>
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' }
        ]
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      }
    ]
  }
];

export default {
  name: 'tree-example',
  data() {
    return {
      expandedNodes: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedNodes: ['0-0-0'],
      selectedNodes: [],
      treeData
    };
  },
  methods: {
    onSelect(selectedNodes) {
      console.log('onSelect', selectedNodes);
      // this.selectedNodes = selectedNodes;
    },
    onExpand(expandedNodes) {
      console.log('onExpand', expandedNodes);
      // this.expandedNodes = expandedNodes;
    }
  }
};
</script>