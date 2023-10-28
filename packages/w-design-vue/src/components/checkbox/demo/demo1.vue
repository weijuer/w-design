<template>
  <w-preview title="Default" desc="默认">
    <w-checkbox>Option</w-checkbox>
  </w-preview>

  <w-preview title="Animate" desc="动画">
    <w-checkbox animate>Animate</w-checkbox>
  </w-preview>

  <w-preview title="Disabled" desc="禁用">
    <w-space>
      <w-checkbox disabled>Option</w-checkbox>
      <w-checkbox default-checked disabled>Option</w-checkbox>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="尺寸">
    <w-space>
      <w-checkbox v-for="size of sizes" :key="size" :size="size" default-checked>
        {{ size ? size : 'default' }}
      </w-checkbox>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="颜色">
    <w-space>
      <w-checkbox v-for="theme of themes" :key="theme" :size="theme" default-checked>{{ theme }}</w-checkbox>
    </w-space>
  </w-preview>

  <w-preview title="Controlled" desc="受控复选框">
    <w-space>
      <w-checkbox v-model="checked" :disabled="disabled">{{ label }}</w-checkbox>

      <w-space>
        <w-button type="primary" size="small" @click="toggleChecked">
          {{ !checked ? 'Check' : 'Uncheck' }}
        </w-button>
        <w-button type="primary" size="small" @click="toggleDisable">
          {{ !disabled ? 'Disable' : 'Enable' }}
        </w-button>
      </w-space>
    </w-space>
  </w-preview>

  <w-preview title="Indeterminate" desc="半勾选">
    <w-space>
      <w-checkbox :indeterminate="state.indeterminate1">Option</w-checkbox>
      <w-button @click="state.indeterminate1 = !state.indeterminate1" type="primary" size="small">toggle</w-button>
    </w-space>
  </w-preview>

  <w-preview title="Icon" desc="icon">
    <w-space>
      <w-checkbox v-model="state.checked1">
        <template #icon="{ isChecked }">
          <w-icon :name="isChecked ? 'plus' : 'minus'"></w-icon>
        </template>
      </w-checkbox>

      <w-checkbox v-model="state.checked2">
        <template #icon="{ isChecked }">
          <w-icon :name="isChecked ? 'sun' : 'moon'"></w-icon>
        </template>
      </w-checkbox>
    </w-space>
  </w-preview>

  <w-preview title="Group (vertical) with options" desc="垂直组">
    <w-space orientation="vertical">
      <w-checkbox v-model="state.checkAll" :indeterminate="state.indeterminate" @change="onCheckAllChange">
        All
      </w-checkbox>

      <w-checkbox-group
        label="Fruits (vertical)"
        v-model="state.checkedList"
        :options="plainOptions"
        @change="onGroupChange"
      ></w-checkbox-group>
    </w-space>
  </w-preview>

  <w-preview title="Group (horizontal) without options" desc="水平组">
    <w-space orientation="vertical">
      <w-checkbox
        v-model="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
        :disabled="disabled"
      >
        All
      </w-checkbox>

      <w-checkbox-group
        label="Fruits (horizontal)"
        v-model="state.checkedList"
        orientation="horizontal"
        :disabled="disabled"
        @change="onGroupChange"
      >
        <template v-for="option in plainOptions" :key="option">
          <w-checkbox :value="option"> {{ option }}</w-checkbox>
        </template>
      </w-checkbox-group>

      <w-button type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </w-button>

      <p>Selected: {{ state.checkedList }}</p>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const checked = ref(false)
const disabled = ref(false)
const themes = ['default', 'primary', 'success', 'warning', 'info', 'danger']
const sizes = ['small', '', 'medium', 'large']

const plainOptions = ['Apple', 'Pear', 'Orange']

const state = reactive({
  checked1: false,
  checked2: false,
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
