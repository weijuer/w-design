# Pagination 分页

用于分页展示数据。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WPagination } from 'w-design-vue'


const current = ref(1)
const total = 100
</script>

<template>
  <WPagination v-model="current" :total="total" />
</template>
```

## 自定义页数

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WPagination } from 'w-design-vue'


const current = ref(1)
const total = 100
</script>

<template>
  <WPagination v-model="current" :total="total" :page-size="20" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `number` | `1` | 当前页码 |
| total | `number` | `0` | 总条数 |
| page-size | `number` | `10` | 每页条数 |
| show-size-changer | `boolean` | `false` | 是否显示每页条数选择 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 页码变化时触发 | `(page: number)` |