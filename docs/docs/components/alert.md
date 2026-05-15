# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

```vue preview
<script setup lang="ts">
import { WAlert } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAlert type="success">成功提示信息</WAlert>
    <WAlert type="warning">警告提示信息</WAlert>
    <WAlert type="error">错误提示信息</WAlert>
    <WAlert type="info">普通提示信息</WAlert>
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

## 可关闭

```vue preview
<script setup lang="ts">
import { WAlert } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAlert type="success" closable>成功提示信息（可关闭）</WAlert>
    <WAlert type="warning" closable>警告提示信息（可关闭）</WAlert>
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

## 带图标

```vue preview
<script setup lang="ts">
import { WAlert } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAlert type="success" show-icon>成功提示信息</WAlert>
    <WAlert type="warning" show-icon>警告提示信息</WAlert>
    <WAlert type="error" show-icon>错误提示信息</WAlert>
    <WAlert type="info" show-icon>普通提示信息</WAlert>
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

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `string` | `'info'` | 警告类型：`success`、`warning`、`error`、`info` |
| closable | `boolean` | `false` | 是否可关闭 |
| show-icon | `boolean` | `false` | 是否显示图标 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发 | 无 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 警告内容 |