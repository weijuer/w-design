<template>
  <div class="w-table-wrapper">
    <table ref="tableRef" class="w-table" :class="tableClass" :style="tableStyle">
      <slot>
        <thead class="w-table__thead" :class="{ hidden: hideHeader }" role="rowheader">
          <tr role="row">
            <th v-if="isRowSelection">
              <w-checkbox
                ref="itemSelectAll"
                :type="type"
                :model-value="isRowSelectedAll()"
                :indeterminate="getCheckAllStatus() === 'part'"
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
            <th v-for="column in columns" :key="column.key" :class="column.sticky ? 'sticky' : null">
              {{ column.label }}
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
              :class="['w-table__row', { 'is-selected': isRowSelected(row[rowKey]) }]"
              :aria-selected="isRowSelected(row[rowKey])"
              :data-selected="isRowSelected(row[rowKey])"
              v-for="(row, index) in rows"
              :key="row[rowKey]"
              @click="onClick(row[rowKey])"
              role="row"
            >
              <td v-if="isRowSelection">
                <w-checkbox
                  :type="type"
                  :value="row[rowKey]"
                  :model-value="isRowSelected(row[rowKey])"
                  @click.stop="null"
                  @change="onSelect(row, $event)"
                />
              </td>
              <td
                :key="column.name"
                v-for="column in columns"
                :title="column.ellipsis ? row[column.name] : null"
                :class="{ sticky: column.sticky, 'w-normal-cell': column.with }"
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
        <tfoot class="w-table-tfoot" v-if="$slots.tfoot">
          <tr>
            <td :colspan="colspan">
              <slot name="tfoot"></slot>
            </td>
          </tr>
        </tfoot>
      </slot>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WTable'
}
</script>

<script lang="ts" setup>
import WCheckbox from '../../checkbox'
import { tableEmits, tableProps } from './interface'
import { useTable } from './useTable'

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)

const {
  tableRef,
  tableClass,
  tableStyle,
  colspan,
  isRowSelection,
  getRowIndex,
  isRowSelected,
  isRowSelectedAll,
  getCheckAllStatus,
  onSelectAll,
  onSelect,
  onClick
} = useTable(props, emit)
</script>

<style src="./table.scss" lang="scss" />
