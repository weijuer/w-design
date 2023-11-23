<template>
  <nav class="w-pagination" aria-label="Pagination" :class="paginationClass">
    <ol class="w-pagination__list">
      <li
        v-if="!simple"
        :class="['w-pagination__item', 'w-pagination__item-shuttle', { 'w-pagination__item-disabled': disabled }]"
        :style="shuttleStyle"
      >
        <span>{{ _current }}</span>
      </li>
      <li v-if="isShowControl">
        <a
          :class="[
            'w-pagination__item',
            'w-pagination__item-prev',
            { 'w-pagination__item-disabled': disabled || isFirst }
          ]"
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
            <w-input-number v-model="_current" :controls="false" :min="1" :max="totalPage"></w-input-number>
            <em>/ {{ totalPage }}</em>
          </span>
        </li>
      </template>
      <template v-else>
        <li v-for="(page, index) of pages" :key="page">
          <a
            v-if="typeof page === 'number'"
            rel="nofollow"
            :class="[
              'w-pagination__item',
              { 'w-pagination__item-selected': isActive(page), 'w-pagination__item-disabled': disabled }
            ]"
            :aria-label="'Go to page ' + page"
            @click="onChange(page, $event)"
          >
            {{ page }}
          </a>
          <span
            v-else
            class="w-pagination__item w-pagination__item-ellipsis"
            @click="onSpeedChange(index === 1 ? 'pre' : 'next')"
          >
            <span class="w-pagination__item-dots">•••</span>
            <svg
              v-if="index === 1"
              class="w-icon speed-up-pre"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M797.1 769a31.88 31.88 0 0 0-9.42-22.67L552.5 512l235.18-234.29a32 32 0 1 0-45.17-45.34l-240.87 240a56 56 0 0 0 0 79.34l240.87 240A32 32 0 0 0 797.1 769z"
              ></path>
              <path
                d="M538.84 769a31.88 31.88 0 0 0-9.42-22.67L294.24 512l235.18-234.29a32 32 0 1 0-45.16-45.34l-240.88 240a56 56 0 0 0 0 79.34l240.88 240A32 32 0 0 0 538.84 769z"
              ></path>
            </svg>
            <svg
              v-else
              class="w-icon speed-up-next"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M226.9 769a31.88 31.88 0 0 1 9.42-22.67L471.5 512 236.32 277.71a32 32 0 1 1 45.17-45.34l240.87 240a56 56 0 0 1 0 79.34l-240.87 240A32 32 0 0 1 226.9 769z"
              ></path>
              <path
                d="M485.16 769a31.88 31.88 0 0 1 9.42-22.67L729.76 512 494.58 277.71a32 32 0 1 1 45.16-45.34l240.88 240a56 56 0 0 1 0 79.34l-240.88 240A32 32 0 0 1 485.16 769z"
              ></path>
            </svg>
          </span>
        </li>
      </template>
      <li v-if="isShowControl">
        <a
          :class="[
            'w-pagination__item',
            'w-pagination__item-next',
            { 'w-pagination__item-disabled': disabled || isLast }
          ]"
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

const {
  paginationClass,
  isShowControl,
  shuttleStyle,
  _current,
  totalPage,
  pages,
  isFirst,
  isLast,
  isActive,
  onPrev,
  onNext,
  onChange,
  onSpeedChange
} = usePagination(props, emit)
</script>

<style src="./pagination.scss" lang="scss" />
