<template>
  <li class="w-breadcrumb__item">
    <slot></slot>
    <span class="w-breadcrumb__item-separator">{{ separator }}</span>
  </li>
</template>

<script lang="ts">
export default {
  name: 'w-breadcrumb-item'
}
</script>

<script setup lang="ts">
import { inject, toRefs } from 'vue'

interface BreadcrumbContext {
  separator: string
}

const breadcrumbContext = inject<BreadcrumbContext>('breadcrumb', { separator: '•' })
const { separator } = toRefs(breadcrumbContext)
</script>

<style src="./breadcrumb-item.scss" lang="scss" />
