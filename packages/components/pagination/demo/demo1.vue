<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical">
      <w-pagination v-model:current="state.current1" :total="50"></w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-space orientation="vertical">
      <w-pagination v-model:current="state.current2" :total="50" disabled></w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Simple" desc="Simple">
    <w-space orientation="vertical">
      <w-pagination v-model:current="state.current3" :total="50" simple></w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Ellipses" desc="Ellipses">
    <w-space orientation="vertical">
      <w-pagination v-model:current="state.current4" :total="100" ellipses></w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space>
      <w-pagination v-for="size of sizes" :default-current="1" :total="100" :key="size" :size="size" type="primary">
        {{ size }}
      </w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="themes">
    <w-space>
      <template v-for="theme of themes" :key="theme">
        <w-pagination :default-current="1" :total="50" :type="theme">
          {{ theme }}
        </w-pagination>
      </template>
    </w-space>
  </w-preview>

  <w-preview title="Variants">
    <template #desc> You can use the variant property to change the pagination items style. </template>
    <w-space>
      <template v-for="variant of variants" :key="variant">
        <w-pagination :default-current="1" :total="50" :variant="variant"></w-pagination>
      </template>
    </w-space>
  </w-preview>

  <w-preview title="With Controls">
    <template #desc> You can set the showControls to true to display the next and previous buttons. </template>
    <w-space>
      <w-pagination :total="150" show-controls></w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Compact Pagination">
    <template #desc>
      You can set the isCompact property to true to display reduced version of the pagination.
    </template>
    <w-space>
      <w-pagination :default-current="1" :total="150" compact></w-pagination>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  current1: 1,
  current2: 1,
  current3: 1,
  current4: 1,
  current5: 1
})

const sizes = ['small', 'medium', 'large']
const themes = ['primary', 'success', 'warning', 'info', 'danger']
const variants = ['flat', 'bordered', 'light', 'faded']
</script>
