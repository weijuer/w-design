<template>
  <!-- <w-icon></w-icon> -->
  <w-main>
    <w-container>
      <w-table
        row-key="id"
        :columns="columns"
        :rows="dataSource"
        :pagination="pagination"
        :row-selection="rowSelection"
        @change="onTableChange"
      >
        <template #action="{ row }">
          <a @click="toView(row)" href="javascript:;" class="w-btn btn-link">查看</a>
        </template>
      </w-table>
    </w-container>
  </w-main>

  <!-- <section>
    <div>{{ state.message }}</div>
    <w-button @click="getTest">发送</w-button>
  </section> -->
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';

// 测试数据
const Storage = {
  getSource() {},
  getColumns() {
    return [
      {
        title: '序号',
        name: 'index',
        width: '5%'
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
  getFields(key) {
    var field = [];
    switch (key) {
      case 'updateType':
        field = ['', '安装包', '增量更新包', '全量更新包'];
        break;
      case 'isForceUpdate':
        field = ['', '是', '否'];
        break;
      case 'strategy':
        field = ['', '全局', '分组'];
        break;
      case 'status':
        field = [' ', '编辑中', '发布中', '已完成'];
        break;
      case 'device':
        field = [
          '全部',
          'Android',
          'iOS',
          'Windows',
          'Windows xp',
          'Mac',
          'Ubuntu',
          '龙芯中标麒麟'
        ];
        break;
    }

    return field;
  }
};

const state = reactive({
  message: 'hello',
  dataSource: [],
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

const { dataSource, columns, pagination, rowSelection } = toRefs(state);

async function getTest() {
  const res = await fetch('/test').then((response) => response.json());
  console.log(res);
  state.message = res;
}

async function getData() {
  const { data } = await fetch('/w-table', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state.pagination)
  }).then((response) => response.json());
  state.dataSource = data.list;
}

const formatData = (key, value) => {
  const field = Storage.getFields(key);
  return field[value];
};

getData();

const onTableChange = (pagination, filters, sorter) => {
  console.log('onTableChange', pagination);
};

const toView = (row) => {
  console.log(row);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
