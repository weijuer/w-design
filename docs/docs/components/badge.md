# Badge 徽标

用于标记和计数。

## 基础用法

```vue preview
<script setup lang="ts">
import { WBadge } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WBadge content="9">
      <button class="demo-btn">消息</button>
    </WBadge>
    <WBadge content="99+">
      <button class="demo-btn">通知</button>
    </WBadge>
    <WBadge dot>
      <button class="demo-btn">提醒</button>
    </WBadge>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 24px;
}

.demo-btn {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
</style>
```

## 状态点

```vue preview
<script setup lang="ts">
import { WBadge } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WBadge status="success"></WBadge>
    <WBadge status="warning"></WBadge>
    <WBadge status="error"></WBadge>
    <WBadge status="info"></WBadge>
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
| content | `string \| number` | - | 徽标内容 |
| dot | `boolean` | `false` | 是否显示红点 |
| status | `string` | - | 状态类型：`success`、`warning`、`error`、`info` |
| max | `number` | `99` | 最大值，超过时显示 `${max}+` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 包裹的元素 |