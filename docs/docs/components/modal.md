# Modal 弹窗

用于展示弹窗内容。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WModal, WButton } from 'w-design-vue'


const visible = ref(false)
</script>

<template>
  <div>
    <WButton type="primary" @click="visible = true">打开弹窗</WButton>
    <WModal v-model="visible" title="弹窗标题">
      <p>弹窗内容</p>
    </WModal>
  </div>
</template>
```

## 自定义按钮

```vue preview
<script setup lang="ts">
import { ref } from 'vue'
import { WModal, WButton } from 'w-design-vue'


const visible = ref(false)
</script>

<template>
  <div>
    <WButton type="primary" @click="visible = true">打开弹窗</WButton>
    <WModal v-model="visible" title="弹窗标题">
      <p>弹窗内容</p>
      <template #footer>
        <WButton type="secondary" @click="visible = false">取消</WButton>
        <WButton type="primary" @click="visible = false">确定</WButton>
      </template>
    </WModal>
  </div>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `boolean` | `false` | 是否显示 |
| title | `string` | - | 标题 |
| width | `string \| number` | `500px` | 宽度 |
| closable | `boolean` | `true` | 是否可关闭 |
| mask-closable | `boolean` | `true` | 点击遮罩是否关闭 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发 | 无 |

## Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
| title | 标题内容 |
| footer | 底部内容 |