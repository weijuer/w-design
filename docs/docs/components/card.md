# Card 卡片

用于展示信息卡片。

## 基础用法

```vue preview
<script setup lang="ts">
import { WCard } from 'w-design-vue'

</script>

<template>
  <WCard title="卡片标题">
    <p>卡片内容</p>
  </WCard>
</template>
```

## 带操作按钮

```vue preview
<script setup lang="ts">
import { WCard } from 'w-design-vue'

</script>

<template>
  <WCard title="卡片标题" :actions="['编辑', '删除']">
    <p>卡片内容</p>
  </WCard>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 卡片标题 |
| actions | `string[]` | - | 操作按钮 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| action-click | 点击操作按钮时触发 | `(action: string, index: number)` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 卡片内容 |
| title | 标题内容 |
| extra | 标题右侧内容 |