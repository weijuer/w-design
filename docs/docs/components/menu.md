# Menu 菜单

用于导航菜单。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WMenu, WMenuItem } from 'w-design-vue'


const active = ref('1')
</script>

<template>
  <WMenu v-model="active">
    <WMenuItem name="1">菜单项一</WMenuItem>
    <WMenuItem name="2">菜单项二</WMenuItem>
    <WMenuItem name="3">菜单项三</WMenuItem>
  </WMenu>
</template>
```

## 子菜单

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WMenu, WMenuItem, WSubMenu } from 'w-design-vue'


const active = ref('1-1')
</script>

<template>
  <WMenu v-model="active">
    <WMenuItem name="1">菜单项一</WMenuItem>
    <WSubMenu title="菜单组">
      <WMenuItem name="1-1">子菜单一</WMenuItem>
      <WMenuItem name="1-2">子菜单二</WMenuItem>
    </WSubMenu>
    <WMenuItem name="2">菜单项二</WMenuItem>
  </WMenu>
</template>
```

## Props

### Menu

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | - | 当前选中项 |
| mode | `string` | `'horizontal'` | 模式：`horizontal`、`vertical` |

### MenuItem

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| name | `string` | - | 唯一标识 |

### SubMenu

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 菜单组标题 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选中菜单项时触发 | `(name: string)` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 菜单项内容 |