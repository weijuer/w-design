# Divider 分割线

用于分隔内容区域。

## 基础用法

```vue preview
<script setup lang="ts">
import { WDivider } from 'w-design-vue'

</script>

<template>
  <div>
    <p>上方内容</p>
    <WDivider />
    <p>下方内容</p>
  </div>
</template>
```

## 带文字

```vue preview
<script setup lang="ts">
import { WDivider } from 'w-design-vue'

</script>

<template>
  <div>
    <p>上方内容</p>
    <WDivider>分割标题</WDivider>
    <p>下方内容</p>
  </div>
</template>
```

## 垂直分割

```vue preview
<script setup lang="ts">
import { WDivider } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <span>选项一</span>
    <WDivider direction="vertical" />
    <span>选项二</span>
    <WDivider direction="vertical" />
    <span>选项三</span>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| direction | `string` | `'horizontal'` | 方向：`horizontal`、`vertical` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 分割线文字 |