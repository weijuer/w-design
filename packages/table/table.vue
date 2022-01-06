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
      <tr key="empty-messgae" v-if="rows.length === 0">
        <td :colspan="colspan" class="empty-messgae">{{ emptyMessage }}</td>
      </tr>
      <template v-else>
        <tr :key="row[rowKey]" v-for="(row, index) in rows">
          <td v-if="rowSelection">
            <input
              :type="rowSelection.type"
              :value="row[rowKey]"
              v-model="state.selectedRowKeys"
              @change="onSelect(row, $event)"
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
            <w-pagination
              v-bind="pagination"
              @page-size-change="onPageSizeChange"
              @change="onPageChange"
            />
          </slot>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'w-table',
}
</script>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import wPagination from '../pagination';

const props = defineProps({
  rows: {
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
    type: [Object, Boolean],
    default: null
  }
});

const checkAll = ref(null);
const state = reactive({
  selectedRows: [], // 已选中的行
  selectedRowKeys: [], // 已选中的行的key
  isAllSelected: false // 是否全选
});

const emit = defineEmits(['change', 'update:current']);

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
const onSelect = (row, event) => {
  const isChecked = event.target.checked;
  const { onChange, onSelect } = props.rowSelection;

  // 半选状态处理
  if (state.selectedRowKeys.length > 0 && !state.isAllSelected) {
    checkAll.value.indeterminate = true;
  } else {
    checkAll.value.indeterminate = false;
  }

  // 选中的行处理
  if (isChecked) {
    state.selectedRows.push(row);
  } else {
    state.selectedRows = state.selectedRows.filter((item) => item !== row);
  }

  // 选中项变化时触发
  onChange?.(state.selectedRowKeys, state.selectedRows);

  // 单选时触发
  onSelect?.(row, isChecked, state.selectedRows, event);
};

// 全选
const onSelectAll = (event) => {
  const isChecked = event.target.checked;
  const { onChange, onSelectAll } = props.rowSelection;
  const { rows, rowKey } = props;

  // 选中的行处理
  if (isChecked) {
    state.selectedRows = rows;
    state.selectedRowKeys = rows.map((item) => item[rowKey]);
  } else {
    state.selectedRows = [];
    state.selectedRowKeys = [];
  }

  // 选中项变化时触发
  onChange?.(state.selectedRowKeys, state.selectedRows);

  // 单选时触发
  onSelectAll?.(isChecked, state.selectedRows);
};

watch(
  () => state.selectedRowKeys,
  (selectedRowKeys) => {
    state.isAllSelected = selectedRowKeys.length === props.rows.length;
  }
);

const onPageChange = (page, pageSize) => {
  props.pagination.current = page;
  props.pagination.pageSize = pageSize;
  emit('change', props.pagination);
};

const onPageSizeChange = (current, pageSize) => {
  props.pagination.current = page;
  props.pagination.pageSize = pageSize;
  emit('change', props.pagination);
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