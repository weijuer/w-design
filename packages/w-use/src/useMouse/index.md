# useMouse

## Usage
```js
<script setup lang="ts">
import { useMouse } from '@w-design/use'
const { x, y } = useMouse()
console.log('useMouse', x, y)
</script>
```

## Demo

```vue preview
<script setup lang="ts">
import { useMouse } from '@w-design/use'
const { x, y } = useMouse()
console.log('useMouse', x, y)
</script>

<template>
<div class="mouse-section"> Mouse is at x:{{x}}, y:{{y}}</div>
</template>
```