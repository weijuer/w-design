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
      <w-pagination v-for="size of sizes" :default-current="1" :total="50" :key="size" :size="size" type="primary">
        {{ size }}
      </w-pagination>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="themes">
    <w-space>
      <w-pagination v-for="theme of themes" :default-current="1" :total="50" :key="theme" :type="theme">
        {{ theme }}
      </w-pagination>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  current1: 1,
  current2: 1,
  current3: 1,
  current4: 1
})

const sizes = ['small', 'medium', 'large']
const themes = ['primary', 'success', 'warning', 'info', 'danger']
</script>
