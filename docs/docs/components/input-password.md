# InputPassword 密码输入

用于输入密码，支持显示/隐藏密码。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputPassword } from 'w-design-vue'


const value = ref('')
</script>

<template>
  <WInputPassword v-model="value" placeholder="请输入密码" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | `''` | 密码值 |
| placeholder | `string` | - | 占位提示 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | `(value: string)` |