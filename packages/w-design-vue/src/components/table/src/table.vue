<template>
  <div class="w-table-wrapper">
    <table ref="tableRef" class="w-table" :class="tableClass">
      <slot>
        <thead class="w-table__thead" :class="{ hidden: hideHeader }" role="rowheader">
          <tr role="row">
            <th v-if="isRowSelection">
              <w-checkbox
                ref="itemSelectAll"
                animate
                :type="type"
                :model-value="isRowSelectedAll()"
                :indeterminate="getIndeterminate"
                @change="onSelectAll"
              />
              <div v-if="rowSelection.selections" class="w-row-selection">
                <div class="w-dropdown-btn">
                  <i class="fa fa-chevron-down"></i>
                  <ul class="w-dropdown-menu">
                    <li v-for="(selection, index) of rowSelection.selections" :key="'selection' + index">
                      <a href="javascript:;" @click="selection.onSelect">{{ selection.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
            <th v-for="column in columns" :key="column.key" :class="getColumnClass(column)">
              <div class="w-table__column-sorter" @click="onSorterClick(column)">
                <span>{{ column.label }}</span>
                <svg v-if="column.sorter" class="w-icon w-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12">
                  <polygon class="arrow-up" points="6 0 10 5 2 5 6 0"></polygon>
                  <polygon class="arrow-down" points="6 12 2 7 10 7 6 12"></polygon>
                </svg>
              </div>
            </th>
          </tr>
          <tr tabindex="-1" aria-hidden="true" class="w-table__thead-empty"></tr>
        </thead>

        <tbody class="w-table__tbody" role="rowgroup">
          <tr key="empty-content" v-if="rows?.length === 0" role="row">
            <td :colspan="colspan" class="empty-content">
              <slot name="empty-content">{{ emptyContent }}</slot>
            </td>
          </tr>
          <template v-else>
            <tr
              :class="[
                'w-table__row',
                { 'is-row-selected': isRowSelected(row[rowKey]), 'is-row-disabled': row.disabled }
              ]"
              :aria-selected="isRowSelected(row[rowKey])"
              :data-selected="isRowSelected(row[rowKey])"
              v-for="(row, index) in dataSource"
              :key="row[rowKey]"
              @click="onSelect(row)"
              role="row"
            >
              <td v-if="isRowSelection" role="gridcell">
                <w-checkbox
                  :type="type"
                  animate
                  :value="row[rowKey]"
                  :model-value="isRowSelected(row[rowKey])"
                  :disabled="row.disabled"
                  @click.stop="null"
                  @change="onSelect(row)"
                />
              </td>
              <td
                :key="column.name"
                v-for="column in columns"
                :title="column.ellipsis ? row[column.name] : null"
                :class="{ sticky: column.sticky, 'w-normal-cell': column.with }"
                role="gridcell"
              >
                <slot
                  v-if="column.scopedSlot"
                  :name="column.scopedSlot"
                  :index="index"
                  :row="row"
                  :data="row[column.name]"
                >
                </slot>
                <template v-else>
                  <span :class="column.ellipsis ? 'w-ellipsis' : null">
                    {{ column.name === 'index' ? getRowIndex(index) : row[column.key] }}
                  </span>
                </template>
              </td>
            </tr>
          </template>
        </tbody>

        <tfoot class="w-table-tfoot" v-if="$slots.tfoot" role="rowgroup">
          <tr role="row">
            <td :colspan="colspan" role="gridcell">
              <slot name="tfoot"></slot>
            </td>
          </tr>
        </tfoot>
      </slot>
    </table>

    <w-pagination
      v-if="pagination"
      v-bind="{ ...pagination }"
      @page-size-change="onPageSizeChange"
      @change="onPageChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'WTable'
}
</script>

<script lang="ts" setup>
import WCheckbox from '../../checkbox'
import WPagination from '../../pagination'
import { tableEmits, tableProps } from './interface'
import { useTable } from './useTable'

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)

const {
  tableRef,
  tableClass,
  dataSource,
  colspan,
  isRowSelection,
  getIndeterminate,
  getColumnClass,
  getRowIndex,
  isRowSelected,
  isRowSelectedAll,
  onSelectAll,
  onSelect,
  onSorterClick,
  onPageSizeChange,
  onPageChange
} = useTable(props, emit)
</script>

<style src="./table.scss" lang="scss" />
