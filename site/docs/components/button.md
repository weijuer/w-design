# Button
## Intro
Buttons allow users to perform actions and choose with a single tap.

## Import
W-Design exports 2 button-related components:

- `Button`: The main component to display a button.
- `ButtonGroup`: A wrapper component to display a group of buttons.

```ts
import { createApp } from 'vue';
import { Button } from 'w-design-vue';

const app = createApp();
app.use(Button);
```

## API
通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| :---: | :---: | :---: | :---: | :---: |
| type | 设置按钮类型 | `default` \| `primary` \| `success` \| `warning` \| `info` \| `danger` \| `brand` \| `foucs` | `default` | - |
| size | 设置按钮尺寸 | `tiny` \| `small` \| `medium` \| `large` | `default` | - |
| outlined | 将按钮设置为无背景色的选项 | boolean | `false` | - |


### 事件

| 事件名称 | 说明             | 回调参数        | 版本 |
| :--------: | :----------------: | :---------------: | :----: |
| click    | 点击按钮时的回调 | (event) => void |   -   |

支持原生 button 的其他所有属性。
