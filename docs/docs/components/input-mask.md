# InputMask 掩码输入

用于格式化输入内容，如手机号、身份证号等。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WInputMask } from 'w-design-vue'


const phone = ref('')
const idCard = ref('')
</script>

<template>
  <div class="demo-space">
    <WInputMask v-model="phone" mask="(###) ####-####" placeholder="手机号" />
    <WInputMask v-model="idCard" mask="##########" placeholder="身份证号" />
  </div>
</template>

<style scoped>
.demo-space {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `string` | `''` | 输入值 |
| mask | `string` | - | 掩码格式，`#` 代表数字 |
| placeholder | `string` | - | 占位提示 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入时触发 | `(value: string)` |