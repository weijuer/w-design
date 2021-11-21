<template>
  <!-- <w-icon></w-icon> -->
  <!-- <w-main></w-main> -->
  <w-container>
    <w-table
      row-key="id"
      :row-selection="rowSelection"
      :data-source="dataSource"
      :columns="columns"
      :pagination="pagination"
    >
      <template #device="{ row }">
        {{ formatData('device', row.device) }}
      </template>
      <template #is-force-update="{ row }">
        {{ formatData('isForceUpdate', row.isForceUpdate) }}
      </template>
      <template #update-type="{ row }">
        {{ formatData('updateType', row.updateType) }}
      </template>
      <template #strategy="{ row }">
        {{ formatData('strategy', row.strategy) }}
      </template>
      <template #is-update="{ row }">
        {{ formatData('isForceUpdate', row.isUpdate) }}
      </template>
      <template #status="{ row }">
        {{ formatData('status', row.status) }}
      </template>

      <template #action="{ row }">
        <!-- <a @click="toView(row)" href="javascript:;" class="btn link-btn">查看</a>
        <a @click="toView(row)" href="javascript:;" class="btn link-btn">复制</a>
        <a @click="toView(row)" href="javascript:;" class="btn link-btn">撤回</a> -->
        <a @click="toView(row)" href="javascript:;" class="btn link-btn">更多</a>
      </template>
    </w-table>
  </w-container>
  <section>
    <div>{{ state.message }}</div>
    <w-button @click="getTest">发送</w-button>
  </section>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { Main as WMain } from 'Layout';

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
        title: '版本号',
        name: 'version'
      },
      {
        title: '客户端',
        name: 'device',
        scopedSlot: 'device'
      },
      {
        title: '更新内容',
        name: 'content',
        ellipsis: true
      },
      {
        title: '强制更新',
        name: 'isForceUpdate',
        scopedSlot: 'is-force-update'
      },
      {
        title: '更新方式',
        name: 'updateType',
        scopedSlot: 'update-type'
      },
      {
        title: '发布时间',
        name: 'sendTime',
        scopedSlot: 'sendTime'
      },
      {
        title: '更新策略',
        name: 'strategy',
        scopedSlot: 'strategy'
      },
      {
        title: '更新首页安装包',
        name: 'isUpdate',
        scopedSlot: 'is-update'
      },
      {
        title: '状态',
        name: 'status',
        scopedSlot: 'status'
      },
      {
        title: '文件包大小',
        name: 'size',
        scopedSlot: 'size'
      },
      {
        title: '操作',
        width: 180,
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
  const { data } = await fetch('/w-table').then((response) => response.json());
  state.dataSource = data.list;
}

const formatData = (key, value) => {
  const field = Storage.getFields(key);
  return field[value];
};

getData();
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
