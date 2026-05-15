# Keyboard 键盘

用于虚拟键盘输入。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WKbd } from 'w-design-vue'


const value = ref('')
</script>

<template>
  <div>
    <input v-model="value" class="demo-input" readonly />
    <WKbd v-model="value" />
  </div>
</template>

<style scoped>
.demo-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | `''` | 输入值 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | `(value: string)` |