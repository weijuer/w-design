---
category: Elements
---

# useResizable

Make elements resizable.

## Usage

```html
<script setup lang="ts">
import { ref } from 'vue'
import { useResizable } from '@w-design/use'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useResizable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{x}}, {{y}}
  </div>
</template>
```

## Demo

```vue preview
<script setup>
import { ref } from 'vue'
import { useResizable } from '@w-design/use'

const resizerRef = ref(null)
const triggerRef = ref(null)

const { x, y, style, isResizing } = useResizable(resizerRef, {
  initialValue: { x: 40, y: 40 },
  handle: triggerRef,
  axis: 'x'
})
</script>

<template>
  <div ref="resizerRef" :style="style" :data-resizing="isResizing" class="resizable">
    <span>I am at {{ x }}, {{ y }}</span>
    <div ref="triggerRef" class="resizer resizer--right"></div>
    <!-- <div class="resizer resizer--bottom"></div> -->
  </div>
</template>

<style scoped lang="scss">
.resizable {
  position: relative;
  height: 8rem;
  width: 8rem;
  border: 1px solid rgb(203 213 225);
  border-radius: 0.25rem;

  .resizer {
    position: absolute;
    background: transparent;

    &--right {
      cursor: col-resize;

      right: 0;
      top: 50%;
      transform: translate(50%, -50%);

      height: 2rem;
      width: 0.25rem;
    }

    &--bottom {
      cursor: row-resize;

      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);

      height: 0.25rem;
      width: 2rem;
    }
  }

  &:hover {
    .resizer {
      background: rgb(99 102 241);
    }
  }
}
</style>
```