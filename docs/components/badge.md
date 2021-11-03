## Badge **徽标数**

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

|           State            |   postfix   |                Usage example |
| :------------------------: | :---------: | ---------------------------: |
| <w-badge type="primary" /> | `*-primary` | `<w-badge type="primary" />` |
| <w-badge type="success" /> | `*-success` | `<w-badge type="success" />` |
| <w-badge type="warning" /> | `*-warning` | `<w-badge type="warning" />` |
| <w-badge type="danger" />  | `*-danger`  |  `<w-badge type="danger" />` |
|  <w-badge type="info" />   |  `*-info`   |    `<w-badge type="info" />` |
|  <w-badge type="metal" />  |  `*-metal`  |   `<w-badge type="metal" />` |
|  <w-badge type="brand" />  |  `*-brand`  |   `<w-badge type="brand" />` |
|  <w-badge type="focus" />  |  `*-focus`  |   `<w-badge type="focus" />` |
|  <w-badge type="dark" />   |  `*-dark`   |    `<w-badge type="dark" />` |

<script setup>
import comps from '../../packages'
// import WBadge from '../../packages/badge/badge.js'
const { WBadge }  = comps

console.log(WBadge)
</script>
