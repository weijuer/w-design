---
category: Utilities
---

# useCounter

Basic counter with utility functions.

## Basic Usage

```js
import { useCounter } from '@w-design/use'

const { count, increment, decrement, set, reset } = useCounter()
```

## Usage with options

```js
import { useCounter } from '@w-design/use'

const { count, increment, decrement, set, reset } = useCounter(1, { min: 0, max: 16 })
```

## Demo

```vue preview
<script setup lang="ts">
import { useCounter } from '@w-design/use'
// import { WButton } from '@w-design/w-design-vue'

const { count, increment, decrement, set, reset } = useCounter(0, {min:0, max: 60})
</script>

<template>
<div class="demo">
  <p class="info">Count: {{ count }}</p>

  <div class="w-space">
    <w-button type="primary" @click="increment()">
      Increment
    </w-button>
    <w-button type="primary" @click="decrement()">
      Decrement
    </w-button>
    <w-button type="primary" @click="increment(5)">
      Increment (+5)
    </w-button>
    <w-button type="primary" @click="decrement(5)">
      Decrement (-5)
    </w-button>
    <w-button type="primary" @click="set(100)">
      Set (100)
    </w-button>
    <w-button type="primary" @click="reset()">
      Reset
    </w-button>
  </div>
</div>
</template>

<style lang="scss">
.demo {
  position: relative;

  .w-space {
    display: flex;
    gap: 6px;
  }

  .info {
    color: red;
  }
}
</style>
```