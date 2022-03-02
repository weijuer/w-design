<template>
  <div class="w-table-wrapper">
    <div class="w-table-container">
      <div v-show="loading" class="loading">
        <svg class="loading-svg" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" class="circle"></circle>
        </svg>
      </div>
      <table :class="tableClass">
        <caption v-if="caption">
          {{ caption }}
        </caption>
        <colgroup>
          <col v-if="rowSelection" :style="indexStyle" />
          <col :style="colStyle(column)" :key="column.name" v-for="column in columns" />
        </colgroup>
        <thead class="w-table-thead">
          <tr>
            <th v-if="rowSelection" :class="rowSelection.selections ? null : 'sticky'">
              <input
                ref="checkAll"
                :type="inputType"
                v-model="isAllSelected"
                @change="onSelectAll"
              />
              <div v-if="rowSelection.selections" class="w-row-selection">
                <div class="w-dropdown-btn">
                  <i class="fa fa-chevron-down"></i>
                  <ul class="w-dropdown-menu">
                    <li
                      v-for="(selection, index) of rowSelection.selections"
                      :key="'selection' + index"
                    >
                      <a href="javascript:;" @click="selection.onSelect">{{ selection.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
            <th
              :key="column.name"
              v-for="column in columns"
              :class="column.sticky ? 'sticky' : null"
            >
              {{ column.title }}
            </th>
          </tr>
        </thead>
        <tbody class="w-table-tbody">
          <tr key="empty-messgae" v-if="dataSource.length === 0">
            <td :colspan="getColspan" class="empty-messgae">{{ locale.emptyMessage }}</td>
          </tr>
          <template v-else>
            <tr :key="row[rowKey]" v-for="(row, index) in dataSource">
              <td v-if="rowSelection" :class="[rowSelection.selections ? '' : 'sticky']">
                <input
                  :type="inputType"
                  :value="row[rowKey]"
                  :checked="isRowChecked(row)"
                  v-bind="getCheckboxProps(row)"
                  @change="onSelect(row, $event)"
                />
              </td>
              <td
                :key="column.name"
                v-for="column in columns"
                :title="column.ellipsis ? row[column.name] : null"
                :class="{ sticky: column.sticky }"
              >
                <slot
                  v-if="column.scopedSlot"
                  :name="column.scopedSlot"
                  :index="index"
                  :row="row"
                  :data="row[column.name]"
                >
                  {{ row[column.name] }}
                </slot>
                <template v-else>
                  <span :class="column.ellipsis ? 'w-ellipsis' : null">
                    {{ column.name === 'index' ? getIndex(index) : row[column.name] }}
                  </span>
                </template>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot class="w-table-tfoot" v-if="$slots.tfoot">
          <tr>
            <td :colspan="getColspan">
              <slot name="tfoot"></slot>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <w-pagination
      v-if="pagination"
      v-bind="{ ...pagination, locale }"
      @page-size-change="onPageSizeChange"
      @change="onPageChange"
    />
  </div>
</template>

<script>
export default {
  name: 'w-table'
};
</script>

<script setup>
import { ref, computed, reactive, watch } from 'vue';
import wPagination from '../pagination';

const props = defineProps({
  // 本地数据来源
  isLocal: {
    type: Boolean,
    default: false
  },
  // 数据源
  rows: { type: Array, require: true, default: () => [] },
  /**
   * 表头数据源
   * @example [{title: '名称',name: '字段名',scopedSlot: 'slot名称', width: 150, sticky: true, ellipsis: true}]
   */
  columns: { type: Array, require: true, default: () => [] },
  // 表格说明
  caption: String,
  // 页面是否加载中
  loading: {
    type: Boolean,
    default: false
  },
  // 是否响应式
  responsive: {
    type: Boolean,
    default: true
  },
  // 是否斑马纹
  striped: {
    type: Boolean,
    default: false
  },
  // 默认文案设置
  locale: {
    type: Object,
    default: () => {
      return {
        emptyMessage: '暂无数据',
        total: '共',
        count: '条',
        perPage: '每页'
      };
    }
  },
  // rowKey: 'id'
  rowKey: {
    type: String,
    default: 'id'
  },
  // 分页信息
  pagination: {
    type: [Object, Boolean],
    default: function () {
      return {
        currentIndex: 1,
        pageSize: 10,
        totalCount: 0,
        pageSizes: [10, 20, 30]
      };
    }
  },
  rowSelection: {
    type: [Boolean, Object],
    default: null
  }
});

const checkAll = ref(null);
const state = reactive({
  selectedRows: [], // 已选中的行
  selectedRowKeys: [], // 已选中的行的key
  isAllSelected: false // 是否全选
});

const emit = defineEmits(['change', 'select', 'select-all']);

const rowKey = computed(() => {
  return props.rowKey;
});

// 获取表格的列数
const getColspan = computed(() => {
  const { columns, rowSelection } = props;
  return columns.length + (rowSelection ? 1 : 0);
});

// 是否本地数据
const dataSource = computed(() => {
  console.log('dataSource');
  const { isLocal, rows, pagination } = props;
  if (isLocal) {
    const { currentIndex, pageSize } = pagination;
    const start = (currentIndex - 1) * pageSize;
    const end = start + pageSize;
    return rows.slice(start, end);
  } else {
    return rows;
  }
});

// input类型
const inputType = computed(() => {
  const { rowSelection } = props;
  return rowSelection && rowSelection.type === 'radio' ? 'radio' : 'checkbox';
});

const indexStyle = computed(() => {
  const { rowSelection } = props;
  return rowSelection ? 'sticky' : null;
});

const tableClass = computed(() => {
  const { striped, responsive, rowSelection, bordered } = props;
  return [
    'w-table',
    striped ? 'w-table-striped' : null,
    responsive ? 'w-table-responsive' : null,
    bordered ? 'w-table-bordered' : null,
    dataSource.length > 10 ? 'w-table-scroll' : null,
    rowSelection ? 'w-table-row-selection' : null
  ];
});

const getCheckboxProps = (row) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    return {
      type,
      value: row[rowKey],
      checked: state.selectedRowKeys.includes(row[rowKey]),
      disabled: checkStrictly && !state.selectedRowKeys.includes(row[rowKey])
    };
  }
};

