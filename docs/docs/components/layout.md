# Layout 布局

用于页面布局。

## 基础用法

```vue preview
<script setup lang="ts">
import { WLayout, WHeader, WMain, WFooter, WAside } from 'w-design-vue'

</script>

<template>
  <WLayout class="demo-layout">
    <WHeader>Header</WHeader>
    <WLayout>
      <WAside>Aside</WAside>
      <WMain>Main</WMain>
    </WLayout>
    <WFooter>Footer</WFooter>
  </WLayout>
</template>

<style scoped>
.demo-layout {
  height: 200px;
}

:deep(.w-header),
:deep(.w-footer) {
  background: #409eff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.w-aside) {
  background: #545c64;
  color: white;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.w-main) {
  background: #f5f5f5;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## Props

### Layout

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| direction | `string` | `'horizontal'` | 布局方向：`horizontal`、`vertical` |

### Header / Footer / Aside / Main

无额外属性。

## Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |