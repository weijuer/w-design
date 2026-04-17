---
category: Utilities
---

# useFormValidation

Basic counter with utility functions.

## Basic Usage

```html
<script setup lang="ts">
import { useFormValidation } from '@w-design/hooks';

const { validationResult, validateField } = useFormValidation();

validateField('username', ''); 

console.log(validationResult.isValid);
</script>
```