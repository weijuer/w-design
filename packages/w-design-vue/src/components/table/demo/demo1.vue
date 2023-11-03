<template>
  <w-preview title="Default">
    <template #desc>
      To render a table dynamically, you can use the columns prop to pass the columns and items prop to pass the data.
    </template>
    <w-space fill>
      <w-table :rows="rows" :columns="columns"></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Empty State">
    <template #desc> You can use the emptyContent prop to render a custom component when the table is empty. </template>
    <w-space fill>
      <w-table :columns="columns" :rows="[]" empty-content="No data to display."></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Without Header">
    <template #desc> In case you don't want to render the header, you can use the hideHeader prop. </template>
    <w-space fill>
      <w-table hide-header :columns="columns" :rows="rows"></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Custom Cells">
    <template #desc>
      You can render any component inside the table cell. In the example below, we are rendering different components
      according to the key of the column.
    </template>
    <w-space fill>
      <w-table row-key="id" :columns="customColumns" :rows="users">
        <template #name="{ row }">
          <w-avatar :src="row.avatar"></w-avatar>
          {{ row.email }}
        </template>

        <template #role="{ row }">
          <span>{{ row.role }}</span>
          <br />
          <span>{{ row.team }}</span>
        </template>

        <template #status="{ row }">
          <w-chip flat :type="statusColorMap[row.status]">{{ row.status }}</w-chip>
        </template>

        <template #actions="{ row }">
          <w-button @click="viewUser(row)">View</w-button>
        </template>
      </w-table>
    </w-space>
  </w-preview>

  <w-preview title="Striped Rows">
    <template #desc> You can use the isStriped prop to render striped rows. </template>
    <w-space fill>
      <w-table striped :columns="columns" :rows="rows"></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Bordered Rows">
    <template #desc> You can use the isStriped prop to render striped rows. </template>
    <w-space fill>
      <w-table bordered :columns="columns" :rows="rows"></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Single Row Selection">
    <template #desc>
      It is possible to make the table rows selectable. To do so, you can use the selectioMode prop. Use
      defaultSelectedKeys to provide a default set of selected rows.
    </template>
    <w-space fill>
      <w-table
        :type="state.simpleColor"
        selection-mode="single"
        :default-selected-keys="['2']"
        :columns="columns"
        :rows="rows"
      ></w-table>
      <w-radio-group label="Selection color" orientation="horizontal" v-model="state.simpleColor">
        <w-radio v-for="color in colors" :key="color" :type="color" :value="color">{{ color }}</w-radio>
      </w-radio-group>
    </w-space>
  </w-preview>

  <w-preview title="Multiple Row Selection">
    <template #desc>
      You can also select multiple rows by using the selectionMode="multiple" prop. Use defaultSelectedKeys to provide a
      default set of selected rows.
    </template>
    <w-space fill>
      <w-table
        :type="state.multipleColor"
        selection-mode="multiple"
        :default-selected-keys="['2', '3']"
        :columns="columns"
        :rows="rows"
      ></w-table>

      <w-radio-group label="Selection color" orientation="horizontal" v-model="state.multipleColor">
        <w-radio v-for="color in colors" :key="color" :type="color" :value="color">{{ color }}</w-radio>
      </w-radio-group>
    </w-space>
  </w-preview>

  <w-preview title="Controlled Selection">
    <template #desc>
      To programmatically control row selection, use the selectedKeys prop paired with the onSelect callback. The key
      prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state
      accordingly.
    </template>
    <w-space fill>
      <w-table
        selection-mode="multiple"
        :selected-keys="state.selectedKeys1"
        @select="onSelect"
        :columns="columns"
        :rows="rows"
      ></w-table>
    </w-space>
  </w-preview>

  <w-preview title="Disabled Rows">
    <template #desc>
      You can disable rows by using the disabledKeys prop. This will prevent rows from being selectable as shown in the
      example below.
    </template>
    <w-space fill>
      <w-table
        type="primary"
        selection-mode="multiple"
        :disabled-keys="['2', '3']"
        :columns="columns"
        :rows="rows"
      ></w-table>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'
import { columns as customColumns, users } from './data'

const state = reactive({
  simpleColor: 'default',
  multipleColor: 'default',
  selectedKeys1: ['2']
})

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning'
}

const colors = ['default', 'primary', 'success', 'warning', 'info', 'danger']
const rows = [
  {
    key: '1',
    name: 'Tony Reichert',
    role: 'CEO',
    status: 'Active'
  },
  {
    key: '2',
    name: 'Zoey Lang',
    role: 'Technical Lead',
    status: 'Paused'
  },
  {
    key: '3',
    name: 'Jane Fisher',
    role: 'Senior Developer',
    status: 'Active'
  },
  {
    key: '4',
    name: 'William Howard',
    role: 'Community Manager',
    status: 'Vacation'
  }
]

const columns = [
  {
    key: 'name',
    label: 'NAME'
  },
  {
    key: 'role',
    label: 'ROLE'
  },
  {
    key: 'status',
    label: 'STATUS'
  }
]

const onSelect = (selectedKeys, selectedRows) => {
  console.log('onSelected', selectedKeys, selectedRows)
  state.selectedKeys1 = selectedKeys
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
</style>
