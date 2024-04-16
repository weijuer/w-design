<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-menu default-value="1" @select="onSelect" style="width: 240px">
        <w-menu-item title="default"></w-menu-item>
        <w-menu-item icon="moon" title="test 01"></w-menu-item>
        <w-menu-item icon="sun" title="test 02"></w-menu-item>
        <w-menu-item icon="file" title="test 02">
          <template #end>
            <w-chip size="small" type="danger">new</w-chip>
          </template>
        </w-menu-item>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Menu Item Group" desc="Menu Item Group">
    <w-space>
      <w-menu default-value="1" style="width: 240px">
        <w-menu-item-group title="Group 01">
          <w-menu-item icon="moon" title="test 01"></w-menu-item>
          <w-menu-item icon="sun" title="test 02"></w-menu-item>
        </w-menu-item-group>
        <w-menu-item-group title="Group 02">
          <w-menu-item icon="moon" title="test 01"></w-menu-item>
          <w-menu-item icon="sun" title="test 02"></w-menu-item>
        </w-menu-item-group>
      </w-menu>
    </w-space>
  </w-preview>

  <w-preview title="Sub Menu" desc="Sub Menu">
    <w-space>
      <w-menu default-value="1" style="width: 240px">
        <w-sub-menu title="Group 01">
          <w-menu-item icon="moon" title="test 01"></w-menu-item>
          <w-menu-item icon="sun" title="test 02"></w-menu-item>

          <w-menu-item-group title="Group 02">
            <w-menu-item icon="moon" title="test 01"></w-menu-item>
            <w-menu-item icon="sun" title="test 02"></w-menu-item>
          </w-menu-item-group>
        </w-sub-menu>
      </w-menu>
    </w-space>
  </w-preview>
</template>

<script setup>
// import { ref } from 'vue'

// const value = ref(5)

const onSelect = key => {
  console.log('onSelect', key)
}
</script>
