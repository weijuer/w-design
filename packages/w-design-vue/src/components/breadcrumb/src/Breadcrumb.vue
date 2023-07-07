<template>
  <ul ref="_ref" class="w-breadcrumb">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'w-breadcrumb'
}
</script>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import { breadcrumbProps } from './interface';

const props = defineProps(breadcrumbProps);
const _ref = ref<HTMLUListElement>()

provide('breadcrumb', props);

defineExpose({
  ref: _ref
})
</script>

<style src="./breadcrumb.scss" lang="scss" />

