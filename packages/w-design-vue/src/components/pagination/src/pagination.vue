<template>
  <nav class="w-pagination" aria-label="Pagination" :class="paginationClass">
    <ol class="w-pagination__list">
      <li>
        <w-button>
          <template #left-icon>
            <w-icon name="arrow-left"></w-icon>
          </template>
          Prev
        </w-button>
      </li>
      <li>
        <a href="#0" class="w-pagination__item" aria-label="Go to page"></a>
        <span class="w-pagination__item w-pagination__item-ellipsis">...</span>
      </li>
      <li>
        <w-button>
          <template #right-icon>
            <w-icon name="arrow-right"></w-icon>
          </template>
          Next
        </w-button>
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
import WButton from '../../button'
// import WIcon from '../../icon'
import { paginationEmits, paginationProps } from './interface'
import { usePagination } from './usePagination'

const props = defineProps(paginationProps)
const emit = defineEmits(paginationEmits)

const { paginationClass } = usePagination(props, emit)
</script>

<style src="./pagination.scss" lang="scss" />
