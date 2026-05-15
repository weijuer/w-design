# Avatar 头像

用于展示用户头像。

## 基础用法

```vue preview
<script setup lang="ts">
import { WAvatar } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAvatar>W</WAvatar>
    <WAvatar size="large">W</WAvatar>
    <WAvatar size="small">W</WAvatar>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 12px;
}
</style>
```

## 形状

```vue preview
<script setup lang="ts">
import { WAvatar } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAvatar>圆</WAvatar>
    <WAvatar square>方</WAvatar>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  gap: 12px;
}
</style>
```

## 图标头像

```vue preview
<script setup lang="ts">
import { WAvatar } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WAvatar>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </WAvatar>
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
| size | `string` | `'medium'` | 尺寸：`large`、`medium`、`small` |
| square | `boolean` | `false` | 是否方形 |
| src | `string` | - | 图片地址 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 头像内容 |