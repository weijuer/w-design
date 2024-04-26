<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-menu v-model:selected-keys="state.selectedKeys" @select="onSelect" style="width: 240px">
        <w-menu-item
          v-for="{ label, value, icon } in state.menu1"
          :key="value"
          :label="label"
          :value="value"
          :icon="icon"
        ></w-menu-item>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Menu Item Group" desc="Menu Item Group">
    <w-space>
      <w-menu style="width: 240px">
        <w-menu-item-group label="Group 01">
          <w-menu-item icon="moon" label="test 01"></w-menu-item>
          <w-menu-item icon="sun" label="test 02"></w-menu-item>
        </w-menu-item-group>
        <w-menu-item-group label="Group 02">
          <w-menu-item icon="moon" label="test 01"></w-menu-item>
          <w-menu-item icon="sun" label="test 02"></w-menu-item>
        </w-menu-item-group>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Sub Menu" desc="Sub Menu">
    <w-space>
      <w-menu v-model:expanded-keys="state.expandedKeys" style="width: 240px">
        <w-sub-menu label="Sub 01" value="sub01">
          <w-menu-item
            v-for="{ label, value, icon } in state.menu2"
            :key="value"
            :label="label"
            :value="value"
            :icon="icon"
          ></w-menu-item>

          <w-menu-item-group label="Group 02">
            <w-menu-item
              v-for="{ label, value, icon } in state.menu3"
              :key="value"
              :label="label"
              :value="value"
              :icon="icon"
            ></w-menu-item>
          </w-menu-item-group>
        </w-sub-menu>
      </w-menu>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'

const genMenuItem = num => {
  const icons = ['sun', 'moon', 'file']

  return Array(num)
    .fill(1)
    .map((_, index) => ({
      label: 'Item ' + (index + 1),
      value: 'item_' + (index + 1),
      icon: icons[Math.floor(Math.random() * icons.length)]
    }))
}

const state = reactive({
  selectedKeys: [],
  expandedKeys: [],
  menu1: genMenuItem(4),
  menu2: genMenuItem(3),
  menu3: genMenuItem(2)
})

const onSelect = key => {
  console.log('onSelect', key)
}
</script>
