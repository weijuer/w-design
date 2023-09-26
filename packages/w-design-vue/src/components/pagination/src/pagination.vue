<template>
  <nav class="w-pagination" aria-label="Pagination" :class="paginationClass">
    <ol class="w-pagination__list">
      <li>
        <a href="#0" class="w-pagination__item" aria-label="Go to page">
          <w-icon name="arrow-left"></w-icon>
        </a>
      </li>
      <li v-for="page of pages" :key="page">
        <a
          href="#0"
          :class="['w-pagination__item', { 'w-pagination__item-selected': isActive(page) }]"
          :aria-label="'Go to page ' + page"
          @click="onChange(page, $event)"
        >
          {{ page }}
        </a>
        <!-- <span class="w-pagination__item w-pagination__item-ellipsis">...</span> -->
      </li>
      <li>
        <a href="#0" class="w-pagination__item" aria-label="Go to page">
          <w-icon name="arrow-right"></w-icon>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'WPagination'
}
</script>

<script lang="ts" setup>
// import WButton from '../../button'
// import WIcon from '../../icon'
import { paginationEmits, paginationProps } from './interface'
import { usePagination } from './usePagination'

const props = defineProps(paginationProps)
const emit = defineEmits(paginationEmits)

const { paginationClass, pages, isActive, onChange } = usePagination(props, emit)
</script>

<style src="./pagination.scss" lang="scss" />
