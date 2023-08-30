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
    <section class="space-inline">
      <w-checkbox :indeterminate="state.indeterminate">Option</w-checkbox>
      <w-button @click="toggleCheckbox">toggle</w-button>
    </section>
  </w-preview>

  <w-preview title="Group" desc="组">
    <section class="space-inline">
      <w-checkbox :indeterminate="state.indeterminate" @change="onCheckAllChange">All</w-checkbox>
      <!-- <w-divider></w-divider> -->
      <w-checkbox-group v-model="state.checkedList" :options="plainOptions"></w-checkbox-group>
    </section>
  </w-preview>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const checked = ref(false)
const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
const sizes = ref(['small', '', 'medium', 'large'])

const plainOptions = ['Apple', 'Pear', 'Orange']

const state = reactive({
  indeterminate: false,
  checkAll: false,
  checkedList: ['Apple', 'Orange']
})

const onChange = (e) => {
  console.log(e)
}

const onCheckAllChange = (e) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false
  })
}

watch(
  () => state.checkedList,
  (val) => {
    state.indeterminate = !!val.length && val.length < plainOptions.length
    state.checkAll = val.length === plainOptions.length
  }
)

const toggleCheckbox = () => {
  state.indeterminate = !state.indeterminate
}
</script>

<style scoped lang="scss">
.space-inline {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>
