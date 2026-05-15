# Checkbox 复选框

用于多选场景。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WCheckbox } from 'w-design-vue'


const checked = ref(false)
</script>

<template>
  <WCheckbox v-model="checked">选项一</WCheckbox>
</template>
```

## 复选框组

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WCheckbox, WCheckboxGroup } from 'w-design-vue'


const value = ref(['a', 'c'])
</script>

<template>
  <WCheckboxGroup v-model="value">
    <WCheckbox label="a">选项 A</WCheckbox>
    <WCheckbox label="b">选项 B</WCheckbox>
    <WCheckbox label="c">选项 C</WCheckbox>
  </WCheckboxGroup>
</template>
```

## 禁用状态

```vue preview
<script setup lang="ts">
import { WCheckbox } from 'w-design-vue'

</script>

<template>
  <div class="demo-space">
    <WCheckbox disabled>禁用未选中</WCheckbox>
    <WCheckbox disabled checked>禁用已选中</WCheckbox>
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
```

## Props

### Checkbox

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `boolean` | `false` | 是否选中 |
| label | `string \| number` | - | 选项值 |
| disabled | `boolean` | `false` | 是否禁用 |

### CheckboxGroup

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string[]` | `[]` | 选中的值 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 值变化时触发 | `(value: boolean \| string[])` |

## Slots

| 名称 | 说明 |
|------|------|
| default | 复选框内容 |