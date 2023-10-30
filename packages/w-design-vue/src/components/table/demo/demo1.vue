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

  <w-preview title="Striped Rows">
    <template #desc> You can use the isStriped prop to render striped rows. </template>
    <w-space fill>
      <w-table striped :columns="columns" :rows="rows"></w-table>
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
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  simpleColor: 'default',
  multipleColor: 'default',
  selectedKeys1: ['2']
})

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

const onSelect = (selectedKeys) => {
  console.log('onSelected', selectedKeys)
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
