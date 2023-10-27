<template>
  <w-preview title="Default" desc="默认">
    <w-radio>Option</w-radio>
  </w-preview>

  <w-preview title="Disabled" desc="禁用">
    <w-space>
      <w-radio disabled>Option</w-radio>
      <w-radio default-checked disabled>Option</w-radio>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="尺寸">
    <w-space>
      <w-radio v-for="size of sizes" :key="size" :size="size" default-checked>
        {{ size ? size : 'default' }}
      </w-radio>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="颜色">
    <w-space>
      <w-radio v-for="theme of themes" :key="theme" :size="theme" default-checked>{{ theme }}</w-radio>
    </w-space>
  </w-preview>

  <w-preview title="Controlled" desc="受控">
    <w-space orientation="vertical">
      <w-radio v-model="checked" :disabled="disabled">{{ label }}</w-radio>

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

  <w-preview title="Group (vertical)" desc="垂直组">
    <w-space orientation="vertical">
      <w-radio-group
        label="Fruits (vertical)"
        v-model="state.checked"
        :options="plainOptions"
        :disabled="disabled"
      ></w-radio-group>

      <w-button type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </w-button>
    </w-space>
  </w-preview>

  <w-preview title="Group (horizontal)" desc="水平组">
    <w-space orientation="vertical">
      <w-radio-group label="Fruits (horizontal)" v-model="state.checked" orientation="horizontal" :disabled="disabled">
        <template v-for="option in plainOptions" :key="option">
          <w-radio :value="option"> {{ option }}</w-radio>
        </template>
      </w-radio-group>

      <w-button type="primary" size="small" @click="toggleDisable">
        {{ !disabled ? 'Disable' : 'Enable' }}
      </w-button>

      <p>Selected: {{ state.checked }}</p>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const checked = ref(false)
const disabled = ref(false)
const themes = ['primary', 'success', 'warning', 'info', 'danger']
const sizes = ['small', '', 'medium', 'large']
const plainOptions = ['Apple', 'Pear', 'Orange']

const state = reactive({
  checked: 'Apple'
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
</script>

<style scoped lang="scss"></style>
