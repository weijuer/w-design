<template>
  <li class="w-breadcrumb-item">
    <slot></slot>
    <span class="w-breadcrumb-item-separator">{{ breadcrumb.separator }}</span>
  </li>
</template>

<script>
export default {
  name: 'w-breadcrumb-item'
};
</script>

<script setup>
import { inject } from 'vue';

const breadcrumb = inject('breadcrumb');
</script>
