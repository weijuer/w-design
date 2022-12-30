<template>
  <li class="w-breadcrumb-item">
    <slot></slot>
    <span class="w-breadcrumb-item-separator">{{ separator }}</span>
  </li>
</template>

<script lang="ts" setup>
import { inject, toRefs } from 'vue';
import {BreadcrumbProps} from './interface'

defineOptions({
  name: 'w-breadcrumb-item'
})

const breadcrumbContext: any = inject('breadcrumb', undefined);
const {separator} = toRefs(breadcrumbContext)
</script>
