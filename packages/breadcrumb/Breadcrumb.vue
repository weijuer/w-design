<template>
  <ul class="w-breadcrumb">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'w-breadcrumb'
};
</script>

<script setup>
import { provide } from 'vue';

const props = defineProps({
  separator: {
    type: String,
    default: '•'
  }
});

provide('breadcrumb', { separator: props.separator });
</script>

<style lang="scss">
.w-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #ebedf3;
  border-radius: 0.42rem;

  .w-breadcrumb-item {
    display: flex;
    color: #00000073;
    transition: color 0.3s;

    .w-breadcrumb-item-separator {
      margin: 0 8px;
      color: #00000073;
    }

    &:last-child {
      .w-breadcrumb-item-separator {
        display: none;
      }
    }
  }
}
</style>
