# Guide 引导

用于引导用户了解产品功能。

## 基础用法

```vue preview
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { WGuide } from 'w-design-vue'


const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 500)
})
</script>

<template>
  <div class="demo-container">
    <button class="demo-btn" id="guide-target">目标按钮</button>
    <WGuide v-model="show" :steps="steps" />
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    target: '#guide-target',
    title: '第一步',
    content: '点击这个按钮开始使用'
  }
]
</script>

<style scoped>
.demo-container {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-btn {
  padding: 12px 24px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model-value | `boolean` | `false` | 是否显示 |
| steps | `Array` | `[]` | 步骤配置 |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发 | 无 |
| finish | 完成时触发 | 无 |