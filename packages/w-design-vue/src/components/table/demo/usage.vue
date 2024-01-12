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
        :columns="columns"
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
            <w-space>
              <w-select v-model="state.status" :options="statusOptions"></w-select>
              <w-select multiple v-model="state.columns" :options="columnsOptions"></w-select>
            </w-space>
          </w-space>
          <w-space justify="space-between">
            <div>Total {{ pagination.total }} users</div>
            <div>
              Rows per page: <w-select v-model="pagination.pageSize" :options="pagination.pageSizeOptions"></w-select>
            </div>
          </w-space>
        </template>
        <template #end>
          <w-space justify="space-between">
            <w-pagination v-bind="{ ...pagination }" />
            <div>{{ state.selectedKeys.length }} of {{ pagination.pageSize }} selected</div>
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
  columns: ['id', 'name', 'email'],
  selectedKeys: []
})

const pagination = reactive({
  current: 1,
  pageSize: 5,
  pageSizeOptions: [5, 10, 20],
  total: usageRows.length,
  onChange(current, pageSize) {
    console.log('onChange: pagination', current, pageSize)
    usageLoadMore.value = true
    pagination.current = current
  }
})

const usageLoadingState = computed(() => (isUsageLoading.value || usageData?.length === 0 ? 'loading' : 'idle'))

const columnsOptions = computed(() => {
  return usageColumns.map(({ label, key: value }) => ({ label, value }))
})

const columns = computed(() => usageColumns.filter((item) => state.columns.includes(item.key)))

const {
  isLoading: isUsageLoading,
  data: usageData,
  loadMore: usageLoadMore
} = useAsyncList({
  async load() {
    // 模拟数据
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (pagination.current - 1) * pagination.pageSize
        const end = pagination.current * pagination.pageSize

        // 随机排序
        resolve([...usageRows.slice(start, end)])
      }, 1000)
    })
  }
})

const onSelect = (selectedKeys, selectedRows) => {
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
