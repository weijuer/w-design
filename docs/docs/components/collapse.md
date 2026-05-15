# Collapse 折叠

用于折叠/展开内容区域。

## 基础用法

```vue preview
<script setup lang="ts">
import { WCollapse, WCollapseItem } from 'w-design-vue'

</script>

<template>
  <WCollapse>
    <WCollapseItem title="标题一">内容一</WCollapseItem>
    <WCollapseItem title="标题二">内容二</WCollapseItem>
    <WCollapseItem title="标题三">内容三</WCollapseItem>
  </WCollapse>
</template>
```

## 手风琴模式

```vue preview
<script setup lang="ts">
import { WCollapse, WCollapseItem } from 'w-design-vue'

</script>

<template>
  <WCollapse accordion>
    <WCollapseItem title="标题一">内容一</WCollapseItem>
    <WCollapseItem title="标题二">内容二</WCollapseItem>
    <WCollapseItem title="标题三">内容三</WCollapseItem>
  </WCollapse>
</template>
```

## Props

### Collapse

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| accordion | `boolean` | `false` | 是否手风琴模式 |

### CollapseItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 标题 |
| name | `string \| number` | - | 唯一标识 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 切换时触发 | `(activeNames: string[])` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
| title | 标题内容 |