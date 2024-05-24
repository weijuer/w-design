<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-menu v-model:selected-keys="state.selectedKeys" @select="onSelect" style="width: 240px">
        <w-menu-item
          v-for="{ label, value, icon } in state.simpleMenus"
          :key="value"
          :label="label"
          :value="value"
          :icon="icon"
        ></w-menu-item>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Horizontal" desc="Horizontal">
    <w-space fill>
      <w-menu mode="horizontal" v-model:selected-keys="state.selectedKeys" @select="onSelect" style="width: 240px">
        <w-menu-item
          v-for="{ label, value, icon } in state.simpleMenus"
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
      <w-menu v-model:selected-keys="state.selectedKeys" style="width: 240px">
        <w-menu-item-group v-for="menu in state.groupMenus" :key="menu.value" :label="menu.label">
          <template v-if="menu.children">
            <w-menu-item
              v-for="child in menu.children"
              :key="child.value"
              :label="child.label"
              :value="child.value"
            ></w-menu-item>
          </template>
        </w-menu-item-group>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Sub Menu" desc="Sub Menu">
    <w-space>
      <w-menu
        v-model:selected-keys="state.selectedKeys"
        v-model:expanded-keys="state.expandedKeys"
        accordion
        style="width: 240px"
      >
        <w-sub-menu
          v-for="subMenu in state.subMenus"
          :key="subMenu.value"
          :label="subMenu.label"
          :value="subMenu.value"
        >
          <template v-if="subMenu.children">
            <w-menu-item
              v-for="child in subMenu.children"
              :key="child.value"
              :label="child.label"
              :value="child.value"
            ></w-menu-item>
          </template>
        </w-sub-menu>
      </w-menu>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'
import { uuid } from '@w-design/utils'

const getItem = (label, value, icon, children, type = '') => {
  let _children

  if (type) {
    _children = Array(children)
      .fill(1)
      .map((_, index) => getItem(type + (index + 1), uuid(), ''))
  }

  return {
    label,
    value,
    icon,
    children: _children,
    type
  }
}

const genMenuItem = (navNum, subNum, label = 'Nav', type) => {
  return Array(navNum)
    .fill(1)
    .map((_, index) => getItem(label + (index + 1), uuid(), null, subNum, type))
}

const state = reactive({
  selectedKeys: [],
  expandedKeys: [],
  simpleMenus: genMenuItem(4, 0, 'Nav'),
  groupMenus: genMenuItem(2, 3, 'Group', 'group'),
  subMenus: genMenuItem(3, 2, 'Sub', 'sub')
})

const onSelect = key => {
  console.log('onSelect', key)
}
</script>
