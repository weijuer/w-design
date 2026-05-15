# Breadcrumb 面包屑

用于显示当前页面在层级结构中的位置。

## 基础用法

```vue preview
<script setup lang="ts">
import { WBreadcrumb, WBreadcrumbItem } from 'w-design-vue'

</script>

<template>
  <WBreadcrumb>
    <WBreadcrumbItem>首页</WBreadcrumbItem>
    <WBreadcrumbItem>组件</WBreadcrumbItem>
    <WBreadcrumbItem active>面包屑</WBreadcrumbItem>
  </WBreadcrumb>
</template>
```

## Props

### Breadcrumb

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| separator | `string` | `'/'` | 分隔符 |

### BreadcrumbItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| active | `boolean` | `false` | 是否当前页 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
| separator | 自定义分隔符 |