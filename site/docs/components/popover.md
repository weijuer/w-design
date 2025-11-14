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
<template>
    <WPopover content="这是一个弹出层">
        <WButton>点击弹出</WButton>
    </WPopover>
</template>
```

## 弹出位置
通过设置 `position` 属性来设置弹出层的位置，可选值为 `top`、`bottom`、`left`、`right`。
```vue preview
<template>
    <WPopover content="这是一个弹出层" position="top">
        <WButton>点击弹出</WButton>
    </WPopover>
</template>
```

## 触发方式
通过设置 `trigger` 属性来设置弹出层的触发方式，可选值为 `hover`、`click`、`focus`。
```vue preview
<template>
    <WPopover content="这是一个弹出层" trigger="click">
        <WButton>点击弹出</WButton>
    </WPopover>
</template>
```

## 箭头位置
通过设置 `arrowPosition` 属性来设置箭头的位置，可选值为 `top`、`bottom`、`left`、`right`。
```vue preview
<template>
    <WPopover content="这是一个弹出层" arrowPosition="top">
        <WButton>点击弹出</WButton>
    </WPopover>
</template>
```

## 弹出层内容
通过设置 `content` 插槽来设置弹出层内容。
```vue preview
<template>
    <WPopover>
        <template #content>
            <div>
                <p>这是一个弹出层</p>
            </div>
        </template>
        <WButton>点击弹出</WButton>
    </WPopover>
</template>
```

:::tip
弹出层组件的插槽如下：
- content: 弹出层内容
:::

## demo

<WPopover content="这是一个弹出层" arrowPosition="top">
    <WButton color="primary">点击弹出</WButton>
</WPopover>


## API
| 属性 | 说明 | 类型 | 默认值 | 必填 |
| :---: | :---: | :---: | :---: | :---: |
| content | 弹出层的内容 | string | - | 否 |
| position | 弹出层的位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` | 否 |
| trigger | 弹出层的触发方式 | `hover` \| `click` \| `focus` | `hover` | 否 |
| arrowPosition | 箭头的位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` | 否 |
| disabled | 禁用弹出层 | boolean | `false` | 否 |
| visible | 是否显示弹出层 | boolean | `false` | 否 |
| width | 弹出层的宽度 | number | - | 否 |
| offset | 弹出层的偏移量 | number | `0` | 否 |
| zIndex | 弹出层的层级 | number | `1000` | 否 |
| onVisibleChange | 弹出层显示或隐藏时的回调 | (visible: boolean) => void | - | 否 |
| onClick | 弹出层点击时的回调 | (event: MouseEvent) => void | - | 否 |
| onMouseEnter | 鼠标进入弹出层时的回调 | (event: MouseEvent) => void | - | 否 |
| onMouseLeave | 鼠标离开弹出层时的回调 | (event: MouseEvent) => void | - | 否 |
| onFocus | 获得焦点时的回调 | (event: FocusEvent) => void | - | 否 |
| onBlur | 失去焦点时的回调 | (event: FocusEvent) => void | - | 否 |
| onContextMenu | 右键点击时的回调 | (event: MouseEvent) => void | - | 否 |
| onKeyDown | 键盘按下时的回调 | (event: KeyboardEvent) => void | - | 否 |
| onKeyUp | 键盘抬起时的回调 | (event: KeyboardEvent) => void | - | 否 |

支持原生 button 的其他所有属性。

## 事件
| 事件名称 | 说明 | 回调参数 | 必填 |
| :--------: | :----------------: | :---------------: | :----: |
| visibleChange | 弹出层显示或隐藏时的回调 | (visible: boolean) => void | 否 |
| click | 弹出层点击时的回调 | (event: MouseEvent) => void | 否 |
| mouseEnter | 鼠标进入弹出层时的回调 | (event: MouseEvent) => void | 否 |
| mouseLeave | 鼠标离开弹出层时的回调 | (event: MouseEvent) => void | 否 |
| focus | 获得焦点时的回调 | (event: FocusEvent) => void | 否 |
| blur | 失去焦点时的回调 | (event: FocusEvent) => void | 否 |
| contextMenu | 右键点击时的回调 | (event: MouseEvent) => void | 否 |
| keyDown | 键盘按下时的回调 | (event: KeyboardEvent) => void | 否 |
| keyUp | 键盘抬起时的回调 | (event: KeyboardEvent) => void | 否 |


支持原生 button 的所有事件。

## 插槽
| 插槽名称 | 说明 | 必填 |
| :--------: | :----------------: | :----: |
| content | 弹出层内容 | 否 |


