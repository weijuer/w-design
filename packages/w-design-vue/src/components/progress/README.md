# Collapse 折叠面板
## 介绍
可以折叠/展开的内容区域。

## 引入
通过以下方式来全局注册组件，更多注册方式请参考组件注册。

```ts
import { createApp } from 'vue';
import { Collapse, CollapseItem } from 'w-design-vue';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```