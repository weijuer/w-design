<template>
  <table class="w-table w-table-bordered">
    <colgroup>
      <col v-if="rowSelection" width="30" />
      <col :style="colStyle(column)" :key="column.name" v-for="column in columns" />
    </colgroup>
    <thead class="w-table-thead">
      <tr>
        <th v-if="rowSelection">
          <input
            ref="checkAll"
            :type="rowSelection.type"
            v-model="state.isAllSelected"
            @change="onSelectAll"
          />
        </th>
        <th :key="column.name" v-for="column in columns">{{ column.title }}</th>
      </tr>
    </thead>
    <tbody class="w-table-tbody">
      <tr key="empty-messgae" v-if="dataSource.length === 0">
        <td :colspan="colspan" class="empty-messgae">{{ emptyMessage }}</td>
      </tr>
      <template v-else>
        <tr :key="row[rowKey]" v-for="(row, index) in dataSource">
          <td v-if="rowSelection">
            <input
              :type="rowSelection.type"
              :value="row[rowKey]"
              v-model="rowSelection.selectedRowKeys"
              @change="onSelect(row)"
            />
          </td>
          <td
            :key="column.name"
            v-for="column in columns"
            :title="column.ellipsis ? row[column.name] : null"
            :class="{ 'w-ellipsis': column.ellipsis }"
          >
            <slot
              v-if="column.scopedSlot"
              :name="column.scopedSlot"
              :index="index"
              :row="row"
              :data="row[column.name]"
              >{{ row[column.name] }}</slot
            >
            <template v-else>
              {{ column.name === 'index' ? index + 1 : row[column.name] }}
            </template>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot class="w-table-tfoot">
      <tr>
        <td :colspan="colspan">
          <slot name="footer" />
          <slot name="pagination">
            <w-pagination v-bind="pagination" @update:current="onPageChange" />
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import wPagination from '../pagination';

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Array,
    required: true,
    default: () => []
  },
  rowKey: {
    type: String,
    required: true,
    default: 'key'
  },
  rowSelection: {
    type: Object
  },
  emptyMessage: {
    type: String,
    default: '暂无数据'
  },
  // 分页属性
  pagination: {
    type: [Boolean, Object],
    default: true
  }
});

const emit = defineEmits(['update:current']);

const checkAll = ref(null);
const state = reactive({
  isAllSelected: false
});

watch(
  () => props.rowSelection.selectedRowKeys,
  (selectedRowKeys) => {
    state.isAllSelected = selectedRowKeys.length === props.dataSource.length;
  },
  { immediate: true }
);

const colspan = computed(() => {
  return props.columns.length + (props.rowSelection ? 1 : 0);
});

const colStyle = (column) => {
  const style = {};
  if (column.width) {
    style.width = typeof column.width === 'string' ? column.width : `${column.width}px`;
  }
  return style;
};

// 单选
const onSelect = (row) => {
  const { selectedRowKeys, onChange } = props.rowSelection;

  if (selectedRowKeys.length > 0 && !state.isAllSelected) {
    checkAll.value.indeterminate = true;
  } else {
    checkAll.value.indeterminate = false;
  }

  // 单选时触发
  onChange(selectedRowKeys, row);
};

// 全选
const onSelectAll = () => {
  const { selectedRowKeys, onSelectAll, onSelectInvert } = props.rowSelection;

  if (state.isAllSelected) {
    selectedRowKeys.splice(0, selectedRowKeys.length);
    onSelectInvert(selectedRowKeys);
  } else {
    selectedRowKeys.splice(0, selectedRowKeys.length);
    props.dataSource.forEach((row) => {
      selectedRowKeys.push(row[props.rowKey]);
    });
    onSelectAll(selectedRowKeys);
  }
};

const onChange = (page) => {
  pagination.currentPage = page;
  emit('change', pagination);
};

const onPageSizeChange = (pageSize) => {
  pagination.pageSize = pageSize;
  emit('change', pagination);
};

const onPageChange = (page) => {
  emit('update:current', page);
};
</script>

<style lang="stylus">
.w-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;

  .w-table-thead > tr > th, .w-table-tbody > tr > td, .w-table-tfoot > tr > td {
    padding: 0 4px;
    table-layout: fixed;
    line-height: 35px;
    text-align: center;
    border-bottom: 1px solid #dadada;
    overflow-wrap: break-word;
    background: #fff;
    transition: all 0.3s linear;
  }

  .w-table-tfoot > tr > td, .w-table-thead > tr > th {
    font-weight: 500;
    font-size: 15px;
    overflow-wrap: break-word;
    background: #eee;
  }

  .empty-messgae {
    text-align: center;
  }

  .w-table-tbody > tr:hover > td {
    background: #e6f7ff;
  }

  &.w-table-nowrap {
    .w-table-thead > tr > th, .w-table-tbody > tr > td {
      white-space: nowrap;
      padding: 0 12px;
    }
  }

  &.w-table-bordered {
    border-top: 1px solid #dadada;
    border-left: 1px solid #dadada;

    .w-table-tbody > tr > td, .w-table-thead > tr > th {
      border-right: 1px solid #dadada;
    }

    .w-table-thead > tr > th {
      border-bottom: 1px solid #dadada;
    }
  }

  &.w-table-striped {
    .w-table-tbody > tr:nth-child(odd) > td {
      background: #fafafa;
    }
  }

  .w-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>