# Popover 弹出层
## 介绍
Popover 是一个弹出层组件，用于展示弹窗式的内容，比如提示，菜单等。

## 引入
```ts
import { createApp } from 'vue';
import { WPopover } from 'w-design-vue';

const app = createApp();
app.use(WPopover);
```

## 基础用法
通过设置 `content` 属性来设置弹出层的内容。
```vue preview
<script setup>
import { ref } from 'vue';
import { WPopover, WButton } from '/lib/w-design-demo.mjs';
</script>

<template>
    <WPopover content="这是一个弹出层">
        <WButton>点击弹出</WButton>
    </WPopover>
</template>

<style>
@import '/lib/design-demo.css';
</style>
```

