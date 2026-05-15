# Grid 网格

用于网格布局。

## 基础用法

```vue preview
<script setup lang="ts">
import { WGrid, WGridItem } from 'w-design-vue'

</script>

<template>
  <WGrid :columns="4">
    <WGridItem>1</WGridItem>
    <WGridItem>2</WGridItem>
    <WGridItem>3</WGridItem>
    <WGridItem>4</WGridItem>
  </WGrid>
</template>

<style scoped>
:deep(.w-grid-item) {
  background: #409eff;
  color: white;
  padding: 16px;
  text-align: center;
}
</style>
```

## 自定义列数

```vue preview
<script setup lang="ts">
import { WGrid, WGridItem } from 'w-design-vue'

</script>

<template>
  <WGrid :columns="3" :gap="12">
    <WGridItem>1</WGridItem>
    <WGridItem>2</WGridItem>
    <WGridItem>3</WGridItem>
    <WGridItem>4</WGridItem>
    <WGridItem>5</WGridItem>
    <WGridItem>6</WGridItem>
  </WGrid>
</template>

<style scoped>
:deep(.w-grid-item) {
  background: #67c23a;
  color: white;
  padding: 16px;
  text-align: center;
}
</style>
```

## Props

### Grid

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columns | `number` | `4` | 列数 |
| gap | `number` | `8` | 间距（px） |

### GridItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| span | `number` | `1` | 跨列数 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |