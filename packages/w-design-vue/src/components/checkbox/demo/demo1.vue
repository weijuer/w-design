<template>
  <w-preview title="Default" desc="默认按钮">
    <w-checkbox v-model="checked" @change="onChange">Option</w-checkbox>
  </w-preview>

  <w-preview title="Disabled" desc="禁用状态">
    <section class="space-inline">
      <w-checkbox disabled>Option</w-checkbox>
      <w-checkbox default-checked disabled>Option</w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Sizes" desc="按钮尺寸">
    <section class="space-inline">
      <w-checkbox v-for="size of sizes" :key="size" :size="size" default-checked>
        {{ size ? size : 'default' }}
      </w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Themes" desc="按钮颜色">
    <section class="space-inline">
      <w-checkbox v-for="theme of themes" :key="theme" :size="theme" default-checked>{{ theme }}</w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Indeterminate" desc="半勾选">
    <w-checkbox indeterminate>Option</w-checkbox>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
const sizes = ref(['small', '', 'medium', 'large'])

const onChange = (e) => {
  console.log(e)
}
</script>

<style scoped lang="scss">
.space-inline {
  display: flex;
  gap: 1em;
}
</style>
