<template>
  <w-preview title="Use Case Example">
    <template #desc>
      When creating a table, you usually need core functionalities like sorting, pagination, and filtering. In the
      example below, we combined all these functionalities to create a complete table.
    </template>
    <w-space fill>
      <w-table
        selection-mode="multiple"
        :selected-keys="state.selectedKeys"
        row-key="id"
        @select="onSelect"
        type="primary"
        :columns="usageColumns"
        :rows="usageData ?? []"
        :loading-state="usageLoadingState"
      >
        <template #name="{ row }">
          <div class="user">
            <w-avatar></w-avatar>
            <div class="info">
              <span class="name">{{ row.name }}</span>
              <span class="desc">{{ row.email }}</span>
            </div>
          </div>
        </template>

        <template #role="{ row }">
          <div class="info">
            <span class="name">{{ row.role }}</span>
            <span class="desc">{{ row.team }}</span>
          </div>
        </template>

        <template #status="{ row }">
          <w-chip flat :type="statusColorMap[row.status]">{{ row.status }}</w-chip>
        </template>

        <template #actions="{ row }">
          <div class="btn-group">
            <w-button @click="onDetailsClick(row)" icon="password-on"></w-button>
            <w-button icon="file"></w-button>
            <w-button type="danger" icon="delete-filled"></w-button>
          </div>
        </template>

        <template #top>
          <w-space justify="space-between">
            <w-input-search v-model="state.name" label="Name" placeholder="Name"></w-input-search>
            <w-select v-model="state.status" :options="statusOptions"></w-select>
            <w-select v-model="state.columns" :options="columnsOptions"></w-select>
          </w-space>
          <w-space justify="space-between">
            <div>Total {{ pagination3.total }} users</div>
            <div>
              Rows per page: <w-select v-model="pagination3.pageSize" :options="pagination3.pageSizeOptions"></w-select>
            </div>
          </w-space>
        </template>
        <template #end>
          <w-space justify="space-between">
            <w-pagination v-bind="{ ...pagination3 }" />
            <div>{{ pagination3.total }} of selected</div>
          </w-space>
        </template>
      </w-table>
    </w-space>
  </w-preview>
</template>

<script>
export default {
  name: 'Usage'
}
</script>

<script setup>
import { reactive, computed } from 'vue'
import { statusOptions, usageColumns, usageRows, statusColorMap } from './data'
import useAsyncList from './useAsyncList'

const state = reactive({
  loading: false,
  name: '',
  status: '',
  columns: [],
  selectedKeys: []
})

const pagination3 = reactive({
  current: 1,
  pageSize: 5,
  pageSizeOptions: [5, 10, 20],
  total: 50,
  onChange(current, pageSize) {
    console.log('onChange: pagination3', current, pageSize)
    usageLoadMore.value = true
    pagination3.current = current
  }
})

const usageLoadingState = computed(() => (isUsageLoading.value || usageData?.length === 0 ? 'loading' : 'idle'))

const columnsOptions = computed(() => {
  return usageColumns.map(({ label, key: value }) => ({ label, value }))
})

const {
  isLoading: isUsageLoading,
  data: usageData,
  loadMore: usageLoadMore
} = useAsyncList({
  async load() {
    // 模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        // 随机排序
        resolve([...usageRows.sort(() => Math.random() - 0.5)])
      }, 1000)
    })
  }
})

const onSelect = (selectedKeys, selectedRows) => {
  console.log('onSelected', selectedKeys, selectedRows)
  state.selectedKeys = selectedKeys
}
</script>

<style scoped lang="scss">
.demo-content-container {
  .title {
    font-weight: 700;
  }
  .sub-title {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}
.placements-demo {
  .w-button {
    width: 8rem;
    height: 4rem;
  }
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
}
.info {
  display: flex;
  flex-direction: column;

  .desc {
    color: rgba(0, 0, 0, 0.3);
  }
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
