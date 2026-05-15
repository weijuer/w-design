# Chip 标签

用于展示标签或筛选条件。

## 基础用法

```vue preview
<script setup lang="ts">
import { WChip } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WChip>普通标签</WChip>
    <WChip type="primary">主要标签</WChip>
    <WChip type="success">成功标签</WChip>
    <WChip type="warning">警告标签</WChip>
    <WChip type="error">错误标签</WChip>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
```

## 可关闭

```vue preview
<script setup lang="ts">
import { WChip } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WChip closable>可关闭标签</WChip>
    <WChip type="primary" closable>主要标签</WChip>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 12px;
}
</style>
```

## 带图标

```vue preview
<script setup lang="ts">
import { WChip } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WChip>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      带图标标签
    </WChip>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 12px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `string` | `'default'` | 类型：`default`、`primary`、`success`、`warning`、`error` |
| closable | `boolean` | `false` | 是否可关闭 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发 | 无 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 标签内容 |