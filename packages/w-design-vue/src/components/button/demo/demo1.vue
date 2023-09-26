<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-button>default</w-button>
    </w-space>
  </w-preview>

  <w-preview title="themes" desc="themes">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="light" desc="light">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" light>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="outlined" desc="outlined">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="outlined & dashed" desc="outlined & dashed">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" outlined dashed>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="round" desc="round">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" round>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="round & light" desc="round & light">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" round light>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="round & outlined" desc="round & outlined">
    <w-space>
      <w-button v-for="theme of themes" :key="theme" :type="theme" round outlined>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="disabled" desc="disabled">
    <w-space>
      <w-button disabled>default</w-button>
      <w-button v-for="theme of themes" :key="theme" :type="theme" disabled>{{ theme }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space>
      <w-button v-for="size of sizes" :key="size" :size="size" type="primary">{{ size ? size : 'default' }}</w-button>
    </w-space>
  </w-preview>

  <w-preview title="With Icon" desc="With Icon">
    <w-space>
      <w-button v-for="icon of defaultIcons" :key="icon">
        <template #left-icon>
          <w-icon :name="icon"></w-icon>
        </template>
        {{ capitalizeFirstLetter(icon) }}
      </w-button>
    </w-space>
  </w-preview>

  <w-preview title="Icon only" desc="Icon only">
    <w-space>
      <w-button v-for="icon of defaultIcons" :icon="icon" :key="icon"></w-button>
    </w-space>
  </w-preview>

  <w-preview title="Loading" desc="Loading">
    <w-space>
      <w-button type="primary" loading>Loading</w-button>
      <w-button size="small" type="primary" loading>Loading</w-button>
      <w-button type="primary" loading></w-button>
      <w-button type="primary" round loading></w-button>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger'])
const sizes = ref(['tiny', 'small', '', 'medium', 'large'])
const defaultIcons = ref(['delete-outlined', 'error', 'file', 'loading', 'upload', 'github'])

const capitalizeFirstLetter = (word) => word.replace(/(^\w)/, (match) => match.toUpperCase())
</script>