const isRowChecked = (row) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    if (type === 'radio') {
      return state.selectedRowKeys.includes(row[rowKey]);
    } else if (type === 'checkbox') {
      return checkStrictly
        ? state.selectedRowKeys.includes(row[rowKey])
        : state.selectedRowKeys.some((key) => key === row[rowKey]);
    }
  }
};

const getIndex = (index) => {
  const {
    pagination: { currentIndex, pageSize }
  } = props;

  console.log('getIndex', currentIndex, pageSize);
  return (currentIndex - 1) * pageSize + index + 1;
};

const onRowClick = (row, index) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    if (type === 'radio') {
      state.selectedRows = [row];
      state.selectedRowKeys = [row[rowKey]];
    } else if (type === 'checkbox') {
      if (checkStrictly) {
        state.selectedRows = [row];
        state.selectedRowKeys = [row[rowKey]];
      } else {
        const index = state.selectedRowKeys.indexOf(row[rowKey]);
        if (index > -1) {
          state.selectedRows.splice(index, 1);
          state.selectedRowKeys.splice(index, 1);
        } else {
          state.selectedRows.push(row);
          state.selectedRowKeys.push(row[rowKey]);
        }
      }
    }
  }
};

const onCheckboxChange = (row, checked) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    if (type === 'radio') {
      state.selectedRows = [row];
      state.selectedRowKeys = [row[rowKey]];
    } else if (type === 'checkbox') {
      if (checkStrictly) {
        state.selectedRows = [row];
        state.selectedRowKeys = [row[rowKey]];
      } else {
        const index = state.selectedRowKeys.indexOf(row[rowKey]);
        if (index > -1) {
          state.selectedRows.splice(index, 1);
          state.selectedRowKeys.splice(index, 1);
        } else {
          state.selectedRows.push(row);
          state.selectedRowKeys.push(row[rowKey]);
        }
      }
    }
  }
};

const onCheckAllChange = (checked) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    if (type === 'radio') {
      state.selectedRows = checked ? state.rows : [];
      state.selectedRowKeys = checked ? state.rows.map((row) => row[rowKey]) : [];
    } else if (type === 'checkbox') {
      if (checkStrictly) {
        state.selectedRows = checked ? state.rows : [];
        state.selectedRowKeys = checked ? state.rows.map((row) => row[rowKey]) : [];
      } else {
        state.selectedRows = checked ? state.rows : [];
        state.selectedRowKeys = checked ? state.rows.map((row) => row[rowKey]) : [];
      }
    }
  }
};

const onSelectChange = (selectedRowKeys, selectedRows) => {
  const { rowSelection } = props;
  if (rowSelection) {
    const { type, checkStrictly } = rowSelection;
    if (type === 'radio') {
      state.selectedRows = selectedRows;
      state.selectedRowKeys = selectedRowKeys;
    } else if (type === 'checkbox') {
      if (checkStrictly) {
        state.selectedRows = selectedRows;
        state.selectedRowKeys = selectedRowKeys;
      } else {
        state.selectedRows = selectedRows;
        state.selectedRowKeys = selectedRowKeys;
      }
    }
  }
};

