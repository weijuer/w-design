<template>
  <div class="w-table-wrapper">
    <table ref="tableRef" class="w-table" :class="tableClass" :style="tableStyle">
      <slot>
        <thead class="w-table__thead" :class="{ hidden: hideHeader }" role="rowheader">
          <tr role="row">
            <th v-for="column in columns" :key="column.key" :class="column.sticky ? 'sticky' : null">
              {{ column.label }}
            </th>
          </tr>
        </thead>

        <tbody class="w-table__tbody" role="rowgroup">
          <tr key="empty-content" v-if="rows?.length === 0" role="row">
            <td :colspan="colspan" class="empty-content">
              <slot name="empty-content">{{ emptyContent }}</slot>
            </td>
          </tr>
          <template v-else>
            <tr :key="row[rowKey]" v-for="(row, index) in rows" role="row">
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
// import WCheckbox from '../../checkbox'
import { tableEmits, tableProps } from './interface'
import { useTable } from './useTable'

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)

const { tableRef, tableClass, tableStyle, colspan, getRowIndex } = useTable(props, emit)
</script>

<style src="./table.scss" lang="scss" />
