<template>
  <w-input ref="_ref" class="w-input-search" v-bind="$attrs" :readonly="loading">
    <template #end>
      <w-button size="tiny" :loading="loading" class="w-input-search__btn" @click="onSearch">
        <w-icon v-if="!loading" name="search"></w-icon>
      </w-button>
    </template>
  </w-input>
</template>

<script lang="ts">
export default {
  name: 'WInputSearch',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import WIcon from '../../icon'
import WButton from '../../button'
import WInput from '../../input'
import { inputSearchProps, inputSearchEmits } from './interface'
import { useInputSearch } from './useInputSearch'

const props = defineProps(inputSearchProps)
const emit = defineEmits(inputSearchEmits)

const { _ref, onSearch } = useInputSearch(props, emit)
</script>

<style src="./input-search.scss" lang="scss"></style>