const onPaginationChange = (currentIndex, pageSize) => {
  const { pagination } = state;
  const { currentIndex: current, pageSize: size } = pagination;
  if (current !== currentIndex || size !== pageSize) {
    state.pagination.currentIndex = currentIndex;
    state.pagination.pageSize = pageSize;
    emit('change', {
      currentIndex,
      pageSize
    });
  }
};

const onSearch = (search) => {
  const { pagination } = state;
  const { currentIndex, pageSize } = pagination;
  if (search !== state.search) {
    state.search = search;
    emit('change', {
      currentIndex,
      pageSize,
      search
    });
  }
};

const onSort = (sort) => {
  const { pagination } = state;
  const { currentIndex, pageSize } = pagination;
  if (sort !== state.sort) {
    state.sort = sort;
    emit('change', {
      currentIndex,
      pageSize,
      sort
    });
  }
};

const onFilter = (filter) => {
  const { pagination } = state;
  const { currentIndex, pageSize } = pagination;
  if (filter !== state.filter) {
    state.filter = filter;
    emit('change', {
      currentIndex,
      pageSize,
      filter
    });
  }
};

const onReset = () => {
  const { pagination } = state;
  const { currentIndex, pageSize } = pagination;
  if (state.search !== '' || state.sort !== '' || state.filter !== '') {
    state.search = '';
    state.sort = '';
    state.filter = '';
    emit('change', {
      currentIndex,
      pageSize
    });
  }
};

const onChange = (data) => {
  const { pagination } = state;
  const { currentIndex, pageSize } = pagination;
  if (data.currentIndex !== currentIndex || data.pageSize !== pageSize) {
    state.pagination.currentIndex = data.currentIndex;
    state.pagination.pageSize = data.pageSize;
    emit('change', data);
  }
};

const colStyle = (column) => {
  const style = {};
  if (column.width) {
    style.width = typeof column.width === 'string' ? column.width : `${column.width}px`;
  }
  return style;
};

// 单选
const onSelect = (row, event) => {
  const { checked, disabled } = event.target;
  const { onChange, onSelect } = props.rowSelection;

  if (disabled) {
    return;
  }

  // 选中的行处理
  if (checked) {
    state.selectedRows.push(row);
    state.selectedRowKeys.push(row[this.rowKey]);
  } else {
    state.selectedRows = state.selectedRows.filter((item) => item !== row);
    state.selectedRowKeys = state.selectedRowKeys.filter((item) => item !== row[this.rowKey]);
  }

  // 选中项变化时触发
  onChange?.(state.selectedRowKeys, state.selectedRows);

  // 单选时触发
  onSelect?.(row, checked, state.selectedRows, event);
};

// 全选
const onSelectAll = (event) => {
  const isChecked = event.target.checked;
  const { onChange, onSelectAll } = props.rowSelection;
  const { rows, rowKey } = props;
  const changedRows = [];
  const changedRowKeys = [];

  // 选中的行处理
  if (isChecked) {
    state.selectedRows = rows;
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

const setInitStatus = () => {
  state.selectedRows = [];
  state.selectedRowKeys = [];
  state.isAllSelected = false;
};

const setImmediateStatus = () => {
  state.selectedRows = props.rows;
  state.selectedRowKeys = props.rows.map((item) => item[props.rowKey]);
  state.isAllSelected = true;
};

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

.w-row-selection {
  display: inline-block;
  position: absolute;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  .loading-svg {
    width: 50px;
    height: 50px;
    animation: loading-rotate 1.5s ease-in-out infinite;

    .circle {
      stroke: #fff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 96, 126;
      stroke-dashoffset: 0;
      animation: loading-dash 1.5s ease-in-out infinite;
    }
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 126; /* 实线部分1，虚线部分126 */
    stroke-dashoffset: 0; /* 前面1/126显示实线，后面125显示空白 */
  }

  50% {
    stroke-dasharray: 96, 126; /* 实线部分95，虚线部分126 */
    stroke-dashoffset: -30px; /* 顺时针偏移31/126，即前31/126显示空白，后面3/4显示线条 */
  }

  to {
    stroke-dasharray: 6, 120; /* 实线部分6，虚线部分120 */
    stroke-dashoffset: -120px; /* 最后顺时针偏移120/126，即前120/126显示空白，后面6点显示线条部分 */
  }
}

@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>