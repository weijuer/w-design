# Progress 进度条

用于展示进度。

## 基础用法

```vue preview
<script setup lang="ts">
import { WProgress } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WProgress :percent="50" />
    <WProgress :percent="80" type="success" />
    <WProgress :percent="30" type="warning" />
    <WProgress :percent="10" type="error" />
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

## 环形进度条

```vue preview
<script setup lang="ts">
import { WProgress } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WProgress :percent="75" type="circle" />
    <WProgress :percent="60" type="circle" color="#67c23a" />
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 24px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| percent | `number` | `0` | 进度百分比 |
| type | `string` | `'line'` | 类型：`line`、`circle` |
| color | `string` | - | 进度颜色 |
| show-text | `boolean` | `true` | 是否显示文字 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 自定义文字内容 |