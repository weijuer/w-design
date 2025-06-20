<script setup>
import { reactive } from 'vue'
import { Menu as WMenu, MenuItem as WMenuItem } from 'w-design-vue';
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

<template>
    <w-menu v-model:selected-keys="state.selectedKeys" @select="onSelect" style="width: 240px">
        <w-menu-item v-for="{ label, value, icon } in state.simpleMenus" :key="value" :label="label" :value="value"
            :icon="icon"></w-menu-item>
    </w-menu>
</template>