<template>
  <nav class="w-pagination" aria-label="Pagination" :class="paginationClass">
    <ol class="w-pagination__list">
      <li>
        <a
          :class="['w-pagination__item', { 'w-pagination__item-disabled': disabled || isFirst }]"
          @click="onPrev"
          rel="nofollow"
          aria-label="Go to prev"
        >
          <w-icon name="arrow-left"></w-icon>
        </a>
      </li>
      <template v-if="simple">
        <li>
          <span class="w-pagination__jumper">
            <w-input v-model="_current"></w-input>
            <em>/ 50</em>
          </span>
        </li>
      </template>
      <template v-else>
        <li v-for="{ type, text, number, active } of pages" :key="text">
          <a
            v-if="type === 'number'"
            rel="nofollow"
            :class="[
              'w-pagination__item',
              { 'w-pagination__item-selected': active, 'w-pagination__item-disabled': disabled }
            ]"
            :aria-label="'Go to page ' + text"
            @click="onChange(number, $event)"
          >
            {{ text }}
          </a>
          <span v-else class="w-pagination__item w-pagination__item-ellipsis">...</span>
        </li>
      </template>
      <li>
        <a
          :class="['w-pagination__item', { 'w-pagination__item-disabled': disabled || isLast }]"
          @click="onNext"
          rel="nofollow"
          aria-label="Go to next"
        >
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
import WIcon from '../../icon'
import { paginationEmits, paginationProps } from './interface'
import { usePagination } from './usePagination'

const props = defineProps(paginationProps)
const emit = defineEmits(paginationEmits)

const { paginationClass, _current, pages, isFirst, isLast, onPrev, onNext, onChange } = usePagination(props, emit)
</script>

<style src="./pagination.scss" lang="scss" />
