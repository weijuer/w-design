# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框等。

## 基础用法

按钮有多种类型，包括主要按钮、次要按钮、虚线按钮等。

```vue preview
<script setup lang="ts">
import { WButton } from 'w-design-vue'
</script>

<template>
  <div class="demo-space">
    <WButton type="primary">主要按钮</WButton>
    <WButton type="secondary">次要按钮</WButton>
    <WButton type="dashed">虚线按钮</WButton>
    <WButton type="text">文字按钮</WButton>
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

## 尺寸

按钮支持多种尺寸：

```vue preview
<script setup lang="ts">
import { WButton } from 'w-design-vue'
</script>

<template>
  <div class="demo-space">
    <WButton size="large">大型按钮</WButton>
    <WButton size="medium">中型按钮</WButton>
    <WButton size="small">小型按钮</WButton>
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

## 状态

按钮支持禁用状态和加载状态：

```vue preview
<script setup lang="ts">
import { WButton } from 'w-design-vue'
</script>

<template>
  <div class="demo-space">
    <WButton type="primary" disabled>禁用按钮</WButton>
    <WButton type="primary" loading>加载中...</WButton>
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

## 图标按钮

按钮可以包含图标：

```vue preview
<script setup lang="ts">
import { WButton } from 'w-design-vue'
</script>

<template>
  <div class="demo-space">
    <WButton type="primary" icon>搜索</WButton>
    <WButton type="secondary" icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 12 18 12 15 21 9 12 6 12"></polyline>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
      提交
    </WButton>
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

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `string` | `'secondary'` | 按钮类型：`primary`、`secondary`、`dashed`、`text` |
| size | `string` | `'medium'` | 按钮尺寸：`large`、`medium`、`small` |
| disabled | `boolean` | `false` | 是否禁用 |
| loading | `boolean` | `false` | 是否加载中 |
| icon | `boolean` | `false` | 是否显示图标 |
| block | `boolean` | `false` | 是否块级显示 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | `(event: MouseEvent)` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 按钮内容 |