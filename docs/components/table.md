---
title: Table 表格
---

## Table 表格

简单展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 dataSource 为一个数组。

## 代码演示

<div class="w-container">
    <w-table
        row-key="id"
        :columns="state.columns"
        :data-source="state.dataSource"
        :pagination="state.pagination"
        :row-selection="state.rowSelection"
        @change="onTableChange">
        <template v-slot:action="{ row }">
            <a @click="toView(row)" href="javascript:;" class="w-btn btn-link">查看</a>
        </template>
    </w-table>
</div>

<script setup>
import WTable from '../../packages/table'
import { reactive, ref, toRefs } from 'vue';

// 测试数据
const Storage = {
  getColumns() {
    return [
      {
        title: '序号',
        name: 'index',
      },
      {
        title: '姓名',
        name: 'name'
      },
      {
        title: '生日',
        name: 'birthday',
        scopedSlot: 'birthday'
      },
      {
        title: '年龄',
        name: 'age'
      },
      {
        title: '性别',
        name: 'sex'
      },
      {
        title: '操作',
        name: 'action',
        scopedSlot: 'action'
      }
    ];
  },
  getDataSource(number) {
      return Array(number).fill(1).map((item,index) => ({
          id: index,
          name: `test-${index}`,
          age: index + 1,
          birthday: (new Date().toLocaleString()),
          sex: '男'
      }))
  }
};

const state = reactive({
  dataSource: Storage.getDataSource(10),
  columns: Storage.getColumns(),
  pagination: {
    total: 101,
    current: 1,
    pageSize: 20,
    pageSizes: [10, 20, 30]
  },
  rowSelection: {
    type: 'checkbox',
    selectedRowKeys: [],
    onChange: function (selectedRowKeys, selectedRows) {
      console.log('selectedRowKeys:', selectedRowKeys);
      console.log('selectedRows:', selectedRows);
    },
    onSelect: function (record, selected, selectedRows) {
      console.log('record:', record, 'selected:', selected, 'selectedRows:', selectedRows);
    },
    onSelectAll: function (selected, selectedRows, changeRows) {
      console.log('selected:', selected, 'selectedRows:', selectedRows, 'changeRows:', changeRows);
    },
    onSelectInvert: function (selectedRows) {
      console.log('selectedRows:', selectedRows);
    }
  }
});

const onTableChange = () => {}

const toView = (row) => {
  console.log(row);
}

</script>
