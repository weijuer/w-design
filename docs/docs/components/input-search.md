# InputSearch 搜索框

用于搜索功能的输入框。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputSearch } from 'w-design-vue'


const value = ref('')
const handleSearch = () => {
  alert(`搜索：${value.value}`)
}
</script>

<template>
  <WInputSearch v-model="value" placeholder="请输入搜索内容" @search="handleSearch" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | `''` | 搜索值 |
| placeholder | `string` | - | 占位提示 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| search | 点击搜索按钮时触发 | `(value: string)` |