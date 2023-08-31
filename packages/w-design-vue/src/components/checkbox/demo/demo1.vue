<template>
  <w-preview title="Default" desc="默认">
    <w-checkbox>Option</w-checkbox>
  </w-preview>

  <w-preview title="Disabled" desc="禁用">
    <section class="space-inline">
      <w-checkbox disabled>Option</w-checkbox>
      <w-checkbox default-checked disabled>Option</w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Sizes" desc="尺寸">
    <section class="space-inline">
      <w-checkbox v-for="size of sizes" :key="size" :size="size" default-checked>
        {{ size ? size : 'default' }}
      </w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Themes" desc="颜色">
    <section class="space-inline">
      <w-checkbox v-for="theme of themes" :key="theme" :size="theme" default-checked>{{ theme }}</w-checkbox>
    </section>
  </w-preview>

  <w-preview title="Controlled" desc="受控复选框">
    <section class="space-vertical">
      <w-checkbox v-model="checked" :disabled="disabled">{{ label }}</w-checkbox>

      <section class="space-inline">
        <w-button type="primary" size="small" @click="toggleChecked">
          {{ !checked ? 'Check' : 'Uncheck' }}
        </w-button>
        <w-button type="primary" size="small" @click="toggleDisable">
          {{ !disabled ? 'Disable' : 'Enable' }}
        </w-button>
      </section>
    </section>
  </w-preview>

  <w-preview title="Indeterminate" desc="半勾选">
    <section class="space-inline">
      <w-checkbox :indeterminate="state.indeterminate1">Option</w-checkbox>
      <w-button @click="state.indeterminate1 = !state.indeterminate1" type="primary" size="small">toggle</w-button>
    </section>
  </w-preview>

  <w-preview title="Group (vertical)" desc="垂直组">
    <section class="space-vertical">
      <w-checkbox v-model="state.checkAll" :indeterminate="state.indeterminate" @change="onCheckAllChange">
        All
      </w-checkbox>
      <w-checkbox-group v-model="state.checkedList" :options="plainOptions" @change="onGroupChange"></w-checkbox-group>
    </section>
  </w-preview>

  <w-preview title="Group (horizontal)" desc="水平组">
    <section class="space-inline">
      <w-checkbox
        v-model="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
        :disabled="disabled"
      >
        All
      </w-checkbox>
      <w-checkbox-group
        v-model="state.checkedList"
        :options="plainOptions"
        @change="onGroupChange"
        orientation="horizontal"
        :disabled="disabled"
      ></w-checkbox-group>

      <w-button type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </w-button>
    </section>
  </w-preview>

  <w-preview title="Group (horizontal)" desc="水平组">
    <section class="space-inline">
      <w-checkbox
        v-model="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
        :disabled="disabled"
      >
        All
      </w-checkbox>

      <w-checkbox-group
        v-model="state.checkedList"
        @change="onGroupChange"
        orientation="horizontal"
        :disabled="disabled"
      >
        <w-checkbox :disabled="disabled"> Apple </w-checkbox>
        <w-checkbox :disabled="disabled"> Pear </w-checkbox>
        <w-checkbox :disabled="disabled"> Orange </w-checkbox>
      </w-checkbox-group>

      <w-button type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </w-button>
    </section>
  </w-preview>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const checked = ref(false)
const disabled = ref(false)
const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
const sizes = ref(['small', '', 'medium', 'large'])

const plainOptions = ['Apple', 'Pear', 'Orange']

const state = reactive({
  indeterminate1: true,
  indeterminate: true,
  checkAll: false,
  checkedList: ['Apple', 'Orange']
})

const toggleChecked = () => {
  checked.value = !checked.value
}

const toggleDisable = () => {
  disabled.value = !disabled.value
}

const label = computed(() => {
  return `${checked.value ? 'Checked' : 'Unchecked'}-${disabled.value ? 'Disabled' : 'Enabled'}`
})

const onCheckAllChange = (e) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false
  })
}

const onGroupChange = (val) => {
  state.checkAll = val.length === plainOptions.length
  state.indeterminate = val.length > 0 && val.length < plainOptions.length
}
</script>

<style scoped lang="scss">
.space-inline {
  display: flex;
  align-items: center;
  gap: 1em;
}

.space-vertical {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
