# InputNumber 数字输入

用于输入数字。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputNumber } from 'w-design-vue'


const value = ref(0)
</script>

<template>
  <WInputNumber v-model="value" />
</template>
```

## 范围限制

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputNumber } from 'w-design-vue'


const value = ref(5)
</script>

<template>
  <WInputNumber v-model="value" :min="0" :max="10" />
</template>
```

## 步数

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputNumber } from 'w-design-vue'


const value = ref(0)
</script>

<template>
  <WInputNumber v-model="value" :step="2" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `number` | `0` | 输入值 |
| min | `number` | `-Infinity` | 最小值 |
| max | `number` | `Infinity` | 最大值 |
| step | `number` | `1` | 步数 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化时触发 | `(value: number)` |