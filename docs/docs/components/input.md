# Input 输入框

用于用户输入内容。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInput } from 'w-design-vue'


const value = ref('')
</script>

<template>
  <WInput v-model="value" placeholder="请输入内容" />
</template>
```

## 禁用状态

```vue preview
<script setup lang="ts">
import { WInput } from 'w-design-vue'

</script>

<template>
  <WInput disabled placeholder="禁用输入框" />
</template>
```

## 带图标

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInput } from 'w-design-vue'


const value = ref('')
</script>

<template>
  <div class="demo-space">
    <WInput v-model="value" placeholder="搜索">
      <template #prefix>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </template>
    </WInput>
  </div>
</template>

<style scoped>
.demo-space {
  width: 300px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | `''` | 输入值 |
| placeholder | `string` | - | 占位提示 |
| disabled | `boolean` | `false` | 是否禁用 |
| readonly | `boolean` | `false` | 是否只读 |
| type | `string` | `'text'` | 输入类型 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | `(value: string)` |
| change | 值变化时触发 | `(value: string)` |
| blur | 失焦时触发 | `(event: FocusEvent)` |
| focus | 聚焦时触发 | `(event: FocusEvent)` |

## Slots

| 名称 | 说明 |
|------|------|
| prefix | 前缀内容 |
| suffix | 后缀内容 |