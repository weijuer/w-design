# Details 详情

用于展示可展开/收起的详情内容。

## 基础用法

```vue preview
<script setup lang="ts">
import { WDetails } from 'w-design-vue'

</script>

<template>
  <WDetails summary="点击展开">
    <p>详情内容</p>
    <p>更多详情...</p>
  </WDetails>
</template>
```

## 默认展开

```vue preview
<script setup lang="ts">
import { WDetails } from 'w-design-vue'

</script>

<template>
  <WDetails summary="默认展开" open>
    <p>详情内容</p>
  </WDetails>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| summary | `string` | - | 摘要内容 |
| open | `boolean` | `false` | 是否默认展开 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| toggle | 切换时触发 | `(open: boolean)` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 详情内容 |
| summary | 自定义摘要 |