# Button

Buttons allow users to perform actions and choose with a single tap.

## Usage

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
    <w-space>
      <w-button>Default</w-button>
    </w-space>
</template>
```

## Themes

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button>Default</w-button>
    <w-button type="primary">Primary</w-button>
    <w-button type="success">Success</w-button>
    <w-button type="warning">Warning</w-button>
    <w-button type="info">Info</w-button>
    <w-button type="danger">Danger</w-button>
  </w-space>
</template>
```

## Light

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button light>Default</w-button>
    <w-button type="primary" light>Primary</w-button>
    <w-button type="success" light>Success</w-button>
    <w-button type="warning" light>Warning</w-button>
    <w-button type="info" light>Info</w-button>
    <w-button type="danger" light>Danger</w-button>
  </w-space>
</template>
```

## Outlined

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button outlined>Default</w-button>
    <w-button type="primary" outlined>Primary</w-button>
    <w-button type="success" outlined>Success</w-button>
    <w-button type="warning" outlined>Warning</w-button>
    <w-button type="info" outlined>Info</w-button>
    <w-button type="danger" outlined>Danger</w-button>
  </w-space>
</template>
```

## Outlined & Dashed

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button outlined dashed>Default</w-button>
    <w-button type="primary" outlined dashed>Primary</w-button>
    <w-button type="success" outlined dashed>Success</w-button>
    <w-button type="warning" outlined dashed>Warning</w-button>
    <w-button type="info" outlined dashed>Info</w-button>
    <w-button type="danger" outlined dashed>Danger</w-button>
  </w-space>
</template>
```

## Round

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button round>Default</w-button>
    <w-button type="primary" round>Primary</w-button>
    <w-button type="success" round>Success</w-button>
    <w-button type="warning" round>Warning</w-button>
    <w-button type="info" round>Info</w-button>
    <w-button type="danger" round>Danger</w-button>
  </w-space>
</template>
```

## Round & Light

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button round light>Default</w-button>
    <w-button type="primary" round light>Primary</w-button>
    <w-button type="success" round light>Success</w-button>
    <w-button type="warning" round light>Warning</w-button>
    <w-button type="info" round light>Info</w-button>
    <w-button type="danger" round light>Danger</w-button>
  </w-space>
</template>
```

## Round & Outlined

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button round outlined>Default</w-button>
    <w-button type="primary" round outlined>Primary</w-button>
    <w-button type="success" round outlined>Success</w-button>
    <w-button type="warning" round outlined>Warning</w-button>
    <w-button type="info" round outlined>Info</w-button>
    <w-button type="danger" round outlined>Danger</w-button>
  </w-space>
</template>
```

## Disabled

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space>
    <w-button disabled>default</w-button>
    <w-button type="primary" disabled>Primary</w-button>
    <w-button type="success" disabled>Success</w-button>
    <w-button type="warning" disabled>Warning</w-button>
    <w-button type="info" disabled>Info</w-button>
    <w-button type="danger" disabled>Danger</w-button>
  </w-space>
</template>
```

## Sizes

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space align="center">
    <w-button type="primary" size="tiny">Tiny</w-button>
    <w-button type="primary" size="small">Small</w-button>
    <w-button type="primary">Default</w-button>
    <w-button type="primary" size="medium">Medium</w-button>
    <w-button type="primary" size="large">Large</w-button>
  </w-space>
</template>
```

## With Icon

```vue preview
<script setup lang="ts">
import { WButton, WSpace, WIcon } from 'w-design-vue'
</script>

<template>
  <w-space align="center">
    <w-button type="primary">
      <template #start>
        <svg class="icon" viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128" fill="currentColor" p-id="5945"></path><path d="M649.824 361.376a31.968 31.968 0 0 0-45.248 0L505.6 460.352l-98.976-98.976a31.968 31.968 0 1 0-45.248 45.248l98.976 98.976-98.976 98.976a32 32 0 0 0 45.248 45.248l98.976-98.976 98.976 98.976a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248L550.848 505.6l98.976-98.976a31.968 31.968 0 0 0 0-45.248" fill="currentColor" p-id="5946"></path></svg>
      </template>
      Delete
    </w-button>
  </w-space>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 1em;
  height: 1em;
  margin-right: 4px;
}
</style>
```

## Loading

```vue preview
<script setup lang="ts">
import { WButton, WSpace } from 'w-design-vue'
</script>

<template>
  <w-space align="center">
    <w-button type="primary" loading>Loading</w-button>
    <w-button size="small" type="primary" loading>Loading</w-button>
    <w-button type="primary" loading></w-button>
    <w-button type="primary" round loading></w-button>
  </w-space>
</template>
```

## Props

| Prop | Type | default | Description |
|------|------|--------|------|
| type | `string` | `'default'` | type of button: `'default`、`primary`、`secondary`、`dashed`、`text` |
| size | `string` | `'medium'` | size of button: 、`'large`、`medium`、`small`、`tiny` |
| disabled | `boolean` | `false` | disabled disabled button |
| loading | `boolean` | `false` | loading button |
| icon | `boolean` | `false` | show icon |

## Events

| Event | Description | Callback |
|--------|------|----------|
| click | click button when clicked | `(event: MouseEvent)` |

## Slots

| Name | Description |
|------|------|
| start | button content |
| default | button content |
| end | button content |
