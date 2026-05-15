# Image 图片

用于展示图片。

## 基础用法

```vue preview
<script setup lang="ts">
import { WImage } from 'w-design-vue'

</script>

<template>
  <WImage src="https://neeko-copilot.bytedance.net/api/text_to_image?prompt=beautiful%20landscape%20mountains%20and%20lake&image_size=landscape_16_9" alt="风景图片" />
</template>
```

## 懒加载

```vue preview
<script setup lang="ts">
import { WImage } from 'w-design-vue'

</script>

<template>
  <WImage lazy src="https://neeko-copilot.bytedance.net/api/text_to_image?prompt=ocean%20beach%20sunset&image_size=landscape_16_9" alt="海滩图片" />
</template>
```

## 占位图

```vue preview
<script setup lang="ts">
import { WImage } from 'w-design-vue'

</script>

<template>
  <WImage src="" alt="占位图" placeholder="加载中..." />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| src | `string` | - | 图片地址 |
| alt | `string` | - | 替代文本 |
| lazy | `boolean` | `false` | 是否懒加载 |
| placeholder | `string` | - | 占位内容 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| load | 图片加载完成时触发 | `(event: Event)` |
| error | 图片加载失败时触发 | `(event: Event)` |