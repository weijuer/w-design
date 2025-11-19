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

## Usage

```vue preview
<script setup>
import { ref } from 'vue';
import { WButton } from 'design-demo';

const count = ref(0);
const toggle = ref(false);
</script>

<template>
  <w-button @click="count++">Count: {{ count }}</w-button>
  <w-button @click="toggle = !toggle" :type="toggle ? 'primary' : 'default'">Toggle</w-button>
  <p v-if="toggle">This is toggled!</p>
</template>

<style>
@import '/lib/design-demo.css';
</style>
```